let addToy = false;


const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
const toyCollection = document.querySelector("#toy-collection")
const toyForm = document.querySelector(".add-toy-form")

toyForm.addEventListener("submit", event => {
  event.preventDefault()

  // get data from the form
  const name = event.target.name.value
  const image = event.target.image.value

  // send data to the server
  fetch('http://localhost:3000/toys', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json"
    },
    body: JSON.stringify({
      "name": name,
      "image": image,
      "likes": 0
    })
  })
    .then(response => response.json())
    .then(toyObj => {
      renderOneToy(toyObj)
    })
})

function renderOneToy(toyObj) {
  const toyDiv = document.createElement("div")
  // toyDiv.classList.add("card")
  toyDiv.className = "card"

  toyDiv.innerHTML = `
    <h2>${toyObj.name}</h2>
    <img src="${toyObj.image}" alt="${toyObj.name}" class="toy-avatar" />
    <p>${toyObj.likes} Likes </p>
    <button class="like-btn">Like <3</button>
  `

  // individual event listeners
  const likeBtn = toyDiv.querySelector(".like-btn")
  const likesP = toyDiv.querySelector("p")

  likeBtn.addEventListener("click", () => {
    toyObj.likes++
    likesP.textContent = `${toyObj.likes} Likes`

    fetch(`http://localhost:3000/toys/${toyObj.id}`, {
      method: 'PATCH', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
        "likes": toyObj.likes
      })
    })

  })

  toyCollection.append(toyDiv)
}

function renderAllToys(toyArray) {
  toyArray.forEach(renderOneToy)
}

fetch("http://localhost:3000/toys")
  .then(response => {
    return response.json()
  })
  .then(toyArray => {
    renderAllToys(toyArray)
    // toyArray.forEach(toyObj => renderOneToy(toyObj))

    // toyArray.forEach(function(toyObject){
    //   renderOneToy(toyObj)
    // })
  })


addBtn.addEventListener("click", () => {
  // hide & seek with the form
  addToy = !addToy;
  if (addToy) {
    toyFormContainer.style.display = "block";
  } else {
    toyFormContainer.style.display = "none";
  }
});
