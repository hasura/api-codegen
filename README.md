# Hasura API Code Generator

npm module to generate code for Hasura APIs in different languages/frameworks

## Languages Covered

* Python
* JavaScript
* Node.js
* Swift
* Java

If you want to add support for a language or a library within a language, follow the steps below:

## Getting started

1. Build your library
  * Run `yarn install` (recommended) or `npm install` to get the project's dependencies
  * Run `yarn build` or `npm run build` to produce minified version of your library.
2. Development mode
  * Having all the dependencies installed run `yarn dev` or `npm run dev`. This command will generate an non-minified version of your library and will run a watcher so you get the compilation on file change.
3. Running the tests
  * Run `yarn test` or `npm run test`

## Scripts

* `yarn build` or `npm run build` - produces production version of your library under the `lib` folder
* `yarn dev` or `npm run dev` - produces development version of your library and runs a watcher
* `yarn test` or `npm run test` - well ... it runs the tests :)
* `yarn test:watch` or `npm run test:watch` - same as above but in a watch mode

## Testing

* Once the code generator for the new module has been written, it can be tested by:
`sh test.sh '<MODULE_NAME>' <PATH_TO_DOCKERFILE>`

Here the 
- '<MODULE_NAME>' comes from the `CodeGenerator.TYPES`
- '<PATH_TO_DOCKERFILE>' should give the path of the Dockerfile written for this new module execution.

This shell script takes the module name, generates the Code Snippet based on the written function and saves the snippet file named as `test` in the given path. A docker image is built with the `test` file added. Docker container is run with the built image and is expected to only output the response of the sample http request.



