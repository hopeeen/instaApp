app.controller('poicontroller', function($scope, $location, $rootScope, dummyData) {
    $scope.showPOIsearchfilter = false;
    $scope.interests = dummyData.getInterest();
    
    $scope.selectInterest = function(interest) {
        $rootScope.centerMap = new google.maps.LatLng(interest.coordinates.lat,interest.coordinates.lng);
        $rootScope.mapFrom = 'POI';
        console.log($rootScope.centerMap);
        $location.path("/mapTest");
    };
    
    $scope.showSearchFilterPOI = function() {
        $scope.showPOIsearchfilter = !$scope.showPOIsearchfilter;
        alert($scope.showPOIsearchfilter);
    };

  
    $scope.interests2 = [{
            interestName: 'Blue Moske',
            interestLocation: 'Istanbul',
            interestRating: '5.0'

        },
        {
            interestName: 'Red Moske',
            interestLocation: 'Istanbul',
            interestRating: '6.0'

        },
        {
            interestName: 'Pink Moske',
            interestLocation: 'Istanbul',
            interestRating: '3.0'

        },
        {
            interestName: 'Brown Moske',
            interestLocation: 'Istanbul',
            interestRating: '1.0'
        },
        {
            interestName: 'Brown Moske',
            interestLocation: 'Istanbul',
            interestRating: '1.0'
        }];
});
