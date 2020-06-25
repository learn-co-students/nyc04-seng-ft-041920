const form = document.querySelector("form")
const comments = document.querySelector("ul")
const button = document.querySelector("#pokemon-btn")

form.addEventListener("submit", e => {
  e.preventDefault()
  comments.innerHTML += `<li>${e.target.comment.value}</li>`
})

function sleep(time) {
  const start = new Date()
  while (new Date() - start < time) {
    // do nothing & block the main thread 😈
  }
}

// let a;
// a = "something"

button.addEventListener("click", () => {
  console.log("BEFORE setTimeout")

  // const myPromise = fetch("https://pokeapi.co/api/v2/pokemon/2")

  // myPromise.then(response => {

  //   const anotherDangPromise = response.json()

  //   anotherDangPromise.then(jsObj => {

  //     console.log(jsObj)
  //   })

  // })

  fetch("https://pokeapi.co/api/v2/pokemon/2")
    .then(response => response.json())
    .then(jsObj => {
      console.log(jsObj)
    })

  console.log("AFTER setTimeout")
})
