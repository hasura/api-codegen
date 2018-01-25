#!/bin/sh

# accept module name and path to dockerfile 

#GENERATE CODE SNIPPET
MODULE_NAME=$1
DOCKERFILE_PATH=$2

echo "Generating Code Snippet"
CODE_SNIPPET=$(MODULE_NAME=$MODULE_NAME node snippetGenerator.js)
echo $CODE_SNIPPET

#STORE CODE SNIPPET IN A FILE test
cd $DOCKERFILE_PATH
echo "Storing Code Snippet"
touch test.js
echo "$CODE_SNIPPET" > "test"

#BUILD AND RUN DOCKER
echo "cd $DOCKERFILE_PATH"
echo "Building Docker"
docker build -t codegen:test .
echo "Running Docker"
echo "docker run codegen:test"
DOCKER_OUTPUT=$(docker run codegen:test)
echo $DOCKER_OUTPUT

#VALIDATE DOCKER_OUTPUT WITH ORIGINAL REQ BODY
echo "VALIDATING DOCKER OUTPUT..."
#SEND OUTPUT TO responseValidator
cd ..
VALIDATION=$(DOCKER_OUTPUT=$DOCKER_OUTPUT node responseValidator.js)

echo $VALIDATION

exit

