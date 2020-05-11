"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../moduls/db");
// 定义数据库的映射
class ArticleClass {
} // 文章表字段
exports.ArticleClass = ArticleClass;
let ArticleModel = new db_1.MySqlDB(); // 文章表约束
exports.ArticleModel = ArticleModel;
