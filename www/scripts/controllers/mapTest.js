function initCall() {
 console.log("Google maps api initialized.");
   angular.bootstrap(document.getElementById("map"), ['doc.ui-map']);
}

app.controller('mapTestController', ['$scope', function ($scope) {

$scope.myMarkers = [];

$scope.resetView = function(){
    $scope.zoomMessage = 'Test';
    $scope.myMap.panTo(new google.maps.LatLng(40.9970302, 28.9654876));
};

$scope.mapOptions = {
  center: new google.maps.LatLng(40.9970302, 28.9654876),
  zoom: 10,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

$scope.addMarker = function ($event, $params) {
  $scope.myMarkers.push(new google.maps.Marker({
    map: $scope.myMap,
    position: $params[0].latLng
  }));
};

$scope.setZoomMessage = function (zoom) {
  $scope.zoomMessage = 'You just zoomed to ' + zoom + '!';
  console.log(zoom, 'zoomed');
};

$scope.openMarkerInfo = function (marker) {
  $scope.currentMarker = marker;
  $scope.currentMarkerLat = marker.getPosition().lat();
  $scope.currentMarkerLng = marker.getPosition().lng();
  $scope.myInfoWindow.open($scope.myMap, marker);
};

$scope.setMarkerPosition = function (marker, lat, lng) {
  marker.setPosition(new google.maps.LatLng(lat, lng));
};
}]) ;