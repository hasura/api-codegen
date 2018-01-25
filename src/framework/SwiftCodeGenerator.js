/* eslint-disable */
import Format from './Format';
import {UnsupportedLibraryException} from './Exceptions';
import {shouldHandleAuthToken} from './utils';

export default class SwiftCodeGenerator {

  constructor(library) {
    this.library = library;
    this.shouldHandleAuth = false;
    if (this.library === SwiftCodeGenerator.LIBRARY.IOS_ALAMOFIRE) {
      this.shouldHandleAuth = true;
    }
  }

  getCodeImports() {
    switch (this.library) {
      case SwiftCodeGenerator.LIBRARY.ALAMOFIRE:
        return `import Foundation` + Format.NEXT_LINE + `import Alamofire`;
      case SwiftCodeGenerator.LIBRARY.IOS_ALAMOFIRE:
        return `import Foundation` + Format.NEXT_LINE + `import Alamofire`;
      default: throw new UnsupportedLibraryException(`${this.library} is not supported`);
    }
  }

  getSelectedLanguage() {
    return 'swift';
  }

  getMethodTypeString(method) {
    return `.${method.toLowerCase()}`;
  }

  getStringifiedJson(json) {
    return JSON.stringify(json, null, 4).replace(/{/g, '[').replace(/}/g, ']');
  }

  getAuthHeaderComment(headers) {
    if (this.shouldHandleAuth && (headers.Authorization || headers.authorization)) {
      return `// If you have the auth token saved in UserDefaults,` + Format.NEXT_LINE +
      `// let authToken = UserDefaults.standard.string(forKey: "HASURA_AUTH_TOKEN")` + Format.NEXT_LINE +
      `// Now you can set the header like so,` + Format.NEXT_LINE +
      `// let headers: HTTPHeaders? = [` + Format.NEXT_LINE +
      `// ` + Format.TAB + `"Authorization": "Bearer " + authToken` + Format.NEXT_LINE +
      `// ]` + Format.NEXT_LINE;
    }
    return '';
  }

  getSaveAuthTokenComment(url, tabs) {
    if (this.shouldHandleAuth && shouldHandleAuthToken(url)) {
      return tabs + `// To save the auth token offline` + Format.NEXT_LINE +
      tabs + `// if let JSON = response.result.value {` + Format.NEXT_LINE +
      tabs + `// ` + Format.TAB + `let json = JSON as! [String: Any]` + Format.NEXT_LINE +
      tabs + `// ` + Format.TAB + `UserDefaults.standard.set(json["auth_token"], forKey: "HASURA_AUTH_TOKEN")` + Format.NEXT_LINE +
      tabs + `// }` + Format.NEXT_LINE;
    }
    return '';
  }

  generate(url, method, headers, param) {
    const importHeaderString = this.getCodeImports() + Format.NEW_LINE;
    const urlString = `let url = "${url}"` + Format.NEW_LINE;
    const headerString = `let headers: HTTPHeaders? = ` + (headers === null ? 'nil' : `${this.getStringifiedJson(headers)}`) + Format.NEW_LINE;
    const authHeaderComment = headers ? this.getAuthHeaderComment(headers) : '';
    const requestParamString = `var requestParam: [String: Any]? = ` + (param === null ? `nil` : `${this.getStringifiedJson(param)}`) + Format.NEW_LINE;
    const requestString = `Alamofire.request(url,` + Format.NEXT_LINE +
      Format.TAB + Format.TAB + `method: ${this.getMethodTypeString(method)}` + Format.NEXT_LINE +
      Format.TAB + Format.TAB + `headers: headers` + Format.NEXT_LINE +
      Format.TAB + Format.TAB + `parameters: requestParam` + Format.NEXT_LINE +
      Format.TAB + Format.TAB + `encoding: JSONEncoding.default` + `)` + Format.NEXT_LINE +
      `.responseJSON { response in ` + Format.NEXT_LINE +
      Format.TAB + Format.TAB + `debugPrint(response)` + Format.NEXT_LINE +
      this.getSaveAuthTokenComment(url, Format.TAB + Format.TAB) +
      `}`;
    return importHeaderString +
      urlString +
      authHeaderComment +
      headerString +
      requestParamString +
      requestString;
  }

  getFileDownloadCode(url, headers) {
    const headerString = `let headers: HTTPHeaders? = ` + (headers === null ? 'nil' : `${this.getStringifiedJson(headers)}`);
    const authHeaderComment = headers ? this.getAuthHeaderComment(headers) : '';

    return `import Foundation` + Format.NEXT_LINE + `import Alamofire` + Format.NEW_LINE +
    `let url = "${url}"` + Format.NEW_LINE +
    authHeaderComment +
    headerString + Format.NEW_LINE +
    `let documentsPath = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true)[0]` + Format.NEXT_LINE +
    `let documentsURL = URL(fileURLWithPath: documentsPath, isDirectory: true)` + Format.NEXT_LINE +
    `let fileURL = documentsURL.appendingPathComponent(url)` + Format.NEW_LINE +
    `//Downloading file to this location will replace the previous file at this location` + Format.NEXT_LINE +
    `let destination: DownloadRequest.DownloadFileDestination = { _, _ in` + Format.NEXT_LINE +
    Format.TAB + `return (fileURL, [.removePreviousFile, .createIntermediateDirectories])` + Format.NEXT_LINE +
    `}` + Format.NEW_LINE +
    `Alamofire.download(url, method: .get, headers: headers, to: destination)` + Format.NEXT_LINE +
    Format.TAB + `.responseData { (response: DownloadResponse<Data>) in` + Format.NEXT_LINE +
    Format.TAB + `print(response.debugDescription)` + Format.NEXT_LINE +
    Format.TAB + `switch (response.result) {` + Format.NEXT_LINE +
    Format.TAB + `case .success(let data) :` + Format.NEXT_LINE +
    Format.TAB + Format.TAB + `//Handle Success` + Format.NEXT_LINE +
    Format.TAB + Format.TAB + `break` + Format.NEXT_LINE +
    Format.TAB + `case .failure(let error):` + Format.NEXT_LINE +
    Format.TAB + Format.TAB + `//Handle Failure` + Format.NEXT_LINE +
    Format.TAB + Format.TAB + `break` + Format.NEXT_LINE +
    Format.TAB + `}` + Format.NEXT_LINE +
    `}`;
  }

  getFileUploadCode(url, headers) {
    const headerString = `let headers: HTTPHeaders? = ` + (headers === null ? 'nil' : `${this.getStringifiedJson(headers)}`);
    const authHeaderComment = headers ? this.getAuthHeaderComment(headers) : '';

    return `import Foundation` + Format.NEXT_LINE + `import Alamofire` + Format.NEW_LINE +
    `let url = "${url}"` + Format.NEW_LINE +
    authHeaderComment +
    headerString + Format.NEW_LINE +
    `//Uploading an empty file, replace the value of data with your file` + Format.NEXT_LINE +
    `let data = Data()` + Format.NEW_LINE +
    `Alamofire.upload(data, to: url, method: .post, headers: headers)` + Format.NEXT_LINE +
    Format.TAB + `.responseJSON { (response: DataResponse<Any>) in` + Format.NEXT_LINE +
    Format.TAB + `print(response.debugDescription)` + Format.NEXT_LINE +
    Format.TAB + `switch (response.result) {` + Format.NEXT_LINE +
    Format.TAB + `case .success(let data) :` + Format.NEXT_LINE +
    Format.TAB + Format.TAB + `//Handle Success` + Format.NEXT_LINE +
    Format.TAB + Format.TAB + `break` + Format.NEXT_LINE +
    Format.TAB + `case .failure(let error):` + Format.NEXT_LINE +
    Format.TAB + Format.TAB + `//Handle Error` + Format.NEXT_LINE +
    Format.TAB + Format.TAB + `break` + Format.NEXT_LINE +
    Format.TAB + `}` + Format.NEXT_LINE +
    `}`;
  }

  generateFileUploadCode(url, method, headers) {
    if (method === 'GET') {
      return this.getFileDownloadCode(url, headers);
    } else if (method === 'DELETE') {
      return this.generate(url, method, headers, null);
    }
    return this.getFileUploadCode(url, headers);
  }
}

SwiftCodeGenerator.LIBRARY = {
  ALAMOFIRE: 'alamofire',
  IOS_ALAMOFIRE: 'iOS-alamofire'
};
