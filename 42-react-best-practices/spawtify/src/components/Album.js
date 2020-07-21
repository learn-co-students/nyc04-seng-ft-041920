import React from 'react'

class Album extends React.Component {

  state = {
    inLibrary: this.props.inLibrary,
    playing: false
  }

  handlePlayClick = (id) => {
    this.setState(prevState => ({
      playing: !prevState.playing
    }))
  }

  handleUpdateLibrary = () => {
    // not best practice!
    // this.setState({
    //   inLibrary: !this.state.inLibrary
    // })

    // calculate next state based on previous state
    // prevState is the argument to the callback
    // it's an object that all our previous state in it
    console.log("before", this.state)

    this.setState(prevState => {
      return {
        inLibrary: !prevState.inLibrary
      }
    }, () => {
      // setState is async
      console.log("after", this.state)
    })



  }

  render() {
    const { image, name, genre, videoId } = this.props
    const { inLibrary, playing } = this.state

    return (
      <div className="card">
        {playing
          ? <iframe
            id="ytplayer"
            type="text/html"
            title={name}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
          />
          : <div className="image">
            <img src={image} alt={name} />
            <button onClick={this.handleUpdateLibrary} className="library">{inLibrary ? "♥" : "♡"}</button>
          </div>
        }
        <div className="details">
          <h4 className="title">{name}</h4>
          <p>{genre}</p>
          <button className="play" onClick={this.handlePlayClick}>
            {playing
              ? <span role="img" aria-label="pause">||</span>
              : <span role="img" aria-label="play">▶</span>
            }
          </button>
        </div>
      </div>
    )
  }
}

export default Album