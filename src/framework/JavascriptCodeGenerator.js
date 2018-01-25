/* eslint-disable */

import {UnsupportedLibraryException} from './Exceptions';
import JSFetchCodeGenerator from './JSFetchCodeGenerator';
import JSJqueryCodeGenerator from './JSJqueryCodeGenerator';
import JSNodeFetchCodeGenerator from './JSNodeFetchCodeGenerator';
import JSReactNativeCodeGenerator from './JSReactNativeCodeGenerator';

export default class JavascriptCodeGenerator {

  constructor(library) {
    switch (library) {
      case JavascriptCodeGenerator.LIBRARY.NODE_FETCH:
        this.generator = new JSNodeFetchCodeGenerator();
        break;
      case JavascriptCodeGenerator.LIBRARY.JQUERY:
        this.generator = new JSJqueryCodeGenerator();
        break;
      case JavascriptCodeGenerator.LIBRARY.FETCH:
        this.generator = new JSFetchCodeGenerator();
        break;
      case JavascriptCodeGenerator.LIBRARY.REACT_NATIVE:
        this.generator = new JSReactNativeCodeGenerator();
        break;
      default: throw new UnsupportedLibraryException(`${library} is not supported`);
    }
  }

  getSelectedLanguage() {
    return "javascript";
  }

  generate(url, method, headers, param) {
    return this.generator.generate(url, method, headers, param);
  }

  generateFileUploadCode(url, method, headers) {
    return this.generator.generateFileUploadCode(url, method, headers);
  }
}

JavascriptCodeGenerator.LIBRARY = {
  FETCH: 'fetch',
  JQUERY: 'jquery',
  NODE_FETCH: 'node_fetch',
  REACT_NATIVE: 'react_native'
};
