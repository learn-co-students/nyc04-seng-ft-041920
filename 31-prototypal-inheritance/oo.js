// Bronze Age OOJS
function Dog(firstName, favSnacks) {
  this.firstName = firstName
  this.favSnacks = favSnacks

  this.speak = function speak() {
    console.log(`hi my name is ${this.firstName}`)
  }
}

const dog1 = new Dog("fezzik", ['peanut butter', 'soccer balls'])
const dog2 = new Dog("jubilee", ['carrots', 'french fries'])