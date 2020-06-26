/** Yesterday's Code **/
console.log("hi")
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
  // When (a user click on the btn-left) event happens
  if (event.target.matches(".btn-left")) {
    const outerCard = event.target.closest(".card")
    const listingId = outerCard.dataset.id

    // Do (DELETE /listings/:id) fetch
    deleteListing(listingId)
      .then(data => {
        console.log(data) // delete will return an empty object
        // Pessimistic Rendering -> waiting for the response before updating the DOM
        outerCard.remove()
      })
      .catch(err => {
        alert(err)
      })

    // Optimistic Rendering -> not waiting for the response before updating the DOM
    // And slap the card off the DOM
    // outerCard.remove()
  }

  // Update likes
  if (event.target.matches(".btn-right")) {
    const outerCard = event.target.closest(".card")
    const listingId = outerCard.dataset.id
    const likesSpan = outerCard.querySelector(".likes")

    const newLikes = parseInt(likesSpan.textContent) + 1

    likesSpan.textContent = `${newLikes}🔥`

    // PATCH /listings/:id
    updateLikes(listingId, newLikes)
  }
})

// Create new listing

// When X event happens
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

  // Do Y fetch
  // POST /listings
  createListing(listingObj)
    .then(actualNewListing => {
      // And slap Z on/off the DOM
      // slap on the dom
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
  outerCard.dataset.rei = "nice guy"

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
getListings()
  .then(listingData => {
    renderAllListings(listingData)
  })


// When X event happens
// Do Y fetch
// And slap Z on/off the DOM


// function myCustomFetch(url) {
//   return fetch(url).then(resp => resp.json())
// }

// myCustomFetch("http://localhost:3000/listings")
//   .then(listingData => {
//     renderAllListings(listingData)
//   })

