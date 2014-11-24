import Animal = require('Animal')

class Dog implements Animal {
  constructor(name:string) {
    this.name = name;
  }

  name:string;

  makeSound() {
    return "guau!";
  }
}

export = Dog
