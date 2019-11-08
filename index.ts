// console.log("你好");

var str: string = "你好ts"
/**
 * 第一步 tsc --init 生成json文件  outDir生成目录修改
 */

/**
 * 第二步 点击任务(终端)  运行任务 选择监视tsconfig.json
 */

/**
  * ts 定义变量必须指定类型 且变量类型不能切换
  */
str = 'true'
// console.log(str)
/**
 * 第一种定义数组
 */

var arr: number[] = [11, 22, 33]// 定义类型
// console.log(arr)

/**
 * 第二种定义数组
 */

var arr1: Array<number> = [11, 22, 33]// 定义类型
// console.log(arr1)

/**
 * 如果有多种类型
 * 则可以使用任意类型any
 */

var arr2: Array<any> = [1, 2, 3, '4'] // any 任意类型
// console.log(arr2)

/**
 * 元组类型 属于数组的一种
 */

var arr3: [number, string] = [1, 'ss'];// 对应的左边几个，右边就几个

var arr4: Array<number | string> = [11, 22, 33, 'a'] // 可以随意

/**
 * 枚举类型
 */

enum FlagName {
  success = 1,
  error = 4
}
enum Color {
  blue,
  red,
  orange
}
var s: FlagName = FlagName.success
// console.log(s)
var f: FlagName = FlagName.error
// console.log(f)
var e: Color = Color.blue // 如果没有赋值，则为下标
// console.log(e)

enum ErrMsg {
  undefinded = -1,
  null = -2,
  success = 1
}
var ef: ErrMsg = ErrMsg.null
// console.log(ef)


/**
 * 任意类型any
 */

var oBox: any = document.getElementById('box') //操作dom节点 script应放在dom节点后面
oBox.style.color = 'red'   // 由于ts没有object类型，则用any代替

/**
 * null undefinded (never 类型子类型)
 */
// var newNum:number;// 定义未赋值打印报错
var newNum: undefined;// 正确 同null 不能赋值
// console.log(newNum)


/**
 * 一个元素可能是number类型 null 或者undefined
 */

var num: number | null | undefined;// 定义多种类型

/**
 * void类型 无类型 定义方法无返回值
 */

// es5定义方法
// function get1() {
//     
//     console.log('bb')
// }

function get1(): void {
  // ts 标识方法没有返回值，没有返回任何类型
  // console.log('bb')
}

function get2(): number {
  // 有返回值为返回值类型
  return 111
}

/**
 * never 其他类型 代表从不会出现的值
 * 生命never类型变量智能被never赋值
 */

var aa: undefined;

aa = undefined;

var aaa: never;
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
function run(): string {
  return '111'
}
// alert(run())
// 匿名
var fun2 = function (): number {
  return 111
}

// ts方法传参
// 传参，返回值都需定义类型（匿名函数同）

var newFun = function (name: string, age: number): string {
  return `${name}...${age}`
}
// console.log(newFun('王', 1))

/**
 * 方法可选参数  ?
 * es5中形参实参可以不一样  但是ts中必须一样，如果不同可以设置可选参数
 */

var newFun1 = function (name: string, age?: number): string {
  if (age) {
    return `${name}...${age}`
  } else {
    return `${name}...保密`
  }
}

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

var newFun2 = function (name: string, age: number = 20): string {
  return `${name}...${age}`
}

// alert(newFun2('张三'))

/**
 * 剩余参数
 * 三点运算符接受参数
 */

function sum11(...result: number[]): number {
  var sum = 0;
  for (var i = 0; i < result.length; i++) {
    sum += result[i]
  }
  return sum
}
//  alert(sum11(1,2,3,4,6,7))

/**
 * 函数重载 同名函数传参不同执行不同结果
 * ts为了兼容es5及es6重载的写法和java有区别
 */

// es5 后面的函数会替换前面的函数
// function css(config) {

// }

// function css(config,value) {

// }

// ts中的重载  参数不同

// function getInfoA(name:string):string
// function getInfoA(age:number):string;
// function getInfoA(str:any):any{
//   if(typeof str === 'string'){
//     return '我叫'+str;
//   }else{
//     return '我的年龄是'+str;
//   }
// };
// alert(getInfoA(20)) // 正确
// alert(getInfoA('张三')) // 正确
// alert(getInfoA(true)) // 错误 重载没有找到

// ts中的重载  参数相同

function getInfoA(name: string): string;
function getInfoA(name: string, age: number): string;
function getInfoA(name: any, age?: any): string {
  if (age) {
    return `我叫${name},我的年龄${age}`
  } else {
    return `我叫${name}`
  }
}

// alert(getInfoA('张三'))
// alert(getInfoA('张三',123))

/**
 * ts 中的类
 */

// es5 构造器函数模仿类 只有属性

//  function Person(){
//    this.name='张三';
//    this.age=20;
//  }
//  var p =new Person();
//  alert(p.name)

// es5 构造函数增加方法  原型上增加属性或方法
// function Person(){
//   this.name='张三';
//   this.age=20;
//   this.run=function(){
//     alert(this.name+'运动')
//   }// 实类方法
// }
// Person.getInfo=function(){
//   alert('我是南方的')
// }// 静态方法，不用new实例
// Person.prototype.sex='男'
// var p =new Person();
// p.run();
// console.log(p.sex)

/**
 * es5 的继承
 */
// function Person(){
//   this.name='张三';
//   this.age=20;
//   this.run=function(){
//     alert(this.name+'运动')
//   }
// }
// Person.prototype.sex='男'

// // 定义web类继承Person类 原型链+对象冒充组合继承

// function Web(){
//   Person.call(this); // 对象冒充实现继承
// }
// Web.prototype=new Person();// 原型链实现继承 可以继承构造函数和原型链上的
// var w =new Web();
// w.run(); // 对象冒充，可以继承属性和方法但不能继承原型上的属性方法

// alert(w.sex)

// 原型链继承问题

// function Person(name,age){
//   this.name=name;
//   this.age=age;
//   this.run=function(){
//     alert(this.name+'运动')
//   }
// }
// Person.prototype.sex='男'

// function Web(name,age){

// }
// Web.prototype=new Person();

// var w = new Web('赵四',20) // 实例化子类时没法给父类传参

// var w1 = new Web('王五',20)

// w.run();

// 原型链和构造函数组合传参

// function Person(name,age){
//   this.name=name;
//   this.age=age;
//   this.run=function(){
//     alert(this.name+'运动')
//   }
// }
// Person.prototype.sex='男'
// Person.prototype.work=function(){
//   alert(this.name+'工作')
// }

// function Web(name,age){
//   Person.call(this,name,age); // 对象冒充继承，可给父类传参
// }
// Web.prototype=Person.prototype;
// var w=new Web('赵四',20);
// // w.run();
// w.work();

/**
 * ts 类以及继承
 */

// ts中定义类
// class Person{
//   name:string; // 定义属性 省略public关键词
//   constructor(name:string){ // 构造函数 实例化时触发的方法
//     this.name=name;
//   };
//   run():void{
//     alert(this.name);
//   };
//   getName():string{
//     return this.name;
//   };
//   setName(name:string):void{
//     this.name=name;
//   }
// }
// var p = new Person('张三')
// p.setName('李四') // 调用类方法设置name
// alert(p.getName())
// p.run()

// ts中的继承关键字实现
// extends 继承父类属性方法 
// super 初始化父类构造器函数
// class Person{
//   name:string;
//   constructor(name:string){
//     this.name=name;
//   }
//   run():void{
//     alert(`${this.name}在运动`)
//   }
// }
// var p=new Person('王五')
// // p.run();

// class Web extends Person{
//   constructor(name:string){
//     super(name);
//   }
// }
// var w=new Web('李四')
// w.run();

/**
 * ts 类的修饰符 ts中定义属性三种修饰符  
 * pulic  共有 类或子类里面和外面都能访问
 * protected  类和子类可以访问，类外不能访问
 * prvaite  类可以访问 子类和外部都不能访问
 * 不写修饰符默认为 public
 */

// public

// class Person{
//   public name:string; // 共有属性
//   constructor(name:string){
//     this.name=name;
//   }
//   run():void{
//     alert(`${this.name}在运动`)
//   }
// }

// // class Web extends Person{
// //   constructor(name:string){
// //     super(name);
// //   }
// // }
// // var w=new Web('李四')
// // w.run();

// var p = new Person('哈哈')
// alert(p.name)

//protected

// class Person{
//   protected name:string; // 保护类型
//   constructor(name:string){
//     this.name=name;
//   }
//   run():void{
//     alert(`${this.name}在运动`)
//   }
// }

// class Web extends Person{
//   constructor(name:string){
//     super(name);
//   }
// }
// // var w=new Web('李四')
// // w.run();

// var p = new Person('哈哈')
// p.run()
// alert(p.name) // 错误警告 但是可以打印

// private

// class Person{
//   private name:string; // 私有类型
//   constructor(name:string){
//     this.name=name;
//   }
//   run():void{
//     alert(`${this.name}在运动`)
//   }
// }

// class Web extends Person{
//   constructor(name:string){
//     super(name);
//   }
//   work(){
//     // console.log(`${this.name}在运动`) // private智能再父级访问 ts报错
//   }
// }
// var w=new Web('李四')
// w.run();

// var p = new Person('哈哈')
// p.run()

/**
 * 静态属性 方法
 */

// es5

//  function Person(){
//    this.run2=function(){
//      alert(222)
//    }
//  }
//  Person.name='111'
//  Person.run1=function(){
//    alert(111)
//  }
//  Person.run1();


// ts 静态方法

// class Person{
//   name:string;
//   public age:number=20;
//   static sex:string='男';
//   constructor(name:string){
//     this.name=name;
//   };
//   run(){
//     alert(`${this.name}在运动`)
//   };// 实例方法
//   work(){
//     alert(`${this.name}在工作`)
//   }
//   static print(){
//     // alert('prient方法')// 静态方法
//     // alert(this.age) // 错误，静态方法不能直接使用类里里的属性
//     alert(this.sex)// 静态属性可以使用
//   }
// }
// Person.print();
// var p = new Person('张三');
// p.work();

/**
 * 多态  父类定义一个方法不去实现，由子类实现，每个子类有不同的表现  
 * 多态属于继承
 */

//  class Animal{
//    public name:string;
//    constructor(name:string){
//      this.name=name;
//    };
//    eat(){ // 具体吃什么 不知道 具体吃什么继承子类实现，每个子类表现不同
//      console.log('吃的方法')
//    }
//  }

//  class Dog extends Animal{
//    constructor(name:string){
//      super(name);
//    };
//    eat(){
//      return this.name+'吃肉';
//    }
//  }
//  var d=new Dog('小虎');
//   alert( d.eat())
//  class Cat extends Animal{
//    constructor(name:string){
//      super(name);
//    }
//    eat(){
//      return this.name+'吃老鼠';
//    }
//  }

/**
 * 抽象方法 类 abstract关键字定义 也属于多态
 * abstract抽象方法只能放在抽象方法中 不包含具体的实现
 * 抽象类 方法用来定义标准
 * 抽象类的子类必须实现抽象类里的抽象方法
 */

// abstract class Anmial{
//   public name:string;
//   constructor(name:string){
//     this.name=name;
//   }
//   abstract eat():any;

// }

// // var a=new Anmial(); // 无法直接实例化抽象类
// class Dog extends Anmial{
//   // 抽象类的子类必须实现抽象类里的抽象方法
//   constructor(name:any){
//     super(name)
//   }
//   eat(){
//     alert(this.name+'吃粮食')
//   };
// }
// var d =new Dog('小狗')
// d.eat();

/**
 * ts 中的接口
 * 接口是一种规范的定义  在程序设计中 接口起到规范的作用
 * 可以对属性函数类等规范  定义标准
 */

/**
 * 属性接口  对json的约束
 */

// ts 定义传参的约束
// function printLabel(label:string):void{
//   console.log(label)
// }
// printLabel('111');

// ts 中自定义方法对入参 json进行约束

// function printLabel(labelinfo:{label:string}):void{
//   console.log('printLabel')
// }
// printLabel({label:'2'});


// 传入对象的约束 属性接口
// interface FullName{
//   firstName:string; // 注意分号结束  不是对象
//   secondName:string;
// }
// function printLabel(name:FullName){
//   // 必须传入对象，对象必须有firstname，secondname
//   console.log(name.firstName+'--'+name.secondName)
// }

// var obj={
//   firstName:'张',
//   secondName:'三',
//   age:20
// }
// printLabel(obj) // 如果在里面写，就只能有firstName和secondName  这样写不会报错


// 对批量方法入参进行约束  接口

// interface FullName{
//   firstName:string; // 注意分号结束  不是对象
//   secondName:string;
// }

// function printLabel(name:FullName){
//   // 必须传入对象，对象必须有firstname，secondname
//   console.log(name.firstName+'--'+name.secondName)
// }

// function printInfo(info:FullName){
//   // 必须传入对象，对象必须有firstname，secondname
//   console.log(info.firstName+'--'+info.secondName+'--'+info.age) // 使用时必须只包含Fullname中的，ts 会报错
// }

// var obj={
//   firstName:'张',
//   secondName:'三',
//   age:20
// }
// printInfo(obj) 

// 接口 可选属性

// interface FullName {
//   firstName: string;
//   secondName?: string; // 加上问号可选
// }

// function getName(name:FullName){
//   console.log(name)
// }
// getName({firstName:'first'})


// 封装的ajax请求 原生js
// interface Config {
//   type: string;
//   url: string;
//   data?: string;
//   dateType: string;
// }
// function ajax(config: Config) {
//   var xhr = new XMLHttpRequest()
//   xhr.open(config.type, config.url, true);
//   xhr.send(config.data);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       console.log('成功')
//       if (config.dateType == 'json') {// json
//         console.log(JSON.parse(xhr.responseText))
//       } else {// 其他
//         console.log(xhr.responseText)
//       }
//     }
//   }
// }
// ajax({
//   type: 'get',
//   url: 'http://a.itying.com/api/productlist',
//   data: 'name=zhangsan',
//   dateType: 'json'
// })

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
import {getData} from './moduls/db'

getData();
