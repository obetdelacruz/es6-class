//Object Constructor

function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  };
}

//Object Constructor Example Syntax
const person1 = new PersonConstructor("Carlo, 27");
person1.sayHello();
