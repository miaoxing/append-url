import param from 'jquery-param';

const appendUrl = (url, argsOrParam, params) => {
  if (url.indexOf('%s') !== -1) {
    // @link http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
    var i = 0;
    typeof argsOrParam !== 'object' && (argsOrParam = [argsOrParam]);
    url = url.replace(/%((%)|s)/g, function (m) {
      return m[2] || argsOrParam[i++];
    });
  } else {
    params = argsOrParam;
  }
  if (params && Object.keys(params).length !== 0) {
    url += (url.indexOf('?') === -1 ? '?' : '&');
  }
  switch (typeof params) {
    case 'string' :
      return url + params;
    case 'undefined' :
      return url;
    default:
      return url + param(params);
  }
}

export default appendUrl;
