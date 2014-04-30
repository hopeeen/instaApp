app.controller('poicontroller', function($scope, $location, $rootScope, dummyData) {
    $scope.showPOIsearchfilter = false;
    $scope.interests = dummyData.getInterest();
    $scope.listPOI = true;
    $scope.detailPOI = false;

    $scope.showPoiDetails = function(interest){
        $scope.listPOI = false;
        $scope.detailPOI = true;
        $scope.details = interest;
        $scope.$apply();
    };



    $scope.selectInterest = function(interest) {
        $rootScope.centerMap = new google.maps.LatLng(interest.coordinates.lat, interest.coordinates.lng);
        $rootScope.mapFrom = 'POI';
        console.log($rootScope.centerMap);
        $location.path("/mapTest");
    };

    $scope.showSearchFilterPOI = function() {
        $scope.showPOIsearchfilter = !$scope.showPOIsearchfilter;
        alert($scope.showPOIsearchfilter);
    };
    
    $scope.goBack = function() {
        $scope.listPOI = true;
        $scope.detailPOI = false;
    }

    angular.element(document).ready(function() {
        if (typeof $rootScope.chosenInterest != 'undefined' && $rootScope.chosenInterest != null) {
            $scope.showPoiDetails($rootScope.chosenInterest);
        }
    });
});
