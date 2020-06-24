// regular fn
function sayHi(greeting, name) {
  const response = `${greeting} ${name}`
  return response
}

/****** arrow fns ******/

// multi-line
const arrowSayHi = (greeting, name) => {
  const response = `${greeting} ${name}`
  return response
}

// one line
const double = (num) => num * 2

// multiple args
const multiple = (num, num2) => num * num2

// one arg
const double = num => num * 2

// no args
const logger = () => console.log("hi")

// callback syntax
const arr = [1, 2, 3]

arr.map(function (num) {
  return num * 2
})

arr.map(num => num * 2)