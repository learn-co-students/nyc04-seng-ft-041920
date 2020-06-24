// for the curious & brave, this approach is more like how we'll solve this kind of problem in React (kinda)

// application state
let state = {
  counter: 0,
  running: true,
  likes: {},
  comments: []
}

// any time we want to change state, use this fn
function setState(newState) {
  // create a new version of state by combing new state + current state
  state = { ...state, ...newState }
  // always re-render when setState is called (any time our state changes, the DOM changes)
  render(state)
}

// render all the DOM elements that depend on our application state
// warning: this approach isn't very efficient for the browser
function render(state) {
  // counter
  counterH1.textContent = state.counter

  // buttons
  document.querySelectorAll("button:not(#pause)")
    .forEach(button => {
      button.disabled = !state.running
    })

  // likes
  likesUl.innerHTML = Object.keys(state.likes)
    .map(count => `<li>${count} as been liked ${state.likes[count]} times</li>`)
    .join("")

  // comments
  commentList.innerHTML = state.comments
    .map(comment => `<p>${comment}</p>`)
    .join("")
}


// DOM Elements
const counterH1 = document.querySelector("#counter")
const likesUl = document.querySelector(".likes")
const commentList = document.querySelector("#list")

// Event handlers
document.querySelector("#controls").addEventListener("click", e => {
  if (e.target.id === "minus") {
    setState({ counter: state.counter - 1 })
  } else if (e.target.id === "plus") {
    setState({ counter: state.counter + 1 })
  } else if (e.target.id === "pause") {
    setState({ running: !state.running })
  } else if (e.target.id === "heart") {
    const likes = { ...state.likes }
    likes[state.counter] = (state.likes[state.counter] || 0) + 1
    setState({ likes: likes })
  }
})

document.querySelector("#comment-form").addEventListener("submit", e => {
  e.preventDefault() // always do this for forms so the page doesn't refresh!

  // get the comment from the text field
  const commentText = e.target.comment.value // this uses the name="comment" attribute of the input field to find the input in the form

  // update state
  setState({ comments: [...state.comments, commentText] })

  // clear the form out
  e.target.reset()
})

// run that timer
setInterval(() => {
  if (state.running) {
    setState({ counter: state.counter + 1 })
  }
}, 1000)
