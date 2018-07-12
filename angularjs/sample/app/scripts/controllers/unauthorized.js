'use strict';

/**
 * @ngdoc function
 * @name mainModule.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mainModule
 */
angular.module('mainModule')
  .controller('UnauthorizedCtrl', ["$scope", "$location", "$ajkeycloak", function ($scope, $location, $ajkeycloak) {
        $scope.logout = function(){
            $ajkeycloak.keycloak.logout();
        }

        $scope.init = function(){
            if($ajkeycloak.inValidApiAccess){
                
            }
            else{
                $location.path("/leads");
            }
            $ajkeycloak.inValidApiAccess = false;
        }
  }]);