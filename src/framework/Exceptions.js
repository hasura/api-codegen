/* eslint-disable */
var InvalidArgumentException = function InvalidArgumentException(message) {
  this.message = message;
    if ("captureStackTrace" in Error)
        Error.captureStackTrace(this, InvalidArgumentException);
    else
        this.stack = (new Error()).stack;
};

InvalidArgumentException.prototype = Object.create(Error.prototype);
InvalidArgumentException.prototype.name = "InvalidArgumentException";
InvalidArgumentException.prototype.constructor = InvalidArgumentException;


var UnsupportedLibraryException = function UnsupportedLibraryException(message) {
  this.message = message;
    if ("captureStackTrace" in Error)
        Error.captureStackTrace(this, UnsupportedLibraryException);
    else
        this.stack = (new Error()).stack;
};

UnsupportedLibraryException.prototype = Object.create(Error.prototype);
UnsupportedLibraryException.prototype.name = "UnsupportedLibraryException";
UnsupportedLibraryException.prototype.constructor = UnsupportedLibraryException;

var UnsupportedEncodingException = function UnsupportedEncodingException(message) {
  this.message = message;
    if ("captureStackTrace" in Error)
        Error.captureStackTrace(this, UnsupportedEncodingException);
    else
        this.stack = (new Error()).stack;
};

UnsupportedEncodingException.prototype = Object.create(Error.prototype);
UnsupportedEncodingException.prototype.name = "UnsupportedEncodingException";
UnsupportedEncodingException.prototype.constructor = UnsupportedEncodingException;

export {InvalidArgumentException, UnsupportedEncodingException, UnsupportedLibraryException};
