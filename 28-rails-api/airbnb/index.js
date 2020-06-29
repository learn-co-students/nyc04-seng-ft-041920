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
    const listingId = outerCard.dataset.id

    // DELETE /listings/:id
    deleteListing(listingId)
      .then(() => {
        // Pessimistic Rendering -> waiting for the response before updating the DOM
        outerCard.remove()
      })

    // Optimistic Rendering -> not waiting for the response before updating the DOM
    // outerCard.remove()
  }

  // Update likes
  if (event.target.matches(".btn-right")) {
    const outerCard = event.target.closest(".card")
    const listingId = outerCard.dataset.id
    const likesSpan = outerCard.querySelector(".likes")

    const newLikes = parseInt(likesSpan.textContent) + 1

    // optimistic rendering
    likesSpan.textContent = `${newLikes}🔥`

    // PATCH /listings/:id
    updateLikes(listingId, newLikes)
  }
})

// Create new listing
form.addEventListener("submit", event => {
  // always do this for form submit events!
  event.preventDefault()

  // in the callback, get data from the form (look in the input fields)
  const listingObj = {
    title: event.target.title.value,
    imageUrl: event.target.imageUrl.value,
    locationName: event.target.locationName.value,
    price: event.target.price.value,
    likes: 0
  }

  // POST /listings
  fetch(`http://localhost:3000/listings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(listingObj)
  })
    .then(r => r.json())
    .then(actualNewListing => {
      // Pessimistic Rendering
      renderOneListing(actualNewListing)
    })

})

/******************  Render Helpers *******************/
function renderOneListing(listingObj) {
  // create outer element with createElement
  const outerCard = document.createElement("div")
  outerCard.classList.add("card")
  // dataset.id will show up on the card as <div data-id="1">
  // this lets us add information to dom elements without affecting what the user sees
  outerCard.dataset.id = listingObj.id

  // use innerHTML to create its children
  outerCard.innerHTML = `
    <div class="image">
      <img src="${listingObj.imageUrl}" alt="${listingObj.title}"/>
      <button class="btn-left">☠️</button>
      <button class="btn-right">🔥</button>
    </div>
    <div class="details">
      <p class="info">
        <span>${listingObj.locationName}</span>
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
getListings()
  .then(listingData => {
    renderAllListings(listingData)
  })

// When X event happens
// Do Y fetch
// And slap Z on/off the DOM
