/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'USE strict';
var app = angular.module('IstanbulApp', ['google-maps']);
app.controller('MapsCTRL', function($scope) {


    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };
});