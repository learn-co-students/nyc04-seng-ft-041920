/** Yesterday's Code **/

/****************** DOM Elements ******************/
const listingsSection = document.querySelector("#listings")
const toggleSwitch = document.querySelector("#toggle-dark-mode")
const form = document.querySelector("#listing-form")

/****************** Event Handlers ******************/
toggleSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")
})

listingsSection.addEventListener("click", event => {
  // Delete a listing
  if (event.target.matches(".btn-left")) {
    const outerCard = event.target.closest(".card")
    outerCard.remove()
  }

  // Update likes
  if (event.target.matches(".btn-right")) {
    const outerCard = event.target.closest(".card")
    const likesSpan = outerCard.querySelector(".likes")

    const newLikes = parseInt(likesSpan.textContent) + 1

    likesSpan.textContent = `${newLikes}🔥`
  }
})

form.addEventListener("submit", event => {
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
