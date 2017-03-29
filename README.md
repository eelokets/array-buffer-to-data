array-buffer-to-data
=================

[![NPM version](https://badge.fury.io/js/array-buffer-to-data.svg)](http://badge.fury.io/js/array-buffer-to-data) [![Bower version](https://badge.fury.io/bo/array-buffer-to-data.svg)](http://badge.fury.io/bo/array-buffer-to-data)

### DESCRIPTION:
Converting array buffer to json/string/base64. Including works with Cyrillic.

### INSTALL:
npm:
```js
npm i array-buffer-to-data
```
bower:
```js
bower i array-buffer-to-data
```

### USAGE:
##### Angular:
- Include `src/angular/array-buffer-to-data.js`
- Include `array-buffer-to-data` as a module in your app.
- In the right place, specify the dependency  on factory `arrayBufferToData`

```js
angular.module('app', ['array-buffer-to-data']);

app.controller('Ctrl', ['arrayBufferToData', function(arrayBufferToData) {
    arrayBufferToData.toJSON(ArrayBuffer);
}]);
```

##### Native:
- Include `src/native/array-buffer-to-data.js`

```js
arrayBufferToData.toJSON(ArrayBuffer);
```

##### Nodejs:
- Include `src/native/array-buffer-to-data.js`

```js
var arrayBufferToData = require('array-buffer-to-data');

arrayBufferToData.toJSON(ArrayBuffer);
```

