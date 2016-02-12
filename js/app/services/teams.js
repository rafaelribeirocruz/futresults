"use strict";

var futResults = futResults || angular.module('futResultsApp');

futResults.
    factory('teamService', ['$http', '$q', function ($http, $q) {
        return {
            getTeamsList: function (){
              var deferred = $q.defer();

              var list = [
                  {
                      id: 1083,
                      name: 'Grêmio'
                  },
                  {
                      id: 2,
                      name: 'Internacional'
                  },
                  {
                      id: 3,
                      name: 'Corinthians'
                  }
              ];

              deferred.resolve(list);

              return deferred.promise;
            },

            getSelectedTeam: function (){
                return {
                    id: 1083,
                    name: 'Grêmio'
                };
            }
        };
    }]);