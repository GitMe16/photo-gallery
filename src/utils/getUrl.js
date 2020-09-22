const getUrl = (url, params = {}) => {
  const paramKeys = Object.keys(params);
  var paramStr;
  if (paramKeys.length > 0) {
    paramStr = '?'
    for (let ii = 0; ii < paramKeys.length; ii++) {
      paramStr += paramKeys[ii] + '=' + params[paramKeys[ii]] + '&';
    }
    paramStr = paramStr.substring(0, paramStr.length - 1);
  } else {
    paramStr = '';
  }
  return url + paramStr;
}

export default getUrl;