import React from 'react'

class AlbumDetail extends React.Component {

  state = {
    album: null
  }

  componentDidMount() {
    fetch(`http://localhost:3001/albums/2`)
      .then(r => r.json())
      .then(album => {
        this.setState({ album })
      })
  }

  handleUpdateFavorite = () => {
    fetch(`http://localhost:3001/albums/${this.state.album.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        favorite: !this.state.album.favorite
      })
    })
      .then(r => r.json())
      .then(album => {
        this.setState({ album })
      })
  }

  render() {
    if (!this.state.album) return <h1>Loading...</h1>

    const { image, name, genre, videoId, favorite } = this.state.album
    return (
      <div className="detail">
        <div className="info">
          <div className="image">
            <img src={image} alt={name} />
            <button onClick={this.handleUpdateFavorite} className="library">{favorite ? "♥" : "♡"}</button>
          </div>
          <div className="details">
            <h1 className="title">{name}</h1>
            <h2>{genre}</h2>
          </div>
        </div>
        <h2>Video</h2>
        <div className="video">
          <iframe
            id="ytplayer"
            type="text/html"
            title={name}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
          />
        </div>
      </div>
    )
  }
}

export default AlbumDetail