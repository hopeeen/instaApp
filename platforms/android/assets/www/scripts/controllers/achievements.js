/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

angular.module('sqsWebClientApp')
        .controller('CreateSubjectCtrl', function($scope, dummyData, Accounts) {
            
        $scope.achievementcollector = Accounts.getAchievements();

        $scope.showMA = True;
        $scope.showLOA = False;
        $scope.showLeaderboard = False;
        
        $scope.opentabMA = function() {
            $scope.showMA = True;
            $scope.showLOA = False;
            $scope.showLeaderboard = False;
        };
        
        $scope.opentabLOA = function() {
            $scope.showMA = False;
            $scope.showLOA = True;
            $scope.showLeaderboard = False;
        };
        
        $scope.opentabLeaderboard = function() {
            $scope.showMA = False;
            $scope.showLOA = False;
            $scope.showLeaderboard = True;
        };
        });
