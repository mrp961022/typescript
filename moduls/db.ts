// 定义所有的数据库的类
interface DBI<T> {
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}

// 定义所有的数据库的类
class AllDb<T> implements DBI<T> {
    constructor() {
        // console.log("数据库建立连接")
    }
    add(info: any): boolean {
        console.log(info)
        return true;
    }
    update(info: any, id: number): boolean {
        console.log(info)
        return true;
    }
    delete(id: number): boolean {
        console.log(id)
        return true;
    }
    get(id: number): any[] {
        let list = [{ id: 1, age: 2 }] // 获取指定id数据
        console.log(list)
        return list;
    }

}
// MySqlDB
class MySqlDB<T> extends AllDb<T>{ }

// MongoDB
class MongoDB<T> extends AllDb<T>{ }

// MsSqlDB
class MsSqlDB<T> extends AllDb<T>{ }

export { MySqlDB, MongoDB, MsSqlDB }