"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zsq;
(function (zsq) {
    function logClass1(params) {
        return function (target) {
            console.log("类装饰器1");
        };
    }
    zsq.logClass1 = logClass1;
    function logClass2(params) {
        return function (target) {
            console.log("类装饰器2");
        };
    }
    zsq.logClass2 = logClass2;
    function logAttribute(params) {
        return function (target, attrName) {
            console.log("属性装饰器");
        };
    }
    zsq.logAttribute = logAttribute;
    function logMethods(params) {
        return function (target, attrName, desc) {
            console.log("方法装饰器");
        };
    }
    zsq.logMethods = logMethods;
    function logParams1(params) {
        return function (target, attrName, desc) {
            console.log("方法参数装饰器1");
        };
    }
    zsq.logParams1 = logParams1;
    function logParams2(params) {
        return function (target, attrName, desc) {
            console.log("方法参数装饰器2");
        };
    }
    zsq.logParams2 = logParams2;
})(zsq = exports.zsq || (exports.zsq = {}));
