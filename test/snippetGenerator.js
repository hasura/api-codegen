/* global describe, it, before */

const CodeGenerator = require('../lib/api-codegen.js').CodeGenerator;
const testFile = require('./test.json');

let requestData = testFile['testCases'][0];
requestData['param'] = JSON.stringify(requestData['param']);
const requestType = ''; // can be 'file' or ''

const moduleName = process.env.MODULE_NAME ? process.env.MODULE_NAME : '';

let generator;
generator = new CodeGenerator(moduleName);
let generatedCode;

try {
  generatedCode = generator.generate({
    url: requestData.url,
    method: requestData.method,
    headers: requestData.headers,
    param: requestData.param,
    type: requestType
  });
} catch (e) {
  console.log('INSIDE CATCH');
  generatedCode = e.message;
}
console.log(generatedCode);
