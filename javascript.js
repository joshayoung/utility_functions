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