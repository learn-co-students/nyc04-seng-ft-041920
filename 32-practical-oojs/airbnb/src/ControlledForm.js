class ControlledForm {
  constructor(form, callbacks) {
    this.form = form

    this.form.addEventListener("submit", this.handleSubmit)

    this.onSubmit = callbacks.onSubmit
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const data = {}
    for (let el of event.target.elements) {
      if (el.type !== "submit") {
        data[el.name] = el.value
      }
    }
    console.log("in handleSubmit")
    this.onSubmit(data)

    // const listingObj = {
    //   title: event.target.title.value,
    //   imageUrl: event.target.imageUrl.value,
    //   locationName: event.target.locationName.value,
    //   price: event.target.price.value,
    //   likes: 0
    // }

    // console.log(listingObj)
  }
}