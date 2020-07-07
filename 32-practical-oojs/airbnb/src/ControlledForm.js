class ControlledForm {

  data = {}

  constructor(formSelector, callbacks) {
    // get the form element
    this.form = document.querySelector(formSelector)

    // initialize data
    for (let element of this.form.elements) {
      this.updateData(element)
    }

    // handle form submit
    this.form.addEventListener("submit", this.handleSubmit)

    // track changes to the input fields so we can have a live 'snapshot' of the form data whenever we want
    this.form.addEventListener("input", this.handleInput)

    // callbacks we can use to access data from outside the class
    this.onSubmit = callbacks.onSubmit
    this.onInput = callbacks.onInput
  }

  updateData(element) {
    if (element.type === "submit") return;

    if (element.type === "number") {
      this.data[element.name] = parseInt(element.value)
    } else {
      this.data[element.name] = element.value
    }
  }

  handleInput = event => {
    this.updateData(event.target)

    // check that onInput is defined as a function before calling it
    if (typeof this.onInput === "function") {
      this.onInput(this.data)
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    // check that onSubmit is defined as a function before calling it
    if (typeof this.onSubmit === "function") {
      this.onSubmit(this.data)
    }
  }
}