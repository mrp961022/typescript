"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../moduls/db");
// 定义数据库的映射
class UserClass {
} // 用户表字段
exports.UserClass = UserClass;
let UserModel = new db_1.MsSqlDB(); // 用户表约束
exports.UserModel = UserModel;
