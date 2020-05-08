"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../moduls/db");
// 定义数据库的映射
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    return UserClass;
}()); // 用户表字段
exports.UserClass = UserClass;
var UserModel = new db_1.MsSqlDB(); // 用户表约束
exports.UserModel = UserModel;
