class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDescription() {
    console.log(`This is a ${this.make} ${this.model} from ${this.year}.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numberOfDoors) {
    super(make, model, year);
    this.numberOfDoors = numberOfDoors;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, numberOfDoors, batteryCapacity) {
    super(make, model, year, numberOfDoors);
    this.batteryCapacity = batteryCapacity;
  }
  getDescription() {
    console.log(
      `This is an electric vehicle named ${this.make} ${this.model} from ${this.year} with ${this.batteryCapacity}kwh of battery capacity.`
    );
  }
}

const myElectricCar = new ElectricCar("Tesla", "Model 3", 2022, 4, 82);
myElectricCar.getDescription();
