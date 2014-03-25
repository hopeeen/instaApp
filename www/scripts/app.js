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
                $routeProvider.when('/create-account', {templateUrl: 'partials/create-account.html', controller: 'create-accountCtrl'});
                $routeProvider.when('/manage-account', {templateUrl: 'partials/manage-account.html', controller: 'manageAccountCTRL'});
                $routeProvider.when('/achievements', {templateUrl: 'partials/achievements.html', controller: 'achievementsctrl'});
                $routeProvider.when('/left-menu', {templateUrl: 'partials/leftmenu.html', controller: 'leftmenucontroller'});
                $routeProvider.when('/pointofinterest', {templateUrl: 'partials/pointofinterest.html', controller: 'poicontroller'});
                
                $routeProvider.otherwise({redirectTo: '/404'});
            }]);

app.constant('REST', {
    'path': '/CustomerAppClientServerAuthServlet/resources/'
});

app.service('daoUser', function($injector) {
  return $injector.get('daoUser.js');
});

app.service('dummyData', function($injector) {
  return $injector.get('dummydata.js');
});

