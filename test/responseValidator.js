/* global describe, it, before */

const testFile = require('./test.json');

let response = process.env.DOCKER_OUTPUT ? process.env.DOCKER_OUTPUT : null;
let parsedResponse;

if (response) {
  try {
    parsedResponse = JSON.parse(response);
  }
  catch(e) {
    console.log('TEST FAILED');
  }
} else {
  console.log('TEST FAILED');
}

const testCase = testFile['testCases'][0];

if (parsedResponse['url'] === testCase['url'] && parsedResponse['method'] === testCase['method']) {
  // additional validation
  if (parsedResponse['method'] === 'POST') {
    // now validate request body
    if(parsedResponse['data'] === JSON.stringify(testCase['param'])) {
      // console.log('TEST PASSED');
      console.log('\x1b[32m%s\x1b[0m', 'TEST PASSED');
    } else {
      // console.log('TEST FAILED');
      console.log('\x1b[31m%s\x1b[0m', 'TEST FAILED');
    }
  }
} else {
  // console.log('TEST FAILED');
  console.log('\x1b[31m%s\x1b[0m', 'TEST FAILED');
}

