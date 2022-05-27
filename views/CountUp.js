"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.array.is-array.js");

var _react = require("react");

var _material = require("@mui/material");

var _AccessTime = _interopRequireDefault(require("@mui/icons-material/AccessTime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CountUp = function CountUp() {
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material.Grid, {
    container: true
  }, /*#__PURE__*/React.createElement("h1", null, count), /*#__PURE__*/React.createElement(_material.Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(_material.Button, {
    type: "button",
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      return setCount(count + 1);
    }
  }, "+"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_material.Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(_material.Button, {
    type: "button",
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      return setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_material.Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(_material.Button, {
    type: "button",
    variant: "contained",
    onClick: function onClick() {
      return setCount(0);
    }
  }, "\u30EA\u30BB\u30C3\u30C8")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(_AccessTime["default"], null), new Date().toTimeString()))));
};

var _default = CountUp;
exports["default"] = _default;