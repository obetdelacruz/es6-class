# ES6 Classes

## Lesson Objectives

1.Understand the syntax and usage of ES6 classes in JavaScript 2. Use ES6 classes to create objects with methods and properties 3. Compare and contrast ES6 classes with traditonal Javascript object-oriented programming

### ES6 Class

    - a new features in JavaScript
    - allow us a more structured way of writing object-oriented code

### How do you define an ES6 class?

    - to define an ES6 Class, we use the "class" keyword followed by the name of the class.

    - for example:
        `class person {}`

### Difference between JavaScript Class Syntax and other traditional OOP languages

    - Objects are created using constructor functions.
    - syntactic sugar

### Exercises

1. Create a class called `Animal` with the following properties:

   - `name` (string)
   - `species` (string)
   - `age`(number)

2. Create the following methods for the `Animal` class

- `introduce()`; prints out a message introducing the animal with their name, species, and age.
- `birthday()`; increments the anima's age by 1.

  3.Create 3 instances of the `Animal` class with differrent properties, and call the `introduce()` method on each instance.

  4.Call the `birthday()` method on one of the animal instance and then call the `introduce()` method again to see the updated age.

### Inheritance

1. properties and methods can be inherit

### Exerices in Inheritance

1. Create a new class `Animal` with properties name and age.
2. Add a `speak` method that includes the name of the animal and the sound that it makes.
   -console.log(`$this.name) makes a noise.`);
3. Create another class called `Dog` that extends the `Animal` class
4. The `Dog` class have a special property called `breed`
5. Edit the `speak` method of a Dog.
   -console.log(`${this.name} barks.`);
6. Create a new instance of a Dog
