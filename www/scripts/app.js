'use strict';
// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'restangular',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'ui.map'
]).

        config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
                $routeProvider.when('/map', {templateUrl: 'partials/map.html', controller: 'mapController'});
                $routeProvider.when('/mapTest', {templateUrl: 'partials/testMap.html', controller: 'mapTestController'});
                $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginController'});
                $routeProvider.when('/create-account', {templateUrl: 'partials/create-account.html', controller: 'create-accountCtrl'});
                $routeProvider.when('/manage-account', {templateUrl: 'partials/manage-account.html', controller: 'manageAccountCTRL'});
                $routeProvider.when('/achievements', {templateUrl: 'partials/achievement.html', controller: 'achievementsctrl'});
                $routeProvider.when('/left-menu', {templateUrl: 'partials/leftmenu.html', controller: 'leftmenucontroller'});
                $routeProvider.when('/pointofinterest', {templateUrl: 'partials/pointofinterest.html', controller: 'poicontroller'});
                $routeProvider.when('/pointofinterest/:interestID', {templateUrl: 'partials/poidetails.html', controller: 'poidetailcontroller'} )
                $routeProvider.when('/', {redirectTo: '/mapTest'});
                $routeProvider.otherwise({redirectTo: '/404'});
                
                RestangularProvider.setBaseUrl('http://instabul.herokuapp.com/');
            }]);

app.constant('REST', {
    'path': 'http://instabul.herokuapp.com/'
});

app.service('daoUser', function($injector) {
  return $injector.get('daoUser.js');
});

app.service('daoAccounts', function($injector) {
  return $injector.get('daoAccounts.js');
});

app.service('dummyData', function($injector) {
  return $injector.get('dummydata.js');
});