import React from 'react'
import dogs from '../data/dogs.mp3'

class Logo extends React.Component {

  state = {
    playing: false
  }

  dogsOut = new Audio(dogs)

  handleLogoClick = () => {
    if (!this.state.playing) {
      this.dogsOut.currentTime = 18.5
      this.dogsOut.play()
      document.body.classList.add("party-time")
    } else {
      this.dogsOut.pause()
      document.body.classList.remove("party-time")
    }

    this.setState(prevState => ({
      playing: !prevState.playing
    }))
  }

  render() {
    return (
      <h1 className="logo">
        <span onClick={this.handleLogoClick} role="img" aria-label="paw">🐾</span>
        Spawtify
      </h1>
    )
  }
}

export default Logo