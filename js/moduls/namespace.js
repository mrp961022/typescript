"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 命名空间的内容需要暴露出来
var A;
(function (A) {
    class Dog {
        constructor(name) {
            this.name = name;
        }
        eat() {
            return this.name + "吃A给的肉";
        }
    }
    A.Dog = Dog;
    class Cat {
        constructor(name) {
            this.name = name;
        }
        eat() {
            return this.name + "吃老鼠";
        }
    }
    A.Cat = Cat;
})(A || (A = {}));
exports.A = A;
var B;
(function (B) {
    class Dog {
        constructor(name) {
            this.name = name;
        }
        eat() {
            return this.name + "吃B给的肉";
        }
    }
    B.Dog = Dog;
    class Cat {
        constructor(name) {
            this.name = name;
        }
        eat() {
            return this.name + "吃老鼠";
        }
    }
    B.Cat = Cat;
})(B || (B = {}));
exports.B = B;
