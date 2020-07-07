// Bronze Age OOJS
// function Dog(firstName, favSnacks) {
//   this.firstName = firstName
//   this.favSnacks = favSnacks
//   // this.__proto__ = Dog.prototype
// }

// Dog.prototype.speak = function speak() {
//   console.log(`hi my name is ${this.firstName}`)
// }

class Dog {

  static all = []

  #private = "can't see me from outside!"
  breed = "Sheep dog"

  constructor(firstName, lastName, favSnacks) {
    this.firstName = firstName
    this.lastName = lastName
    this.favSnacks = favSnacks
    // this.__proto__ = Dog.prototype
    Dog.all.push(this)
  }

  showMe() {
    let hi = "bye"
    console.log(this.#private)
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  speak() {
    console.log(`hi my name is ${this.fullName()}`)
  }

  static findByName(name) {
    return Dog.all.find(dog => dog.firstName === name)
  }
}

// Dog.all = []

const dog1 = new Dog("fezzik", "hollander", ['peanut butter', 'soccer balls'])
const dog2 = new Dog("jubilee", "smythe", ['carrots', 'french fries'])

// dog instance -> Dog class -> Object class