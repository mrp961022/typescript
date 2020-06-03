interface Animal {
    name: string
    eat(): void
}
// 命名空间的内容需要暴露出来
namespace A {
    export class Dog implements Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        eat(): string {
            return this.name + "吃A给的肉"
        }
    }
    export class Cat implements Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        eat(): string {
            return this.name + "吃老鼠"
        }
    }
}

namespace B {
    export class Dog implements Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        eat(): string {
            return this.name + "吃B给的肉"
        }
    }
    export class Cat implements Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        eat(): string {
            return this.name + "吃老鼠"
        }
    }
}
export { A, B }