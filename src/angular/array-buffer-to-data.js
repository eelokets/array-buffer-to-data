(function(window, angular) {
  'use strict';

  angular
    .module('array-buffer-to-data', [])
    .factory('arrayBufferToData', function () {
      return {
        toBase64: function (arrayBuffer) {
          var binary = '';
          var bytes = new Uint8Array(arrayBuffer);
          var len = bytes.byteLength;
          for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          return window.btoa(binary);
        },

        toString: function (arrayBuffer) {
          try {
            var base64 = this.toBase64(arrayBuffer);

            return decodeURIComponent(escape(window.atob(base64)));
          } catch (e) {
            console.warn('Can not be converted to String');
            return false;
          }
        },

        toJSON: function (arrayBuffer) {
          try {
            var string = this.toString(arrayBuffer);
            return JSON.parse(string);
          } catch (e) {
            console.warn('Can not be converted to JSON');
            return false;
          }
        }
      }
    });
})(window, window.angular);