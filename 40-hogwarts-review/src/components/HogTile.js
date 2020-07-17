import React from 'react'

export default class HogTile extends React.Component {

  state = {
    showingDetails: false
  }

  matchImg = name => {
    let convertedName = name.toLowerCase().split(" ").join("_")
    const img = require(`../hog-imgs/${convertedName}.jpg`)
    return img
  }

  handleToggle = () => {
    this.setState(prevState => {
      return {
        showingDetails: !prevState.showingDetails
      }
    })
  }

  render() {
    return (
      <div onClick={this.handleToggle}>
        <img src={this.matchImg(this.props.hog.name)} />
        <h4>{this.props.hog.name}</h4>
        {this.state.showingDetails && <div>
          <p>specialty: {this.props.hog.specialty}</p>
          <p>greased: {this.props.hog.greased ? "yep" : "nep"}</p>
          <p>weight: {this.props.hog.weight}</p>
          <p>highest medal achieved: {this.props.hog['highest medal achieved']}</p>
        </div>}
      </div>
    )
  }
}