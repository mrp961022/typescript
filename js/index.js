"use strict";
// console.log("你好");
var str = "你好ts";
/**
 * 第一步 tsc --init 生成json文件  outDir生成目录修改
 */
/**
 * 第二步 点击任务(终端)  运行任务 选择监视tsconfig.json
 */
/**
  * ts 定义变量必须指定类型 且变量类型不能切换
  */
str = 'true';
// console.log(str)
/**
 * 第一种定义数组
 */
var arr = [11, 22, 33]; // 定义类型
// console.log(arr)
/**
 * 第二种定义数组
 */
var arr1 = [11, 22, 33]; // 定义类型
// console.log(arr1)
/**
 * 如果有多种类型
 * 则可以使用任意类型any
 */
var arr2 = [1, 2, 3, '4']; // any 任意类型
// console.log(arr2)
/**
 * 元组类型 属于数组的一种
 */
var arr3 = [1, 'ss']; // 对应的左边几个，右边就几个
var arr4 = [11, 22, 33, 'a']; // 可以随意
/**
 * 枚举类型
 */
var FlagName;
(function (FlagName) {
    FlagName[FlagName["success"] = 1] = "success";
    FlagName[FlagName["error"] = 4] = "error";
})(FlagName || (FlagName = {}));
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
var s = FlagName.success;
// console.log(s)
var f = FlagName.error;
// console.log(f)
// var e: Color = Color.blue // 如果没有赋值，则为下标
// console.log(e)
var ErrMsg;
(function (ErrMsg) {
    ErrMsg[ErrMsg["undefinded"] = -1] = "undefinded";
    ErrMsg[ErrMsg["null"] = -2] = "null";
    ErrMsg[ErrMsg["success"] = 1] = "success";
})(ErrMsg || (ErrMsg = {}));
var ef = ErrMsg.null;
// console.log(ef)
/**
 * 任意类型any
 */
// var oBox: any = document.getElementById('box') //操作dom节点 script应放在dom节点后面
// oBox.style.color = 'red'   // 由于ts没有object类型，则用any代替
/**
 * null undefinded (never 类型子类型)
 */
// var newNum:number;// 定义未赋值打印报错
var newNum; // 正确 同null 不能赋值
// console.log(newNum)
/**
 * 一个元素可能是number类型 null 或者undefined
 */
var num; // 定义多种类型
/**
 * void类型 无类型 定义方法无返回值
 */
// es5定义方法
// function get1() {
//     
//     console.log('bb')
// }
function get1() {
    // ts 标识方法没有返回值，没有返回任何类型
    // console.log('bb')
}
function get2() {
    // 有返回值为返回值类型
    return 111;
}
/**
 * never 其他类型 代表从不会出现的值
 * 生命never类型变量智能被never赋值
 */
var aa;
aa = undefined;
var aaa;
//  aaa=123 // 错误
// aaa=(()=>{
//   throw new Error('错误')
// })()
/**
 * 函数定义
 */
// es5 匿名函数和函数声明式
// function run(){
//   alert('run')
// }
// var run = function(){
//   alert('run')
// }
// ts中
// 函数声明
function run() {
    return '111';
}
// alert(run())
// 匿名
var fun2 = function () {
    return 111;
};
// ts方法传参
// 传参，返回值都需定义类型（匿名函数同）
var newFun = function (name, age) {
    return name + "..." + age;
};
// console.log(newFun('王', 1))
/**
 * 方法可选参数  ?
 * es5中形参实参可以不一样  但是ts中必须一样，如果不同可以设置可选参数
 */
var newFun1 = function (name, age) {
    if (age) {
        return name + "..." + age;
    }
    else {
        return name + "...\u4FDD\u5BC6";
    }
};
// alert(newFun1('王'))
// 注意可选参数 必须配置到参数最后面
// var newFun1=function(age:number,name?:string,):string {
//   if(age){
//     return `${name}...${age}`
//   }else{
//     return `${name}...保密`
//   }
// } // 错误写法
/**
 * 默认参数
 * es5中无法设置默认参数  es6和ts中可以设置默认参数
 */
var newFun2 = function (name, age) {
    if (age === void 0) { age = 20; }
    return name + "..." + age;
};
// alert(newFun2('张三'))
/**
 * 剩余参数
 * 三点运算符接受参数
 */
function sum11() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
function getInfoA(name, age) {
    if (age) {
        return "\u6211\u53EB" + name + ",\u6211\u7684\u5E74\u9F84" + age;
    }
    else {
        return "\u6211\u53EB" + name;
    }
}
function ajax(config) {
    var xhr = new XMLHttpRequest();
    var param = '';
    for (var attr in config.data) {
        param += attr + '=' + config.data[attr] + '&';
    }
    if (param) { //substring(start, end)截取字符串去掉最后的&符号
        param = param.substring(0, param.length - 1);
    }
    // console.log(param)
    if (config.type == 'get') {
        config.url += '?' + encodeURI(param);
    }
    xhr.open(config.type, config.url, true);
    var data = null;
    if (config.type == 'post') {
        data = param;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //post模式下必须加的请求头，这个请求头是告诉服务器怎么去解析请求的正文部分。
    }
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // console.log('成功')
            if (config.dateType == 'json') { // json
                // console.log(JSON.parse(xhr.responseText))
            }
            else { // 其他
                // console.log(xhr.responseText)
            }
        }
    };
}
ajax({
    type: 'get',
    url: 'http://a.itying.com/api/productlist',
    data: { name: 'ahangsfs' },
    dateType: 'json'
});
// 函数类型接口，对方法传入的参数及返回值进行约束
// 加密的函数类型
// interface encrypt {
//   (key: string, value: string): string; // 约束一个方法 传入两个string，返回一个string
// }
// var md5: encrypt = function (key: string, value: string): string {
//   // 定义encrypt约束时 传入必须两个string 返回值必须写，必须为string
//   alert(key + value)
//   return key + value;
// }
// md5('name','zhangsan')
// 可索引接口  对数组对象约束 不常用
// interface userArray{
//  [index:number]:string;
// }
// var Array1:userArray=['21','22'] // 约束为userArray类型，索引为数值型，值为string
// console.log(Array1)
// var obj1:userArray={1:'name',2:'age'} // 对象为这种类型时 索引为数值，值为string
// console.log(obj1)
// 类类型接口 对类的约束  和抽象类有点相似 常用
// interface Animal{
//   name:string;
//   eat(str:string):void;
// }
// class Dog implements Animal{
//   public name:string;
//   constructor(name:string){
//     this.name=name;
//   };
//   eat(){
//     console.log(this.name+'吃肉')
//   }
// }
// var d=new Dog('大黄')
// d.eat();
// class Cat implements Animal{
//   public name:string;
//   constructor(name:string){
//     this.name=name;
//   };
//   eat(food:string){
//     console.log(this.name+'吃'+food)
//   }
// }
// var dd=new Cat('小花')
// dd.eat('老鼠');
// 接口的拓展 接口可以继承接口
// interface Anmial {
//   eat(): void;
// }
// interface Person extends Anmial {
//   work(workValue:string): void;
// }
// class Web implements Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   eat() {
//     console.log(this.name+'吃馒头')
//    };
//   work(workValue:string) { // 如果接口有参数可以不写，但是如果接口没有参数不能写参数
//     console.log(this.name+"在"+workValue)
//   }
// }
// var w=new Web('小磊')
// w.work('写代码')
// interface Anmial {
//   eat(): void;
// }
// interface Person extends Anmial {
//   work(workValue: string): void;
// }
// class Pro {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   };
//   coding(code: string) {
//     console.log(this.name + code)
//   }
// }
// class Web extends Pro implements Person { // 可以继承和接口一起写
//   constructor(name: string) {
//     super(name);
//   }
//   eat() {
//     console.log(this.name + '吃馒头')
//   };
//   work(workValue: string) { // 如果接口有参数可以不写，但是如果接口没有参数不能写参数
//     console.log(this.name + "在" + workValue)
//   }
// }
// var w = new Web('小磊')
// w.work('写代码')
// w.coding('爱吃肉')
/**
 * ts 中的泛型
 * 泛型  可以创建可重用的接口类方法  可以支持多种数据类型
 */
// 只能返回string类型
//  function getData(vlaue:string):string{
//   return vlaue;
//  }
// 如果想同时返回string和number类型
// 可以设置any解决  但是any放弃了类型检查 期望传入什么类型返回什么类型
// 泛型可以支持不特定的数据类型  要求传入参数和返回参数数据类型一致
//  function getData<T>(value:T):T{ // T表示泛型  具体什么类型调用方法决定
//    return value;
//  }
// function getData<T>(value:T):any{ // T表示泛型  具体什么类型调用方法决定
//   return value;
// }
//  getData<number>(123) // 定义类型为number 传入只能时number
// getData<string>('123')
// 泛型类
// class MinClass {
//   public list: number[] = [];
//   add(num: number) { // 只能传入number类型
//     this.list.push(num)
//   }
//   min(): number {
//     var minNum = this.list[0];
//     for (var i = 1; i < this.list.length; i++) {
//       if (minNum > this.list[i]) {
//         minNum = this.list[i]
//       }
//     }
//     return minNum;
//   }
// }
// var m=new MinClass();
// m.add(21)
// m.add(23)
// m.add(2)
// m.add(34)
// alert(m.min())
// 类的泛型
// class MinClass<T>{
//   public list: T[] = [];
//   add(num: T):void { // 只能传入number类型
//     this.list.push(num)
//   }
//   min(): T {
//     var minNum = this.list[0];
//     for (var i = 1; i < this.list.length; i++) {
//       if (minNum > this.list[i]) {
//         minNum = this.list[i]
//       }
//     }
//     return minNum;
//   }
// }
// var m=new MinClass<number>();  // 实例化类，并且指定类的泛型number 也可写成<number|string>可以为number或string泛型
// m.add(21)
// m.add(23)
// m.add(2)
// m.add(34)
// alert(m.min())
// 泛型接口
// 第一种
// interface configFn{
//   <T>(value1:T):T;// 定义一个函数接口
// }
// var setData:configFn=function<T>(a:T){
//   return a;
// }
// alert(setData<string>('老王'))
// 第二种
// interface configFn<T>{
//   (value1:T):T;// 定义一个函数接口
// }
// function getData<T>(a:T){
//   return a;
// }
// var myGetData:configFn<string>=getData;
// // myGetData(111) // 错误
// alert(myGetData('111')) // 正确
// 把类作为参数的泛型类
// class User {
//   userName:string|undefined;
//   password:string|undefined; // 可以不赋值
//   // constructor(name:string){
//   //   this.userName=name;
//   // }
// }
// class ActiveCate{
//   title:string|undefined;
//   desc:string|undefined;
//   status:number|undefined;
// }
// class MySqlDB{
//   add(user:User):boolean{ // 可以用类作为参数来约束数据类型
//     console.log(user)
//     return true;
//   };
//   book(info:ActiveCate):boolean{
//     console.log(info)
//     return true;
//   }
// }
// // var u=new User()
// // u.userName="张三";
// // u.password="123456";
// // var db=new MySqlDB();
// // db.add(u);
// var u=new ActiveCate();
// u.title="国内";
// u.desc="新闻";
// u.status=2;
// var db=new MySqlDB();
// db.book(u)
// 使用泛型
// class User {
//   userName:string|undefined;
//   password:string|undefined; 
// }
// class ActiveCate{
//   title:string|undefined;
//   desc:string|undefined;
//   status:number|undefined;
//   constructor(title:string,desc:string,status?:number){
//     this.title=title;
//     this.status=status;
//     this.desc=desc
//   }
// }
// class MySqlDB<T>{
//   add(user:T):boolean{ // 可以用类作为参数来约束数据类型
//     console.log(user)
//     return true;
//   };
//   update(info:T,id:number):boolean{
//     console.log(info)
//     console.log(id);
//     return true;
//   }
// }
// // 想给user表增加数据
// // var u=new User();
// // u.userName="张三";
// // u.password="12324"
// // var db=new MySqlDB<User>(); // 泛型类，对不特定类型进行验证
// // db.add(u); 
// // var a=new ActiveCate("分类","新闻",112);
// // var db=new MySqlDB<ActiveCate>();
// // db.add(a);
// var a= new ActiveCate("分类","新闻",222)
// var db=new MySqlDB<ActiveCate>();
// db.update(a,222);
/**
 * 统一操作mysql  mongodb mssql的底层操作
 * 定义一个操作数据的库，支持mysql  mongdb  mssql
 * 约束统一规范，代码重用
 */
// interface DBI<T> {
//   add(info: T): boolean;
//   update(info: T, id: number): boolean;
//   delete(id: number): boolean;
//   get(id: number): any[];
// }
// // 定义一个mysql类
// class MySqlDB<T> implements DBI<T>{  // 要实现泛型接口 类也应该是泛型类
//   constructor() {
//     console.log('数据库建立连接')
//   }
//   add(info: T): boolean {
//     console.log(info)
//     return true;
//   };
//   update(info: T, id: number): boolean {
//     throw new Error("Method not implemented.");
//   };
//   delete(id: number): boolean {
//     throw new Error("Method not implemented.");
//   };
//   get(id: number): any[] {
//     throw new Error("Method not implemented.");
//   };
// }
// class MsSqlDB<T> implements DBI<T>{
//   add(info: T): boolean {
//     console.log(info)
//     return true;
//   };
//   update(info: T, id: number): boolean {
//     throw new Error("Method not implemented.");
//   };
//   delete(id: number): boolean {
//     throw new Error("Method not implemented.");
//   };
//   get(id: number): any[] {
//     var list = [
//       { title: 111, desc: "xxxx" },
//       { title: 222, desc: "dsfsfs" }
//     ];
//     return list;
//   };
// }
// // 操作用户表
// class User {
//   username: string | undefined;
//   password: string | undefined;
// }
// var u = new User();
// u.username = '张三'
// u.password = 'fsadf'
// var omysql = new MySqlDB<User>(); // 约束传入参数 
// // omysql.add(u);
// var mssql = new MsSqlDB<User>();
// mssql.add(u);
// console.log(mssql.get(4));
/**
 * ts 中的模块
 * 内部模块
 * 外部模块
 */
// import {getData} from './moduls/db'
// getData();
/**
 * 命名空间
 * 用于组织代码，避免命名冲突
 */
// namespace A {  // namespace 命名空间，避免命名冲突 
//   interface Animal {
//     name: string;
//     eat(): void;
//   }
//   export class Dog implements Animal { // 私有的，需要export暴露出来
//     name: string;
//     constructor(theName: string) {
//       this.name = theName;
//     }
//     eat() {
//       console.log(`${this.name}吃狗粮`);
//     }
//   }
//   export class Cat implements Animal {
//     name: string;
//     constructor(theName: string) {
//       this.name = theName;
//     }
//     eat() {
//       console.log(`${this.name}吃老鼠`);
//     }
//   }
// }
// // import {B} from './moduls/spaceName'
// var d=new A.Dog('狼狗')
// d.eat();
// var e=new B.Dog('小狼狗')
// e.eat();
/**
 * 装饰器
 * 一种方法 一种特殊类型的声明，可以放在类、属性、方法中拓展类、属性、方法 可以修改类的行为
 * 使用方式，卸载类、属性、方法前，用于修改或拓展类、属性、方法
 * es7标准特性之一
 */
// 类装饰器
// 普通装饰器
//  function logClass(params:any){ // 装饰器
//   // console.log(params); // params 当前类
//   params.prototype.apiUrl='xxx'  // 动态拓展的属性
//   params.prototype.run=function(){
//     console.log('我是一个run方法') // 拓展方法
//   }
//  }
//  @logClass
//  class HttpClient{
//    constructor(){
//    }
//    getData(){
//    }
//  }
//  var http:any=new HttpClient();
//  console.log(http.apiUrl);
//  http.run();
// 装饰器工厂
//  function logClass(params:string){ // 装饰器
//   return function(target:any){
//     // console.log(target);  // 拓展的类
//     // console.log(params);  // 传参
//     target.prototype.apiUrl=params;
//   }
//  }
//  @logClass('http://www.itying.com/api')
//  class HttpClient{
//    constructor(){
//    }
//    getData(){
//    }
//  }
//  var http:any=new HttpClient();
//  console.log(http.apiUrl)
// 类装饰器重载构造函数
//  function logClass(target:any){ // 装饰器
//     console.log(target)
//     return class extends target{
//       apiUrl:any; // 类装饰器重载以前的类
//       getData(){ 
//         this.apiUrl=this.apiUrl+'---'
//         console.log(this.apiUrl)
//       }
//     }
//  }
//  @logClass
//   class HttpClient{
//     apiUrl:string|undefined;
//     constructor(){
//       this.apiUrl='我是构造函数apiurl'
//     }
//     getData(){
//       console.log(this.apiUrl)
//     }
//  }
//  var a=new HttpClient;
//  a.getData();
// 属性装饰器 接收两个参数  1.构造器函数 2.成员的名称
// function logClass(params: string) { // 类装饰器
//   return function (target: any) {
//     // console.log(target);  // 拓展的类
//     // console.log(params);  // 传参
//   }
// }
// // 属性装饰器
// function logProperty(params: any) {
//   return function (target: any, attr: any) {
//     // console.log(target);
//     target[attr] = params;
//     // console.log(attr)
//   }
// }
// @logClass('xxx')
// class HttpClient {
//   @logProperty('http://itying.com')  // 装饰器写在谁前面就修饰谁
//   public url: any | undefined;
//   @logProperty('老王')
//   public name: string | undefined;
//   constructor() {
//   }
//   getData() {
//     // console.log(this.name)
//   }
// }
// var a = new HttpClient();
// a.getData();
// 方法装饰器
// 接收三个参数 1.原型对象 2.方法名称 3.方法描述
// 扩展当前类的属性和方法
// function get(params:any){
//   return function(target:any,methods:any,desc:any){
//     console.log(target);
//     console.log(methods);
//     console.log(desc);
//     target.apiUrl='xxx';
//     target.run=function(){  // 扩展当前类的属性和方法
//       console.log('run');
//     }
//   }
// }
// class HttpClient {
//   public url: any | undefined;
//   constructor() {
//   }
//   @get('http://www.itying.com')
//   getData() {
//     console.log(this.url)
//   }
// }
// var http:any=new HttpClient()
// console.log(http.apiUrl)
// http.run();
// 修改装饰器方法
// function get(params:any){
//   return function(target:any,methods:any,desc:any){
//     // console.log(target);
//     // console.log(methods);
//     // console.log(desc);
//     // 修改当前方法 把装饰器的方法传入参数改为string类型
//     // 1.保存当前方法
//     var oMthod=desc.value
//     desc.value=function(...args:any[]){
//       args=args.map((value)=>{
//         return String(value)
//       })
//       oMthod.apply(this,args) // 对象冒充
//     }
//   }
// }
// class HttpClient {
//   public url: any | undefined;
//   constructor() {
//   }
//   @get('http://www.itying.com')
//   getData(...args:any[]) {
//     console.log('我是getData的方法')
//     console.log(args)
//   }
// }
// var http:any = new HttpClient();
// http.getData(111,111,222)
// 方法参数装饰器  不常用
// function logParams(params:any){
//   return function(target:any,methodName:any,paramsIndex:any){
//     // console.log(params)
//     // console.log(target)
//     // console.log(methodName);
//     // console.log(paramsIndex)
//     target.apiUrl=params;
//   }
// }
// class HttpClient {
//   public url: any | undefined;
//   constructor() {
//   }
//   getData(@logParams('xxxx') uuid:any) {  // 参数装饰器
//     console.log('我是getData的方法')
//   }
// }
// var http:any =new HttpClient();
// http.getData(123456)
// console.log(http.apiUrl)
