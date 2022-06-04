"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));

var _styles = require("@mui/material/styles");

var _reactHookForm = require("react-hook-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var darkTheme = (0, _styles.createTheme)({
  palette: {
    mode: "dark"
  }
});
var GenderEnum;

(function (GenderEnum) {
  GenderEnum["female"] = "female";
  GenderEnum["male"] = "male";
  GenderEnum["other"] = "other";
})(GenderEnum || (GenderEnum = {}));

var CoffeeIndex = function CoffeeIndex() {
  var _useForm = (0, _reactHookForm.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_styles.ThemeProvider, {
    theme: darkTheme
  }, /*#__PURE__*/React.createElement(_CssBaseline["default"], null), /*#__PURE__*/React.createElement(_material.Grid, null, /*#__PURE__*/React.createElement("h1", null, "CoffeeIndex")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/React.createElement("label", null, "First Name"), /*#__PURE__*/React.createElement("input", register("firstName")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Gender Selection"), /*#__PURE__*/React.createElement("select", register("gender"), /*#__PURE__*/React.createElement("option", {
    value: "female"
  }, "female"), /*#__PURE__*/React.createElement("option", {
    value: "male"
  }, "male"), /*#__PURE__*/React.createElement("option", {
    value: "other"
  }, "other")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "\u9001\u4FE1"))));
};

var _default = CoffeeIndex;
exports["default"] = _default;