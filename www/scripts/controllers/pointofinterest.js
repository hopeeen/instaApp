app.controller('poicontroller', function($scope, dummyData) {

    $scope.showPOIsearchfilter = false;
    $scope.interests = dummyData.getInterest();

    $scope.showSearchFilterPOI = function() {
        $scope.showPOIsearchfilter = !$scope.showPOIsearchfilter;
        alert($scope.showPOIsearchfilter);
    };

  
    $scope.saveToLocal = function(interest){
        window.localStorage.setItem('selectedInterest', interest);

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
