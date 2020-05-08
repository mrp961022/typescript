export namespace zsq {
    export function logClass1(params: string) {
        return function (target: any) {
            console.log("类装饰器1")
        }
    }
    export function logClass2(params: string) {
        return function (target: any) {
            console.log("类装饰器2")
        }
    }
    export function logAttribute(params?: string) {
        return function (target: any, attrName: any) {
            console.log("属性装饰器")
        }
    }
    export function logMethods(params?: string) {
        return function (target: any, attrName: any, desc: any) {
            console.log("方法装饰器")
        }
    }
    export function logParams1(params?: string) {
        return function (target: any, attrName: any, desc: any) {
            console.log("方法参数装饰器1")
        }
    }
    export function logParams2(params?: string) {
        return function (target: any, attrName: any, desc: any) {
            console.log("方法参数装饰器2")
        }
    }

}