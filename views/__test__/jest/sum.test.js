"use strict";

var _sum = _interopRequireDefault(require("./sum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test("adds 1 + 2 to equal 3", function () {
  expect((0, _sum["default"])(1, 2)).toBe(3);
});