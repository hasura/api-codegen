/* eslint-disable */
import Format from './Format';
import {UnsupportedLibraryException} from './Exceptions';

export default class Python27CodeGenerator {

  constructor(library) {
    this.library = library;
  }

  getCodeImports() {
    switch (this.library) {
      case Python27CodeGenerator.LIBRARY.REQUESTS:
        return `import requests` + Format.NEXT_LINE + `import json`;
      default: throw new UnsupportedLibraryException(`${this.library} is not supported`);
    }
  }

  getStringifiedJson(json) {
    return JSON.stringify(json, null, 4).replace(/null/g, 'None');
  }

  getSelectedLanguage() {
    return 'python';
  }

  generate(url, method, headers, param) {
    const importHeaders = this.getCodeImports() + Format.NEW_LINE;
    const urlString = `url = "${url}"` + Format.NEW_LINE;
    const requestpayload = param === null ? '' : `requestPayload = ${this.getStringifiedJson(param)}` + Format.NEW_LINE;
    const headerString = headers === null ? '' : `headers = ${this.getStringifiedJson(headers)}` + Format.NEW_LINE;
    const request = `resp = requests.request("${method}", url` + (requestpayload === '' ? '' : `, data=json.dumps(requestPayload)`) + (headers === null ? '' : `, headers=headers`) + `)` + Format.NEW_LINE;
    const print = `print resp.content`;
    return importHeaders +
      `# This is the url to which the query is made` + Format.NEXT_LINE +
      urlString +
      `# This is the json payload for the query` + Format.NEXT_LINE +
      requestpayload +
      `# Setting headers` + Format.NEXT_LINE +
      headerString +
      `# Make the query and store response in resp` + Format.NEXT_LINE +
      request +
      `# resp.content contains the json response.` + Format.NEXT_LINE +
      print;
  }

  getUploadFileCode(url, headers) {
    const headerString = headers === null ? 'headers = {}' : `headers = ${this.getStringifiedJson(headers)}`;
    return `import requests` + Format.NEW_LINE +
      `# This is the url to which the query is made` + Format.NEXT_LINE +
      `url = "${url}"` + Format.NEW_LINE +
      `# Setting headers` + Format.NEXT_LINE +
      headerString + Format.NEW_LINE +
      `# Open the file and make the query` + Format.NEXT_LINE +
      `with open('test.png', 'rb') as file_image:` + Format.NEXT_LINE +
      Format.TAB + `resp = requests.post(url, data=file_image.read(), headers=headers)` + Format.NEW_LINE +
      `# resp.content contains the json response.` + Format.NEXT_LINE +
      `print resp.content`;
  }

  getDownloadFileCode(url) {
    return `import requests` + Format.NEXT_LINE + `import shutil` + Format.NEW_LINE +
      `# This is the url to which the query is made` + Format.NEXT_LINE +
      `url = "${url}"` + Format.NEW_LINE +
      `# Change the name of the file and the extension based on the file being downloaded` + Format.NEXT_LINE +
      `filename = "downloadedFile.png"` + Format.NEW_LINE +
      `# Make the query` + Format.NEXT_LINE +
      `resp = requests.get(url, stream=TRUE)` + Format.NEW_LINE +
      `# Save the data into the file` + Format.NEXT_LINE +
      `with open(filename, 'wb') as file_image` + Format.NEXT_LINE +
      Format.TAB + `shutil.copyfileobj(resp.raw, file_image)` + Format.NEW_LINE +
      `print resp.content`;
  }

  generateFileUploadCode(url, method, headers) {
    if (method === 'GET') {
      return this.getDownloadFileCode(url);
    } else if (method === 'DELETE') {
      return this.generate(url, method, headers, null);
    }
    return this.getUploadFileCode(url, headers);
  }
}

Python27CodeGenerator.LIBRARY = {
  REQUESTS: 'requests'
};
