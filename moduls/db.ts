var dburl:string="xxxxx";
export function getData(){ // 在浏览器中会报错，需要babelrc编译后使用，
    console.log('获取数据库的返回值')
    return [
        {title:111},
        {title:111},
        {title:111},
        {title:111}
    ]
}