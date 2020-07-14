import React, { Component } from 'react'

class Album extends Component {

  render() {
    const { image, name, genre, inLibrary } = this.props

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
}

export default Album