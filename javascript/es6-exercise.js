class Animal {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }

  introduce() {
    console.log(
      `Ladies and gentlemen, meet ${this.name} a ${this.species} who is ${this.age} year/s old`
    );
  }

  birthday() {
    this.age++;
  }
}

const animal1 = new Animal("Charlie", "Golden Retriever", 4);
const animal2 = new Animal("Hachi", "Aspin", 2);
const animal3 = new Animal("Jonas", "Cat", 2);
animal1.introduce();
animal2.introduce();
animal3.introduce();

animal2.birthday();
console.log(`It's ${animal2.name}'s birthday!`);
animal2.introduce();
