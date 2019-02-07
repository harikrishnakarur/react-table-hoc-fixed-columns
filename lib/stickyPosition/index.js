"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uniqid = _interopRequireDefault(require("uniqid"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

var _styles2 = require("../styles");

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default = function _default(ReactTable) {
  var ReactTableFixedColumns =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ReactTableFixedColumns, _React$Component);

    function ReactTableFixedColumns(props) {
      var _this;

      _classCallCheck(this, ReactTableFixedColumns);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactTableFixedColumns).call(this, props));

      _this.onResizedChange = function () {
        var onResizedChange = _this.props.onResizedChange;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (onResizedChange) {
          onResizedChange.apply(void 0, args);
        }

        args[0].forEach(function (_ref) {
          var id = _ref.id,
              value = _ref.value;
          _this.columnsWidth[id] = value;
        });

        _this.forceUpdate();
      };

      var hasGroups = !!props.columns.find(function (column) {
        return column.columns;
      });
      var fixedColumnsWithoutGroup = props.columns.filter(function (column) {
        return column.fixed && !column.columns;
      }).map(function (_ref2) {
        var Header = _ref2.Header;
        return "'".concat(Header, "'");
      });

      if (hasGroups && fixedColumnsWithoutGroup.length) {
        console.warn(['WARNING react-table-hoc-fixed-column: ReactTable has fixed columns outside groups.', "For a better UI render, place ".concat(fixedColumnsWithoutGroup.join(' and '), " columns into a group (even a group with an empty Header label)")].join('\n\n'));
      }

      _this.tableClassName = (0, _styles2.getTableClassName)(_this.props);
      _this.columnsWidth = {};
      _this.uniqClassName = (0, _uniqid.default)('rthfc-');
      return _this;
    }

    _createClass(ReactTableFixedColumns, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var headerRows = document.querySelectorAll(".".concat(this.uniqClassName, " .rt-thead"));
        /* eslint-disable no-param-reassign */

        Array.from(headerRows).forEach(function (row) {
          row.style.top = "".concat(row.offsetTop, "px");
        });
        /* eslint-enable no-param-reassign */
      }
    }, {
      key: "getLeftOffsetColumns",
      value: function getLeftOffsetColumns(columns, index) {
        var offset = 0;

        for (var i = 0; i < index; i += 1) {
          var column = columns[i];

          if (column.show !== false) {
            var id = (0, _helpers.getColumnId)(column);
            var width = this.columnsWidth[id] || column.width || column.minWidth || 100;
            offset += width;
          }
        }

        return offset;
      }
    }, {
      key: "getRightOffsetColumns",
      value: function getRightOffsetColumns(columns, index) {
        var offset = 0;

        for (var i = index + 1; i < columns.length; i += 1) {
          var column = columns[i];

          if (column.show !== false) {
            var id = (0, _helpers.getColumnId)(column);
            var width = this.columnsWidth[id] || column.width || column.minWidth || 100;
            offset += width;
          }
        }

        return offset;
      }
    }, {
      key: "getColumnsWithFixed",
      value: function getColumnsWithFixed(columns, parentIsfixed, parentIsLastFixed, parentIsFirstFixed) {
        var _this2 = this;

        var _this$props = this.props,
            customFixedLeftClassName = _this$props.customFixedLeftClassName,
            customFixedRightClassName = _this$props.customFixedRightClassName,
            customLastLeftFixedClassName = _this$props.customLastLeftFixedClassName,
            customLastRightFixedClassName = _this$props.customLastRightFixedClassName;
        return columns.map(function (column, index) {
          var fixed = column.fixed || parentIsfixed || false;
          var nextColumn = (0, _helpers.findNextColumnNotHidden)(columns, index);

          var _parentIsLastFixed = fixed && parentIsfixed === undefined && nextColumn && !nextColumn.fixed;

          var isLastFixed = fixed && (parentIsfixed ? [true, 'left'].includes(parentIsfixed) && parentIsLastFixed : true) && (parentIsfixed && !nextColumn || !parentIsfixed && nextColumn && !nextColumn.fixed);
          var prevColumn = (0, _helpers.findPrevColumnNotHidden)(columns, index);

          var _parentIsFirstFixed = fixed && parentIsfixed === undefined && prevColumn && !prevColumn.fixed;

          var isFirstFixed = fixed && (parentIsfixed ? parentIsfixed === 'right' && parentIsFirstFixed : true) && (parentIsfixed && !prevColumn || !parentIsfixed && prevColumn && !prevColumn.fixed);
          var columnIsLeftFixed = (0, _helpers.isLeftFixed)({
            fixed: fixed
          });
          var columnIsRightFixed = (0, _helpers.isRightFixed)({
            fixed: fixed
          });

          var left = columnIsLeftFixed && _this2.getLeftOffsetColumns(columns, index);

          var right = columnIsRightFixed && _this2.getRightOffsetColumns(columns, index);

          return _objectSpread({}, column, {
            fixed: fixed,
            className: (0, _classnames.default)(column.className, fixed && _styles.fixedClassName, columnIsLeftFixed && _styles.fixedLeftClassName, columnIsLeftFixed && customFixedLeftClassName, columnIsRightFixed && _styles.fixedRightClassName, columnIsRightFixed && customFixedRightClassName, isLastFixed && _styles2.lastLeftFixedClassName, isLastFixed && customLastLeftFixedClassName, isFirstFixed && _styles2.lastRightFixedClassName, isFirstFixed && customLastRightFixedClassName),
            style: _objectSpread({}, column.style, {
              left: left,
              right: right
            }),
            headerClassName: (0, _classnames.default)(column.headerClassName, fixed && _styles.fixedClassName, columnIsLeftFixed && _styles.fixedLeftClassName, columnIsRightFixed && _styles.fixedRightClassName, (_parentIsLastFixed || parentIsLastFixed && isLastFixed) && _styles2.lastLeftFixedClassName, (_parentIsFirstFixed || parentIsFirstFixed && isFirstFixed) && _styles2.lastRightFixedClassName),
            headerStyle: _objectSpread({}, column.headerStyle, {
              left: left,
              right: right
            }),
            columns: column.columns && _this2.getColumnsWithFixed(column.columns, fixed, _parentIsLastFixed, _parentIsFirstFixed)
          });
        });
      }
    }, {
      key: "getColumns",
      value: function getColumns() {
        var columns = this.props.columns;
        var sortedColumns = (0, _helpers.sortColumns)(columns);
        var columnsWithFixed = this.getColumnsWithFixed(sortedColumns);
        return columnsWithFixed;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            className = _this$props2.className,
            innerRef = _this$props2.innerRef,
            stripedColor = _this$props2.stripedColor,
            highlightColor = _this$props2.highlightColor,
            props = _objectWithoutProperties(_this$props2, ["className", "innerRef", "stripedColor", "highlightColor"]);

        return _react.default.createElement(ReactTable, _extends({}, props, {
          ref: innerRef,
          className: (0, _classnames.default)(className, this.tableClassName, _styles.tableClassName, this.uniqClassName),
          columns: this.getColumns(),
          onResizedChange: this.onResizedChange
        }));
      }
    }]);

    return ReactTableFixedColumns;
  }(_react.default.Component);

  ReactTableFixedColumns.propTypes = {
    columns: _propTypes.default.array.isRequired,
    innerRef: _propTypes.default.func,
    className: _propTypes.default.string,
    onResizedChange: _propTypes.default.func,
    stripedColor: _propTypes.default.string,
    highlightColor: _propTypes.default.string
  };
  ReactTableFixedColumns.defaultProps = {
    innerRef: null,
    className: null,
    onResizedChange: null,
    stripedColor: null,
    highlightColor: null
  };
  return ReactTableFixedColumns;
};

exports.default = _default;