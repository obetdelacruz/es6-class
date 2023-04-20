//Factory Function

function personFactory(name, age) {
  const sayHello = () => {
    console.log(`Hello, my name is ${name} and I'm ${age} years old`);
  };
  return { name, age, sayHello };
}

//Factory Function Example Syntax
const person2 = personFactory("Ruth Joy", 18);
person2.sayHello();
