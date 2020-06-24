
// const names = ["ian", "rei", "jack"]

// names.forEach(
//   // outer fn
//   function (name) {
//     const greeting = `Hi ${name}`

//     // inner fn
//     function sayGreeting() {
//       console.log(greeting)
//     }

//     sayGreeting()
//   }
// )





/** Yesterday's Code **/

/****************** DOM Elements ******************/
const listingsSection = document.querySelector("#listings")
const toggleSwitch = document.querySelector("#toggle-dark-mode")
const form = document.querySelector("#listing-form")

/****************** Event Handlers ******************/
// EVENT DELEGATION
// 1. find the closest common parent of all elements we care about
listingsSection.addEventListener("click", event => {
  // 2. use some condition to determine if the element clicks is the one we care about

  // if (event.target.className === ".btn-left") {
  if (event.target.matches(".btn-left")) {
    // 3. write what we want to happen when that element is clicked
    const outerCard = event.target.closest(".card")
    outerCard.remove()
  } else if (event.target.matches(".btn-right")) {

    const outerCard = event.target.closest(".card")
    const likesSpan = outerCard.querySelector(".likes")

    // get the current likes and add 1
    let currentLikes = parseInt(likesSpan.textContent) + 1
    console.log(currentLikes)

    // // update the dom for the likes span
    likesSpan.textContent = `${currentLikes}🔥`

  }
})

toggleSwitch.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode")
})

form.addEventListener("submit", function (event) {
  // always do this for form submit events!
  event.preventDefault()

  // in the callback, get data from the form (look in the input fields)
  const listingObj = {
    title: event.target.title.value,
    imageUrl: event.target.imageUrl.value,
    location: event.target.location.value,
    price: event.target.price.value,
    likes: 0
  }

  // slap on the dom
  renderOneListing(listingObj)
})

/******************  Render Helpers *******************/
function renderOneListing(listingObj) {
  // create outer element with createElement
  const outerCard = document.createElement("div")
  outerCard.classList.add("card")

  // use innerHTML to create its children
  outerCard.innerHTML = `
    <div class="image">
      <img src="${listingObj.imageUrl}" alt="${listingObj.title}"/>
      <button class="btn-left">☠️</button>
      <button class="btn-right">🔥</button>
    </div>
    <div class="details">
      <p class="info">
        <span>${listingObj.location}</span>
        <span class="likes">${listingObj.likes}🔥</span>
      </p>
      <h4 class="title">${listingObj.title}</h4>
      <div class="price">
        <strong>$${listingObj.price}</strong> / night
      </div>
    </div>
  `

  // // NESTED EVENT HANDLERS 
  // // 1. look for the element within a parent element, not the whole document
  // const leftBtn = outerCard.querySelector(".btn-left")
  // leftBtn.addEventListener("click", () => {
  //   // event callback innerfn

  //   // closure!
  //   outerCard.remove()
  // })

  // const rightBtn = outerCard.querySelector(".btn-right")
  // rightBtn.addEventListener("click", () => {
  //   listingObj.likes++
  //   const likesSpan = outerCard.querySelector(".likes")
  //   likesSpan.textContent = `${listingObj.likes}🔥`
  // })

  // append to the container
  listingsSection.append(outerCard)
}

function renderAllListings(listings) {
  listings.forEach(function (listingObj) {
    renderOneListing(listingObj)
  })
}


/******************  Initial Render ******************/
renderAllListings(listingsArray)


// document.querySelector(".btn-left").addEventListener("click", event => {
//   console.log("BUTTON CLICK", event.target)
// })

// document.querySelector(".card").addEventListener("click", event => {
//   console.log("CARD CLICK", event.target)
// })

// document.body.addEventListener("click", event => {
//   console.log("BODY CLICK", event.target)
// })


// const deleteBtns = document.querySelectorAll(".btn-left")
// deleteBtns.forEach(btn => {
//   btn.addEventListener("click", event => {
//     console.log(event.target)
//   })
// })