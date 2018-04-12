(function(){
  function bootstrapAngularCallback(ajkeycloak,userInfo){ // callback invoked after keycloak initialisation is done but before angularjs bootstrap
    console.log("we do nothing here now", ajkeycloak, userInfo);
  } // end bootstrap Angular
  
  
  // define additional services / factories to be injected
  // var unAuthorisedLogincallback = function($ajkeycloak, $rootScope, KCuiPermissions){
  //   return {
  //     inValidApiAccess: false
  //   }
  // }
  
  // define a default interceptor service callback to handle 401 unauthorised api calls
  var keycloakinterceptorcallback = ["$q", "$location", "ajkeycloakservice", function($q, $location, ajkeycloakservice){ // ( NOTE: ajkeycloak & KCuiPermissions are globally available for use within view templates once we inject the ajkeycloakservice into any service, controller, etc )
        return {
          request: function(config){ // set the keycloak access token in the authorization header for every request going out of the app (to be handled by your rest server)
            let deferred = $q.defer();
            Ajkeycloak().keycloak.updateToken(5).success(function(refreshed){
              config.headers['Authorization'] = "Bearer " + Ajkeycloak().keycloak.token;
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
            //   ajkeycloakservice.inValidApiAccess = true;
            //   $location.path("/unauthorized");
            // }
            return $q.reject(rejection);
          }
        }
      }];
  
  // your apps main run block goes here
  var runblockcallback = ["location", "$localStorage", "$mdSidenav", "$mdToast", "$rootScope", "$mdDialog", "CommonMethods", "$timeout", "spinnerService", function ($location, $localStorage, $mdSidenav,
    $mdToast, $rootScope, $mdDialog, CommonMethods, $timeout, spinnerService) {
      // add your run code here
  }];
                          
  // options to be passed to the angular bootstrap method
  var ajkeycloak_bootstrap_options = {
                            keycloakjson: 'keycloak.json', // required
                            angularmodule: {
                                  name: "mainModule", // required
                                  instance: mainModule // required
                                },
                            keycloakoptions: { // required
                                        onLoad: 'login-required'
                                      },
                            interceptor: keycloakinterceptorcallback, // optional
                            // helperservices: { // optional
                            //     unAuthorisedLogin: {
                            //       type: "factory", 
                            //       service: unAuthorisedLogincallback
                            //     }
                            // },
                            bootstrapnode: document.body, // required
                            runblock: runblockcallback // required
                        };
  
  
  // running this code creates a service called ajkeycloakservice as well as 2 constants $ajkeycloak & KEYCLOAKINFO
  // which can be used in your angularjs application.
  Ajkeycloak().bootstrapAngular(ajkeycloak_bootstrap_options,bootstrapAngularCallback);
  
})()

