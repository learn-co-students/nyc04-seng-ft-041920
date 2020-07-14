import React from 'react'

class Album extends React.Component {
  // constructor(props) {
  //   super()

  //   this.state = {
  //     inLibrary: props.inLibrary
  //   }
  // }

  state = {
    inLibrary: this.props.inLibrary
  }

  handleUpdateLibrary = () => {

    this.setState(prevState => {
      return {
        inLibrary: !prevState.inLibrary
      }
    })

    // this.setState(prevState => {
    //   return {
    //     inLibrary: !prevState.inLibrary
    //   }
    // }, () => console.log("state after update", this.state))


    // this.setState({
    //   inLibrary: !this.state.inLibrary
    // })
  }

  render() {
    console.log("in album, state:", this.state)
    console.log("in album, props:", this.props)
    const { image, name, genre } = this.props

    return (
      <div className="card">
        <div className="image">

          <img src={image} alt={name} />
          <button onClick={this.handleUpdateLibrary} className="library">{this.state.inLibrary ? "♥" : "♡"}</button>
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