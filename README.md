[![XPRMNTL](https://raw.githubusercontent.com/XPRMNTL/XPRMNTL.github.io/master/images/ghLogo.png)](https://github.com/XPRMNTL/XPRMNTL.github.io)
# XPR-Angular.js
[![NPM version](https://img.shields.io/npm/v/xpr-angular.svg)](https://www.npmjs.org/package/xpr-angular)

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
