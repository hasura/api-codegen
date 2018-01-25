(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("api-codegen", [], factory);
	else if(typeof exports === 'object')
		exports["api-codegen"] = factory();
	else
		root["api-codegen"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable */
var Format = function Format() {
  _classCallCheck(this, Format);
};

exports.default = Format;


Format.NEW_LINE = '\n\n';
Format.NEXT_LINE = '\n';
Format.DOUBLE_QUOTES = '\"';
Format.TAB = '\t';
Format.SEMICOLON = ';';
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* eslint-disable */
var InvalidArgumentException = function InvalidArgumentException(message) {
    this.message = message;
    if ("captureStackTrace" in Error) Error.captureStackTrace(this, InvalidArgumentException);else this.stack = new Error().stack;
};

InvalidArgumentException.prototype = Object.create(Error.prototype);
InvalidArgumentException.prototype.name = "InvalidArgumentException";
InvalidArgumentException.prototype.constructor = InvalidArgumentException;

var UnsupportedLibraryException = function UnsupportedLibraryException(message) {
    this.message = message;
    if ("captureStackTrace" in Error) Error.captureStackTrace(this, UnsupportedLibraryException);else this.stack = new Error().stack;
};

UnsupportedLibraryException.prototype = Object.create(Error.prototype);
UnsupportedLibraryException.prototype.name = "UnsupportedLibraryException";
UnsupportedLibraryException.prototype.constructor = UnsupportedLibraryException;

var UnsupportedEncodingException = function UnsupportedEncodingException(message) {
    this.message = message;
    if ("captureStackTrace" in Error) Error.captureStackTrace(this, UnsupportedEncodingException);else this.stack = new Error().stack;
};

UnsupportedEncodingException.prototype = Object.create(Error.prototype);
UnsupportedEncodingException.prototype.name = "UnsupportedEncodingException";
UnsupportedEncodingException.prototype.constructor = UnsupportedEncodingException;

exports.InvalidArgumentException = InvalidArgumentException;
exports.UnsupportedEncodingException = UnsupportedEncodingException;
exports.UnsupportedLibraryException = UnsupportedLibraryException;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// returns true if its an auth url with /signup or /login
var shouldHandleAuthToken = function shouldHandleAuthToken(url) {
  return url.indexOf('auth') !== -1 && (url.indexOf('signup') !== -1 || url.indexOf('login') !== -1);
};

exports.shouldHandleAuthToken = shouldHandleAuthToken;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeGenerator = undefined;

var _CodeGenerator = __webpack_require__(4);

var _CodeGenerator2 = _interopRequireDefault(_CodeGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CodeGenerator = _CodeGenerator2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */

var _Python27CodeGenerator = __webpack_require__(5);

var _Python27CodeGenerator2 = _interopRequireDefault(_Python27CodeGenerator);

var _Python3CodeGenerator = __webpack_require__(6);

var _Python3CodeGenerator2 = _interopRequireDefault(_Python3CodeGenerator);

var _JavascriptCodeGenerator = __webpack_require__(7);

var _JavascriptCodeGenerator2 = _interopRequireDefault(_JavascriptCodeGenerator);

var _CurlCodeGenerator = __webpack_require__(12);

var _CurlCodeGenerator2 = _interopRequireDefault(_CurlCodeGenerator);

var _SwiftCodeGenerator = __webpack_require__(13);

var _SwiftCodeGenerator2 = _interopRequireDefault(_SwiftCodeGenerator);

var _JavaCodeGenerator = __webpack_require__(14);

var _JavaCodeGenerator2 = _interopRequireDefault(_JavaCodeGenerator);

var _Exceptions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CodeGenerator = function () {
  function CodeGenerator(codeGenType) {
    _classCallCheck(this, CodeGenerator);

    switch (codeGenType) {
      case CodeGenerator.TYPES.PYTHON_2_7_REQUEST:
        this.generator = new _Python27CodeGenerator2.default(_Python27CodeGenerator2.default.LIBRARY.REQUESTS);
        break;
      case CodeGenerator.TYPES.PYTHON_3_REQUEST:
        this.generator = new _Python3CodeGenerator2.default(_Python3CodeGenerator2.default.LIBRARY.REQUESTS);
        break;
      case CodeGenerator.TYPES.NODE_FETCH:
        this.generator = new _JavascriptCodeGenerator2.default(_JavascriptCodeGenerator2.default.LIBRARY.NODE_FETCH);
        break;
      case CodeGenerator.TYPES.JAVASCRIPT_JQUERY:
        this.generator = new _JavascriptCodeGenerator2.default(_JavascriptCodeGenerator2.default.LIBRARY.JQUERY);
        break;
      case CodeGenerator.TYPES.JAVASCRIPT_FETCH:
        this.generator = new _JavascriptCodeGenerator2.default(_JavascriptCodeGenerator2.default.LIBRARY.FETCH);
        break;
      case CodeGenerator.TYPES.JAVASCRIPT_REACT_NATIVE:
        this.generator = new _JavascriptCodeGenerator2.default(_JavascriptCodeGenerator2.default.LIBRARY.REACT_NATIVE);
        break;
      case CodeGenerator.TYPES.CURL:
        this.generator = new _CurlCodeGenerator2.default();
        break;
      case CodeGenerator.TYPES.SWIFT_ALAMOFIRE:
        this.generator = new _SwiftCodeGenerator2.default(_SwiftCodeGenerator2.default.LIBRARY.ALAMOFIRE);
        break;
      case CodeGenerator.TYPES.SWIFT_IOS_ALAMOFIRE:
        this.generator = new _SwiftCodeGenerator2.default(_SwiftCodeGenerator2.default.LIBRARY.IOS_ALAMOFIRE);
        break;
      case CodeGenerator.TYPES.JAVA_OKHTTP:
        this.generator = new _JavaCodeGenerator2.default(_JavaCodeGenerator2.default.LIBRARY.OKHTTP);
        break;
      case CodeGenerator.TYPES.JAVA_ANDROID:
        this.generator = new _JavaCodeGenerator2.default(_JavaCodeGenerator2.default.LIBRARY.ANDROID);
        break;
      default:
        throw new _Exceptions.UnsupportedLibraryException(codeGenType + ' is not supported');
    }
  }
  /*
  Accepts a JS object =>
  {
    url: String, => 'https://example.com/api'
    method: String, => ('GET', 'POST', 'PUT', 'DELETE', 'PATCH')
    headers: Object, => { 'Authorization': 'Bearer <token>', 'Content-Type': 'application/json' }
    param: String (The text you want to convert) => "{"key": "value"}"
  }
   Function can also throw errors =>
  1. JSONParseException
  2. InValidArgumentException
  */


  _createClass(CodeGenerator, [{
    key: 'generate',
    value: function generate(requestOptions) {
      if (this.verifyRequestOptions(requestOptions)) {
        var url = requestOptions.url,
            method = requestOptions.method,
            headers = requestOptions.headers,
            param = requestOptions.param,
            type = requestOptions.type;

        return type === 'file' ? this.generator.generateFileUploadCode(url, method, headers) : this.generator.generate(url, method, headers, param ? JSON.parse(param) : null);
      }
    }
  }, {
    key: 'getSelectedLanguage',
    value: function getSelectedLanguage() {
      return this.generator.getSelectedLanguage();
    }

    // **es-lint ignore**//
    // Checks whether the request options sent are valid/supported/complete, if not, throws an exception

  }, {
    key: 'verifyRequestOptions',
    value: function verifyRequestOptions(requestOptions) {
      if (!requestOptions.url) {
        throw new _Exceptions.InvalidArgumentException("No value for url provided");
      } else if (!requestOptions.url.constructor == String) {
        throw new _Exceptions.InvalidArgumentException("Url should be string");
      }
      if (!requestOptions.method) {
        throw new _Exceptions.InvalidArgumentException("No value for method provided");
      } else if (requestOptions.method === CodeGenerator.REQUEST_METHODS.GET) {
        return true;
      } else if (!(requestOptions.method === CodeGenerator.REQUEST_METHODS.GET || requestOptions.method === CodeGenerator.REQUEST_METHODS.POST || requestOptions.method === CodeGenerator.REQUEST_METHODS.PUT || requestOptions.method === CodeGenerator.REQUEST_METHODS.DELETE || requestOptions.method === CodeGenerator.REQUEST_METHODS.PATCH)) {
        throw new _Exceptions.InvalidArgumentException("Method should be of type CodeGenerator.REQUEST_METHODS");
      }
      return true;
    }
  }]);

  return CodeGenerator;
}();

// add your new library here


exports.default = CodeGenerator;
CodeGenerator.TYPES = {
  CURL: 'Curl',
  PYTHON_2_7_REQUEST: 'Python 2.7 Requests',
  PYTHON_3_REQUEST: 'Python 3 Requests',
  NODE_FETCH: 'Node Fetch',
  JAVASCRIPT_JQUERY: 'Javascript Jquery',
  JAVASCRIPT_FETCH: 'Javascript Fetch',
  JAVASCRIPT_REACT_NATIVE: 'Javascript React Native',
  SWIFT_ALAMOFIRE: 'Swift Alamofire',
  SWIFT_IOS_ALAMOFIRE: 'Swift iOS Alamofire',
  JAVA_OKHTTP: 'Java OkHttp',
  JAVA_ANDROID: 'Java Android'
};

CodeGenerator.REQUEST_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
};
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */


var _Format = __webpack_require__(0);

var _Format2 = _interopRequireDefault(_Format);

var _Exceptions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Python27CodeGenerator = function () {
  function Python27CodeGenerator(library) {
    _classCallCheck(this, Python27CodeGenerator);

    this.library = library;
  }

  _createClass(Python27CodeGenerator, [{
    key: 'getCodeImports',
    value: function getCodeImports() {
      switch (this.library) {
        case Python27CodeGenerator.LIBRARY.REQUESTS:
          return 'import requests' + _Format2.default.NEXT_LINE + 'import json';
        default:
          throw new _Exceptions.UnsupportedLibraryException(this.library + ' is not supported');
      }
    }
  }, {
    key: 'getStringifiedJson',
    value: function getStringifiedJson(json) {
      return JSON.stringify(json, null, 4).replace(/null/g, 'None');
    }
  }, {
    key: 'getSelectedLanguage',
    value: function getSelectedLanguage() {
      return 'python';
    }
  }, {
    key: 'generate',
    value: function generate(url, method, headers, param) {
      var importHeaders = this.getCodeImports() + _Format2.default.NEW_LINE;
      var urlString = 'url = "' + url + '"' + _Format2.default.NEW_LINE;
      var requestpayload = param === null ? '' : 'requestPayload = ' + this.getStringifiedJson(param) + _Format2.default.NEW_LINE;
      var headerString = headers === null ? '' : 'headers = ' + this.getStringifiedJson(headers) + _Format2.default.NEW_LINE;
      var request = 'resp = requests.request("' + method + '", url' + (requestpayload === '' ? '' : ', data=json.dumps(requestPayload)') + (headers === null ? '' : ', headers=headers') + ')' + _Format2.default.NEW_LINE;
      var print = 'print resp.content';
      return importHeaders + '# This is the url to which the query is made' + _Format2.default.NEXT_LINE + urlString + '# This is the json payload for the query' + _Format2.default.NEXT_LINE + requestpayload + '# Setting headers' + _Format2.default.NEXT_LINE + headerString + '# Make the query and store response in resp' + _Format2.default.NEXT_LINE + request + '# resp.content contains the json response.' + _Format2.default.NEXT_LINE + print;
    }
  }, {
    key: 'getUploadFileCode',
    value: function getUploadFileCode(url, headers) {
      var headerString = headers === null ? 'headers = {}' : 'headers = ' + this.getStringifiedJson(headers);
      return 'import requests' + _Format2.default.NEW_LINE + '# This is the url to which the query is made' + _Format2.default.NEXT_LINE + ('url = "' + url + '"') + _Format2.default.NEW_LINE + '# Setting headers' + _Format2.default.NEXT_LINE + headerString + _Format2.default.NEW_LINE + '# Open the file and make the query' + _Format2.default.NEXT_LINE + 'with open(\'test.png\', \'rb\') as file_image:' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'resp = requests.post(url, data=file_image.read(), headers=headers)' + _Format2.default.NEW_LINE + '# resp.content contains the json response.' + _Format2.default.NEXT_LINE + 'print resp.content';
    }
  }, {
    key: 'getDownloadFileCode',
    value: function getDownloadFileCode(url) {
      return 'import requests' + _Format2.default.NEXT_LINE + 'import shutil' + _Format2.default.NEW_LINE + '# This is the url to which the query is made' + _Format2.default.NEXT_LINE + ('url = "' + url + '"') + _Format2.default.NEW_LINE + '# Change the name of the file and the extension based on the file being downloaded' + _Format2.default.NEXT_LINE + 'filename = "downloadedFile.png"' + _Format2.default.NEW_LINE + '# Make the query' + _Format2.default.NEXT_LINE + 'resp = requests.get(url, stream=TRUE)' + _Format2.default.NEW_LINE + '# Save the data into the file' + _Format2.default.NEXT_LINE + 'with open(filename, \'wb\') as file_image' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'shutil.copyfileobj(resp.raw, file_image)' + _Format2.default.NEW_LINE + 'print resp.content';
    }
  }, {
    key: 'generateFileUploadCode',
    value: function generateFileUploadCode(url, method, headers) {
      if (method === 'GET') {
        return this.getDownloadFileCode(url);
      } else if (method === 'DELETE') {
        return this.generate(url, method, headers, null);
      }
      return this.getUploadFileCode(url, headers);
    }
  }]);

  return Python27CodeGenerator;
}();

exports.default = Python27CodeGenerator;


Python27CodeGenerator.LIBRARY = {
  REQUESTS: 'requests'
};
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */


var _Format = __webpack_require__(0);

var _Format2 = _interopRequireDefault(_Format);

var _Exceptions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Python3CodeGenerator = function () {
  function Python3CodeGenerator(library) {
    _classCallCheck(this, Python3CodeGenerator);

    this.library = library;
  }

  _createClass(Python3CodeGenerator, [{
    key: 'getCodeImports',
    value: function getCodeImports() {
      switch (this.library) {
        case Python3CodeGenerator.LIBRARY.REQUESTS:
          return 'import requests' + _Format2.default.NEXT_LINE + 'import json';
        default:
          throw new _Exceptions.UnsupportedLibraryException(this.library + ' is not supported');
      }
    }
  }, {
    key: 'getStringifiedJson',
    value: function getStringifiedJson(json) {
      return JSON.stringify(json, null, 4).replace(/null/g, 'None');
    }
  }, {
    key: 'getSelectedLanguage',
    value: function getSelectedLanguage() {
      return 'python';
    }
  }, {
    key: 'generate',
    value: function generate(url, method, headers, param) {
      var importHeaders = this.getCodeImports() + _Format2.default.NEW_LINE;
      var urlString = 'url = "' + url + '"' + _Format2.default.NEW_LINE;
      var requestpayload = param === null ? '' : 'requestPayload = ' + this.getStringifiedJson(param) + _Format2.default.NEW_LINE;
      var headerString = headers === null ? '' : 'headers = ' + this.getStringifiedJson(headers) + _Format2.default.NEW_LINE;
      var request = 'resp = requests.request("' + method + '", url' + (requestpayload === '' ? '' : ', data=json.dumps(requestPayload)') + (headers === null ? '' : ', headers=headers') + ')' + _Format2.default.NEW_LINE;
      var print = 'print(resp.content)';
      return importHeaders + '# This is the url to which the query is made' + _Format2.default.NEXT_LINE + urlString + '# This is the json payload for the query' + _Format2.default.NEXT_LINE + requestpayload + '# Setting headers' + _Format2.default.NEXT_LINE + headerString + '# Make the query and store response in resp' + _Format2.default.NEXT_LINE + request + '# resp.content contains the json response.' + _Format2.default.NEXT_LINE + print;
    }
  }, {
    key: 'getUploadFileCode',
    value: function getUploadFileCode(url, headers) {
      var headerString = headers === null ? 'headers = {}' : 'headers = ' + this.getStringifiedJson(headers);
      return 'import requests' + _Format2.default.NEW_LINE + '# This is the url to which the query is made' + _Format2.default.NEXT_LINE + ('url = "' + url + '"') + _Format2.default.NEW_LINE + '# Setting headers' + _Format2.default.NEXT_LINE + headerString + _Format2.default.NEW_LINE + '# Open the file and make the query' + _Format2.default.NEXT_LINE + 'with open(\'test.png\', \'rb\') as file_image:' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'resp = requests.post(url, data=file_image.read(), headers=headers)' + _Format2.default.NEW_LINE + '# resp.content contains the json response.' + _Format2.default.NEXT_LINE + 'print(resp.content)';
    }
  }, {
    key: 'getDownloadFileCode',
    value: function getDownloadFileCode(url) {
      return 'import requests' + _Format2.default.NEXT_LINE + 'import shutil' + _Format2.default.NEW_LINE + '# This is the url to which the query is made' + _Format2.default.NEXT_LINE + ('url = "' + url + '"') + _Format2.default.NEW_LINE + '# Change the name of the file and the extension based on the file being downloaded' + _Format2.default.NEXT_LINE + 'filename = "downloadedFile.png"' + _Format2.default.NEW_LINE + '# Make the query' + _Format2.default.NEXT_LINE + 'resp = requests.get(url, stream=TRUE)' + _Format2.default.NEW_LINE + '# Save the data into the file' + _Format2.default.NEXT_LINE + 'with open(filename, \'wb\') as file_image' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'shutil.copyfileobj(resp.raw, file_image)' + _Format2.default.NEW_LINE + 'print(resp.content)';
    }
  }, {
    key: 'generateFileUploadCode',
    value: function generateFileUploadCode(url, method, headers) {
      if (method === 'GET') {
        return this.getDownloadFileCode(url);
      } else if (method === 'DELETE') {
        return this.generate(url, method, headers, null);
      }
      return this.getUploadFileCode(url, headers);
    }
  }]);

  return Python3CodeGenerator;
}();

exports.default = Python3CodeGenerator;


Python3CodeGenerator.LIBRARY = {
  REQUESTS: 'requests'
};
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */

var _Exceptions = __webpack_require__(1);

var _JSFetchCodeGenerator = __webpack_require__(8);

var _JSFetchCodeGenerator2 = _interopRequireDefault(_JSFetchCodeGenerator);

var _JSJqueryCodeGenerator = __webpack_require__(9);

var _JSJqueryCodeGenerator2 = _interopRequireDefault(_JSJqueryCodeGenerator);

var _JSNodeFetchCodeGenerator = __webpack_require__(10);

var _JSNodeFetchCodeGenerator2 = _interopRequireDefault(_JSNodeFetchCodeGenerator);

var _JSReactNativeCodeGenerator = __webpack_require__(11);

var _JSReactNativeCodeGenerator2 = _interopRequireDefault(_JSReactNativeCodeGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JavascriptCodeGenerator = function () {
  function JavascriptCodeGenerator(library) {
    _classCallCheck(this, JavascriptCodeGenerator);

    switch (library) {
      case JavascriptCodeGenerator.LIBRARY.NODE_FETCH:
        this.generator = new _JSNodeFetchCodeGenerator2.default();
        break;
      case JavascriptCodeGenerator.LIBRARY.JQUERY:
        this.generator = new _JSJqueryCodeGenerator2.default();
        break;
      case JavascriptCodeGenerator.LIBRARY.FETCH:
        this.generator = new _JSFetchCodeGenerator2.default();
        break;
      case JavascriptCodeGenerator.LIBRARY.REACT_NATIVE:
        this.generator = new _JSReactNativeCodeGenerator2.default();
        break;
      default:
        throw new _Exceptions.UnsupportedLibraryException(library + ' is not supported');
    }
  }

  _createClass(JavascriptCodeGenerator, [{
    key: 'getSelectedLanguage',
    value: function getSelectedLanguage() {
      return "javascript";
    }
  }, {
    key: 'generate',
    value: function generate(url, method, headers, param) {
      return this.generator.generate(url, method, headers, param);
    }
  }, {
    key: 'generateFileUploadCode',
    value: function generateFileUploadCode(url, method, headers) {
      return this.generator.generateFileUploadCode(url, method, headers);
    }
  }]);

  return JavascriptCodeGenerator;
}();

exports.default = JavascriptCodeGenerator;


JavascriptCodeGenerator.LIBRARY = {
  FETCH: 'fetch',
  JQUERY: 'jquery',
  NODE_FETCH: 'node_fetch',
  REACT_NATIVE: 'react_native'
};
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */


var _Format = __webpack_require__(0);

var _Format2 = _interopRequireDefault(_Format);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSFetchCodeGenerator = function () {
  function JSFetchCodeGenerator() {
    _classCallCheck(this, JSFetchCodeGenerator);
  }

  _createClass(JSFetchCodeGenerator, [{
    key: 'getStringifiedJson',
    value: function getStringifiedJson(json) {
      return JSON.stringify(json, null, 4);
    }

    //If header contains Authorization then returns a comment with code to get from local storage

  }, {
    key: 'getAuthHeaderComment',
    value: function getAuthHeaderComment(headers) {
      if (headers.Authorization || headers.authorization) {
        return '// If you have the auth token saved in offline storage' + _Format2.default.NEXT_LINE + '// var authToken = window.localStorage.getItem(\'HASURA_AUTH_TOKEN\');' + _Format2.default.NEXT_LINE + '// headers = { "Authorization" : "Bearer " + authToken }' + _Format2.default.NEXT_LINE;
      }
      return '';
    }
  }, {
    key: 'generate',
    value: function generate(url, method, headers, param) {
      var handleAuthTokenComment = '';
      if ((0, _utils.shouldHandleAuthToken)(url)) {
        handleAuthTokenComment = _Format2.default.TAB + '// To save the auth token received to offline storage' + _Format2.default.NEXT_LINE + _Format2.default.TAB + '// ' + 'var authToken = result.auth_token' + _Format2.default.NEXT_LINE + _Format2.default.TAB + '// ' + 'window.localStorage.setItem(\'HASURA_AUTH_TOKEN\', authToken);' + _Format2.default.NEXT_LINE;
      }

      var requestOptions = {
        method: method,
        headers: headers
      };

      var codeImportsString = 'var fetchAction =  require(\'fetch\');' + _Format2.default.NEW_LINE;
      var urlString = 'var url = "' + url + '";' + _Format2.default.NEW_LINE;
      var bodyString = param ? 'var body = ' + this.getStringifiedJson(param) + ';' + _Format2.default.NEW_LINE : '';
      var requestOptionsString = 'var requestOptions = ' + this.getStringifiedJson(requestOptions) + ';' + _Format2.default.NEW_LINE;
      var addBodyString = param ? 'requestOptions.body = JSON.stringify(body);' + _Format2.default.NEW_LINE : '';
      var fetchCodeString = 'fetchAction(url, requestOptions)' + _Format2.default.NEXT_LINE + '.then(function(response) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'return response.json();' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.then(function(result) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(result);' + _Format2.default.NEXT_LINE + handleAuthTokenComment + '})' + _Format2.default.NEXT_LINE + '.catch(function(error) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(\'Request Failed:\' + error);' + _Format2.default.NEXT_LINE + '});';
      return codeImportsString + urlString + this.getAuthHeaderComment(headers) + requestOptionsString + bodyString + addBodyString + fetchCodeString;
    }
  }, {
    key: 'generateFileUploadCode',
    value: function generateFileUploadCode(url, method, headers) {
      console.log('JS-FETCH -> FILE');
      if (method === 'GET') {
        return this.getDownloadFileCode(url, method, headers);
      } else if (method === 'DELETE') {
        return this.generate(url, method, headers, null);
      }
      return this.getUploadFileCode(url, method, headers);
    }
  }, {
    key: 'getUploadFileCode',
    value: function getUploadFileCode(url, method, headers) {
      return 'var fetchAction =  require(\'fetch\');' + _Format2.default.NEW_LINE + ('var url = "' + url + '";') + _Format2.default.NEW_LINE + '// This is the file we are going to upload, replace this with your file' + _Format2.default.NEXT_LINE + 'var file = \'\';' + _Format2.default.NEW_LINE + this.getAuthHeaderComment(headers) + 'var requestOptions = {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + ('method: \'' + method + '\',') + _Format2.default.NEXT_LINE + _Format2.default.TAB + ('headers: ' + JSON.stringify(headers, null, 6).replace('}', _Format2.default.TAB + '}') + ',') + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'body: file' + _Format2.default.NEXT_LINE + '}' + _Format2.default.NEW_LINE + 'fetchAction(url, requestOptions)' + _Format2.default.NEXT_LINE + '.then(function(response) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'return response.json();' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.then(function(result) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(result);' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.catch(function(error) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(\'Request Failed:\' + error);' + _Format2.default.NEXT_LINE + '});';
    }
  }, {
    key: 'getDownloadFileCode',
    value: function getDownloadFileCode(url, method, headers) {
      var requestOptions = {
        method: method,
        headers: headers
      };
      return 'var fetchAction =  require(\'fetch\');' + _Format2.default.NEW_LINE + ('var url = "' + url + '";') + _Format2.default.NEW_LINE + this.getAuthHeaderComment(headers) + ('var requestOptions = ' + this.getStringifiedJson(requestOptions) + ';') + _Format2.default.NEW_LINE + 'fetchAction(url, requestOptions)' + _Format2.default.NEXT_LINE + '.then(function(response) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'return response.blob();' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.then(function(blob) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(result);' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.catch(function(error) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(\'Request Failed:\' + error);' + _Format2.default.NEXT_LINE + '});';
    }
  }]);

  return JSFetchCodeGenerator;
}();

exports.default = JSFetchCodeGenerator;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */

var _Format = __webpack_require__(0);

var _Format2 = _interopRequireDefault(_Format);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSJqueryCodeGenerator = function () {
  function JSJqueryCodeGenerator() {
    _classCallCheck(this, JSJqueryCodeGenerator);
  }

  _createClass(JSJqueryCodeGenerator, [{
    key: 'getStringifiedJson',
    value: function getStringifiedJson(json, indentation) {
      return JSON.stringify(json, null, indentation).replace(/}([^}]*)$/, '\t}' + '$1');
    }

    //If header contains Authorization then returns a comment with code to get from local storage

  }, {
    key: 'getAuthHeaderComment',
    value: function getAuthHeaderComment(headers) {
      if (headers.Authorization || headers.authorization) {
        return '// If you have the auth token saved in offline storage' + _Format2.default.NEXT_LINE + '// var authToken = window.localStorage.getItem(\'HASURA_AUTH_TOKEN\');' + _Format2.default.NEXT_LINE + '// headers = { "Authorization" : "Bearer " + authToken }' + _Format2.default.NEXT_LINE;
      }
      return '';
    }
  }, {
    key: 'getHandleAuthResponseComment',
    value: function getHandleAuthResponseComment(url, tabs) {
      if ((0, _utils.shouldHandleAuthToken)(url)) {
        return tabs + '// To save the auth token received to offline storage' + _Format2.default.NEXT_LINE + tabs + '// ' + 'var authToken = result.auth_token' + _Format2.default.NEXT_LINE + tabs + '// ' + 'window.localStorage.setItem(\'HASURA_AUTH_TOKEN\', authToken);' + _Format2.default.NEXT_LINE;
      }
      return '';
    }
  }, {
    key: 'getContentType',
    value: function getContentType(headers) {
      var newHeaders = {};
      for (var key in headers) {
        if (key.replace('-', '').toLowerCase() === 'contenttype') {
          return headers[key];
        }
      }
      return null;
    }
  }, {
    key: 'getHeaders',
    value: function getHeaders(headers) {
      var newHeaders = {};
      for (var key in headers) {
        if (key.replace('-', '').toLowerCase() !== 'contenttype') {
          newHeaders[key] = headers[key];
        }
      }
      return Object.keys(newHeaders).length ? newHeaders : null;
    }
  }, {
    key: 'generate',
    value: function generate(url, method, headers, param) {
      var urlString = 'url: "' + url + '",';
      var contentTypeString = this.getContentType(headers) ? _Format2.default.TAB + ('contentType: "' + this.getContentType(headers) + '",') + _Format2.default.NEXT_LINE : '';
      var headerString = this.getHeaders(headers) ? _Format2.default.TAB + ('headers: ' + this.getStringifiedJson(this.getHeaders(headers), 6) + ',') + _Format2.default.NEXT_LINE : '';
      var dataString = 'data: JSON.stringify(' + this.getStringifiedJson(param, 6) + '),';
      var typeString = 'type: "' + method + '",';
      var responseDataTypeString = 'dataType: "json"';

      return this.getAuthHeaderComment(headers) + '$.ajax({' + _Format2.default.NEXT_LINE + _Format2.default.TAB + urlString + _Format2.default.NEXT_LINE + contentTypeString + headerString + _Format2.default.TAB + dataString + _Format2.default.NEXT_LINE + _Format2.default.TAB + typeString + _Format2.default.NEXT_LINE + _Format2.default.TAB + responseDataTypeString + _Format2.default.NEXT_LINE + '}).done(function(json) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + '// Handle Response' + _Format2.default.NEXT_LINE + this.getHandleAuthResponseComment(url, _Format2.default.TAB) + '}).fail(function(xhr, status, errorThrown) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log("Error: " + errorThrown);' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log("Status: " + status);' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.dir(xhr);' + _Format2.default.NEXT_LINE + '});';
    }
  }, {
    key: 'getUploadFileCode',
    value: function getUploadFileCode(url, headers) {
      var urlString = 'url: "' + url + '",';
      var contentTypeString = this.getContentType(headers) ? _Format2.default.TAB + ('contentType: "' + this.getContentType(headers) + '",') + _Format2.default.NEXT_LINE : '';
      var headerString = this.getHeaders(headers) ? _Format2.default.TAB + ('headers: ' + this.getStringifiedJson(this.getHeaders(headers)) + ',') + _Format2.default.NEXT_LINE : '';
      var dataString = 'data: file,';
      var typeString = 'type: "POST",';

      return '// This is the file we are going to upload, replace this with your file' + _Format2.default.NEXT_LINE + 'var file = \'\'' + _Format2.default.NEW_LINE + this.getAuthHeaderComment(headers) + '$.ajax({' + _Format2.default.NEXT_LINE + _Format2.default.TAB + urlString + _Format2.default.NEXT_LINE + contentTypeString + headerString + _Format2.default.TAB + dataString + _Format2.default.NEXT_LINE + _Format2.default.TAB + typeString + _Format2.default.NEXT_LINE + '}).done(function(json) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + '//Handle Response' + _Format2.default.NEXT_LINE + '}).fail(function(xhr, status, errorThrown) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log("Error: " + errorThrown);' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log("Status: " + status);' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.dir(xhr);' + _Format2.default.NEXT_LINE + '});';
    }
  }, {
    key: 'getDownloadFileCode',
    value: function getDownloadFileCode(url, headers) {
      return "//JQuery does not support blob types yet.";
    }
  }, {
    key: 'generateFileUploadCode',
    value: function generateFileUploadCode(url, method, headers) {
      if (method === 'GET') {
        return this.getDownloadFileCode(url, headers);
      } else if (method === 'DELETE') {
        return this.generate(url, method, headers, null);
      } else {
        return this.getUploadFileCode(url, headers);
      }
    }
  }]);

  return JSJqueryCodeGenerator;
}();

exports.default = JSJqueryCodeGenerator;
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */


var _Format = __webpack_require__(0);

var _Format2 = _interopRequireDefault(_Format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSNodeFetchCodeGenerator = function () {
  function JSNodeFetchCodeGenerator() {
    _classCallCheck(this, JSNodeFetchCodeGenerator);
  }

  _createClass(JSNodeFetchCodeGenerator, [{
    key: 'getStringifiedJson',
    value: function getStringifiedJson(json) {
      return JSON.stringify(json, null, 4);
    }
  }, {
    key: 'generate',
    value: function generate(url, method, headers, param) {
      var requestOptions = {
        method: method,
        headers: headers
      };
      var codeImportsString = 'var fetchAction =  require(\'node-fetch\');' + _Format2.default.NEW_LINE;
      var urlString = 'var url = "' + url + '";' + _Format2.default.NEW_LINE;
      var bodyString = param ? 'var body = ' + this.getStringifiedJson(param) + ';' + _Format2.default.NEW_LINE : '';
      var requestOptionsString = 'var requestOptions = ' + this.getStringifiedJson(requestOptions) + ';' + _Format2.default.NEW_LINE;
      var addBodyString = param ? 'requestOptions.body = JSON.stringify(body);' + _Format2.default.NEW_LINE : '';
      var fetchCodeString = 'fetchAction(url, requestOptions)' + _Format2.default.NEXT_LINE + '.then(function(response) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'return response.json();' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.then(function(result) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(JSON.stringify(result));' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.catch(function(error) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(\'Request Failed:\' + error);' + _Format2.default.NEXT_LINE + '});';
      return codeImportsString + urlString + requestOptionsString + bodyString + addBodyString + fetchCodeString;
    }
  }, {
    key: 'generateFileUploadCode',
    value: function generateFileUploadCode(url, method, headers) {
      console.log('JS-FETCH -> FILE');
      if (method === 'GET') {
        return this.getDownloadFileCode(url, method, headers);
      } else if (method === 'DELETE') {
        return this.generate(url, method, headers, null);
      }
      return this.getUploadFileCode(url, method, headers);
    }
  }, {
    key: 'getUploadFileCode',
    value: function getUploadFileCode(url, method, headers) {
      return 'var fetchAction =  require(\'fetch\');' + _Format2.default.NEW_LINE + ('var url = "' + url + '";') + _Format2.default.NEW_LINE + '// This is the file we are going to upload, replace this with your file' + _Format2.default.NEXT_LINE + 'var file = \'\';' + _Format2.default.NEW_LINE + 'var requestOptions = {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + ('method: \'' + method + '\',') + _Format2.default.NEXT_LINE + _Format2.default.TAB + ('headers: ' + JSON.stringify(headers, null, 6).replace('}', _Format2.default.TAB + '}') + ',') + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'body: file' + _Format2.default.NEXT_LINE + '}' + _Format2.default.NEW_LINE + 'fetchAction(url, requestOptions)' + _Format2.default.NEXT_LINE + '.then(function(response) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'return response.json();' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.then(function(result) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(result);' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.catch(function(error) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(\'Request Failed:\' + error);' + _Format2.default.NEXT_LINE + '});';
    }
  }, {
    key: 'getDownloadFileCode',
    value: function getDownloadFileCode(url, method, headers) {
      var requestOptions = {
        method: method,
        headers: headers
      };
      return 'var fetchAction =  require(\'fetch\');' + _Format2.default.NEW_LINE + ('var url = "' + url + '";') + _Format2.default.NEW_LINE + ('var requestOptions = ' + this.getStringifiedJson(requestOptions) + ';') + _Format2.default.NEW_LINE + 'fetchAction(url, requestOptions)' + _Format2.default.NEXT_LINE + '.then(function(response) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'return response.blob();' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.then(function(blob) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(result);' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.catch(function(error) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(\'Request Failed:\' + error);' + _Format2.default.NEXT_LINE + '});';
    }
  }]);

  return JSNodeFetchCodeGenerator;
}();

exports.default = JSNodeFetchCodeGenerator;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */


var _Format = __webpack_require__(0);

var _Format2 = _interopRequireDefault(_Format);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSReactNativeCodeGenerator = function () {
  function JSReactNativeCodeGenerator() {
    _classCallCheck(this, JSReactNativeCodeGenerator);
  }

  _createClass(JSReactNativeCodeGenerator, [{
    key: 'getStringifiedJson',
    value: function getStringifiedJson(json) {
      return JSON.stringify(json, null, 4);
    }

    //If header contains Authorization then returns a comment with code to get from local storage

  }, {
    key: 'getAuthHeaderComment',
    value: function getAuthHeaderComment(headers) {
      if (headers.Authorization || headers.authorization) {
        return '// If you have the auth token saved in offline storage, obtain it in async componentDidMount' + _Format2.default.NEXT_LINE + '// var authToken = await AsyncStorage.getItem(\'HASURA_AUTH_TOKEN\');' + _Format2.default.NEXT_LINE + '// And use it in your headers' + _Format2.default.NEXT_LINE + '// headers = { "Authorization" : "Bearer " + authToken }' + _Format2.default.NEXT_LINE;
      }
      return '';
    }
  }, {
    key: 'generate',
    value: function generate(url, method, headers, param) {
      var handleAuthTokenComment = '';
      if ((0, _utils.shouldHandleAuthToken)(url)) {
        handleAuthTokenComment = _Format2.default.TAB + '// To save the auth token received to offline storage' + _Format2.default.NEXT_LINE + _Format2.default.TAB + '// var authToken = result.auth_token' + _Format2.default.NEXT_LINE + _Format2.default.TAB + '// AsyncStorage.setItem(\'HASURA_AUTH_TOKEN\', authToken);' + _Format2.default.NEXT_LINE;
      }

      var requestOptions = {
        method: method,
        headers: headers
      };

      // const codeImportsString = `var fetchAction =  require('fetch');` + Format.NEW_LINE;
      var urlString = 'var url = "' + url + '";' + _Format2.default.NEW_LINE;
      var bodyString = param ? 'var body = ' + this.getStringifiedJson(param) + ';' + _Format2.default.NEW_LINE : '';
      var requestOptionsString = 'var requestOptions = ' + this.getStringifiedJson(requestOptions) + ';' + _Format2.default.NEW_LINE;
      var addBodyString = param ? 'requestOptions.body = JSON.stringify(body);' + _Format2.default.NEW_LINE : '';
      var fetchCodeString = 'fetch(url, requestOptions)' + _Format2.default.NEXT_LINE + '.then(function(response) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'return response.json();' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.then(function(result) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(result);' + _Format2.default.NEXT_LINE + handleAuthTokenComment + '})' + _Format2.default.NEXT_LINE + '.catch(function(error) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(\'Request Failed:\' + error);' + _Format2.default.NEXT_LINE + '});';
      return urlString + this.getAuthHeaderComment(headers) + requestOptionsString + bodyString + addBodyString + fetchCodeString;
    }
  }, {
    key: 'generateFileUploadCode',
    value: function generateFileUploadCode(url, method, headers) {
      console.log('JS-FETCH -> FILE');
      if (method === 'GET') {
        return this.getDownloadFileCode(url, method, headers);
      } else if (method === 'DELETE') {
        return this.generate(url, method, headers, null);
      }
      return this.getUploadFileCode(url, method, headers);
    }
  }, {
    key: 'getUploadFileCode',
    value: function getUploadFileCode(url, method, headers) {
      return 'var fetchAction =  require(\'fetch\');' + _Format2.default.NEW_LINE + ('var url = "' + url + '";') + _Format2.default.NEW_LINE + '// This is the file we are going to upload, replace this with your file' + _Format2.default.NEXT_LINE + 'var file = \'\';' + _Format2.default.NEW_LINE + this.getAuthHeaderComment(headers) + 'var requestOptions = {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + ('method: \'' + method + '\',') + _Format2.default.NEXT_LINE + _Format2.default.TAB + ('headers: ' + JSON.stringify(headers, null, 6).replace('}', _Format2.default.TAB + '}') + ',') + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'body: file' + _Format2.default.NEXT_LINE + '}' + _Format2.default.NEW_LINE + 'fetchAction(url, requestOptions)' + _Format2.default.NEXT_LINE + '.then(function(response) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'return response.json();' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.then(function(result) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(result);' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.catch(function(error) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(\'Request Failed:\' + error);' + _Format2.default.NEXT_LINE + '});';
    }
  }, {
    key: 'getDownloadFileCode',
    value: function getDownloadFileCode(url, method, headers) {
      var requestOptions = {
        method: method,
        headers: headers
      };
      return 'var fetchAction =  require(\'fetch\');' + _Format2.default.NEW_LINE + ('var url = "' + url + '";') + _Format2.default.NEW_LINE + this.getAuthHeaderComment(headers) + ('var requestOptions = ' + this.getStringifiedJson(requestOptions) + ';') + _Format2.default.NEW_LINE + 'fetchAction(url, requestOptions)' + _Format2.default.NEXT_LINE + '.then(function(response) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'return response.blob();' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.then(function(blob) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(result);' + _Format2.default.NEXT_LINE + '})' + _Format2.default.NEXT_LINE + '.catch(function(error) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'console.log(\'Request Failed:\' + error);' + _Format2.default.NEXT_LINE + '});';
    }
  }]);

  return JSReactNativeCodeGenerator;
}();

exports.default = JSReactNativeCodeGenerator;
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable */
var CurlCodeGenerator = function () {
  function CurlCodeGenerator() {
    _classCallCheck(this, CurlCodeGenerator);
  }

  _createClass(CurlCodeGenerator, [{
    key: 'getStringifiedJson',
    value: function getStringifiedJson(json) {
      return JSON.stringify(json, null, 4);
    }
  }, {
    key: 'getCurlHeaders',
    value: function getCurlHeaders(headerJSON) {
      var string = "";
      for (var key in headerJSON) {
        string += ' -H "' + key + ': ' + headerJSON[key] + '"';
      }
      return string;
    }
  }, {
    key: 'generate',
    value: function generate(url, method, headers, param) {
      var urlString = '"' + url + '"';
      var requestpayload = param === null ? '' : ' -d \'' + this.getStringifiedJson(param) + '\' ';
      var headerString = headers === null ? '' : this.getCurlHeaders(headers);
      var request = 'curl -X ' + method + ' ' + headerString + ' ' + requestpayload + ' ' + urlString;
      return request;
    }
  }, {
    key: 'generateFileUploadCode',
    value: function generateFileUploadCode(url, method, headers) {
      if (method === 'DELETE') {
        return this.generate(url, method, headers, null);
      }
      var urlString = '"' + url + '"';
      var requestpayload = method === 'GET' ? '--output path/to/download/file' : ' --data-binary @path/to/file ';
      var headerString = headers === null ? '' : this.getCurlHeaders(headers);
      var request = 'curl -X ' + method + headerString + ' ' + requestpayload + ' ' + urlString;
      return request;
    }
  }, {
    key: 'getSelectedLanguage',
    value: function getSelectedLanguage() {
      return "text";
    }
  }]);

  return CurlCodeGenerator;
}();

exports.default = CurlCodeGenerator;
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */


var _Format = __webpack_require__(0);

var _Format2 = _interopRequireDefault(_Format);

var _Exceptions = __webpack_require__(1);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SwiftCodeGenerator = function () {
  function SwiftCodeGenerator(library) {
    _classCallCheck(this, SwiftCodeGenerator);

    this.library = library;
    this.shouldHandleAuth = false;
    if (this.library === SwiftCodeGenerator.LIBRARY.IOS_ALAMOFIRE) {
      this.shouldHandleAuth = true;
    }
  }

  _createClass(SwiftCodeGenerator, [{
    key: 'getCodeImports',
    value: function getCodeImports() {
      switch (this.library) {
        case SwiftCodeGenerator.LIBRARY.ALAMOFIRE:
          return 'import Foundation' + _Format2.default.NEXT_LINE + 'import Alamofire';
        case SwiftCodeGenerator.LIBRARY.IOS_ALAMOFIRE:
          return 'import Foundation' + _Format2.default.NEXT_LINE + 'import Alamofire';
        default:
          throw new _Exceptions.UnsupportedLibraryException(this.library + ' is not supported');
      }
    }
  }, {
    key: 'getSelectedLanguage',
    value: function getSelectedLanguage() {
      return 'swift';
    }
  }, {
    key: 'getMethodTypeString',
    value: function getMethodTypeString(method) {
      return '.' + method.toLowerCase();
    }
  }, {
    key: 'getStringifiedJson',
    value: function getStringifiedJson(json) {
      return JSON.stringify(json, null, 4).replace(/{/g, '[').replace(/}/g, ']');
    }
  }, {
    key: 'getAuthHeaderComment',
    value: function getAuthHeaderComment(headers) {
      if (this.shouldHandleAuth && (headers.Authorization || headers.authorization)) {
        return '// If you have the auth token saved in UserDefaults,' + _Format2.default.NEXT_LINE + '// let authToken = UserDefaults.standard.string(forKey: "HASURA_AUTH_TOKEN")' + _Format2.default.NEXT_LINE + '// Now you can set the header like so,' + _Format2.default.NEXT_LINE + '// let headers: HTTPHeaders? = [' + _Format2.default.NEXT_LINE + '// ' + _Format2.default.TAB + '"Authorization": "Bearer " + authToken' + _Format2.default.NEXT_LINE + '// ]' + _Format2.default.NEXT_LINE;
      }
      return '';
    }
  }, {
    key: 'getSaveAuthTokenComment',
    value: function getSaveAuthTokenComment(url, tabs) {
      if (this.shouldHandleAuth && (0, _utils.shouldHandleAuthToken)(url)) {
        return tabs + '// To save the auth token offline' + _Format2.default.NEXT_LINE + tabs + '// if let JSON = response.result.value {' + _Format2.default.NEXT_LINE + tabs + '// ' + _Format2.default.TAB + 'let json = JSON as! [String: Any]' + _Format2.default.NEXT_LINE + tabs + '// ' + _Format2.default.TAB + 'UserDefaults.standard.set(json["auth_token"], forKey: "HASURA_AUTH_TOKEN")' + _Format2.default.NEXT_LINE + tabs + '// }' + _Format2.default.NEXT_LINE;
      }
      return '';
    }
  }, {
    key: 'generate',
    value: function generate(url, method, headers, param) {
      var importHeaderString = this.getCodeImports() + _Format2.default.NEW_LINE;
      var urlString = 'let url = "' + url + '"' + _Format2.default.NEW_LINE;
      var headerString = 'let headers: HTTPHeaders? = ' + (headers === null ? 'nil' : '' + this.getStringifiedJson(headers)) + _Format2.default.NEW_LINE;
      var authHeaderComment = headers ? this.getAuthHeaderComment(headers) : '';
      var requestParamString = 'var requestParam: [String: Any]? = ' + (param === null ? 'nil' : '' + this.getStringifiedJson(param)) + _Format2.default.NEW_LINE;
      var requestString = 'Alamofire.request(url,' + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + ('method: ' + this.getMethodTypeString(method)) + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + 'headers: headers' + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + 'parameters: requestParam' + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + 'encoding: JSONEncoding.default' + ')' + _Format2.default.NEXT_LINE + '.responseJSON { response in ' + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + 'debugPrint(response)' + _Format2.default.NEXT_LINE + this.getSaveAuthTokenComment(url, _Format2.default.TAB + _Format2.default.TAB) + '}';
      return importHeaderString + urlString + authHeaderComment + headerString + requestParamString + requestString;
    }
  }, {
    key: 'getFileDownloadCode',
    value: function getFileDownloadCode(url, headers) {
      var headerString = 'let headers: HTTPHeaders? = ' + (headers === null ? 'nil' : '' + this.getStringifiedJson(headers));
      var authHeaderComment = headers ? this.getAuthHeaderComment(headers) : '';

      return 'import Foundation' + _Format2.default.NEXT_LINE + 'import Alamofire' + _Format2.default.NEW_LINE + ('let url = "' + url + '"') + _Format2.default.NEW_LINE + authHeaderComment + headerString + _Format2.default.NEW_LINE + 'let documentsPath = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true)[0]' + _Format2.default.NEXT_LINE + 'let documentsURL = URL(fileURLWithPath: documentsPath, isDirectory: true)' + _Format2.default.NEXT_LINE + 'let fileURL = documentsURL.appendingPathComponent(url)' + _Format2.default.NEW_LINE + '//Downloading file to this location will replace the previous file at this location' + _Format2.default.NEXT_LINE + 'let destination: DownloadRequest.DownloadFileDestination = { _, _ in' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'return (fileURL, [.removePreviousFile, .createIntermediateDirectories])' + _Format2.default.NEXT_LINE + '}' + _Format2.default.NEW_LINE + 'Alamofire.download(url, method: .get, headers: headers, to: destination)' + _Format2.default.NEXT_LINE + _Format2.default.TAB + '.responseData { (response: DownloadResponse<Data>) in' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'print(response.debugDescription)' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'switch (response.result) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'case .success(let data) :' + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + '//Handle Success' + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + 'break' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'case .failure(let error):' + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + '//Handle Failure' + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + 'break' + _Format2.default.NEXT_LINE + _Format2.default.TAB + '}' + _Format2.default.NEXT_LINE + '}';
    }
  }, {
    key: 'getFileUploadCode',
    value: function getFileUploadCode(url, headers) {
      var headerString = 'let headers: HTTPHeaders? = ' + (headers === null ? 'nil' : '' + this.getStringifiedJson(headers));
      var authHeaderComment = headers ? this.getAuthHeaderComment(headers) : '';

      return 'import Foundation' + _Format2.default.NEXT_LINE + 'import Alamofire' + _Format2.default.NEW_LINE + ('let url = "' + url + '"') + _Format2.default.NEW_LINE + authHeaderComment + headerString + _Format2.default.NEW_LINE + '//Uploading an empty file, replace the value of data with your file' + _Format2.default.NEXT_LINE + 'let data = Data()' + _Format2.default.NEW_LINE + 'Alamofire.upload(data, to: url, method: .post, headers: headers)' + _Format2.default.NEXT_LINE + _Format2.default.TAB + '.responseJSON { (response: DataResponse<Any>) in' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'print(response.debugDescription)' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'switch (response.result) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'case .success(let data) :' + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + '//Handle Success' + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + 'break' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'case .failure(let error):' + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + '//Handle Error' + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + 'break' + _Format2.default.NEXT_LINE + _Format2.default.TAB + '}' + _Format2.default.NEXT_LINE + '}';
    }
  }, {
    key: 'generateFileUploadCode',
    value: function generateFileUploadCode(url, method, headers) {
      if (method === 'GET') {
        return this.getFileDownloadCode(url, headers);
      } else if (method === 'DELETE') {
        return this.generate(url, method, headers, null);
      }
      return this.getFileUploadCode(url, headers);
    }
  }]);

  return SwiftCodeGenerator;
}();

exports.default = SwiftCodeGenerator;


SwiftCodeGenerator.LIBRARY = {
  ALAMOFIRE: 'alamofire',
  IOS_ALAMOFIRE: 'iOS-alamofire'
};
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */

var _Format = __webpack_require__(0);

var _Format2 = _interopRequireDefault(_Format);

var _Exceptions = __webpack_require__(1);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JavaCodeGenerator = function () {
  function JavaCodeGenerator(library) {
    _classCallCheck(this, JavaCodeGenerator);

    this.shouldHandleAuth = false;
    switch (library) {
      case JavaCodeGenerator.LIBRARY.OKHTTP:
        break;
      case JavaCodeGenerator.LIBRARY.ANDROID:
        this.shouldHandleAuth = true;
        break;
      default:
        throw new _Exceptions.UnsupportedLibraryException(this.library + ' is not supported');
    }
  }

  _createClass(JavaCodeGenerator, [{
    key: 'getSelectedLanguage',
    value: function getSelectedLanguage() {
      return 'java';
    }
  }, {
    key: 'getMethodTypeString',
    value: function getMethodTypeString(method) {
      return '.' + method.toLowerCase();
    }
  }, {
    key: 'getContentType',
    value: function getContentType(headers) {
      var newHeaders = {};
      for (var key in headers) {
        if (key.replace('-', '').toLowerCase() === 'contenttype') {
          return headers[key];
        }
      }
      return null;
    }
  }, {
    key: 'getJavaRequestHeaders',
    value: function getJavaRequestHeaders(headerJSON, numberOfTabs) {
      var string = '';
      for (var key in headerJSON) {
        if (key.replace('-', '').toLowerCase() !== 'contenttype') {
          string += this.getTabs(numberOfTabs) + ('.addHeader("' + key + '", "' + headerJSON[key] + '")') + _Format2.default.NEXT_LINE;
        }
      }
      return string;
    }
  }, {
    key: 'getTabs',
    value: function getTabs(tabCount) {
      var tabs = '';
      for (var i = 0; i < tabCount; i++) {
        tabs += _Format2.default.TAB;
      }
      return tabs;
    }

    //If header contains Authorization then returns a comment with code to get from shared prefs

  }, {
    key: 'getAuthHeaderComment',
    value: function getAuthHeaderComment(headerJSON, tabs) {
      if (this.shouldHandleAuth) {
        for (var key in headerJSON) {
          if (key.toLowerCase() === 'authorization') {
            return tabs + '// If you have the auth token saved in shared prefs' + _Format2.default.NEXT_LINE + tabs + '// SharedPreferences prefs = context.getSharedPreferences("PREFS_NAME", Context.MODE_PRIVATE);' + _Format2.default.NEXT_LINE + tabs + '// String authToken = prefs.getString("HASURA_AUTH_TOKEN", null);' + _Format2.default.NEXT_LINE + tabs + '// You can now use this auth token in your header like so,' + _Format2.default.NEXT_LINE + tabs + ('// .addHeader(' + key + ', "Bearer " + authToken);') + _Format2.default.NEXT_LINE;
          }
        }
      }
      return '';
    }

    //For java Android returns a comment to save authtoken from response to SharedPrefs

  }, {
    key: 'getSaveAuthTokenComment',
    value: function getSaveAuthTokenComment(url, t) {
      var tabs = t + _Format2.default.TAB;
      if (this.shouldHandleAuth && (0, _utils.shouldHandleAuthToken)(url)) {
        return tabs + '// To save the auth token offline ' + _Format2.default.NEXT_LINE + tabs + '// String jsonString = responses.body().string();' + _Format2.default.NEXT_LINE + tabs + '// JSONObject jsonObject = new JSONObject(jsonString);' + _Format2.default.NEXT_LINE + tabs + '// String authToken = jsonObject.getString("auth_token");' + _Format2.default.NEXT_LINE + tabs + '// SharedPreferences settings = context.getSharedPreferences("PREFS_NAME", Context.MODE_PRIVATE);' + _Format2.default.NEXT_LINE + tabs + '// SharedPreferences.Editor editor = settings.edit();' + _Format2.default.NEXT_LINE + tabs + '// editor.putString("HASURA_AUTH_TOKEN", authToken);' + _Format2.default.NEXT_LINE + tabs + '// editor.commit();' + _Format2.default.NEXT_LINE;
      }
      return '';
    }
  }, {
    key: 'getResponseFunction',
    value: function getResponseFunction(url, numberOfTabs) {
      var tabs = this.getTabs(numberOfTabs);
      var oneLessTab = this.getTabs(numberOfTabs - 1);
      return 'client.newCall(request).enqueue(new Callback() {' + _Format2.default.NEXT_LINE + tabs + '@Override' + _Format2.default.NEXT_LINE + tabs + 'public void onFailure(okhttp3.Call call, IOException e) {' + _Format2.default.NEXT_LINE + tabs + _Format2.default.TAB + '//Handle failure' + _Format2.default.NEXT_LINE + tabs + '}' + _Format2.default.NEW_LINE + tabs + '@Override' + _Format2.default.NEXT_LINE + tabs + 'public void onResponse(okhttp3.Call call, Response response) throws IOException {' + _Format2.default.NEXT_LINE + tabs + _Format2.default.TAB + '// Handle success' + _Format2.default.NEXT_LINE + this.getSaveAuthTokenComment(url, tabs) + tabs + '}' + _Format2.default.NEXT_LINE + oneLessTab + '});';
    }
  }, {
    key: 'getSyncResponseFunction',
    value: function getSyncResponseFunction(numberOfTabs) {
      var tabs = this.getTabs(numberOfTabs);
      var oneLessTab = this.getTabs(numberOfTabs - 1);
      return '// To execute the call synchronously' + _Format2.default.NEXT_LINE + oneLessTab + '// try {' + _Format2.default.NEXT_LINE + oneLessTab + '// ' + _Format2.default.TAB + 'Response response = client.newCall(request).execute();' + _Format2.default.NEXT_LINE + oneLessTab + '// ' + _Format2.default.TAB + 'String responseString = response.body().string(); // handle response' + _Format2.default.NEXT_LINE + oneLessTab + '// } catch (IOException e) { ' + _Format2.default.NEXT_LINE + oneLessTab + '// ' + _Format2.default.TAB + 'e.printStackTrace(); // handle error' + _Format2.default.NEXT_LINE + oneLessTab + '// }';
    }
  }, {
    key: 'getFileUploadCode',
    value: function getFileUploadCode(url, headers) {
      var requestHeaders = headers === null ? '' : this.getJavaRequestHeaders(headers, 1);
      var authHeaderComment = headers ? this.getAuthHeaderComment(headers, '') : '';
      var mediaType = this.getContentType(headers) ? 'MediaType mediaType = MediaType.parse("' + this.getContentType(headers) + '");' + _Format2.default.NEW_LINE : '// Replace "image/*" with the required Content-Type' + _Format2.default.NEXT_LINE + 'MediaType mediaType = MediaType.parse("image/*");' + _Format2.default.NEW_LINE;
      return 'String url = "' + url + '";' + _Format2.default.NEW_LINE + '// The file to be uploaded is represented as a byte array, replace the file variable with your upload data' + _Format2.default.NEXT_LINE + 'byte[] file = "File to be uploaded".getBytes();' + _Format2.default.NEW_LINE + 'OkHttpClient client = new OkHttpClient();' + _Format2.default.NEW_LINE + mediaType + 'RequestBody body = RequestBody.create(mediaType, file);' + _Format2.default.NEW_LINE + authHeaderComment + 'Request request = new Request.builder()' + _Format2.default.NEXT_LINE + _Format2.default.TAB + '.url(url)' + _Format2.default.NEXT_LINE + _Format2.default.TAB + '.post(body)' + _Format2.default.NEXT_LINE + requestHeaders + _Format2.default.TAB + 'build();' + _Format2.default.NEW_LINE + this.getResponseFunction(url, 1) + _Format2.default.NEW_LINE + this.getSyncResponseFunction(1);
    }
  }, {
    key: 'getFileDownloadCode',
    value: function getFileDownloadCode(url, headers) {
      var requestHeaders = headers === null ? '' : this.getJavaRequestHeaders(headers, 1);
      var authHeaderComment = headers ? this.getAuthHeaderComment(headers, '') : '';
      return 'String url = "' + url + '";' + _Format2.default.NEW_LINE + 'OkHttpClient client = new OkHttpClient();' + _Format2.default.NEW_LINE + authHeaderComment + 'Request request = new Request.builder()' + _Format2.default.NEXT_LINE + _Format2.default.TAB + '.url(url)' + _Format2.default.NEXT_LINE + requestHeaders + _Format2.default.TAB + 'build();' + _Format2.default.NEW_LINE + this.getResponseFunction(url, 1) + _Format2.default.NEW_LINE + this.getSyncResponseFunction(1);
    }
  }, {
    key: 'generateFileUploadCode',
    value: function generateFileUploadCode(url, method, headers) {
      if (method === 'GET') {
        return this.getFileDownloadCode(url, headers);
      } else if (method === 'DELETE') {
        return this.generate(url, method, headers, null);
      }
      return this.getFileUploadCode(url, headers);
    }
  }, {
    key: 'generate',
    value: function generate(url, method, headers, param) {
      var urlString = 'String url = "' + url + '";';
      var httpInitString = 'OkHttpClient client = new OkHttpClient();';
      var mediaTypeString = 'MediaType mediaType = MediaType.parse("application/json");';

      var authHeaderComment = headers ? this.getAuthHeaderComment(headers, _Format2.default.TAB) : '';

      var requestBodyString = param ? 'RequestBody body = RequestBody.create(mediaType, jsonObject.toString());' : '';
      var requestMethodString = this.getMethodTypeString(method) + '(' + (param === null ? '' : 'body') + ')';
      var requestHeaders = headers === null ? '' : this.getJavaRequestHeaders(headers, 2);
      var requestString = 'Request request = new Request.Builder()' + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + '.url(url)' + _Format2.default.NEXT_LINE + _Format2.default.TAB + _Format2.default.TAB + requestMethodString + _Format2.default.NEXT_LINE + requestHeaders + _Format2.default.TAB + _Format2.default.TAB + '.build();';

      return urlString + _Format2.default.NEW_LINE + 'try {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + httpInitString + _Format2.default.NEW_LINE + _Format2.default.TAB + mediaTypeString + _Format2.default.NEXT_LINE + (param ? _Format2.default.TAB + this.getJavaRepresentationOfJSON(param, 1) + _Format2.default.NEW_LINE : '') + _Format2.default.TAB + requestBodyString + _Format2.default.NEXT_LINE + authHeaderComment + _Format2.default.TAB + requestString + _Format2.default.NEW_LINE + _Format2.default.TAB + this.getResponseFunction(url, 2) + _Format2.default.NEW_LINE + _Format2.default.TAB + this.getSyncResponseFunction(2) + _Format2.default.NEW_LINE + '} catch (JSONException e) {' + _Format2.default.NEXT_LINE + _Format2.default.TAB + 'e.printStackTrace()' + _Format2.default.SEMICOLON + _Format2.default.NEXT_LINE + '}';
    }
  }, {
    key: 'getJavaRepresentationOfJSON',
    value: function getJavaRepresentationOfJSON(json, tabcount) {
      var returnString = 'JSONObject jsonObject = new JSONObject()';
      for (var key in json) {
        returnString += _Format2.default.NEXT_LINE + this.getTabs(tabcount) + ('.put("' + key + '", ');
        var value = json[key];
        if (this.isArray(value)) {
          returnString += this.iterateArray(value, tabcount + 1);
        }if (this.isObject(value)) {
          returnString += this.iterateObject(value, tabcount + 1);
        } else {
          returnString += this.getValue(value);
        }
        returnString += ')';
      }
      returnString += ';';
      return returnString;
    }
  }, {
    key: 'iterateArray',
    value: function iterateArray(jsonArray, tabCount) {
      var javaString = 'new JSONArray()';
      for (var i = 0; i < jsonArray.length; i++) {
        var json = jsonArray[i];
        javaString += _Format2.default.NEXT_LINE + this.getTabs(tabCount) + '.put(';
        if (this.isObject(json)) {
          javaString += this.iterateObject(json, tabCount + 1);
        } else if (this.isArray(json)) {
          javaString += this.iterateArray(json, tabCount + 1);
        } else {
          javaString += this.getValue(json);
        }
        javaString += ')';
      }
      return javaString + _Format2.default.NEXT_LINE + this.getTabs(tabCount - 1);
    }
  }, {
    key: 'iterateObject',
    value: function iterateObject(jsonObject, tabCount) {
      var javaString = 'new JSONObject()';
      for (var key in jsonObject) {
        javaString += _Format2.default.NEXT_LINE + this.getTabs(tabCount) + ('.put("' + key + '", ');
        var value = jsonObject[key];
        if (this.isObject(value)) {
          javaString += this.iterateObject(value, tabCount + 1);
        } else if (this.isArray(value)) {
          javaString += this.iterateArray(value, tabCount + 1);
        } else {
          javaString += this.getValue(value);
        }
        javaString += ')';
      }
      return javaString + _Format2.default.NEXT_LINE + this.getTabs(tabCount - 1);
    }
  }, {
    key: 'getValue',
    value: function getValue(value) {
      if (value === null) {
        return null;
      }
      if (value.constructor == String) {
        return '"' + value + '"';
      }
      return value;
    }
  }, {
    key: 'isArray',
    value: function isArray(element) {
      if (element === null) return false;
      return element.constructor == Array;
    }
  }, {
    key: 'isObject',
    value: function isObject(element) {
      if (element === null) {
        return false;
      }
      return element.constructor == Object;
    }
  }]);

  return JavaCodeGenerator;
}();

exports.default = JavaCodeGenerator;


JavaCodeGenerator.LIBRARY = {
  OKHTTP: 'okhttp',
  ANDROID: 'android'
};
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=api-codegen.js.map