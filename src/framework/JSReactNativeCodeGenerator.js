/* eslint-disable */
import Format from './Format';
import {shouldHandleAuthToken} from './utils';

export default class JSReactNativeCodeGenerator {

  getStringifiedJson(json) {
    return JSON.stringify(json, null, 4);
  }

  //If header contains Authorization then returns a comment with code to get from local storage
  getAuthHeaderComment(headers) {
    if (headers.Authorization || headers.authorization) {
      return `// If you have the auth token saved in offline storage, obtain it in async componentDidMount` + Format.NEXT_LINE +
      `// var authToken = await AsyncStorage.getItem('HASURA_AUTH_TOKEN');` + Format.NEXT_LINE +
      `// And use it in your headers` + Format.NEXT_LINE +
      `// headers = { "Authorization" : "Bearer " + authToken }` + Format.NEXT_LINE;
    }
    return '';
  }

  generate(url, method, headers, param) {
    var handleAuthTokenComment = '';
    if (shouldHandleAuthToken(url)) {
      handleAuthTokenComment = Format.TAB + `// To save the auth token received to offline storage` + Format.NEXT_LINE +
      Format.TAB + `// var authToken = result.auth_token` + Format.NEXT_LINE +
      Format.TAB +`// AsyncStorage.setItem('HASURA_AUTH_TOKEN', authToken);` + Format.NEXT_LINE;      
    }

    const requestOptions = {
      method: method,
      headers: headers
    };

    // const codeImportsString = `var fetchAction =  require('fetch');` + Format.NEW_LINE;
    const urlString = `var url = "${url}";` + Format.NEW_LINE;
    const bodyString = param ? `var body = ${this.getStringifiedJson(param)};` + Format.NEW_LINE : '';
    const requestOptionsString = `var requestOptions = ${this.getStringifiedJson(requestOptions)};` + Format.NEW_LINE;
    const addBodyString = param ? `requestOptions.body = JSON.stringify(body);` + Format.NEW_LINE : '';
    const fetchCodeString = `fetch(url, requestOptions)` + Format.NEXT_LINE +
      `.then(function(response) {` + Format.NEXT_LINE +
      Format.TAB + `return response.json();` + Format.NEXT_LINE +
      `})` + Format.NEXT_LINE +
      `.then(function(result) {` + Format.NEXT_LINE +
      Format.TAB + `console.log(result);` + Format.NEXT_LINE + handleAuthTokenComment +
      `})` + Format.NEXT_LINE +
      `.catch(function(error) {` + Format.NEXT_LINE +
      Format.TAB + `console.log('Request Failed:' + error);` + Format.NEXT_LINE +
      `});`;
    return urlString +
      this.getAuthHeaderComment(headers) +
      requestOptionsString +
      bodyString +
      addBodyString +
      fetchCodeString;
  }

  generateFileUploadCode(url, method, headers) {
    console.log('JS-FETCH -> FILE');
    if (method === 'GET') {
      return this.getDownloadFileCode(url, method, headers);
    } else if (method === 'DELETE') {
      return this.generate(url, method, headers, null);
    }
    return this.getUploadFileCode(url, method, headers);
  }

  getUploadFileCode(url, method, headers) {
    return `var fetchAction =  require('fetch');` + Format.NEW_LINE +
    `var url = "${url}";` + Format.NEW_LINE +
    `// This is the file we are going to upload, replace this with your file` + Format.NEXT_LINE +
    `var file = '';` + Format.NEW_LINE + this.getAuthHeaderComment(headers) +
    `var requestOptions = {` + Format.NEXT_LINE +
    Format.TAB + `method: '${method}',` + Format.NEXT_LINE +
    Format.TAB + `headers: ${JSON.stringify(headers, null, 6).replace('}', Format.TAB + '}')},` + Format.NEXT_LINE +
    Format.TAB + `body: file` + Format.NEXT_LINE +
    `}` + Format.NEW_LINE +
    `fetchAction(url, requestOptions)` + Format.NEXT_LINE +
    `.then(function(response) {` + Format.NEXT_LINE +
    Format.TAB + `return response.json();` + Format.NEXT_LINE +
    `})` + Format.NEXT_LINE +
    `.then(function(result) {` + Format.NEXT_LINE +
    Format.TAB + `console.log(result);` + Format.NEXT_LINE +
    `})` + Format.NEXT_LINE +
    `.catch(function(error) {` + Format.NEXT_LINE +
    Format.TAB + `console.log('Request Failed:' + error);` + Format.NEXT_LINE +
    `});`;
  }

  getDownloadFileCode(url, method, headers) {
    const requestOptions = {
      method: method,
      headers: headers
    };
    return `var fetchAction =  require('fetch');` + Format.NEW_LINE +
    `var url = "${url}";` + Format.NEW_LINE + this.getAuthHeaderComment(headers) +
    `var requestOptions = ${this.getStringifiedJson(requestOptions)};` + Format.NEW_LINE +
    `fetchAction(url, requestOptions)` + Format.NEXT_LINE +
    `.then(function(response) {` + Format.NEXT_LINE +
    Format.TAB + `return response.blob();` + Format.NEXT_LINE +
    `})` + Format.NEXT_LINE +
    `.then(function(blob) {` + Format.NEXT_LINE +
    Format.TAB + `console.log(result);` + Format.NEXT_LINE +
    `})` + Format.NEXT_LINE +
    `.catch(function(error) {` + Format.NEXT_LINE +
    Format.TAB + `console.log('Request Failed:' + error);` + Format.NEXT_LINE +
    `});`;
  }
}
