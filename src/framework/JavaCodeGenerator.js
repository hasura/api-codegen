/* eslint-disable */

import Format from './Format';
import {UnsupportedLibraryException} from './Exceptions';
import {shouldHandleAuthToken} from './utils';

export default class JavaCodeGenerator {

  constructor(library) {
    this.shouldHandleAuth = false;
    switch (library) {
      case JavaCodeGenerator.LIBRARY.OKHTTP:
        break;
      case JavaCodeGenerator.LIBRARY.ANDROID:
        this.shouldHandleAuth = true;
        break;
      default: throw new UnsupportedLibraryException(`${this.library} is not supported`);
    }
  }

  getSelectedLanguage() {
    return `java`;
  }

  getMethodTypeString(method) {
    return `.${method.toLowerCase()}`;
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

  getJavaRequestHeaders(headerJSON, numberOfTabs) {
    let string = '';
    for (const key in headerJSON) {
      if (key.replace('-', '').toLowerCase() !== 'contenttype') {
        string += this.getTabs(numberOfTabs) + `.addHeader("${key}", "${headerJSON[key]}")` + Format.NEXT_LINE;
      }
    }
    return string;
  }

  getTabs(tabCount) {
    let tabs = ``;
    for (let i = 0; i < tabCount; i++) {
      tabs += Format.TAB;
    }
    return tabs;
  }

  //If header contains Authorization then returns a comment with code to get from shared prefs
  getAuthHeaderComment(headerJSON, tabs) {
    if (this.shouldHandleAuth) {
      for (const key in headerJSON) {
        if (key.toLowerCase() === 'authorization') {
          return tabs + `// If you have the auth token saved in shared prefs` + Format.NEXT_LINE +
          tabs + `// SharedPreferences prefs = context.getSharedPreferences("PREFS_NAME", Context.MODE_PRIVATE);` + Format.NEXT_LINE +
          tabs + `// String authToken = prefs.getString("HASURA_AUTH_TOKEN", null);` + Format.NEXT_LINE +
          tabs + `// You can now use this auth token in your header like so,` + Format.NEXT_LINE +
          tabs + `// .addHeader(${key}, "Bearer " + authToken);` + Format.NEXT_LINE;
        }
      }
    }
    return '';
  }

  //For java Android returns a comment to save authtoken from response to SharedPrefs
  getSaveAuthTokenComment(url, t) {
    const tabs = t + Format.TAB;
    if (this.shouldHandleAuth && shouldHandleAuthToken(url)) {
      return tabs + `// To save the auth token offline ` + Format.NEXT_LINE +
      tabs + `// String jsonString = responses.body().string();` + Format.NEXT_LINE +
      tabs + `// JSONObject jsonObject = new JSONObject(jsonString);` + Format.NEXT_LINE +
      tabs + `// String authToken = jsonObject.getString("auth_token");` + Format.NEXT_LINE +
      tabs + `// SharedPreferences settings = context.getSharedPreferences("PREFS_NAME", Context.MODE_PRIVATE);` + Format.NEXT_LINE +
      tabs + `// SharedPreferences.Editor editor = settings.edit();` + Format.NEXT_LINE +
      tabs + `// editor.putString("HASURA_AUTH_TOKEN", authToken);` + Format.NEXT_LINE +
      tabs + `// editor.commit();` + Format.NEXT_LINE;
    }
    return '';
  }

  getResponseFunction(url, numberOfTabs) {
    const tabs = this.getTabs(numberOfTabs);
    const oneLessTab = this.getTabs(numberOfTabs-1);
    return `client.newCall(request).enqueue(new Callback() {` + Format.NEXT_LINE +
      tabs + '@Override' + Format.NEXT_LINE +
      tabs + 'public void onFailure(okhttp3.Call call, IOException e) {' + Format.NEXT_LINE +
      tabs + Format.TAB + '//Handle failure' + Format.NEXT_LINE +
      tabs + '}' + Format.NEW_LINE +
      tabs + '@Override' + Format.NEXT_LINE +
      tabs + 'public void onResponse(okhttp3.Call call, Response response) throws IOException {' + Format.NEXT_LINE +
      tabs + Format.TAB + '// Handle success' + Format.NEXT_LINE + this.getSaveAuthTokenComment(url, tabs) +
      tabs + '}' + Format.NEXT_LINE +
      oneLessTab + `});`;
  }

  getSyncResponseFunction(numberOfTabs) {
    const tabs = this.getTabs(numberOfTabs);
    const oneLessTab = this.getTabs(numberOfTabs-1);
    return `// To execute the call synchronously` + Format.NEXT_LINE +
    oneLessTab + `// try {` + Format.NEXT_LINE +
    oneLessTab + `// ` + Format.TAB + `Response response = client.newCall(request).execute();` + Format.NEXT_LINE +
    oneLessTab + `// ` + Format.TAB + `String responseString = response.body().string(); // handle response` + Format.NEXT_LINE +
    oneLessTab + `// } catch (IOException e) { ` + Format.NEXT_LINE +
    oneLessTab + `// ` + Format.TAB + `e.printStackTrace(); // handle error` + Format.NEXT_LINE +
    oneLessTab + `// }`;
  }

  getFileUploadCode(url, headers) {
    const requestHeaders = headers === null ? '' : this.getJavaRequestHeaders(headers, 1);
    const authHeaderComment = headers ? this.getAuthHeaderComment(headers, '') : '';
    const mediaType = this.getContentType(headers) ? (`MediaType mediaType = MediaType.parse("${this.getContentType(headers)}");` + Format.NEW_LINE) :
    (`// Replace "image/*" with the required Content-Type` + Format.NEXT_LINE + `MediaType mediaType = MediaType.parse("image/*");` + Format.NEW_LINE);
    return `String url = "${url}";` + Format.NEW_LINE +
    `// The file to be uploaded is represented as a byte array, replace the file variable with your upload data` + Format.NEXT_LINE +
    `byte[] file = "File to be uploaded".getBytes();` + Format.NEW_LINE +
    `OkHttpClient client = new OkHttpClient();` + Format.NEW_LINE +
    mediaType +
    `RequestBody body = RequestBody.create(mediaType, file);` + Format.NEW_LINE +
    authHeaderComment +
    `Request request = new Request.builder()` + Format.NEXT_LINE +
    Format.TAB + `.url(url)` + Format.NEXT_LINE +
    Format.TAB + `.post(body)` + Format.NEXT_LINE +
    requestHeaders +
    Format.TAB + `build();` + Format.NEW_LINE +
    this.getResponseFunction(url, 1) + Format.NEW_LINE +
    this.getSyncResponseFunction(1);
  }

  getFileDownloadCode(url, headers) {
    const requestHeaders = headers === null ? '' : this.getJavaRequestHeaders(headers, 1);
    const authHeaderComment = headers ? this.getAuthHeaderComment(headers, '') : '';
    return `String url = "${url}";` + Format.NEW_LINE +
    `OkHttpClient client = new OkHttpClient();` + Format.NEW_LINE +
    authHeaderComment +
    `Request request = new Request.builder()` + Format.NEXT_LINE +
    Format.TAB + `.url(url)` + Format.NEXT_LINE +
    requestHeaders +
    Format.TAB + `build();` + Format.NEW_LINE +
    this.getResponseFunction(url, 1) + Format.NEW_LINE +
    this.getSyncResponseFunction(1);
  }

  generateFileUploadCode(url, method, headers) {
    if (method === 'GET') {
      return this.getFileDownloadCode(url, headers);
    } else if (method === 'DELETE') {
      return this.generate(url, method, headers, null);
    }
    return this.getFileUploadCode(url, headers);
  }

  generate(url, method, headers, param) {
    const urlString = `String url = "${url}";`;
    const httpInitString = `OkHttpClient client = new OkHttpClient();`;
    const mediaTypeString = `MediaType mediaType = MediaType.parse("application/json");`;

    const authHeaderComment = headers ? this.getAuthHeaderComment(headers, Format.TAB) : '';

    const requestBodyString = param ? `RequestBody body = RequestBody.create(mediaType, jsonObject.toString());` : '';
    const requestMethodString = this.getMethodTypeString(method) + `(` + (param === null ? '' : 'body') + `)`;
    const requestHeaders = headers === null ? '' : this.getJavaRequestHeaders(headers, 2);
    const requestString = `Request request = new Request.Builder()` + Format.NEXT_LINE +
      Format.TAB + Format.TAB + `.url(url)` + Format.NEXT_LINE +
      Format.TAB + Format.TAB + requestMethodString + Format.NEXT_LINE +
      requestHeaders +
      Format.TAB + Format.TAB + `.build();`;

    return urlString + Format.NEW_LINE +
      `try {` + Format.NEXT_LINE +
      Format.TAB + httpInitString + Format.NEW_LINE +
      Format.TAB + mediaTypeString + Format.NEXT_LINE +
      (param ? (Format.TAB + this.getJavaRepresentationOfJSON(param, 1) + Format.NEW_LINE) : '') +
      Format.TAB + requestBodyString + Format.NEXT_LINE +
      authHeaderComment +
      Format.TAB + requestString + Format.NEW_LINE +
      Format.TAB + this.getResponseFunction(url, 2) + Format.NEW_LINE +
      Format.TAB + this.getSyncResponseFunction(2) + Format.NEW_LINE +
      `} catch (JSONException e) {` + Format.NEXT_LINE +
      Format.TAB + `e.printStackTrace()` + Format.SEMICOLON + Format.NEXT_LINE +
      `}`;
  }

  getJavaRepresentationOfJSON(json, tabcount) {
    let returnString = `JSONObject jsonObject = new JSONObject()`;
    for (const key in json) {
      returnString += Format.NEXT_LINE + this.getTabs(tabcount) + `.put("${key}", `;
      const value = json[key];
      if (this.isArray(value)) {
        returnString += this.iterateArray(value, tabcount + 1);
      } if (this.isObject(value)) {
        returnString += this.iterateObject(value, tabcount + 1);
      } else {
        returnString += this.getValue(value);
      }
      returnString += `)`;
    }
    returnString += `;`;
    return returnString;
  }

  iterateArray(jsonArray, tabCount) {
    let javaString = `new JSONArray()`;
    for (let i = 0; i < jsonArray.length; i++) {
      const json = jsonArray[i];
      javaString += Format.NEXT_LINE + this.getTabs(tabCount) + `.put(`;
      if (this.isObject(json)) {
        javaString += this.iterateObject(json, tabCount + 1);
      } else if (this.isArray(json)) {
        javaString += this.iterateArray(json, tabCount + 1);
      } else {
        javaString += this.getValue(json);
      }
      javaString += `)`;
    }
    return javaString + Format.NEXT_LINE + this.getTabs(tabCount - 1);
  }

  iterateObject(jsonObject, tabCount) {
    let javaString = `new JSONObject()`;
    for (const key in jsonObject) {
      javaString += Format.NEXT_LINE + this.getTabs(tabCount) + `.put("${key}", `;
      const value = jsonObject[key];
      if (this.isObject(value)) {
        javaString += this.iterateObject(value, tabCount + 1);
      } else if (this.isArray(value)) {
        javaString += this.iterateArray(value, tabCount + 1);
      } else {
        javaString += this.getValue(value);
      }
      javaString += ')';
    }
    return javaString + Format.NEXT_LINE + this.getTabs(tabCount - 1);
  }

  getValue(value) {
    if (value === null) {
      return null;
    }
    if (value.constructor == String) {
      return `"${value}"`;
    }
    return value;
  }

  isArray(element) {
    if (element === null) return false;
    return element.constructor == Array;
  }

  isObject(element) {
    if (element === null) {
      return false;
    }
    return element.constructor == Object;
  }
}

JavaCodeGenerator.LIBRARY = {
  OKHTTP: 'okhttp',
  ANDROID: 'android'
};
