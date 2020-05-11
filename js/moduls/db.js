"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 定义所有的数据库的类
class AllDb {
    constructor() {
        // console.log("数据库建立连接")
    }
    add(info) {
        console.log(info);
        return true;
    }
    update(info, id) {
        console.log(info);
        return true;
    }
    delete(id) {
        console.log(id);
        return true;
    }
    get(id) {
        let list = [{ id: 1, age: 2 }]; // 获取指定id数据
        console.log(list);
        return list;
    }
}
// MySqlDB
class MySqlDB extends AllDb {
}
exports.MySqlDB = MySqlDB;
// MongoDB
class MongoDB extends AllDb {
}
exports.MongoDB = MongoDB;
// MsSqlDB
class MsSqlDB extends AllDb {
}
exports.MsSqlDB = MsSqlDB;
