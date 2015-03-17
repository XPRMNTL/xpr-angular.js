[![XPRMNTL][logo-image]][logo-url]
# XPR-Angular.js
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Tips][gratipay-image]][gratipay-url]

This is an Angular.js plugin for XPRMNTL [xpr-toggle](https://github.com/XPRMNTL/xpr-toggle.js).
This adds an Angular directive that allows you to enable elements when a feature is turned on.

# Usage

First you have to include the JS file
```html
<script type="text/javascript" src="/xpr-angular.js"></script>
```

Then make sure that it's included in your app's dependencies during module creation.
```js
angular.module('appName', [ xpr-feature ]);
```

Then you can use it on your page
```html
<div data-xpr-feature="expName1"></div>
```

This element will only be visible when the feature `expName1` is enabled.

[logo-image]: https://raw.githubusercontent.com/XPRMNTL/XPRMNTL.github.io/master/images/ghLogo.png
[logo-url]: https://github.com/XPRMNTL/XPRMNTL.github.io
[npm-image]: https://img.shields.io/npm/v/xpr-angular.svg
[npm-url]: https://www.npmjs.org/package/xpr-angular
[downloads-image]: https://img.shields.io/npm/dm/xpr-angular.svg
[downloads-url]: https://www.npmjs.org/package/xpr-angular
[gratipay-image]: https://img.shields.io/gratipay/dncrews.svg
[gratipay-url]: https://www.gratipay.com/dncrews/
