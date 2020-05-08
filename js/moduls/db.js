"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// 定义所有的数据库的类
var AllDb = /** @class */ (function () {
    function AllDb() {
        // console.log("数据库建立连接")
    }
    AllDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    AllDb.prototype.update = function (info, id) {
        console.log(info);
        return true;
    };
    AllDb.prototype.delete = function (id) {
        console.log(id);
        return true;
    };
    AllDb.prototype.get = function (id) {
        var list = [{ id: 1, age: 2 }]; // 获取指定id数据
        console.log(list);
        return list;
    };
    return AllDb;
}());
// MySqlDB
var MySqlDB = /** @class */ (function (_super) {
    __extends(MySqlDB, _super);
    function MySqlDB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MySqlDB;
}(AllDb));
exports.MySqlDB = MySqlDB;
// MongoDB
var MongoDB = /** @class */ (function (_super) {
    __extends(MongoDB, _super);
    function MongoDB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MongoDB;
}(AllDb));
exports.MongoDB = MongoDB;
// MsSqlDB
var MsSqlDB = /** @class */ (function (_super) {
    __extends(MsSqlDB, _super);
    function MsSqlDB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MsSqlDB;
}(AllDb));
exports.MsSqlDB = MsSqlDB;
