app.controller('LoginController', function($scope, daoUser) {
  $scope.status = "Nothing to report";

  $scope.login = function() {
    daoUser.login($scope.username, $scope.password, function() {
      $scope.status = "Successful login"
    }, function() {
      $scope.status = "Login error"
      $scope.password="";
    });
  };
});