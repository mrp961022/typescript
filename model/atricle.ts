import { MySqlDB } from '../moduls/db'
// 定义数据库的映射
class ArticleClass {
    title: string | undefined;
    desc: string | undefined;
    id: number | undefined
} // 文章表字段

let ArticleModel = new MySqlDB<ArticleClass>() // 文章表约束

export { ArticleClass, ArticleModel }