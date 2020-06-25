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

button.addEventListener("click", () => {
  console.log("fetching pokemon")

  console.log("done!")
})
