// data for a listing
// render itself on the page
// handle events
class ListingCard {
  constructor(listing, parentElement) {
    this.listing = listing
    this.parentElement = parentElement
  }

  handleDelete = (event) => {
    //     // DELETE /listings/:id
    adapter.deleteListing(this.listing.id)
    this.outerCard.remove()
    console.log("deleting", this)
  }

  handleLike = () => {
    const likesSpan = this.outerCard.querySelector(".likes")
    adapter.updateLikes(this.listing.id)
      .then(updatedListing => {
        // pessimistic rendering
        this.listing.likes = updatedListing.likes
        likesSpan.textContent = `${updatedListing.likes}🔥`
      })
  }

  render() {
    // create outer element with createElement
    this.outerCard = document.createElement("div")
    this.outerCard.classList.add("card")

    // use innerHTML to create its children
    this.outerCard.innerHTML = `
      <div class="image">
        <img src="${this.listing.imageUrl}" alt="${this.listing.title}"/>
        <button class="btn-left">☠️</button>
        <button class="btn-right">🔥</button>
      </div>
      <div class="details">
        <p class="info">
          <span>${this.listing.locationName}</span>
          <span class="likes">${this.listing.likes}🔥</span>
        </p>
        <h4 class="title">${this.listing.title}</h4>
        <div class="price">
          <strong>$${this.listing.price}</strong> / night
        </div>
      </div>
    `
    const deleteButton = this.outerCard.querySelector(".btn-left")

    // const boundHandleDelete = this.handleDelete.bind(this)
    // console.log(boundHandleDelete)

    deleteButton.addEventListener("click", this.handleDelete)

    const likeButton = this.outerCard.querySelector(".btn-right")
    likeButton.addEventListener("click", this.handleLike)

    // append to the container
    this.parentElement.append(this.outerCard)
  }
}