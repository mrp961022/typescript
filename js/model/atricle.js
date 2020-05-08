"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../moduls/db");
// 定义数据库的映射
var ArticleClass = /** @class */ (function () {
    function ArticleClass() {
    }
    return ArticleClass;
}()); // 文章表字段
exports.ArticleClass = ArticleClass;
var ArticleModel = new db_1.MySqlDB(); // 文章表约束
exports.ArticleModel = ArticleModel;
