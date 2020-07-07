function whatsThis(arg1, arg2) {
  console.log(arg1, arg2)
  console.log("THIS IS:", this)
}

const b = "whatever"

function speak() {
  // 1. what are the variables being delared in this function?
  const a = "hi"
  // 2. what variables does this have access to from scope rules?
  console.log(b)
  // 3. what is this inside of the function?

  console.log("THIS IS:", this)
  console.log(`woof my name is ${this.firstName}`)
}

function sayFavSnacks() {

  console.log("OUTSIDE each, this:", this)

  // this.favSnacks.forEach(
  //   function (snack) {
  //     console.log("INSIDE each, this:", this)
  //   }.bind(this)
  // )

  this.favSnacks.forEach(
    (snack) => {
      console.log("INSIDE each, this:", this)

      const arr = () => console.log("another arrow", this)

      arr()
    }
  )

  // function printSnack(snack) {
  //   console.log("INSIDE each, this:", this)
  // }

  // const boundPrintSnack = printSnack.bind(this)
}

// POJO (Plain ol javascript object)
// const dog1 = {
//   firstName: 'fezzik',
//   favSnacks: ['peanut butter', 'soccer balls'],
//   speak: function speak() {
//     console.log(`woof my name is ${this.firstName}`)
//   },
//   sayFavSnacks: sayFavSnacks
// }

// const dog2 = {
//   name: 'lucy',
//   favSnacks: ['carrots', 'french fries'],
//   speak: function speak() {
//     console.log(`woof my name is ${this.firstName}`)
//   },
//   sayFavSnacks: sayFavSnacks
// }

// // creates an execution context
// dog1.speak()  // this will be the dog object

// // speak() // this will be the global (window) object

// Prehistoric OOJS
// factory function
function createDog(firstName, favSnacks) {

  return {
    firstName: firstName,
    favSnacks: favSnacks,
    speak: function speak() {
      console.log(`woof my name is ${this.firstName}`)
    }
  }
}

// const dog1 = createDog("fezzik", ["peanut butter", "soccer balls"])
// const dog2 = createDog("lucy", ["carrots", "french fries"])

// Bronze Age OOJS
// constructor fn syntax
// function Dog(firstName, favSnacks) {
//   // create new object and assign that object as `this`
//   // this = {}
//   this.firstName = firstName
//   this.favSnacks = favSnacks
//   this.speak = function speak() {
//     console.log(`woof my name is ${this.firstName}`)
//   }
//   // return `this` (the new object) implicitly
// }


// Modern OOJS
class Dog {

  constructor(firstName, favSnacks) {
    this.firstName = firstName
    this.favSnacks = favSnacks
    // this.speak = function speak() {
    //   console.log(`woof my name is ${this.firstName}`)
    // }
  }

  speak() {
    console.log(`woof my name is ${this.firstName}`)
  }

}

const dog1 = new Dog("fezzik", ["peanut butter", "soccer balls"])
const dog2 = new Dog("lucy", ["carrots", "french fries"])