"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var vue_router_1 = __importDefault(require("vue-router"));
var HelloWorld_vue_1 = __importDefault(require("@/components/HelloWorld.vue"));
// ... 其他组件
vue_1.default.use(vue_router_1.default);
var routes = [
    {
        path: '/',
        component: HelloWorld_vue_1.default
    }
    // ...其他 routers
];
exports.default = new vue_router_1.default({
    routes: routes
});
