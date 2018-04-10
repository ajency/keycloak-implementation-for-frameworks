'use strict';
mainModule.controller('logoutController', ['$scope', '$http', 'UtilsFactory', '$localStorage', '$window', 'ajkeycloakservice',
  function ($scope, $http, UtilsFactory, $localStorage, $window, ajkeycloakservice) {
    // console.log("inside logout");
    $scope.logout = function(){
      ajkeycloakservice.instance.keycloak.logout();
    }

  }
]);
