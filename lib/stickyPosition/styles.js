"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableClassName = exports.fixedRightClassName = exports.fixedLeftClassName = exports.fixedClassName = void 0;

var _emotion = require("emotion");

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  .rt-tbody {\n    overflow: visible !important;\n    flex: 1 0 auto !important;\n  }\n\n  .rt-thead {\n    position: sticky;\n    z-index: 2;\n  }\n\n  .rt-thead.-headerGroups {\n    border-bottom-color: #f2f2f2 !important;\n  }\n\n  .rt-tfoot {\n    position: sticky;\n    z-index: 1;\n    bottom: 0px;    \n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  right: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  left: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: sticky !important;\n  z-index: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fixedClassName = (0, _emotion.css)(_templateObject());
exports.fixedClassName = fixedClassName;
var fixedLeftClassName = (0, _emotion.css)(_templateObject2());
exports.fixedLeftClassName = fixedLeftClassName;
var fixedRightClassName = (0, _emotion.css)(_templateObject3());
exports.fixedRightClassName = fixedRightClassName;
var tableClassName = (0, _emotion.css)(_templateObject4());
exports.tableClassName = tableClassName;