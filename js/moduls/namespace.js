"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 命名空间的内容需要暴露出来
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            return this.name + "吃A给的肉";
        };
        return Dog;
    }());
    A.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function () {
            return this.name + "吃老鼠";
        };
        return Cat;
    }());
    A.Cat = Cat;
})(A || (A = {}));
exports.A = A;
var B;
(function (B) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            return this.name + "吃B给的肉";
        };
        return Dog;
    }());
    B.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function () {
            return this.name + "吃老鼠";
        };
        return Cat;
    }());
    B.Cat = Cat;
})(B || (B = {}));
exports.B = B;
