import React from 'react'
import dogs from '../data/dogs.mp3'

class Album extends React.Component {

  state = {
    inLibrary: this.props.inLibrary,
    playing: false
  }

  dogsOut = new Audio(dogs)

  handlePlayClick = () => {
    if (!this.state.playing) {
      this.dogsOut.play()
      this.dogsOut.volume = 0.1
      this.dogsOut.loop = true
    } else {
      this.dogsOut.pause()
    }

    this.setState(prevState => ({
      playing: !prevState.playing
    }))
  }

  handleUpdateLibrary = () => {
    this.setState(prevState => {
      return {
        inLibrary: !prevState.inLibrary
      }
    })
  }

  render() {
    const { image, name, genre } = this.props
    const { inLibrary, playing } = this.state

    return (
      <div className="card">
        <div className="image">

          <img src={image} alt={name} />
          <button onClick={this.handleUpdateLibrary} className="library">{inLibrary ? "♥" : "♡"}</button>
        </div>
        <div className="details">
          <h4 className="title">{name}</h4>
          <p>{genre}</p>
          <button className="play" onClick={this.handlePlayClick}>
            {playing
              ? <span role="img" aria-label="pause">||</span>
              : <span role="img" aria-label="play">▶</span>}
          </button>
        </div>
      </div>
    )
  }
}

export default Album