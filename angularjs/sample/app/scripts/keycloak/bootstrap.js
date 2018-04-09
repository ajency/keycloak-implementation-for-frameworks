function bootstrapAngular(ajkeycloak,userInfo){ // bootstrap after keycloak is done

  zopkyFrontendApp.constant("KEYCLOAKINFO", userInfo); // add keycloak user info as constant
  zopkyFrontendApp.constant("$ajkeycloak",ajkeycloak); // add keycloak instance as constant

  zopkyFrontendApp.factory('unAuthorisedLogin',function($ajkeycloak, $rootScope, KCuiPermissions){
    $rootScope.ajkeycloak = ajkeycloak;
    $rootScope.KCuiPermissions = KCuiPermissions;

    return {
      inValidApiAccess: false
    }
  });

  zopkyFrontendApp.factory('setKeycloakHeaders',function($q, $location, unAuthorisedLogin){
    return {
      request: function(config){
        let deferred = $q.defer();
        ajkeycloak.keycloak.updateToken(5).success(function(refreshed){
          config.headers['Authorization'] = "Bearer " + ajkeycloak.keycloak.token;
          deferred.resolve(config);
        })
        .error(function(err){
          deferred.reject(err);
        });
        return deferred.promise;
      },
      requestError: function(rejection) {
        // do something on error
        console.warn("requestError: ", rejection);
        return $q.reject(rejection);
      },
      responseError: function(rejection) {
        // do something on error
        console.warn("responseError: ", rejection);
        // if(rejection.status === 401){
        //   unAuthorisedLogin.inValidApiAccess = true;
        //   $location.path("/unauthorized");
        // }
        return $q.reject(rejection);
      }
    }
  });

  zopkyFrontendApp.config(function($httpProvider){
    $httpProvider.interceptors.push('setKeycloakHeaders');
  });

  angular.bootstrap(document.body, ['zopkyFrontendApp']);
  
  zopkyFrontendApp.run(function ($location, $localStorage, $mdSidenav,
    $mdToast, $rootScope, $mdDialog, CommonMethods, $timeout, spinnerService) {

    spinnerService.show('html5spinner');

    $rootScope.alertDialog = false;
    $rootScope.showAlertDialog = function (title, message, shouldGoBack) {
      $rootScope.alertDialog = true;

      var alert = $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title(title)
        .textContent(message)
        .ariaLabel('Alert')
        .ok('Got it!')

      $mdDialog.show(alert).then(function () {
        $rootScope.alertDialog = false;
        $mdDialog.cancel();
        if (shouldGoBack) {
          $rootScope.back();
        }
      });
    };

    $rootScope.handleEnterClickOnForm = function(input1, input2) {
      document.getElementById(input1).blur();
      if(input2) {
        document.getElementById(input2).focus();
      }
    }

    $rootScope.back = function () {
      if ($rootScope.alertDialog === false) {
        var prevPage = window.location.href;
        window.history.back();
        setTimeout(function () {
          if (window.location.href == prevPage) $location.path('/');
        }, 500);
      }
    }
    $rootScope.saveItinerary = function (draft_id, deal_id) {
      $rootScope.showFooter = true;

      var postData = {};
      postData.submit_type = 'save';
      if (draft_id) {
        var url = saveDraft + draft_id;
      } else {
        var url = saveDeal + deal_id;
      }
      CommonMethods.doPostCall(url, postData, function (err, data, status) {
        if (err) {
          if (status === 405) {
            $mdDialog.cancel();
            $location.search({ draft_id: draft_id, deal_id: deal_id });
            $location.path('/login');
            $mdToast.show(
              $mdToast.simple()
                .textContent(err)
                .hideDelay(3000)
            );
          } else {
            $mdToast.show(
              $mdToast.simple()
                .textContent(err)
                .hideDelay(3000)
            );
          }
        } else {
          $mdDialog.cancel();
          $mdToast.show(
            $mdToast.simple()
              .textContent(data)
              .hideDelay(2000)
          );

          if (!$localStorage.zopkytoken.contact || !$localStorage.zopkytoken.contact === '') {
            $rootScope.verifyContact();
          }
        }
      })
    }
  });

} // end bootstrap Angular

function initializeKeycloak() {

  $.getJSON('keycloak.json', function(data) {
      //do stuff with your data here
      console.log("keycloak json", data);

      var ajkeycloak = Ajkeycloak(data);

      ajkeycloak.keycloak.init({
          onLoad: 'login-required'
      }).success(function () {
        ajkeycloak.keycloak.loadUserInfo().success(function (userInfo) {
            console.log("userinfo", userInfo);
              // if(keycloak.hasResourceRole('angular-js-app-role')){
                bootstrapAngular(ajkeycloak,userInfo);
              // }
          })
          .error(function(error){
            alert(error);
          });
      });
  });

}  

initializeKeycloak();