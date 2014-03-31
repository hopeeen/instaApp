
app.controller('leftmenucontroller', function($scope, dummyData) {
        
        $scope.sjekk="haha";
        
        $scope.ShowSignIn = false;
                $scope.DisplaySignIn = function() {
                $scope.ShowSignIn = true;
                        };
                $scope.HideModal = function() {

                $scope.ShowSignIn = false;
                        };
                    });  