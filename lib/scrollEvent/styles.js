"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.fixedClassName = void 0;

var _emotion = require("emotion");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  z-Index: 2;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fixedClassName = (0, _emotion.css)(_templateObject());
exports.fixedClassName = fixedClassName;
var _default = fixedClassName;
exports.default = _default;