'use strict';
mainModule.controller('logoutController', ['$scope', '$http', 'UtilsFactory', '$localStorage', '$window', '$ajkeycloak',
  function ($scope, $http, UtilsFactory, $localStorage, $window, $ajkeycloak) {
    // console.log("inside logout");
    $scope.logout = function(){
      $ajkeycloak.keycloak.logout();
    }

  }
]);
