/* eslint-disable */

import Python27CodeGenerator from './Python27CodeGenerator';
import Python3CodeGenerator from './Python3CodeGenerator';
import JavascriptCodeGenerator from './JavascriptCodeGenerator';
import CurlCodeGenerator from './CurlCodeGenerator';
import SwiftCodeGenerator from './SwiftCodeGenerator';
import JavaCodeGenerator from './JavaCodeGenerator';
import {InvalidArgumentException, UnsupportedLibraryException} from './Exceptions';

export default class CodeGenerator {

  constructor(codeGenType) {
    switch (codeGenType) {
      case CodeGenerator.TYPES.PYTHON_2_7_REQUEST :
        this.generator = new Python27CodeGenerator(Python27CodeGenerator.LIBRARY.REQUESTS);
        break;
      case CodeGenerator.TYPES.PYTHON_3_REQUEST :
        this.generator = new Python3CodeGenerator(Python3CodeGenerator.LIBRARY.REQUESTS);
        break;
      case CodeGenerator.TYPES.NODE_FETCH:
        this.generator = new JavascriptCodeGenerator(JavascriptCodeGenerator.LIBRARY.NODE_FETCH);
        break;
      case CodeGenerator.TYPES.JAVASCRIPT_JQUERY:
        this.generator = new JavascriptCodeGenerator(JavascriptCodeGenerator.LIBRARY.JQUERY);
        break;
      case CodeGenerator.TYPES.JAVASCRIPT_FETCH:
        this.generator = new JavascriptCodeGenerator(JavascriptCodeGenerator.LIBRARY.FETCH);
        break;
      case CodeGenerator.TYPES.JAVASCRIPT_REACT_NATIVE:
        this.generator = new JavascriptCodeGenerator(JavascriptCodeGenerator.LIBRARY.REACT_NATIVE);
        break;
      case CodeGenerator.TYPES.CURL:
        this.generator = new CurlCodeGenerator();
        break;
      case CodeGenerator.TYPES.SWIFT_ALAMOFIRE:
        this.generator = new SwiftCodeGenerator(SwiftCodeGenerator.LIBRARY.ALAMOFIRE);
        break;
      case CodeGenerator.TYPES.SWIFT_IOS_ALAMOFIRE:
        this.generator = new SwiftCodeGenerator(SwiftCodeGenerator.LIBRARY.IOS_ALAMOFIRE);
        break;
      case CodeGenerator.TYPES.JAVA_OKHTTP:
        this.generator = new JavaCodeGenerator(JavaCodeGenerator.LIBRARY.OKHTTP);
        break;
      case CodeGenerator.TYPES.JAVA_ANDROID:
        this.generator = new JavaCodeGenerator(JavaCodeGenerator.LIBRARY.ANDROID);
        break;
      default: throw new UnsupportedLibraryException(`${codeGenType} is not supported`);
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
  generate(requestOptions) {
    if (this.verifyRequestOptions(requestOptions)) {
      const {url, method, headers, param, type} = requestOptions;
      return type === 'file' ?
        this.generator.generateFileUploadCode(url, method, headers) :
        this.generator.generate(url, method, headers, param ? JSON.parse(param) : null);
    }
  }

  getSelectedLanguage() {
    return this.generator.getSelectedLanguage();
  }

  // **es-lint ignore**//
  // Checks whether the request options sent are valid/supported/complete, if not, throws an exception
  verifyRequestOptions(requestOptions) {
    if (!requestOptions.url) {
      throw new InvalidArgumentException("No value for url provided");
    } else if (!requestOptions.url.constructor == String) {
      throw new InvalidArgumentException("Url should be string");
    }
    if (!requestOptions.method) {
      throw new InvalidArgumentException("No value for method provided");
    } else if (requestOptions.method === CodeGenerator.REQUEST_METHODS.GET) {
      return true;
    } else if (!(requestOptions.method === CodeGenerator.REQUEST_METHODS.GET ||
      requestOptions.method === CodeGenerator.REQUEST_METHODS.POST ||
      requestOptions.method === CodeGenerator.REQUEST_METHODS.PUT ||
      requestOptions.method === CodeGenerator.REQUEST_METHODS.DELETE ||
      requestOptions.method === CodeGenerator.REQUEST_METHODS.PATCH)) {
        throw new InvalidArgumentException("Method should be of type CodeGenerator.REQUEST_METHODS");
      }
      return true;
    }

}

// add your new library here
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
