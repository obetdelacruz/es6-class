// ES6 Class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

//ES6 Class Example Syntax
const person3 = new Person("Luis", 14);
person3.sayHello();
