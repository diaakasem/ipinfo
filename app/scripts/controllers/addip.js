'use strict';

/**
 * @ngdoc function
 * @name ipinfoApp.controller:AddipCtrl
 * @description
 * # AddipCtrl
 * Controller of the ipinfoApp
 */
angular.module('ipinfoApp')
  .controller('AddipCtrl', function ($scope, ip, $uibModalInstance) {

    $scope.ipObject = {
      ip: ip,
      type: "cam - brickcom",
      username: "admin",
      password: "admin"
    };

    $scope.ok = function () {
      $uibModalInstance.close($scope.ipObject);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
