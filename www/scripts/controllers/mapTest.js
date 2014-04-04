function initCall() {
    console.log("Google maps api initialized.");
    angular.bootstrap(document.getElementById("map"), ['doc.ui-map']);
}

app.controller('mapTestController', ['$scope', function($scope) {

        $scope.myMarkers = [];

        $scope.resetView = function() {
            $scope.zoomMessage = 'Test';
            $scope.myMap.panTo(new google.maps.LatLng(40.9970302, 28.9654876));
        };

        $scope.addRoute = function(start, end, waypoints) {
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap($scope.myMap);
            start = "Cankurtaran Mh., Kutlugün Sokak No:31, 34200 Fatih/Istanbul Province, Turkey";
            end = "Demirtaş Mh., Mehmetpaşa Ykş., 34200 Fatih/Istanbul Province, Turkey";
            waypoints = [{location: "Pertev Paşa Sk 1-21, Emin Sinan Mh., Fatih, Tyrkia"}];
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
            directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });
        };

        $scope.mapOptions = {
            center: new google.maps.LatLng(40.9970302, 28.9654876),
            zoom: 10,
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
        };

        $scope.setMarkerPosition = function(marker, lat, lng) {
            marker.setPosition(new google.maps.LatLng(lat, lng));
        }
        ;
    }]);