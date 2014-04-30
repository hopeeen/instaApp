app.controller('poidetailcontroller', function($scope, $location, $rootScope, $rootParams, dummyData) {
    $scope.showPOIsearchfilter = false;
    $scope.interest = dummyData.get($rootParams, interest);
    
    $scope.selectInterest = function(interest) {
        $rootScope.centerMap = new google.maps.LatLng(interest.coordinates.lat,interest.coordinates.lng);
        $rootScope.mapFrom = 'POI';
        console.log($rootScope.centerMap);
        $location.path("/mapTest");
    };
    $scope.ratePOI = function(interest){
        
    };

  
    
});

