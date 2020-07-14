import React from 'react'

const Album = (props) => {
  const { image, name, genre, inLibrary } = props

  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={name} />
        <button className="library">{inLibrary ? "♥" : "♡"}</button>
      </div>
      <div className="details">
        <h4 className="title">{name}</h4>
        <em>{genre}</em>
      </div>
    </div>
  )
}

export default Album