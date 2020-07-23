import React from 'react'

class NewAlbum extends React.Component {

  state = {
    name: "",
    image: "",
    genre: "Cats",
    videoId: ""
  }

  handleInputChange = (event) => {
    const inputName = event.target.name
    this.setState({
      [inputName]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const bodyData = {
      ...this.state,
      favorite: false
    }

    fetch("http://localhost:3001/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyData)
    })
      .then(r => r.json())
      .then(() => {
        // TODO: redirect!
        this.props.setPage("detail")
      })
  }

  render() {
    return (
      <div className="form-container">
        <h2>New Album</h2>

        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="name">Album Name</label>
          <input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} />

          <label htmlFor="image">Image</label>
          <input type="text" name="image" onChange={this.handleInputChange} value={this.state.image} />

          <label htmlFor="videoId">Youtube Video ID</label>
          <input type="text" name="videoId" onChange={this.handleInputChange} value={this.state.videoId} />

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