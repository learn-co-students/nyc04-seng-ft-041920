import React from 'react'

class Album extends React.Component {

  state = {
    inLibrary: this.props.inLibrary,
    playing: false
  }

  handlePlayClick = () => {
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