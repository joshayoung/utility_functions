let elementExists = function(div) {
  let element = document.querySelector(div);
  if (typeof(element) != 'undefined' && element != null) {
    return true;
  }
  return false;
};

let trim = function(str) {
  //Adopted from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

let getUrl = function() {
  return document.location.href.split('/')[2]
}

let isNumber = function(num) {
  return (isFinite(num) && !isNaN(parseFloat(num)));
}

//Adopted from: https://codepen.io/gapcode/pen/vEJNZN:
let isIE = (function() {
  var ua = window.navigator.userAgent;
  var rv = ua.indexOf('rv:');
  var ie = parseInt(ua.substring(rv + 3, ua.indexOf('.', , rv)), 10);
  if (ie == 11) {
    document.getElementsByTagName('body')[0].className += ' ie';
  }
}());

let theId = function(id) {
  if (!document.getElementById(id)) {
    return false;
  }
  return document.getElementById(id);
}

let theClass = function(cls) {
  if (!document.getElementsByClassName(cls)) {
    return false;
  }
  return document.getElementsByClassName(cls);
}