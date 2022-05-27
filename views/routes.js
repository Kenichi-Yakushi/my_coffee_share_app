"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = void 0;

var _UserController = require("./controller/UserController");

var Routes = [{
  method: "get",
  route: "/users",
  controller: _UserController.UserController,
  action: "all"
}, {
  method: "get",
  route: "/users/:id",
  controller: _UserController.UserController,
  action: "one"
}, {
  method: "post",
  route: "/users",
  controller: _UserController.UserController,
  action: "save"
}, {
  method: "delete",
  route: "/users/:id",
  controller: _UserController.UserController,
  action: "remove"
}];
exports.Routes = Routes;