function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function newUnit() {
  return "hello world!"
}
// 主要是服务器传递的多张图片地址的时候是json对象格式，现在需要转换成array数组格式才能渲染
// 将数组转换成JSON对象，其中key值对应'0'，'1'，'2',...
function arrayToJson(array) {
  var arr = array || [];
  var obj = {};
  for (var i = 0, l = arr.length; i < l; i++) {
    obj[String(i)] = String(arr[i]);
  };
  return obj;
}
// 将JSON对象转换成数组，忽略掉key值，只要value值
function jsonToArray(json) {
  var obj = json || {};
  var arr = [];
  for (var k in obj) {
    arr[arr.length] = obj[k];
  };
  return arr;
}
// 设置动画参数
function setAnimationParams(a, b, c, d) {
  a = a || 400;
  b = b || "ease";
  c = c || 0;
  d = d || "50% 50%";
  return {
    duration: a,
    timingFunction: b,
    delay: c,
    transformOrigin: d
  }
}
function extend(obj1, obj2) {
  for (var k in obj1) {
    obj2[k] = obj1[k]
  }
}
module.exports = {
  formatTime: formatTime,
  newUnit: newUnit,
  arrayToJson: arrayToJson,
  jsonToArray: jsonToArray,
  setAnimationParams: setAnimationParams,
  extend: extend
}
// 这个文件，常驻内存，每次启动页面只需要加载一次就可以了
