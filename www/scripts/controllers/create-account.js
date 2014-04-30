app.controller('create-accountCtrl', function($scope, daoAccounts) {
   
    $scope.passwordMatchError = false;
    $scope.test = "false";
    $scope.displayTerms = false;
    $scope.displayRegisterForm = true;
    $scope.repassword = "";
    
    $scope.showTerms = function() {
        $scope.displayTerms = true;
        $scope.displayRegisterForm = false;
    };

    $scope.showRegisterForm = function() {
        $scope.displayRegisterForm = true;
        $scope.displayTerms = false;
    };
    
    $scope.submitForm = function(){
        //if username !in db
        daoAccounts.addAccount($scope.user.email, $scope.user.password);
    };
    
    
});