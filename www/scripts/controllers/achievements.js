

        app.controller('achievementsctrl', function($scope) {
           
        $scope.test = "Petter";

        $scope.showMA = true;
        $scope.showLOA = false;
        $scope.showLeaderboard = false;
        
        $scope.opentabMA = function() {
            $scope.showMA = true;
            $scope.showLOA = false;
            $scope.showLeaderboard = false;
        };
        
        $scope.opentabLOA = function() {
            $scope.showMA = false;
            $scope.showLOA = true;
            $scope.showLeaderboard = false;
        };
        
        $scope.opentabLeaderboard = function() {
            $scope.showMA = false;
            $scope.showLOA = false;
            $scope.showLeaderboard = true;
        };
        });
