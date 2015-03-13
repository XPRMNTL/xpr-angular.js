/**
 * xpr-angular
 *
 * /src/xprmntlDirective.js
 *
 * Angular Directive for XPRMNTL xpr-toggle
 */

(function(angular) {
  'use strict';

  angular.module('xpr-angular')
    .directive('xprFeature', [
      'xprService',

      function xprFeature(service) {
        return {
          scope: false,

          link: function(scope, elem, attr) {
            var feature = attr.xprFeature;

            if (! service.feature) return elem.remove();

            scope.$watch(function() {
              return service.feature(feature);
            }, function(curr) {
              if (curr) return elem.removeClass('hide');
              elem.addClass('hide');
            });
          }
        };
      }
    ]);

})(window.angular);
