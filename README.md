array-buffer-to-data
=================

[![NPM version](https://badge.fury.io/js/array-buffer-to-data.svg)](http://badge.fury.io/for/js/array-buffer-to-data)

###DESCRIPTION:
Converting array buffer to json/string/base64. Including works with Cyrillic.

###USAGE:
#####Angular:
1) Include `src/angular/*.js`
2) Include `array-buffer-to-data` as a module in your app.
3) In the right place, specify the dependency  on factory `arrayBufferToData`

```js
angular.module('app', ['array-buffer-to-data']);

app.controller('Ctrl', ['arrayBufferToData', function(arrayBufferToData) {
    arrayBufferToData.toJSON(ArrayBuffer);
}]);
```

#####Native:
1) Include `src/native/*.js`

```js
arrayBufferToData.toJSON(ArrayBuffer);
```

#####Nodejs:
1) Include `src/native/*.js`

```js
var arrayBufferToData = require('array-buffer-to-data');

arrayBufferToData.toJSON(ArrayBuffer);
```

