export namespace B { // export 导出，直接浏览器运行会报错
    interface Animal {
      name: string;
      eat(): void;
    }
  
    export class Dog implements Animal {
      name: string;
      constructor(theName: string) {
        this.name = theName;
      }
      eat() {
        console.log(`${this.name}吃肉`);
      }
    }
    export class Cat implements Animal {
      name: string;
      constructor(theName: string) {
        this.name = theName;
      }
      eat() {
        console.log(`${this.name}吃老鼠`);
      }
    }
  }