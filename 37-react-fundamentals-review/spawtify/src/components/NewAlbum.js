import React from 'react'

const NewAlbum = props => {
  return (
    <div>
      <h3>New Album</h3>
      <form>
        <label>Album Name</label>
        <input type="text" name="name" />

        <label>Image</label>
        <input type="text" name="image" />

        <label>Genre</label>
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

export default NewAlbum