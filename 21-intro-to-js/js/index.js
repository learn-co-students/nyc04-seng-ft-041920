console.log('HELLO WORLD')
console.log('%cHELLO WORLD', 'color: blue')

let aCoolVariable = "😎"

/**** data types ****/

/**** truthy/falsey values ****/
// Falsey:
// undefined, null, 0, ""

/*** strict equality vs loose equality ***/
// Always use strict equality!
// console.log(2 == "2")  // true
// console.log(2 === "2") // false
// console.log({} === {}) // false

// /**** pass by reference vs pass by value ****/
// // primitive data types: pass by value
// let num1 = 1
// let num2 = num1
// num2 += 4
// console.log(num2) // 5
// console.log(num1) // 1

// // non-primitive data types: pass by reference
// const myCat = {
//   name: "Nicky",
//   kind: "Tabby"
// }
// const myCat2 = myCat
// console.log(myCat === myCat2) // true

// const myCatCopy = { ...myCat } // create new object w same key-val pairs
// console.log(myCat === myCatCopy) // false


/**** arrays and objects ****/

/**** function definition vs invocation ****/

function sayHi() {
  console.log("hi")
  return 10 // explicit return!
}

let a = sayHi() // function invocation ()
// let a = 10
let b = sayHi   // function reference

console.log(a)

/**** arrays & callbacks ****/
const arr = [1, 2, 3]

// forEach takes a callback function
// it will call that callback function with each element from the array
// we're defining it inline here:
arr.forEach(function myName(num) {
  console.log(num)
})

// we can also define the callback function outside of the forEach
function logIt(somethingToLog) {
  console.log(somethingToLog)
}

// and pass a reference to that callback function
arr.forEach(logIt)

// make sure to pass a function reference, not a function invocation!

// this will not work:
// arr.forEach(logIt(num))

// lotIt() invoked will return undefined
// so that's the equivalent of this:
// arr.forEach(undefined)

// here's how something like forEach works under the hood
function myEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    callback(element)  // invoke the callback fn with each element
  }
}

myEach(arr, logIt)
