function initCall() {
    console.log("Google maps api initialized.");
    angular.bootstrap(document.getElementById("map"), ['doc.ui-map']);
}

app.controller('mapTestController', ['$scope', '$rootScope', 'dummyData', '$location', function($scope, $rootScope, dummyData, $location) {

        $scope.interests = [];

        $scope.myMarkers = [];

        $scope.userMarker;

        $scope.myLocation;

        $scope.directionsDisplay;

        $scope.directionsService;

        $scope.getCurrentLocation = function(callback) {
            navigator.geolocation.getCurrentPosition(function(position) {
                $scope.myLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                $scope.userMarker = new google.maps.Marker({
                    map: $scope.myMap,
                    position: $scope.myLocation,
                    title: 'Your position',
                    clickable: false,
                    flat: true,
                    icon: {
                        url: './img/userloc.png',
                        scaledSize: new google.maps.Size(40, 40)
                    }
                });
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
            $scope.directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
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
            zoom: 13,
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
            $scope.currentMarkerName = marker.getTitle();
            $scope.currentMarkerLat = marker.getPosition().lat();
            $scope.currentMarkerLng = marker.getPosition().lng();
            $scope.myInfoWindow.open($scope.myMap, marker);
            $scope.currentLatLng = marker.getPosition();
        };

        $scope.goToPOIDetails = function(name) {
            for (i = 0; i < $scope.interests.length; i++) {
                if (name == $scope.interests[i].name) {
                    $rootScope.chosenInterest = $scope.interests[i];
                    console.log($rootScope.chosenInterest);
                    $location.path("/pointofinterest");
                }
            }
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
            for (a = 0; a < $scope.interests.length; a++) {
                if(($rootScope.chosenCategory == null || typeof $rootScope.chosenCategory == 'undefined' || $scope.interests[a].category == $rootScope.chosenCategory ) 
                        && ($rootScope.minRating == null || typeof $rootScope.minRating == 'undefined' || $scope.interests[a].rating > $rootScope.minRating))
                console.log('whoa: ' + $scope.interests[a].name);
                $scope.latlng = new google.maps.LatLng($scope.interests[a].coordinates.lat, $scope.interests[a].coordinates.lng);
                $scope.myMarkers.push(new google.maps.Marker({
                    map: $scope.myMap,
                    position: $scope.latlng,
                    title: $scope.interests[a].name
                }));
            }
            $scope.myMarkers.push($scope.userMarker);
        });
    }]);