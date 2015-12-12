'use strict';

/**
 * @ngdoc overview
 * @name ipinfoApp
 * @description
 * # ipinfoApp
 *
 * Main module of the application.
 */
angular
  .module('ipinfoApp', [
    'ui.bootstrap',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/AddIP', {
        templateUrl: 'views/addip.html',
        controller: 'AddipCtrl',
        controllerAs: 'AddIP'
      })
      .otherwise({
        redirectTo: '/'
      });
      Parse.initialize("2eoZC8bF5U2cFEPpgGKqoTOfIfyaamRy7Xeunbxa", "nUWWcGH1RT4K45lvWBgiSqF6iwCixmE5m4wXg5Ph");
  }).run(function() {
  }) ;
