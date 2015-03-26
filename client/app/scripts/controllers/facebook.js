'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:FacebookCtrl
 * @description
 * # FacebookCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('FacebookCtrl', function ($scope,$http) {
   var request = $http.get('/auth/facebook/callback');
    request.success(function(data) {
      //console.log(data);
      $scope.user = data;
      console.log(data);
    });
  });
