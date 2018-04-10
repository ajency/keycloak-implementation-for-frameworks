mainModule.config(function($routeProvider, KCrouteGuard, KCroutePermissions){
    $routeProvider

    .when('/employee', {
      templateUrl: 'views/employee.html',
      controller: 'employeeController',
      resolve: KCrouteGuard.protect(KCroutePermissions["/employee"])
      //     requireLogin: true
    })

    .when('/leads', {
      templateUrl: 'views/LeadNew.html',
      controller: 'LeadNewController',
      resolve: KCrouteGuard.protect(KCroutePermissions["/leads"], {
              someData: "DataService"
            })   //   requireLogin: true
    })
    .when('/unauthorized',{
      templateUrl: 'views/unauthorized.html',
      controller: 'UnauthorizedCtrl',
      requireLogin: true
    })
    .when('/addduser', {
      templateUrl: 'views/addduser.html',
      controller: 'GoomoUrlController',
      resolve: KCrouteGuard.protect(KCroutePermissions["/addduser"])
    });
    


});