var futResults = futResults ||
    angular.module("futResultsApp", ["ngMaterial", "ngResource", "ngSanitize", "ngRoute"])
    .config(function ($routeProvider, $mdThemingProvider, $mdIconProvider) {
        "use strict";
        $routeProvider
            .when("/",{
                templateUrl: "views/home.html",
                controller: "MainCtrl"
            })
            .when("/select",{
                templateUrl: "views/selectTeam.html",
                controller: "SelectCtrl"
            });

        $mdIconProvider.icon('soccerball', "./images/icons/soccer19.svg", 24);

        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('blue');

    });