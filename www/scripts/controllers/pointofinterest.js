App.controller('poicontroller', function($scope, dummyData) {
            
                    $scope.interests = dummyData.getInterest();
                    
                    
                    var interests2 = [{
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

                        }];
                    
                    
                    

});