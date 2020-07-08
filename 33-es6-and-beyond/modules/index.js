console.log(`2 + 2 is ${evaluate("2 + 2")} `)

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault()
  const num1 = e.target.num1.value
  const num2 = e.target.num2.value
  const operator = e.target.operator.value

  const result = evaluate(`${num1} ${operator} ${num2}`)
  document.querySelector("#sum").textContent = result
})