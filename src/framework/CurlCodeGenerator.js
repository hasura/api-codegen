/* eslint-disable */
export default class CurlCodeGenerator {

    getStringifiedJson(json) {
      return JSON.stringify(json, null, 4);
    }

    getCurlHeaders(headerJSON) {
      var string = "";
      for (var key in headerJSON) {
          string += ` -H "${key}: ${headerJSON[key]}"`;
      }
      return string;
    }

    generate(url, method, headers, param) {
      const urlString = `"${url}"`;
      const requestpayload = param === null ? '' : ` -d '${this.getStringifiedJson(param)}' ` ;
      const headerString = headers === null ? '' : this.getCurlHeaders(headers);
      const request = `curl -X ` + method + ' ' + headerString + ' ' + requestpayload + ' ' + urlString;
      return request;
    }

    generateFileUploadCode(url, method, headers) {
      if (method === 'DELETE') {
        return this.generate(url, method, headers, null);
      }
      const urlString = `"${url}"`;
      const requestpayload = method === 'GET' ? '--output path/to/download/file' : ` --data-binary @path/to/file `;
      const headerString = headers === null ? '' : this.getCurlHeaders(headers);
      const request = `curl -X ` + method + headerString + ' ' + requestpayload + ' ' + urlString;
      return request;
    }

    getSelectedLanguage() {
      return "text";
    }
}
