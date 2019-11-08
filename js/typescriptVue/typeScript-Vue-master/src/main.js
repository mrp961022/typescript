"use strict";
/*
 * @Author: kaka
 * @Date: 2018-06-11 19:03:21
 * @Last Modified by: kaka
 * @Last Modified time: 2018-06-11 19:11:30
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
var vue_1 = __importDefault(require("vue"));
var App_vue_1 = __importDefault(require("./App.vue"));
var index_ts_1 = __importDefault(require("./router/index.ts"));
vue_1.default.config.productionTip = false;
/* eslint-disable no-new */
new vue_1.default({
    el: '#app',
    router: index_ts_1.default,
    components: { App: App_vue_1.default },
    template: '<App/>'
});
