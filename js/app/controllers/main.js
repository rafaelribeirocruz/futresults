"use strict";

angular.module("futResultsApp")
    .controller("MainCtrl", ["$scope", "$location", "teamService", function ($scope, $location, teamService){
        $scope.selectedTeam = teamService.getSelectedTeam();

        $scope.goSection = function (path) {
            $location.path('/select');
        };

        $scope.hasTeam = function(){
            var selected = $scope.selectedTeam;

            return (selected.name);
        };
    }]);