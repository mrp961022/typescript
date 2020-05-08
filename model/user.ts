import { MsSqlDB } from '../moduls/db'
// 定义数据库的映射
class UserClass {
    userName: string | undefined;
    passWord: string | undefined;
} // 用户表字段

let UserModel = new MsSqlDB<UserClass>() // 用户表约束

export { UserClass, UserModel }