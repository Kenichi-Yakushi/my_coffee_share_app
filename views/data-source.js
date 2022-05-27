"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppDataSource = void 0;

require("reflect-metadata");

var _typeorm = require("typeorm");

var _User = require("./entity/User");

var AppDataSource = new _typeorm.DataSource({
  type: "mysql",
  host: "ssr-sample-db",
  port: 3306,
  username: "nodeexpressor",
  password: "secret",
  database: "my_coffee_share_app_db",
  synchronize: true,
  logging: false,
  entities: [_User.User],
  migrations: [],
  subscribers: []
}); //export default AppDataSource;

exports.AppDataSource = AppDataSource;