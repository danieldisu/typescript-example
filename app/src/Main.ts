import Dog = require('models/Dog')
import Animal = require('models/Animal')

function sayHi(animal:Animal) {
  console.log("hi " + animal.name);
}

sayHi(new Dog("Timmy"))
