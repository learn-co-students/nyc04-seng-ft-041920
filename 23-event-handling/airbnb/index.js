// document.addEventListener("DOMContentLoaded", function () {
// })

// 1. find the element we care about handling events on
const toggleSwitch = document.querySelector("#toggle-dark-mode")
console.log(toggleSwitch)

// 2. add an event listener with the event type and callback
toggleSwitch.addEventListener("click", function () {
  // 3. in the callback, tell js we want to happen
  document.body.setAttribute("id", "something")

  document.body.classList.toggle("dark-mode")
})

// get the form element
const form = document.querySelector("#listing-form")
// add event listener for the submit event
form.addEventListener("submit", function (event) {
  // always do this!
  event.preventDefault()

  // in the callback, get data from the form (look in the input fields)
  const listingTitle = event.target.title.value
  const listingImageUrl = event.target.imageUrl.value
  const listingLocation = event.target.location.value
  const listingPrice = event.target.price.value

  const listingObj = {
    title: listingTitle,
    imageUrl: listingImageUrl,
    location: listingLocation,
    price: listingPrice
  }

  console.log(listingObj)

  // slap on the dom
  renderOneListing(listingObj)
})



/** Yesterday's Code **/
// Data
const listingsArray = [
  {
    imageUrl: "https://i.kinja-img.com/gawker-media/image/upload/s--vYNPTkDt--/c_scale,fl_progressive,q_80,w_800/198qdy1m0jf7mjpg.jpg",
    location: "Middle Earth",
    price: 400,
    title: "Upscale Lair in Quiet Neighborhood",
    rating: 4.23
  },
  {
    imageUrl: "https://66.media.tumblr.com/184f1c4149e8618763346cc0fe6acc37/tumblr_mvx9ut2WEe1sh566ao1_1280.jpg",
    location: "Winterfell",
    price: 200,
    title: "Historic Castle in 'Cool' Uptown District",
    rating: 2.71
  },
  {
    imageUrl: "https://thecollegepost.com/wp-content/uploads/2019/12/main-building-750x430.jpg",
    location: "Philadelphia",
    price: 123,
    title: "Student-Friendly Downtown Abode",
    rating: 3.46
  }
]

// DOM Elements
const listingsSection = document.querySelector("#listings")

// Render Helpers
function renderOneListing(listingObj) {
  // create out element with createElement
  const outerCard = document.createElement("div")
  outerCard.classList.add("card")

  // use innerHTML to create its children
  outerCard.innerHTML = `
    <div class="image">
      <img src="${listingObj.imageUrl}" alt="${listingObj.title}"/>
      <button class="favorite">
        <span>🔥</span>
      </button>
    </div>
    <div class="details">
      <p class="info">
        <span>${listingObj.location}</span>
        <span class="rating">★ ${listingObj.rating}</span>
      </p>
      <h4 class="title">${listingObj.title}</h4>
      <div class="price">
        <strong>$${listingObj.price}</strong> / night
      </div>
    </div>
  `
  // append to the container
  listingsSection.append(outerCard)
  // listingsSection.innerHTML += `
  //   <div class="card">
  //     <div class="image">
  //       <img src="${listingObj.imageUrl}" alt="${listingObj.title}"/>
  //       <button class="favorite">
  //         <span>🔥</span>
  //       </button>
  //     </div>
  //     <div class="details">
  //       <p class="info">
  //         <span>${listingObj.location}</span>
  //         <span class="rating">★ ${listingObj.rating}</span>
  //       </p>
  //       <h4 class="title">${listingObj.title}</h4>
  //       <div class="price">
  //         <strong>$${listingObj.price}</strong> / night
  //       </div>
  //     </div>
  //   </div>
  // `
}

function renderAllListings(listings) {
  listings.forEach(function (listingObj) {
    renderOneListing(listingObj)
  })
}

// Initial Render
renderAllListings(listingsArray)
