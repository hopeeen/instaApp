function initCall() {
    console.log("Google maps api initialized.");
    angular.bootstrap(document.getElementById("map"), ['doc.ui-map']);
}

app.controller('mapTestController', ['$scope', '$rootScope', 'dummyData', function($scope, $rootScope, dummyData) {
        
        $scope.interests = [];
        
        $scope.myMarkers = [];

        $scope.myLocation;

        $scope.directionsDisplay;

        $scope.directionsService;

        $scope.getCurrentLocation = function(callback) {
            navigator.geolocation.getCurrentPosition(function(position) {
                $scope.myLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                callback($scope.myLocation);
            })
        };

        $scope.resetView = function() {
            $scope.getCurrentLocation(function(loc) {
                $scope.myMap.panTo(loc);
            });
        };

        $scope.addRoute = function(start, end, waypoints) {
            $scope.getCurrentLocation();
            $scope.directionsDisplay = new google.maps.DirectionsRenderer();
            $scope.directionsService = new google.maps.DirectionsService();
            $scope.directionsDisplay.setMap($scope.myMap);
            if (start == null) {
                start = $scope.myLocation;
            }
            if (waypoints != null) {
                var request = {
                    origin: start,
                    destination: end,
                    travelMode: google.maps.TravelMode.DRIVING,
                    waypoints: waypoints
                };
            } else {
                var request = {
                    origin: start,
                    destination: end,
                    travelMode: google.maps.TravelMode.DRIVING
                }
            }
            $scope.directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    $scope.directionsDisplay.setDirections(response);
                }
            });
        };

        $scope.mapOptions = {
            center: new google.maps.LatLng(40.9970302, 28.9654876),
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.addMarker = function($event, $params) {
            $scope.myMarkers.push(new google.maps.Marker({
                map: $scope.myMap,
                position: $params[0].latLng
            }));
        };

        $scope.setZoomMessage = function(zoom) {
            $scope.zoomMessage = 'You just zoomed to ' + zoom + '!';
            console.log(zoom, 'zoomed');
        };

        $scope.openMarkerInfo = function(marker) {
            $scope.currentMarker = marker;
            $scope.currentMarkerLat = marker.getPosition().lat();
            $scope.currentMarkerLng = marker.getPosition().lng();
            $scope.myInfoWindow.open($scope.myMap, marker);
            $scope.currentLatLng = marker.getPosition();
        };

        $scope.setMarkerPosition = function(marker, lat, lng) {
            marker.setPosition(new google.maps.LatLng(lat, lng));
        };

        angular.element(document).ready(function() {
            if ($rootScope.centerMap != null) {
                console.log('fuck it all: ' + $rootScope.centerMap);
                $scope.myMap.panTo($rootScope.centerMap);
                $rootScope.centerMap = null;
            } else {
                $scope.getCurrentLocation(function(loc) {
                    $scope.myMap.panTo(loc);
                });
            }
            $scope.interests = dummyData.getInterest();
            console.log($scope.interests);
            for(a=0; a < $scope.interests.length; a++){
                console.log('whoa: ' + $scope.interests[a].name);
                $scope.latlng = new google.maps.LatLng($scope.interests[a].coordinates.lat,$scope.interests[a].coordinates.lng);
                $scope.myMarkers.push(new google.maps.Marker({
                    map: $scope.myMap,
                    position: $scope.latlng
                }));
            }
        });
    }]);