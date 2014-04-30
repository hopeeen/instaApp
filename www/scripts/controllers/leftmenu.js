app.controller('sideMenuController', function($scope, $rootScope, daoUser) {
    /*$rootScope.userLoggedIn = true;*/
    if(localStorage.firstname && $rootScope.userLoggedIn) {
        $scope.displayName = localStorage.firstname + localStorage.lastname;
    } else {
        $scope.displayName = localStorage.username;
    };
    
    $scope.signOut = function() {
        daoUser.logout();
    };
});
