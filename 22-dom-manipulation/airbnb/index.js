// CRUD with the DOM

// Read
const logo = document.querySelector("h1.logo")

// Update
logo.textContent = "DragonAirBnB"

// Delete
// logo.remove()

// remove multiple children in one go!
// listingsSection.innerHTML = ""

// Create

// Technique 1: hand crafted individual nodes
// 1. find a place to add new elements
const menu = document.querySelector("#menu")

// 2. create the DOM node
const subMenu = document.createElement("h4")
console.log(subMenu)

// 3. define attributes on that node
subMenu.textContent = "i am not creative rn"

// 4. slap it on the DOM (append to some parent element)
menu.append(subMenu)



/* <div class="card">
  <div class="image">
    <img src="https://i.kinja-img.com/gawker-media/image/upload/s--vYNPTkDt--/c_scale,fl_progressive,q_80,w_800/198qdy1m0jf7mjpg.jpg" alt="Upscale Lair in Quiet Neighborhood"/>
    <button class="favorite">
      <span>🔥</span>
    </button>
  </div>
  <div class="details">
    <p class="info">
      <span>Middle Earth</span>
      <span class="rating">★ 4.23</span>
    </p>
    <h4 class="title">Upscale Lair in Quiet Neighborhood</h4>
    <div class="price">
      <strong>$800</strong> / night
    </div>
  </div>
</div> */












// TODO: create cards for each object in this array
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

// Techique 2: innerHTML
// 1. find a place in the DOM to append things
const listingsSection = document.querySelector("#listings")

listingsArray.forEach(function (listingObj) {

  // 2. set innerHTML to a string of valid HTML
  listingsSection.innerHTML += `
    <div class="card">
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
    </div>
  `
})
