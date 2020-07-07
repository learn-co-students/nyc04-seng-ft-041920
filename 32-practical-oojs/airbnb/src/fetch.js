class APIAdapter {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  createListing(listingObj) {
    return fetch(`${this.baseUrl}/listings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(listingObj)
    })
      .then(r => r.json())
  }

  getListings() {
    return fetch(`${this.baseUrl}/listings`)
      .then(r => r.json())
  }

  updateLikes(listingId) {
    return fetch(`${this.baseUrl}/listings/${listingId}/like`, {
      method: "PATCH"
    })
      .then(r => r.json())
  }

  deleteListing(listingId) {
    return fetch(`${this.baseUrl}/listings/${listingId}`, {
      method: "DELETE"
    })
      .then(r => r.json())
  }
}


fetch(`http://localhost:3000/listings`)
  .then(function (response) {
    return response.json()
  })
  .then(function (actualData) {
    console.log(actualData)
  })