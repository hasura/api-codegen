/* eslint-disable */

import Format from './Format';
import {shouldHandleAuthToken} from './utils';

export default class JSJqueryCodeGenerator {

  getStringifiedJson(json, indentation) {
    return JSON.stringify(json, null, indentation).replace(/}([^}]*)$/, '\t}' + '$1');
  }

  //If header contains Authorization then returns a comment with code to get from local storage
  getAuthHeaderComment(headers) {
    if (headers.Authorization || headers.authorization) {
      return `// If you have the auth token saved in offline storage` + Format.NEXT_LINE +
      `// var authToken = window.localStorage.getItem('HASURA_AUTH_TOKEN');` + Format.NEXT_LINE +
      `// headers = { "Authorization" : "Bearer " + authToken }` + Format.NEXT_LINE;
    }
    return '';
  }

  getHandleAuthResponseComment(url, tabs) {
    if (shouldHandleAuthToken(url)) {
      return tabs + `// To save the auth token received to offline storage` + Format.NEXT_LINE +
      tabs + `// ` + `var authToken = result.auth_token` + Format.NEXT_LINE +
      tabs + `// ` + `window.localStorage.setItem('HASURA_AUTH_TOKEN', authToken);` + Format.NEXT_LINE;
    }
    return '';
  }

  getContentType(headers) {
    var newHeaders = {};
    for (var key in headers) {
      if (key.replace('-', '').toLowerCase() === 'contenttype') {
        return headers[key];
      }
    }
    return null;
  }

  getHeaders(headers) {
    var newHeaders = {};
    for (var key in headers) {
      if (key.replace('-', '').toLowerCase() !== 'contenttype') {
        newHeaders[key] = headers[key];
      }
    }
    return Object.keys(newHeaders).length ? newHeaders : null;
  }

  generate(url, method, headers, param) {
    var urlString = `url: "${url}",`;
    var contentTypeString = this.getContentType(headers) ? (Format.TAB + `contentType: "${this.getContentType(headers)}",` + Format.NEXT_LINE) : ``;
    var headerString = this.getHeaders(headers) ? (Format.TAB + `headers: ${this.getStringifiedJson(this.getHeaders(headers), 6)},` + Format.NEXT_LINE) : ``;
    var dataString = `data: JSON.stringify(${this.getStringifiedJson(param, 6)}),`;
    var typeString = `type: "${method}",`;
    var responseDataTypeString = `dataType: "json"`;

    return this.getAuthHeaderComment(headers) +
      `$.ajax({` + Format.NEXT_LINE +
      Format.TAB + urlString + Format.NEXT_LINE +
      contentTypeString +
      headerString +
      Format.TAB + dataString + Format.NEXT_LINE +
      Format.TAB + typeString + Format.NEXT_LINE +
      Format.TAB + responseDataTypeString + Format.NEXT_LINE +
      `}).done(function(json) {` + Format.NEXT_LINE +
      Format.TAB + `// Handle Response` + Format.NEXT_LINE +
      this.getHandleAuthResponseComment(url, Format.TAB) +
      `}).fail(function(xhr, status, errorThrown) {` + Format.NEXT_LINE +
      Format.TAB + `console.log("Error: " + errorThrown);` + Format.NEXT_LINE +
      Format.TAB + `console.log("Status: " + status);` + Format.NEXT_LINE +
      Format.TAB + `console.dir(xhr);` + Format.NEXT_LINE +
      `});`;
  }

  getUploadFileCode(url, headers) {
    var urlString = `url: "${url}",`;
    var contentTypeString = this.getContentType(headers) ? (Format.TAB + `contentType: "${this.getContentType(headers)}",` + Format.NEXT_LINE) : ``;
    var headerString = this.getHeaders(headers) ? (Format.TAB + `headers: ${this.getStringifiedJson(this.getHeaders(headers))},` + Format.NEXT_LINE) : ``;
    var dataString = `data: file,`;
    var typeString = `type: "POST",`;

    return `// This is the file we are going to upload, replace this with your file` + Format.NEXT_LINE +
      `var file = ''` + Format.NEW_LINE +
      this.getAuthHeaderComment(headers) +
      `$.ajax({` + Format.NEXT_LINE +
      Format.TAB + urlString + Format.NEXT_LINE +
      contentTypeString +
      headerString +
      Format.TAB + dataString + Format.NEXT_LINE +
      Format.TAB + typeString + Format.NEXT_LINE +
      `}).done(function(json) {` + Format.NEXT_LINE +
      Format.TAB + `//Handle Response` + Format.NEXT_LINE +
      `}).fail(function(xhr, status, errorThrown) {` + Format.NEXT_LINE +
      Format.TAB + `console.log("Error: " + errorThrown);` + Format.NEXT_LINE +
      Format.TAB + `console.log("Status: " + status);` + Format.NEXT_LINE +
      Format.TAB + `console.dir(xhr);` + Format.NEXT_LINE +
      `});`;
  }

  getDownloadFileCode(url, headers) {
    return "//JQuery does not support blob types yet.";
  }

  generateFileUploadCode(url, method, headers) {
    if (method === 'GET') {
      return this.getDownloadFileCode(url, headers);
    } else if (method === 'DELETE') {
      return this.generate(url, method, headers, null);
    } else {
      return this.getUploadFileCode(url, headers);
    }
  }
}
