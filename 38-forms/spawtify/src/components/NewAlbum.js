import React from 'react'

class NewAlbum extends React.Component {

  render() {
    return (
      <div className="form-container">
        <h2>New Album</h2>

        <form>
          <label htmlFor="name">Album Name</label>

          <input type="text" name="name" />

          <label htmlFor="image">Image</label>

          <input type="text" name="image" />

          <label htmlFor="genre">Genre</label>

          <select name="genre">
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