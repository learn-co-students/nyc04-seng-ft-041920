const defaultHeaders = {
  "Content-Type": "application/json",
  "Accept": "application/json",
}

const baseUrl = 'http://localhost:3000/listings'

function fetchAndParse(url, options) {
  return fetch(url, options).then(r => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error(res.statusText)
    }
  })
}

function createListing(listingObj) {
  return fetchAndParse(`${baseUrl}`, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(listingObj)
  })
}

function getListings() {
  return fetchAndParse(baseUrl)
}

function updateLikes(listingId, newLikes) {
  return fetchAndParse(`${baseUrl}/${listingId}`, {
    method: "PATCH",
    headers: defaultHeaders,
    body: JSON.stringify({
      likes: newLikes
    })
  })
}

function deleteListing(listingId) {
  return fetchAndParse(`${baseUrl}/${listingId}`, {
    method: "DELETE"
  })
}