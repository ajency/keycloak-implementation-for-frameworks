'use strict';
mainModule.controller('loginController',
  ['$scope', '$http', 'UtilsFactory', '$localStorage', '$window', 'dialogs','$ajkeycloak',
    function ($scope, $http, UtilsFactory, $localStorage, $window, dialogs, $ajkeycloak) {

      //$scope.$storage = $localStorage;

      // if($cookieStore.get('zopkyAuth') !=null){
      if ($localStorage.token != null) {
        // $window.alert($localStorage.zopkytoken);
        // redirect logic
        $window.location.href = '#/leads';

      } else {
        $scope.responseError = 'NO Connection';

        $scope.loginController = {};
        $scope.login = function () {
          var loginDetails = {
            email: $scope.loginController.username,
            passwd: $scope.loginController.password
          };
          //console.log(loginDetails);
          var responsePromise = UtilsFactory.doPostCall('v1/user/userLogin', loginDetails);
          responsePromise.then(function (response) {

            //console.log (response['response']);
            var data = response.data['response'];
            //console.log(data);
            if (response.status == 200) {
              $localStorage.token = response.data;

              $window.location.href = '#/leads';
            }
            else {
              $scope.userName = '';
              $localStorage.loginUserName = '';
            }

          });
        };
      }

      $scope.initKeycloakLogin = function(){
        if($localStorage.zopkytoken == null){
            //DOM has finished rendering
            console.log("keycloka info", $ajkeycloak);
            if($ajkeycloak && $ajkeycloak.userInfo && $ajkeycloak.userInfo.email){
              $scope.loginController.username = $ajkeycloak.userInfo.email
              $scope.loginController.password = "xxxxxxxxxx";
  
              $scope.login();
            }
        }
      }

      $scope.initKeycloakLogin();

    }
  ]);
