'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).

        config(['$routeProvider', function($routeProvider) {
                $routeProvider.when('/map', {templateUrl: 'partials/map.html', controller: 'mapController'});
                $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginController'});
                $routeProvider.when('/create-account', {templateUrl: 'partials/create-account.html', controller: 'create-accountController'});
                $routeProvider.when('/achievements', {templateUrl: 'partials/achievements.html', controller: 'achievementsController'});
                $routeProvider.when('/left-menu', {templateUrl: 'partials/left-menu.html', controller: 'left-menuController'});
                $routeProvider.when('/pointofinterest', {templateUrl: 'partials/pointofinterest.html', controller: 'poicontroller'});
    
                $routeProvider.otherwise({redirectTo: '/404'});
            }]);

app.constant('REST', {
    'path': '/CustomerAppClientServerAuthServlet/resources/'
});


