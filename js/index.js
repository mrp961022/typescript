"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
let flag = true; // typescript 声明变量需要定义类型 且类型不能改变
flag = false; // 正确
// falg = 1  // 错误
let a = 123;
a = 123.2;
// console.log(a)
let str = "this is ts";
str = "yes,it is ts";
// console.log(str)
// 数组类型
let arr = [1, 2, 3]; // 定义变量需要指定类型
let arr1 = [1, 2, 3, "3"]; // 可以指定多个类型
let arr2 = ["1", "2"]; // 另一种方式定义类型
// console.log(arr)
// console.log(arr1)
// console.log(arr2)
// 元组类型（数组一种）
let arr3 = ["1", 2, true]; // 可以指定数组中每个值的类型
// console.log(arr3)
// 枚举类型 主要用于定义标识符
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
let f = Flag.success;
let l = Flag.error;
// console.log(f)
// console.log(l)
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {})); // 没有赋值默认为索引值 如果其中有一个为数字的话 后面的元素在他基础上递增
let clr = Color.blue;
// console.log(clr)
// 任意类型any undefined null never
let numAny = 1; // 任意类型可以随意赋值 主要用于获取dom节点
numAny = "2";
// console.log(numAny)
// let oBox: any = document.getElementById("box");
// oBox.style.color = "red"
// let num1: number
// // console.log(num1) // 报错
let num1;
// console.log(num1) // 正确
// void 类型 没有任何类型 一般用于方法没有返回值
function run() {
    // console.log(run)
}
function eat(animal) {
    return animal + " eat meat";
}
// console.log(eat("cat"))
// never 类型 表示从不会出现的值
let aa; // 其他类型 基本用不上
// aa = 1; // 错误
// aa = (() => {
//   throw new Error("错误") //抛出一个异常
// })()
// ts中的函数 ts中方法传参的类型需要指定
// 见上方 run 方法和 eat 方法  ts定义函数与es5基本相同 但需要指定入参及返回值类型
// 匿名函数定义方式
let run1 = function (type, toy) {
    // console.log(`${type} play ${toy}`)
};
run1("cat", "ball");
// 方法可选参数 ? 可选 可以不用传指定参数
let run2 = function (type, toy) {
    // console.log(`${type}${toy ? "play" : ""}${toy || ""}`)
};
run2("cat");
// 默认参数 如果有默认参数 默认参数可以不用写
let getInfo = function (name, age = 20) {
    // console.log(`${name}---${age}`)
};
getInfo("老王");
// 剩余参数 三点运算符 接收形参传过来的值 如果前面有形参 有几个就对应入参的几个 其他的放在数组中
function sum(str, ...num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return str + sum;
}
function run3(str) {
    if (typeof str == "string") {
        return str;
    }
    else {
        return str;
    }
}
;
function run4(name, age) {
    if (age) {
        // console.log(`我叫${name} 我${age}岁`)
    }
    else {
        // console.log(`我叫${name}`)
    }
}
;
run4("王小二");
run4("王小二", 18);
// run4(111,222) // 错误写法
//  ts中的类
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    run() {
        alert(this.name);
    }
}
let p = new Person("张三");
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
    constructor(name) {
        this.name = name;
    }
    eat() {
        return this.run();
    }
    run() {
        return `${this.name}在运动`;
    }
}
class Student extends Person1 {
    constructor(name) {
        super(name);
    }
    study() {
        alert(`${this.name}在看书`);
    }
}
let pa = new Person1("老李");
// alert(pa.eat())
let p1 = new Student("李四");
// // console.log(p1.name)
// alert(p1.run()) // 私有类型不能访问
// p1.study()
// ts中的类  静态方法 静态方法想要访问属性需要将变量定义为静态属性
class Person2 {
    constructor(name) {
        this.name = name;
    }
    run() {
        alert(`${this.name}在运动`);
    }
    work() {
        alert(`${this.name}在工作`);
    }
    static print() {
        alert("print静态方法" + Person2.age); // 静态方法 或者this.age
    }
}
Person2.age = 20; // 静态属性
let p2 = new Person2("小赵");
// Person2.print()
// 多态 父类定义一个方法不去实现 让他的子类去实现 每一个子类有不同的表现
// 多态也是继承的一种表现 属于继承
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        // console.log("吃的方法")
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    eat() {
        return this.name + "吃肉";
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    eat() {
        return this.name + "吃老鼠";
    }
}
// 抽象方法 只能放在抽象类中 不能被直接实例化
// 抽象类和抽象方法定义标准  例 Animal 要求子类必须包含 eat 方法
// 父类不包含抽象类的实现 具体在子类中实现
class Animal1 {
    constructor(name) {
        this.name = name;
    }
}
class Dog1 extends Animal1 {
    // 抽象类子类必须实现抽象类中的抽象方法
    constructor(name) {
        super(name);
    }
    eat() {
        return `${this.name}吃肉`;
    }
}
class Cat1 extends Animal1 {
    constructor(name) {
        super(name);
    }
    eat() {
        return `${this.name}吃老鼠`;
    }
}
// let dog1 = new Dog1("小黑")
// alert(dog1.eat())
let cat1 = new Cat1("小黄");
// alert(cat1.eat())
// ts中的接口 接口是一种程序规范 对属性、函数、类的行为进行约束
function printLabel(label) {
    // console.log(`${label}`)
}
// 对传入参数json的约束
function printLabel1(labelInfo) {
    // console.log(`${labelInfo.label}`)
}
printLabel1({ label: "11111" });
function outName(fullName) {
    // console.log(`${fullName.firstName} ${fullName.lastName}`)
}
function cnStrudnt(fullName) {
    // console.log(`${fullName.firstName}${fullName.lastName}`)
}
outName({ firstName: "布鲁斯", lastName: "李" });
cnStrudnt({ firstName: "王", lastName: "小二" });
console.log(md5);
function ajax(config) {
    let xhr = new XMLHttpRequest();
    if (config.type.toLocaleLowerCase() == 'get') {
        xhr.open(config.type, `${config.url}?${config.data}`, true);
    }
    else {
        xhr.open(config.type, `${config.url}`, true);
    }
    if (config.contentType) {
        xhr.setRequestHeader('Content-Type', config.contentType);
    }
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // // console.log("成功")
            if (config.dataType == "json") {
                // // console.log(JSON.parse(xhr.responseText))
            }
            else {
                // // console.log(xhr.responseText)
            }
        }
    };
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
    url: "http://a.itying.com/api/productlist",
    data: `userName=${'王'}&passWord=${'111222'}`,
    dataType: "json",
});
// let md5: encrypt = function (key: string, value: string): string { // 必须有key value且为字符串 返回值必须为字符串
//   return `${key}${value}`
// }
let sha1 = function (key, value) {
    return `${value}${key}`;
};
let arr4 = [1, 2, 3]; // 数组约束
let obj = { name: "王", age: 20 }; // 对象约束
class Dog2 {
    constructor(name) {
        this.name = name;
    }
    eat(str) {
        // console.log(this.name + "吃" + str)
    }
}
class Cat2 {
    constructor(name) {
        this.name = name;
    }
    eat() {
        // console.log(this.name + "吃老鼠")
    }
}
let d = new Dog2("小黑");
d.eat("肉");
let c = new Cat2("小花");
c.eat();
class WorkMan {
    constructor(name) {
        this.name = name;
    }
    harder(work) {
        // console.log(work + "太难了")
    }
}
class WebWorker extends WorkMan {
    constructor(name) {
        super(name);
    }
    work() {
        // console.log(this.name + "在打代码")
    }
    eat() {
        // console.log(this.name + "吃肉")
    }
}
let wang = new WebWorker("小王");
wang.work();
wang.eat();
wang.harder("C++");
// ts中的泛型 解决类、方法、接口可复用性
function getData(value) {
    return value;
}
getData(123); // 约束入参格式 
// 泛型类
// 最小推算法 同时支持字符串和数字两种类型 用过泛型来实现
class MinClass {
    constructor() {
        this.list = [];
    }
    add(value) {
        this.list.push(value);
    }
    min() {
        let minNum = this.list[0];
        for (let i = 1; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
let numList = new MinClass();
// let numList1 = new MinClass<string>() // 如果指定类型则只能使用指定类型
numList.add(1);
numList.add("0");
numList.add("2");
numList.add(1);
let setData = function (value) {
    return value;
};
let setData1 = function (value) {
    return value;
};
// console.log(setData1("20"))
// 泛型类 把类作为参数来约束参数的泛型类
/**
 * 定义一个user类 映射数据库字段
 * 定义一个MysqlDB的类 用于操作数据库
 * 把user类作为参数传入MysqlDB
 */
class MysqlDB {
    add(info) {
        // console.log(info)
        return true;
    }
    update(info, id) {
        // console.log(info)
        // console.log(id)
        return true;
    }
}
class User {
    constructor(userName, passWord) {
        this.userName = userName;
        this.passWord = passWord;
    }
}
class ArticlaCate {
    constructor(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
        this.id = params.id;
    }
}
let user1 = new User("wang", "123456");
let userDB = new MysqlDB(); // 在这里对数据约束
// userDB.add(user1)
let aaa = new ArticlaCate({ title: "国内", desc: "国内新闻", status: 111 });
aaa.id = 111;
let db = new MysqlDB(); // 在这里对数据约束
// db.add(aaa)
db.update(aaa, 11);
// ts中的模块 把一些公共功能分离出去 使用 export 暴露 其他文件需要使用的时候 import 引入
const user_1 = require("./model/user");
const atricle_1 = require("./model/atricle");
let u = new user_1.UserClass();
u.userName = "zhangsan";
u.passWord = "123456";
// UserModel.add(u)
// UserModel.get(11)
let article = new atricle_1.ArticleClass();
article.title = "中国";
article.desc = "中国地理";
article.id = 1232332;
// ArticleModel.get(1232332)
// ts中的命名空间  组织代码 避免命名空间
const namespace_1 = require("./moduls/namespace");
let ADog = new namespace_1.A.Dog("狼狗");
// console.log(ADog.eat())
let BDog = new namespace_1.B.Dog("大黄狗");
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
function logClass1(params) {
    return function (target) {
        target.prototype.apiUrl = params;
    };
}
let HttpClient1 = class HttpClient1 {
    constructor() {
    }
    getData() { }
};
HttpClient1 = __decorate([
    logClass1("http://www.itying.com/api")
], HttpClient1);
let http1 = new HttpClient1();
// console.log(http1.apiUrl)
// 类装饰器重载构造函数 每个属性 方法都要修改
function logClass2(target) {
    return class extends target {
        constructor() {
            super(...arguments);
            this.apiUrl = "我是修改后的数据";
        }
        getData() {
            console.log(this.apiUrl + "111");
        }
    };
}
let HttpClient2 = class HttpClient2 {
    constructor() {
        this.apiUrl = "我是构造函数里面的apiUrl";
    }
    getData() {
        console.log(this.apiUrl);
    }
};
HttpClient2 = __decorate([
    logClass2
], HttpClient2);
let http2 = new HttpClient2();
// http2.getData()
// 属性装饰器 接收两个参数 原型对象 当前属性名称
// 类装饰器
function logClass3(params) {
    return function (target) {
        target.prototype.apiUrl = params;
    };
}
// 属性装饰器
function logProperty(parmas) {
    return function (target, attr) {
        // target 类
        // attr 装饰器装饰的属性 写在那个属性前面
        target[attr] = parmas;
    };
}
let HttpClient3 = class HttpClient3 {
    constructor() {
    }
    getData() {
        console.log(this.url);
    }
};
__decorate([
    logProperty('http://itying.com')
], HttpClient3.prototype, "url", void 0);
HttpClient3 = __decorate([
    logClass3("xxx")
], HttpClient3);
let http3 = new HttpClient3();
// http3.getData();
// 装饰器
function get(parmas) {
    return function (target, methodName, desc) {
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
        desc.value = function (...args) {
            args = args.map((item) => {
                return String(item);
            });
            oMethod.apply(this, args); // 对象冒充
        };
    };
}
class HttpClient4 {
    constructor() {
    }
    getData(...args) {
        console.log(args);
        console.log("我是getData的方法");
    }
}
__decorate([
    get('http://www.itying.com')
], HttpClient4.prototype, "getData", null);
let http4 = new HttpClient4();
// http4.run()
// http4.getData(1, 2, 3, true)
// 方法参数装饰器 为类的原型添加一些元数据 用的比较少
function logParams(params) {
    return function (target, paramsName, paramsIndex) {
        // console.log(target)  // 原型对象
        // console.log(paramsName)  // 方法名称
        // console.log(paramsIndex) // 参数索引
        // console.log(params)
        target.apiUrl = params;
    };
}
class HttpClient5 {
    constructor() {
    }
    getData(uid) {
        console.log('1232');
    }
}
__decorate([
    __param(0, logParams('xxxx'))
], HttpClient5.prototype, "getData", null);
let http5 = new HttpClient5();
// http5.getData(123456)
// console.log(http5.apiUrl)
// 各种装饰器的执行顺序
// 属性装饰器=>放啊发装饰器=>方法参数装饰器=>类装饰器
// 如果有多个同类装饰器 从后往前执行 例 两个方法装饰器会先执行最后一个方法装饰器
const zsq_1 = require("./moduls/zsq");
let HttpClient6 = class HttpClient6 {
    constructor() {
    }
    getData() { }
    setData(attr1, attr2) { }
};
__decorate([
    zsq_1.zsq.logAttribute()
], HttpClient6.prototype, "url", void 0);
__decorate([
    zsq_1.zsq.logMethods()
], HttpClient6.prototype, "getData", null);
__decorate([
    __param(0, zsq_1.zsq.logParams1()), __param(1, zsq_1.zsq.logParams2())
], HttpClient6.prototype, "setData", null);
HttpClient6 = __decorate([
    zsq_1.zsq.logClass1('http://www.itying.com'),
    zsq_1.zsq.logClass2('xxxx')
], HttpClient6);
let http = new HttpClient6();
