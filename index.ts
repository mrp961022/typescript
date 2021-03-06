let flag: boolean = true;  // typescript 声明变量需要定义类型 且类型不能改变
flag = false  // 正确
// falg = 1  // 错误
let a: number = 123;
a = 123.2
// console.log(a)
let str: string = "this is ts"
str = "yes,it is ts"
// console.log(str)

// 数组类型
let arr: Array<number> = [1, 2, 3]  // 定义变量需要指定类型
let arr1: Array<number | string> = [1, 2, 3, "3"] // 可以指定多个类型
let arr2: string[] = ["1", "2"] // 另一种方式定义类型
// console.log(arr)
// console.log(arr1)
// console.log(arr2)

// 元组类型（数组一种）
let arr3: [string, number, boolean] = ["1", 2, true] // 可以指定数组中每个值的类型
// console.log(arr3)

// 枚举类型 主要用于定义标识符
enum Flag { success = 1, error = -1 }
let f = Flag.success;
let l = Flag.error;
// console.log(f)
// console.log(l)
enum Color { red, blue, orange } // 没有赋值默认为索引值 如果其中有一个为数字的话 后面的元素在他基础上递增
let clr = Color.blue;
// console.log(clr)

// 任意类型any undefined null never
let numAny: any = 1; // 任意类型可以随意赋值 主要用于获取dom节点
numAny = "2"
// console.log(numAny)
// let oBox: any = document.getElementById("box");
// oBox.style.color = "red"
// let num1: number
// // console.log(num1) // 报错
let num1: undefined | number | null
// console.log(num1) // 正确

// void 类型 没有任何类型 一般用于方法没有返回值
function run(): void {
  // console.log(run)
}
function eat(animal: string): string { // 方法需要定义返回值类型 如果没有就是void 入参也要定义类型
  return animal + " eat meat"
}
// console.log(eat("cat"))

// never 类型 表示从不会出现的值
let aa: never; // 其他类型 基本用不上
// aa = 1; // 错误
// aa = (() => {
//   throw new Error("错误") //抛出一个异常
// })()

// ts中的函数 ts中方法传参的类型需要指定
// 见上方 run 方法和 eat 方法  ts定义函数与es5基本相同 但需要指定入参及返回值类型
// 匿名函数定义方式
let run1 = function (type: string, toy: string): void {
  // console.log(`${type} play ${toy}`)
}
run1("cat", "ball")

// 方法可选参数 ? 可选 可以不用传指定参数
let run2 = function (type: string, toy?: string): void {
  // console.log(`${type}${toy ? "play" : ""}${toy || ""}`)
}
run2("cat")

// 默认参数 如果有默认参数 默认参数可以不用写
let getInfo = function (name: string, age: number = 20) {
  // console.log(`${name}---${age}`)
}
getInfo("老王")

// 剩余参数 三点运算符 接收形参传过来的值 如果前面有形参 有几个就对应入参的几个 其他的放在数组中
function sum(str: string, ...num: number[]): string {
  let sum: number = 0
  for (let i: number = 0; i < num.length; i++) {
    sum += num[i]
  }
  return str + sum
}
// alert(sum("总和是", 1, 2, 3, 4, 5, 6))

// 函数重载 两个或者两个以上重名函数 但参数不一样 这时会出现函数重载的情况
// ts实现类似java的变成的写法 用于限定入参
// ts中的重载 参数不一样
function run3(name: string): string;
function run3(age: number): number;
function run3(str: any): any {
  if (typeof str == "string") {
    return str
  } else {
    return str
  }
};
// run3(true) // 错误 不是 string 或者 number
// alert(run3("meat")) // 正确

// ts重载 参数一样
function run4(name: string): string;
function run4(name: string, age: number): string;
function run4(name: any, age?: any): any {
  if (age) {
    // console.log(`我叫${name} 我${age}岁`)
  } else {
    // console.log(`我叫${name}`)
  }
};
run4("王小二")
run4("王小二", 18)
// run4(111,222) // 错误写法

//  ts中的类
class Person {
  name: string   // 前面省略public关键词
  constructor(name: string) {  // 构造函数 实例化时触发的方法 实例化时的入参
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name
  }
  run(): void {
    alert(this.name)
  }
}

let p = new Person("张三")
// p.run();
// p.setName("李四")
// alert(p.getName())

// ts中的继承  extends super关键字 ts中父类方法与子类方法一致 子类可拓展自己方法
// ts类里的修饰符 三种修饰符
/**
 * public  共有的 类里面 子类 类外面都可访问 默认为public
 * protected  保护类型 在类和子类中可以访问 类外部不能访问
 * private  私有类型 只能在类里可以访问 不能在子类或者类外访问
 */
class Person1 {
  protected name: string // 保护类型 不能再外部访问
  constructor(name: string) {
    this.name = name;
  }
  public eat(): string {  // 共有类型 可以在任何地方访问
    return this.run();
  }
  private run(): string { // 私有类型 只能在此类中使用
    return `${this.name}在运动`
  }
}

class Student extends Person1 { // extends 和 super初始化父类属性和方法
  constructor(name: string) {
    super(name);
  }
  study(): void {
    alert(`${this.name}在看书`)
  }
  // run(): string {
  //   return `${this.name}没在运动` // 若父类与子类有相同方法 会执行子类方法
  // }
}
let pa = new Person1("老李")
// alert(pa.eat())
let p1 = new Student("李四")
// // console.log(p1.name)
// alert(p1.run()) // 私有类型不能访问
// p1.study()

// ts中的类  静态方法 静态方法想要访问属性需要将变量定义为静态属性
class Person2 {
  name: string
  static age: number = 20 // 静态属性
  constructor(name: string) {
    this.name = name;
  }
  run(): void {
    alert(`${this.name}在运动`)
  }
  work(): void {
    alert(`${this.name}在工作`)
  }
  static print(): void {
    alert("print静态方法" + Person2.age) // 静态方法 或者this.age
  }
}
let p2 = new Person2("小赵")
// Person2.print()

// 多态 父类定义一个方法不去实现 让他的子类去实现 每一个子类有不同的表现
// 多态也是继承的一种表现 属于继承
class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  eat(): void {
    // console.log("吃的方法")
  }
}
class Dog extends Animal {  // 子类1
  constructor(name: string) {
    super(name)
  }
  eat(): string {  // 重写父类的方法
    return this.name + "吃肉"
  }
}
class Cat extends Animal {   // 子类2
  constructor(name: string) {
    super(name)
  }
  eat(): string {  // 重写父类的方法
    return this.name + "吃老鼠"
  }
}

// 抽象方法 只能放在抽象类中 不能被直接实例化
// 抽象类和抽象方法定义标准  例 Animal 要求子类必须包含 eat 方法
// 父类不包含抽象类的实现 具体在子类中实现
abstract class Animal1 {
  name: string
  constructor(name: string) {
    this.name = name;
  }
  abstract eat(): any;
}
class Dog1 extends Animal1 {
  // 抽象类子类必须实现抽象类中的抽象方法
  constructor(name: string) {
    super(name)
  }
  eat() {
    return `${this.name}吃肉`
  }
}
class Cat1 extends Animal1 {
  constructor(name: string) {
    super(name)
  }
  eat() {
    return `${this.name}吃老鼠`
  }
}
// let dog1 = new Dog1("小黑")
// alert(dog1.eat())
let cat1 = new Cat1("小黄")
// alert(cat1.eat())

// ts中的接口 接口是一种程序规范 对属性、函数、类的行为进行约束
function printLabel(label: string): void { // 约束传入参数必须是一个并且为字符串类型
  // console.log(`${label}`)
}
// 对传入参数json的约束
function printLabel1(labelInfo: { label: string }): void { // 约束传入参数必须是对象 对象内必须有leabel字符串
  // console.log(`${labelInfo.label}`)
}
printLabel1({ label: "11111" })

// 属性接口 对方法入参批量约束 限制入参的格式
interface FullName {
  firstName: string;
  lastName: string;
  age?: number; // 可选属性 可以不传
}
function outName(fullName: FullName): void { // 要求传入对象 必须有firstName lastName 且必须为string类型
  // console.log(`${fullName.firstName} ${fullName.lastName}`)
}
function cnStrudnt(fullName: FullName): void {
  // console.log(`${fullName.firstName}${fullName.lastName}`)
}
outName({ firstName: "布鲁斯", lastName: "李" })
cnStrudnt({ firstName: "王", lastName: "小二" })

console.log(md5)

// ts封装ajax  不支持ie6
interface Config {
  type: string;
  url: string;
  data?: string;
  dataType: string;
  contentType?: string;
}
function ajax(config: Config) {
  let xhr = new XMLHttpRequest();
  if (config.type.toLocaleLowerCase() == 'get') {
    xhr.open(config.type, `${config.url}?${config.data}`, true);
  } else {
    xhr.open(config.type, `${config.url}`, true);
  }
  if (config.contentType) {
    xhr.setRequestHeader('Content-Type', config.contentType)
  }
  xhr.send(config.data);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // // console.log("成功")
      if (config.dataType == "json") {
        // // console.log(JSON.parse(xhr.responseText))
      } else {
        // // console.log(xhr.responseText)
      }

    }
  }
}
// ajax({
//   type: "post",
//   url: "http://a.itying.com/api/productlist", // url接口
//   data: `userName=${'王'}&passWord=${'111222'}`,
//   dataType: "json",
//   contentType: "application/x-www-form-urlencoded;charset=UTF-8"  // post要加请求头
// })
ajax({
  type: "get",
  url: "http://a.itying.com/api/productlist", // url接口
  data: `userName=${'王'}&passWord=${'111222'}`,
  dataType: "json",
})
// 函数类型接口 对方法传入参数及返回值进行约束
// 加密的函数类型接口
interface encrypt {
  (key: string, value: string): string; // 声明入参为 key 和 value 的字符串 返回值为字符串的约束
}
// let md5: encrypt = function (key: string, value: string): string { // 必须有key value且为字符串 返回值必须为字符串
//   return `${key}${value}`
// }
let sha1: encrypt = function (key: string, value: string): string {
  return `${value}${key}`
}
// alert(md5("name", "张三"))
// alert(sha1("aaa", "李四"))

// 可索引接口 对数组对象的约束 不常用
// let arr4: number[] = [1, 2, 3]
// let arr5: Array<number> = [1, 2, 3]
interface UserArr {
  [index: number]: number
}
interface UserObj {
  [index: string]: number | string
}
let arr4: UserArr = [1, 2, 3] // 数组约束
let obj: UserObj = { name: "王", age: 20 } // 对象约束

// 类类型接口 对类的约束 和抽象类相似
interface DongWu {
  name: string; // 属性
  eat(str: string): void; // 方法 必须有 但是可以不用写入参
}

class Dog2 implements DongWu {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(str: string): void {
    // console.log(this.name + "吃" + str)
  }
}
class Cat2 implements DongWu {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    // console.log(this.name + "吃老鼠")
  }
}
let d = new Dog2("小黑")
d.eat("肉")
let c = new Cat2("小花")
c.eat()

// 接口拓展 接口可以继承接口
interface Animal2 {
  eat(): void;
}
interface Person3 extends Animal2 { // 注意不要和类或者其他接口重名
  work(): void;
}
class WorkMan {
  name: string
  constructor(name: string) {
    this.name = name;
  }
  harder(work: string): void {
    // console.log(work + "太难了")
  }
}
class WebWorker extends WorkMan implements Person3 { // 定义的类要有 eat 和 work 方法
  constructor(name: string) { // 可以类和接口一起继承
    super(name)
  }
  work(): void {
    // console.log(this.name + "在打代码")
  }
  eat(): void {
    // console.log(this.name + "吃肉")
  }
}
let wang = new WebWorker("小王")
wang.work()
wang.eat()
wang.harder("C++")

// ts中的泛型 解决类、方法、接口可复用性
function getData<T>(value: T): T { // 泛型的 T 可以选择任意大写字母
  return value
}
getData<number>(123) // 约束入参格式 

// 泛型类
// 最小推算法 同时支持字符串和数字两种类型 用过泛型来实现
class MinClass<T>{
  public list: T[] = [];
  add(value: T): void {
    this.list.push(value)
  }
  min(): T {
    let minNum = this.list[0];
    for (let i: number = 1; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i]
      }
    }
    return minNum
  }
}
let numList = new MinClass()
// let numList1 = new MinClass<string>() // 如果指定类型则只能使用指定类型
numList.add(1)
numList.add("0")
numList.add("2")
numList.add(1)
// console.log(numList.min())

// 泛型接口
// 第一种定义泛型接口
interface Configfn {
  <T>(value1: T): T;
}
let setData: Configfn = function <T>(value: T): T {
  return value
}
// alert(setData<string>("张三")) // 指定入参格式
// console.log(setData<number>(111))

// 第二种定义泛型
interface Configfn1<T> {
  (value: T): T;
}
let setData1: Configfn1<string> = function (value: string): string {
  return value
}
// console.log(setData1("20"))

// 泛型类 把类作为参数来约束参数的泛型类
/**
 * 定义一个user类 映射数据库字段
 * 定义一个MysqlDB的类 用于操作数据库
 * 把user类作为参数传入MysqlDB
 */
class MysqlDB<T>{
  add(info: T): boolean {
    // console.log(info)
    return true;
  }
  update(info: T, id: number): boolean {
    // console.log(info)
    // console.log(id)
    return true
  }
}
class User {
  userName: string | undefined;
  passWord: string | undefined;
  constructor(userName: string, passWord: string) {
    this.userName = userName;
    this.passWord = passWord
  }
}
class ArticlaCate {
  title: string | undefined;
  desc: string | undefined;
  status: number | undefined;
  id: number | undefined;
  constructor(params: { title: string, desc: string, status?: number, id?: number }) {
    this.title = params.title;
    this.desc = params.desc;
    this.status = params.status;
    this.id = params.id;
  }
}
let user1 = new User("wang", "123456")
let userDB = new MysqlDB<User>() // 在这里对数据约束
// userDB.add(user1)

let aaa = new ArticlaCate({ title: "国内", desc: "国内新闻", status: 111 })
aaa.id = 111
let db = new MysqlDB<ArticlaCate>()  // 在这里对数据约束
// db.add(aaa)
db.update(aaa, 11)

// ts封装统一操作 mysql mongodb mssql的底层库
// 代码重用
interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}

// ts中的模块 把一些公共功能分离出去 使用 export 暴露 其他文件需要使用的时候 import 引入
import { UserClass, UserModel } from "./model/user"
import { ArticleClass, ArticleModel } from "./model/atricle"
let u = new UserClass()
u.userName = "zhangsan"
u.passWord = "123456"
// UserModel.add(u)
// UserModel.get(11)

let article = new ArticleClass();
article.title = "中国"
article.desc = "中国地理"
article.id = 1232332
// ArticleModel.get(1232332)

// ts中的命名空间  组织代码 避免命名空间
import { A, B } from "./moduls/namespace"
let ADog = new A.Dog("狼狗")
// console.log(ADog.eat())

let BDog = new B.Dog("大黄狗")
// console.log(BDog.eat())

// // ts中的装饰器 类装饰器 属性装饰器 方法装饰器等等
// // 类装饰器
// // 普通装饰器 传入 params 当前类
// function logClass(params: any) {
//   // console.log(params) // params就是当前类 可以在这里拓展属性或者方法
//   params.prototype.apiUrl = "xxxx" // 动态拓展的属性
//   params.prototype.run = function (): void {
//     console.log("我是一个run方法")
//   }
// }
// @logClass       // 调用装饰器 在那个上面写就是装饰那个
// class HttpClient {
//   constructor() {

//   }
//   getData(): void { }
// }

// let http: any = new HttpClient();
// console.log(http.run())

// 装饰器工厂 带参数的装饰器 应用比较多
function logClass1(params: string) {
  return function (target: any) {
    target.prototype.apiUrl = params
  }
}
@logClass1("http://www.itying.com/api")
class HttpClient1 {
  constructor() {

  }
  getData(): void { }
}
let http1: any = new HttpClient1()
// console.log(http1.apiUrl)

// 类装饰器重载构造函数 每个属性 方法都要修改
function logClass2(target: any) {
  return class extends target {
    apiUrl: string = "我是修改后的数据"
    getData() {
      console.log(this.apiUrl + "111")
    }
  }
}
@logClass2
class HttpClient2 {
  public apiUrl: string | undefined
  constructor() {
    this.apiUrl = "我是构造函数里面的apiUrl"
  }
  getData(): void {
    console.log(this.apiUrl)
  }
}

let http2 = new HttpClient2();
// http2.getData()

// 属性装饰器 接收两个参数 原型对象 当前属性名称
// 类装饰器
function logClass3(params: string) {
  return function (target: any) {
    target.prototype.apiUrl = params
  }
}
// 属性装饰器
function logProperty(parmas: any) {
  return function (target: any, attr: any) {
    // target 类
    // attr 装饰器装饰的属性 写在那个属性前面
    target[attr] = parmas;
  }
}
@logClass3("xxx")
class HttpClient3 {
  @logProperty('http://itying.com')
  public url: string | undefined
  constructor() {

  }
  getData(): void {
    console.log(this.url)
  }
}
let http3: any = new HttpClient3()
// http3.getData();
// 装饰器
function get(parmas: any) {
  return function (target: any, methodName: any, desc: any) {
    // console.log(target) // 方法的原型对象
    // console.log(methodName) //方法的名称
    // console.log(desc) // 方法的属性描述 里面的value就是方法
    // target.apiUrl = "xxx"
    // target.run = function (): void {
    //   console.log('run')
    // }
    // 修改装饰器的方法 把装饰器方法传入所有参数改为string
    // 1.保存当前方法
    let oMethod = desc.value;
    // 替换当前方法
    // desc.value = function (...args: any[]) {
    //   args = args.map((item) => {
    //     return String(item);
    //   })
    //   console.log(args)
    // }
    // 修改当前方法 对象冒充
    desc.value = function (...args: any[]) {
      args = args.map((item) => {
        return String(item);
      })
      oMethod.apply(this, args) // 对象冒充
    }
  }
}
class HttpClient4 {
  public url: string | undefined
  constructor() {

  }
  @get('http://www.itying.com')
  getData(...args: any[]): void {
    console.log(args)
    console.log("我是getData的方法")
  }
}

let http4: any = new HttpClient4();
// http4.run()
// http4.getData(1, 2, 3, true)

// 方法参数装饰器 为类的原型添加一些元数据 用的比较少
function logParams(params: any) {
  return function (target: any, paramsName: any, paramsIndex: any) {
    // console.log(target)  // 原型对象
    // console.log(paramsName)  // 方法名称
    // console.log(paramsIndex) // 参数索引
    // console.log(params)
    target.apiUrl = params
  }
}
class HttpClient5 {
  public url: string | undefined
  constructor() {

  }
  getData(@logParams('xxxx') uid: any): void {
    console.log('1232')
  }
}

let http5: any = new HttpClient5();
// http5.getData(123456)
// console.log(http5.apiUrl)

// 各种装饰器的执行顺序
// 属性装饰器=>方法发装饰器=>方法参数装饰器=>类装饰器
// 如果有多个同类装饰器 从后往前执行 例 两个方法装饰器会先执行最后一个方法装饰器
import { zsq } from './moduls/zsq'
@zsq.logClass1('http://www.itying.com')
@zsq.logClass2('xxxx')
class HttpClient6 {
  @zsq.logAttribute()
  public url: string | undefined
  constructor() {

  }
  @zsq.logMethods()
  getData(): void { }
  setData(@zsq.logParams1() attr1: any, @zsq.logParams2() attr2: any) { }
}
let http: any = new HttpClient6();
