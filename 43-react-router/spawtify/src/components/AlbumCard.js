import React from 'react'
import { Link, withRouter, useParams, useHistory } from 'react-router-dom'

const AlbumCard = (props) => {
  // Hooks! (only available in function components)
  const params = useParams()
  console.log(params)
  const history = useHistory()
  console.log(history)

  const { id, image, name, genre, favorite } = props.album

  const handleUpdateFavorite = () => {
    fetch(`http://localhost:3001/albums/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        favorite: !favorite
      })
    })
      .then(r => r.json())
      .then(updatedAlbum => {
        props.updateAlbum(updatedAlbum)
      })
  }

  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={name} />
        <button onClick={handleUpdateFavorite} className="library">{favorite ? "♥" : "♡"}</button>
      </div>
      <div className="details">
        <h4 className="title">{name}</h4>
        <p>{genre}</p>
        <Link to={`/albums/${id}`}>
          <button className="play">
            <span role="img" aria-label="play">▶</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

// withRouter Higher Order Component (also works with classes)
// returns a component that has access to router props
const ComponentWithRouter = withRouter(AlbumCard)

export default ComponentWithRouter