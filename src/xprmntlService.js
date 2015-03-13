/**
 * xpr-angular
 *
 * /src/xprmntlService.js
 *
 * Angular Service for XPRMNTL xpr-toggle
 */

(function(angular) {
  'use strict';

  angular.module('xpr-angular')
    .service('xprService', [
      '$rootScope',
      '$window',

      function xprService($scope, $window) {

        var xpr = $window.xpr || {}
          , sE = xpr.saveExps;

        xpr.saveExps = function() {
          sE.apply(xpr, arguments);
          $scope.$digest();
        };

        return {
          feature: feature
        };

        function feature(name) {
          return xpr.feature(name);
        }

      }
    ]);

})(window.angular);
