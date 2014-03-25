
app.controller('leftmenucontroller', function($scope, dummyData) {
        
       $scope.sjekk= "ahaha"
        
        $scope.ShowSignIn = false;
                $scope.DisplaySignIn = function() {
                $scope.ShowSignIn = true;
                        };
                $scope.HideModal = function() {

                $scope.ShowSignIn = false;
                        };
                    });  ""