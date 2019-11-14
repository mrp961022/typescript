"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var B;
(function (B) {
    var Dog = /** @class */ (function () {
        function Dog(theName) {
            this.name = theName;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + "\u5403\u8089");
        };
        return Dog;
    }());
    B.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(theName) {
            this.name = theName;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + "\u5403\u8001\u9F20");
        };
        return Cat;
    }());
    B.Cat = Cat;
})(B = exports.B || (exports.B = {}));
