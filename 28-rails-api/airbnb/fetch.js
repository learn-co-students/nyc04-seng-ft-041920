function createListing(listingObj) {
  return fetch(`http://localhost:3000/listings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(listingObj)
  })
    .then(r => r.json())
}

function getListings() {
  return fetch(`http://localhost:3000/listings`)
    .then(r => r.json())
}

function updateLikes(listingId) {
  return fetch(`http://localhost:3000/listings/${listingId}/like`, {
    method: "PATCH"
  })
    .then(r => r.json())
}

function deleteListing(listingId) {
  return fetch(`http://localhost:3000/listings/${listingId}`, {
    method: "DELETE"
  })
    .then(r => r.json())
}