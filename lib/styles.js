"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTableClassName = exports.lastRightFixedClassName = exports.lastLeftFixedClassName = exports.border = void 0;

var _emotion = require("emotion");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    .-header .rt-th,\n    .-filters .rt-th,\n    .rt-td {\n      background-color: white;\n    }\n\n    .rt-tr.-odd .rt-td {\n      background-color: ", ";\n    }\n\n    .rt-tr:hover .rt-td {\n      background-color: ", ";\n    }\n\n    .-headerGroups .rt-th {\n      background-color: #f7f7f7;\n    }\n\n    .-header .rt-th {\n      border-bottom: solid 1px #eee;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-left: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-right: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var border = 'solid 1px #ccc !important';
exports.border = border;
var lastLeftFixedClassName = (0, _emotion.css)(_templateObject(), border);
exports.lastLeftFixedClassName = lastLeftFixedClassName;
var lastRightFixedClassName = (0, _emotion.css)(_templateObject2(), border);
exports.lastRightFixedClassName = lastRightFixedClassName;

var getTableClassName = function getTableClassName(props) {
  var className = props.className;
  var stripedColor = props.stripedColor,
      highlightColor = props.highlightColor;

  if (!stripedColor && (className || '').indexOf('-striped') !== -1) {
    stripedColor = '#f7f7f7';
  }

  if (!highlightColor && (className || '').indexOf('-highlight') !== -1) {
    highlightColor = '#f2f2f2';
  }

  return (0, _emotion.css)(_templateObject3(), stripedColor, highlightColor);
};

exports.getTableClassName = getTableClassName;