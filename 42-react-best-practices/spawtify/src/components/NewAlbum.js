import React from 'react'

class NewAlbum extends React.Component {
  state = {
    name: "",
    image: "",
    genre: "Cats",
  }

  handleInputChange = event => {
    const inputName = event.target.name
    // [inputName] will evaluate the variable inputName
    // so if inputName is "image", it will use the string "image" as the key
    this.setState({
      [inputName]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault() // remember to do this!

    // spread operator - copy the key/value pairs from state into a new object
    // and add inLibrary: false
    const bodyData = {
      ...this.state,
      inLibrary: false
    }

    fetch("http://localhost:3001/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyData)
    })
      .then(r => r.json())
      .then(newAlbum => {
        // pessimitic rendering 
        this.props.handleAddAlbum(newAlbum)
      })
  }

  render() {
    console.log("in NewAlbum, props", this.props)

    return (
      <div className="form-container">
        <h2>New Album</h2>

        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="name">Album Name</label>
          <input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} />

          <label htmlFor="image">Image</label>
          <input type="text" name="image" onChange={this.handleInputChange} value={this.state.image} />

          <label htmlFor="genre">Genre</label>
          <select name="genre" onChange={this.handleInputChange} value={this.state.genre}>
            <option value="Cats">Cats</option>
            <option value="Dogs">Dogs</option>
            <option value="Birds">Birds</option>
            <option value="Snakes">Snakes</option>
            <option value="Goats">Goats</option>
          </select>

          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}

export default NewAlbum