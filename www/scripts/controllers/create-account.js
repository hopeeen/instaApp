app.controller('create-accountCtrl', function($scope) {

     $scope.test = "false";
    $scope.displayTerms = false;
    $scope.displayRegisterForm = true;

    $scope.showTerms = function() {
        $scope.displayTerms = true;
        $scope.displayRegisterForm = false;
    };

    $scope.showRegisterForm = function() {
        $scope.displayRegisterForm = true;
        $scope.displayTerms = false;
    };


});
