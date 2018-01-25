// returns true if its an auth url with /signup or /login
const shouldHandleAuthToken = (url) => {
  return url.indexOf('auth') !== -1 && (url.indexOf('signup') !== -1 || url.indexOf('login') !== -1);
};

export {
  shouldHandleAuthToken
};
