/*### Exerices

1. Create a new class `Animal` with properties name and age.
2. Add a `speak` method that includes the name of the animal and the sound that it makes.
   -console.log(`$this.name) makes a noise.`);
3. Create another class called `Dog` that extends the `Animal` class
4. The `Dog` class have a special property called `breed`
5. Edit the `speak` method of a Dog.
   -console.log(`${this.name} barks.`);
6. Create a new instance of a Dog
*/

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age, breed);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}
const animal1 = new Animal("Lawin", 3);
animal1.speak();

const myAnimal = new Dog("Bingo", 2, "Haspin");
myAnimal.speak();
