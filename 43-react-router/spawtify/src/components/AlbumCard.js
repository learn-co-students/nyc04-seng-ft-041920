import React from 'react'

const AlbumCard = (props) => {
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
        <button className="play" onClick={() => props.setPage("show")}>
          <span role="img" aria-label="play">▶</span>
        </button>
      </div>
    </div>
  )
}

export default AlbumCard