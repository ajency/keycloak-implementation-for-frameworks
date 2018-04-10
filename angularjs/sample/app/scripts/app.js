//'use strict';
//
/**
 * @ngdoc overview
 * @name mainModule
 * @description
 * # mainModule
 *
 * Main module of the application.
 */

var mainModule = angular
  .module('mainModule', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ui.bootstrap'
  ]);


mainModule.config(["$httpProvider", '$translateProvider', 'ENV', '$mdDateLocaleProvider','$provide',
  function ($httpProvider, $translateProvider, ENV, $mdDateLocaleProvider, $provide) {

    // console.log(yeoman);
    console.log(ENV);



  }]);











