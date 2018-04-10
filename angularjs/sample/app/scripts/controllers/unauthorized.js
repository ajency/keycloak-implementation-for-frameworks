'use strict';

/**
 * @ngdoc function
 * @name mainModule.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mainModule
 */
angular.module('mainModule')
  .controller('UnauthorizedCtrl', ["$scope", "$location", "ajkeycloakservice", function ($scope, $location, ajkeycloakservice) {
        $scope.logout = function(){
            ajkeycloakservice.instance.keycloak.logout();
        }

        $scope.init = function(){
            if(ajkeycloakservice.inValidApiAccess){
                
            }
            else{
                $location.path("/leads");
            }
            ajkeycloakservice.inValidApiAccess = false;
        }
  }]);