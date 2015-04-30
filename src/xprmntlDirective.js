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
    .directive('xprFeature', directiveFactory(true))
    .directive('xprFeatureElse', directiveFactory(false));

  function directiveFactory(truthy) {
    var key = truthy ? 'xprFeature' : 'xprFeatureElse';

    return [
      'xprService',

      function xprDirective(service) {

        return {
          scope: false,

          link: function(scope, elem, attr) {
            var feature = attr[key];

            if (!feature.length) return;

            if (! service.feature) return elem.remove();

            scope.$watch(function() {
              return service.feature(feature);
            }, function(curr) {
              if (truthy === curr) return elem.removeClass('hide');
              elem.addClass('hide');
            });
          }
        };

      }
    ];

  }

})(window.angular);
