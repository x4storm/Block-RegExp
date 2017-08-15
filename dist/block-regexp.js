/* BlockRegExp version 0.1.0 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BlockRegExp = factory());
}(this, (function () { 'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function reg(literals) {
  var liters = literals.raw;

  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var regLiter = concatLiterals(liters, values).trim();

  var flagsComment = regLiter.match(/# *flags *=.*$/m);
  var flags = flagsComment ? flagsComment[0].replace(/^#/, '').split('=')[1] : '';
  flags = flags.trim();
  flags = filterSubstr('img', flags);

  var removeComment = regLiter.replace(/([^\\])?#.+/g, '$1');
  var removeSpace = removeComment.replace(/\s/g, '');
  return new RegExp(removeSpace, flags);
}

function concatLiterals(literals, values) {
  var result = '';
  for (var i = 0; i < literals.length; i++) {
    result += literals[i];
    if (i < values.length) {
      result += values[i];
    }
  }
  return result;
}

function filterSubstr(pattern, str) {
  str = [].concat(_toConsumableArray(new Set(Array.from(str))));
  return str.filter(function (s) {
    return pattern.indexOf(s) >= 0;
  }).join('');
}

return reg;

})));
