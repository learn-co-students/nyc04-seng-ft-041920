const adapter = new APIAdapter("http://localhost:3000")
console.log(adapter)

/****************** DOM Elements ******************/
const listingsSection = document.querySelector("#listings")
const toggleSwitch = document.querySelector("#toggle-dark-mode")

const controlledForm = new ControlledForm("#listing-form", {
  onInput: (formData) => {
    console.log(formData)
  },
  onSubmit: (formData) => {
    formData.likes = 0
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