app.controller('sideMenuController', function($scope, $rootScope, daoUser) {
    /*$rootScope.userLoggedIn = true;*/
    if(localStorage.username) {
        $scope.displayName = localStorage.username;
    } if(localStorage.firstname && localStorage.lastname) {
        $scope.displayNameFirstLast = localStorage.firstname + " " + localStorage.lastname;
    };
    
    $scope.signOut = function() {
        daoUser.logout();
    };
});
