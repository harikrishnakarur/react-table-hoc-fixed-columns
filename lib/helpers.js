"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPrevColumnNotHidden = exports.findNextColumnNotHidden = exports.enableStickyPosition = exports.sortColumns = exports.isNotFixed = exports.isRightFixed = exports.isLeftFixed = exports.getColumnId = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getColumnId = function getColumnId(column) {
  if (column.id) return column.id;
  if (typeof column.accessor === 'string') return column.accessor;
  return null;
};

exports.getColumnId = getColumnId;

var isLeftFixed = function isLeftFixed(column) {
  return [true, 'left'].includes(column.fixed);
};

exports.isLeftFixed = isLeftFixed;

var isRightFixed = function isRightFixed(column) {
  return column.fixed === 'right';
};

exports.isRightFixed = isRightFixed;

var isNotFixed = function isNotFixed(column) {
  return !column.fixed;
};

exports.isNotFixed = isNotFixed;

var sortColumns = function sortColumns(columns) {
  return [].concat(_toConsumableArray(columns.filter(isLeftFixed)), _toConsumableArray(columns.filter(isNotFixed)), _toConsumableArray(columns.filter(isRightFixed)));
};

exports.sortColumns = sortColumns;

var enableStickyPosition = function enableStickyPosition() {
  if (!document) return true; // document is undefined in SSR

  var el = document.createElement('a');
  var mStyle = el.style;
  mStyle.cssText = 'position:sticky;position:-webkit-sticky;position:-ms-sticky;';
  return mStyle.position.indexOf('sticky') !== -1;
};

exports.enableStickyPosition = enableStickyPosition;

var findNextColumnNotHidden = function findNextColumnNotHidden(columns, currentIndex) {
  for (var i = currentIndex + 1; i < columns.length; i += 1) {
    var column = columns[i];
    if (column.show !== false) return column;
  }

  return undefined;
};

exports.findNextColumnNotHidden = findNextColumnNotHidden;

var findPrevColumnNotHidden = function findPrevColumnNotHidden(columns, currentIndex) {
  for (var i = currentIndex - 1; i >= 0; i -= 1) {
    var column = columns[i];
    if (column.show !== false) return column;
  }

  return undefined;
};

exports.findPrevColumnNotHidden = findPrevColumnNotHidden;