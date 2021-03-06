'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  //$routeProvider.when('/map', {templateUrl: 'partials/map.html', controller: 'MapsCTRL'});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginController'});
  $routeProvider.when('/create-account', {templateUrl: 'partials/create-account.html', controller: 'create-accountController'});
  $routeProvider.when('/achievements', {templateUrl: 'partials/achievements.html', controller: 'achievementsController'});
  $routeProvider.when('/left-menu', {templateUrl: 'partials/left-menu.html', controller: 'left-menuController'});
  $routeProvider.when('/404', {templateUrl: 'partials/404.html', controller: 'controllers'});
  $routeProvider.otherwise({redirectTo: '/404'});
}]);
