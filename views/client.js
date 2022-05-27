"use strict";

var _client = require("react-dom/client");

var _CountUp = _interopRequireDefault(require("./CountUp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import React from "react";
var container = document.getElementById("app");
var root = (0, _client.hydrateRoot)(container, /*#__PURE__*/React.createElement(_CountUp["default"], null)); // idがappの部分をhydrateで描画する
// root.render(<CountUp />);
// const root = hydrateRoot(container, <CountUp />);