/**
 * typeScript 数据类型
 * 布尔类型（boolean）
 * 数字类型（number）
 * 字符串类型（string）
 * 数组类型（array）
 * 元组类型（tuple）
 * 枚举类型（enum）
 * 任意类型（any）
 * null 和 undefined
 * void类型
 * never类型
 */
 // es5（正确）
 // ts（错误）
 var flag = true;
flag = 456;

/**
 * ts代码必须指定类型
 * 
 */
// ts 定义变量
// var flag:boolean=true;

/**
 *  tsc --init 生成tsconfig.json 文件
 *  可以监听导出js文件 文件名和ts文件一样
 *  tscconfig.json文件中outDir指定typescript监控导出js文件的目录
 */