const evaluate = equation => {

  const values = equation.split(" ")

  const num1 = parseInt(values[0])
  const operator = values[1]
  const num2 = parseInt(values[2])

  switch (operator) {
    case "+":
      return add(num1, num2)
    case "-":
      return subtract(num1, num2)
    case "*":
      return multiply(num1, num2)
    case "/":
      return divide(num1, num2)
    default:
      return ""
  }
}