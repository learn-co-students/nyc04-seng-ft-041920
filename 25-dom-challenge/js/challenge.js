const controlsDiv = document.querySelector("#controls")
const counterH1 = document.querySelector("#counter")
const likesUl = document.querySelector(".likes")

// Comment Feature Code
const commentForm = document.querySelector("#comment-form")
const commentList = document.querySelector("#list")

commentForm.addEventListener("submit", e => {
  e.preventDefault() // always do this for forms so the page doesn't refresh!

  // get the comment from the text field
  const commentText = e.target.comment.value // this uses the name="comment" attribute of the input field to find the input in the form

  // create a new DOM element for the comment
  const commentP = document.createElement("p")
  commentP.textContent = commentText

  // add to the page
  commentList.append(commentP)

  // clear the form out
  e.target.reset()
})
// End Comment Feature Code


// let intervalId = setInterval(() => {
//   updateCounter(1)
// }, 1000)

let counterRunning = true

setInterval(() => {
  console.log("running")
  if (counterRunning) {
    updateCounter(1)
  }
}, 1000)

controlsDiv.addEventListener("click", e => {
  if (e.target.id === "minus") {
    updateCounter(-1)
  } else if (e.target.id === "plus") {
    updateCounter(1)
  } else if (e.target.id === "pause") {
    if (e.target.textContent === "pause") {
      pauseTimer(e.target)
    } else {
      // start the timer
      counterRunning = true
      // intervalId = setInterval(() => {
      //   updateCounter(1)
      // }, 1000)

      // enable the buttons
      document.querySelectorAll("button").forEach(button => {
        if (button.id !== "pause") {
          button.disabled = false
        }
      })

      // change the pause btn text
      e.target.textContent = "pause"
    }
  } else if (e.target.id === "heart") {
    const counter = counterH1.textContent

    let likesLi = document.querySelector(`li[data-counter='${counter}']`)
    if (!likesLi) {
      likesLi = document.createElement("li")
      likesLi.dataset.counter = counter
      likesLi.innerHTML = `${counter} has <span>1</span> like`
      likesUl.append(likesLi)
    } else {
      const currentLikes = likesLi.querySelector("span")
      currentLikes.textContent = parseInt(currentLikes.textContent) + 1
    }
  }
})

function pauseTimer(pauseBtn) {
  // console.log(intervalId)
  // stop the timer
  // clearInterval(intervalId)
  counterRunning = false

  // disable the buttons
  document.querySelectorAll("button").forEach(button => {
    if (button.id !== "pause") {
      button.disabled = true
    }
  })

  // change the pause btn text
  pauseBtn.textContent = "resume"
}

function updateCounter(change) {
  const newNumber = parseInt(counterH1.textContent) + change

  counterH1.textContent = newNumber
}

// setInterval(updateCounter, 1000)
// setInterval(undefined, 1000)