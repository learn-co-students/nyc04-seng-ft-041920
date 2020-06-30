// DOM elements
const bakesContainer = document.querySelector("#bakes-container")
const bakeDetail = document.querySelector("#detail")
const newBakeForm = document.querySelector("#new-bake-form")
console.log(newBakeForm)

// Event listeners
newBakeForm.addEventListener("submit", event => {
  event.preventDefault()

  // Get the input values from the form
  // const imageInput = document.querySelector("#image-input")
  // const image = newBakeForm.image_url.value
  // const name = newBakeForm.name.value
  // const description = newBakeForm.description.value

  const newBakeObj = {
    name: newBakeForm.name.value,
    image_url: newBakeForm.image_url.value,
    description: newBakeForm.description.value
  }

  fetch('http://localhost:3000/bakes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBakeObj),
  })
    .then(r => r.json())
    .then(bakeObj => {

      renderBakeInSidebar(bakeObj)
    })

})


// EVENT DELEGATION!
// bakesContainer.addEventListener("click", event => {

//   if (event.target.matches(".item")) {

//     const bakeId = event.target.dataset.id
//     fetch(`http://localhost:3000/bakes/${bakeId}`)
//       .then(r => r.json())
//       .then(bakeObj => renderBakeDetail(bakeObj))

//   }

// })

// Render helpers
function renderBakeDetail(bakeObj) {
  bakeDetail.innerHTML = `
    <img src="${bakeObj.image_url}" alt="${bakeObj.name}">
    <h1>${bakeObj.name}</h1>
    <p class="description">
      ${bakeObj.description}
    </p>
    <form id="score-form" data-id="${bakeObj.id}">
      <input value="${bakeObj.score}" type="number" name="score" min="0" max="10" step="1">
      <input type="submit" value="Rate">
    </form>
  `

  const scoreForm = document.querySelector("#score-form")
  scoreForm.addEventListener("submit", e => {
    e.preventDefault()
    bakeObj.score = scoreForm.score.value
    bakeObj.beef = "wat"

    console.log("after form submit", bakeObj)
  })

  // <img src="https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/10/icecreams_forweb.jpg" alt="Alice’s Orange & Cardamom ‘Ice Cream’ Buns">
  // <h1>Alice’s Orange & Cardamom ‘Ice Cream’ Buns</h1>
  // <p class="description">
  //   Fragrant breads baked to resemble ice-cream tubs are topped with a delicious cream-cheese icing and sprinkles. They are great fun to serve to children.
  // </p>
  // <form id="score-form" data-id="1">
  //   <input value="10" type="number" name="score" min="0" max="10" step="1">
  //   <input type="submit" value="Rate">
  // </form>
}

function renderBakeInSidebar(bakeObj) {
  // <li class="item" data-id="1">Rahul’s Chocolate-dipped Orange Madeleines</li>
  const bakeLi = document.createElement("li")
  bakeLi.className = "item"
  bakeLi.dataset.id = bakeObj.id
  bakeLi.textContent = bakeObj.name

  // NESTED EVENT LISTENERS
  bakeLi.addEventListener("click", () => {
    console.log("on click", bakeObj)
    renderBakeDetail(bakeObj)
  })

  bakesContainer.append(bakeLi)
}

// Initialize
fetch("http://localhost:3000/bakes")
  .then(r => r.json())
  .then(bakesArray => {

    bakesArray.forEach(bakeObj => {
      renderBakeInSidebar(bakeObj)
    })

    renderBakeDetail(bakesArray[0])

  })