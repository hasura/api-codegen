FROM mhart/alpine-node:7.6.0

WORKDIR /src

ADD package.json /src/

#install node modules
RUN npm install

# Add app source files
ADD . /src

CMD ["node","test"]  
