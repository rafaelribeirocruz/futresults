"use strict";

var futResults = futResults || angular.module("futResults");

futResults
    .controller("SelectCtrl", ['$scope', 'teamService', function($scope, teamService){
        $scope.teamsList = [];
        $scope.selectedTeam = {};

        $scope.loadTeamsList = function () {
            teamService.getTeamsList().then(function (result) {
                $scope.teamsList = result;
            });
        };
}]);