import React from 'react'

class Album extends React.Component {

  state = {
    inLibrary: this.props.inLibrary
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
    const { inLibrary } = this.state

    return (
      <div className="card">
        <div className="image">

          <img src={image} alt={name} />
          <button onClick={this.handleUpdateLibrary} className="library">{inLibrary ? "♥" : "♡"}</button>
        </div>
        <div className="details">
          <h4 className="title">{name}</h4>
          <p>{genre}</p>
        </div>
      </div>
    )
  }
}

export default Album