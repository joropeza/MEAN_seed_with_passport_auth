'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'jonnysAuthModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'jonnysAuthModule.UserCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'jonnysAuthModule.ProfileCtrl'
      })
      .when('/profile/:id', {
        templateUrl: 'views/profile.html',
        controller: 'jonnysAuthModule.ProfileCtrl'
      })
      .when('/auth/facebook/callback', {
        templateUrl: 'views/auth/facebook/index.html',
        controller: 'FacebookCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

 .config(function($httpProvider) {
     $httpProvider.interceptors.push('AuthInterceptor');
});
