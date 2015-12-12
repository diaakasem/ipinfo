'use strict';

/**
 * @ngdoc function
 * @name ipinfoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ipinfoApp
 */
angular.module('ipinfoApp')
  .controller('MainCtrl', function ($scope, $uibModal, $log) {

    $scope.IP = Parse.Object.extend("IP");
    $scope.ips = [];
    $scope.searchText = '';

    $scope.save = function(ipObject) {
      var ip = new $scope.IP();
      ip.save(ipObject).then(function(object) {
        alert("yay! it worked");
      });
    };

    $scope.newModal = function() {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'views/addip.html',
        controller: 'AddipCtrl',
        size: 'lg',
        resolve: {
          ip: function () {
            return $scope.searchText;
          }
        }
      });

      modalInstance.result.then(function (ipObject) {
        $scope.save(ipObject);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    function hasSearch(str) {
      if (!str) {
        return false;
      }
      return str.indexOf($scope.searchText) >= 0;
    }

    function ipObjectFound(ipObject) {
      var result = false;
      _.each(['ip', 'name', 'type', 'description'], function(column) {
        var str = ipObject.get(column);
        console.log(str);
        result = hasSearch(str) || result;
      });
      return result;
    }

    $scope.search = function() {
      if (!$scope.searchText) {
        return;
      }
      var q = new Parse.Query($scope.IP);
      //q.matches("ip", ".*"+$scope.ip+".*");
      q.find({
        success: function(ips) {
          $scope.ips = _.filter(ips, ipObjectFound);
          console.log($scope.ips.length);
          $scope.$apply();
        },
        error: function(err) {
          console.log(err);
        }
      });
    };
  });
