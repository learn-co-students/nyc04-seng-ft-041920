const adapter = new APIAdapter("http://localhost:3000")
console.log(adapter)

/****************** DOM Elements ******************/
const listingsSection = document.querySelector("#listings")
const toggleSwitch = document.querySelector("#toggle-dark-mode")
const form = document.querySelector("#listing-form")

const controlledForm = new ControlledForm(form, {
  onSubmit: (formData) => {
    console.log("onSubmit called", formData)
    adapter.createListing(formData)
      .then(actualNewListing => {
        // Pessimistic Rendering
        const listingCard = new ListingCard(actualNewListing, listingsSection)
        listingCard.render()
      })
  }
})

/****************** Event Handlers ******************/
toggleSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")
})

// Create new listing
// form.addEventListener("submit", event => {
//   // always do this for form submit events!
//   event.preventDefault()

//   // in the callback, get data from the form (look in the input fields)
// const listingObj = {
//   title: event.target.title.value,
//   imageUrl: event.target.imageUrl.value,
//   locationName: event.target.locationName.value,
//   price: event.target.price.value,
//   likes: 0
// }

//   // POST /listings
//   adapter.createListing(listingObj)
//     .then(actualNewListing => {
//       // Pessimistic Rendering
//       const listingCard = new ListingCard(actualNewListing, listingsSection)
//       listingCard.render()
//     })

// })

/******************  Render Helpers *******************/
function renderAllListings(listings) {
  listings.forEach(listingObj => {
    // renderOneListing(listingObj)
    const listingCard = new ListingCard(listingObj, listingsSection)
    listingCard.render()
  })
}

/******************  Initial Render ******************/
// GET /listings
adapter.getListings()
  .then(listingsArray => renderAllListings(listingsArray))