/**
 * # xpr-angular
 * ## Angular Module for using XPRMNTL.toggle
 *
 * @version v1.3.1
 * @link https://github.com/XPRMNTL/xpr-angular.js.git
 * @license MIT
 * @author Dan Crews <crewsd@gmail.com>
 */

/**
 * xpr-angular
 *
 * /src/module.js
 *
 * Angular Module for XPRMNTL xpr-toggle
 */

(function(angular) {
  'use strict';

  angular.module('xpr-angular', []);

})(window.angular);

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
