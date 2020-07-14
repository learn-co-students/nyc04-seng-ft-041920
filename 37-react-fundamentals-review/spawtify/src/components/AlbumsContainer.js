import React from 'react'
import GenrePicker from './GenrePicker'
import Album from './Album'

// importing data for now, eventually we'll fetch!
// import data from '../albums.json'
// const albumsArray = data.albums

class AlbumsContainer extends React.Component {

  // [1,2,3,4,5,6,7,8] -> [1,2,3,4], [5,6,7,8]
  state = {
    selectedGenre: "All",
    albums: [],
    startIndex: 0
  }

  renderAlbums() {
    let filteredAlbums = this.state.albums.filter(album => {
      if (this.state.selectedGenre === "All") {
        return true
      } else {
        return album.genre === this.state.selectedGenre
      }
    })
    return filteredAlbums
      .slice(this.state.startIndex, this.state.startIndex + 8)  // 0, 8
      .map(album =>
        <Album
          key={album.id}
          image={album.image}
          genre={album.genre}
          name={album.name}
          inLibrary={album.inLibrary}
        />
      )
  }

  handleSelectedGenre = genre => {
    this.setState({
      selectedGenre: genre
    })
  }

  handleFetchClick = () => {
    fetch("http://localhost:3001/albums")
      .then(r => r.json())
      .then(albumsArray => {
        // set state will make the component re-render
        this.setState({ albums: albumsArray })
      })
  }

  handleDecreaseIndex = () => {
    console.log("decr")
    this.setState({ startIndex: this.state.startIndex - 8 })
  }

  handleIncreaseIndex = () => {
    console.log("incr")
    this.setState({ startIndex: this.state.startIndex + 8 })
  }

  render() {
    console.log("in AlbumContainer, state:", this.state)
    return (
      <main>
        <GenrePicker
          handleSelectedGenre={this.handleSelectedGenre}
          selectedGenre={this.state.selectedGenre}
        />

        <button onClick={this.handleFetchClick}>Click to fetch albums</button>

        <section className="albums">
          {this.renderAlbums()}
        </section>
        <div>
          <button
            onClick={this.handleDecreaseIndex}
            disabled={this.state.startIndex === 0}
            className={this.state.startIndex === 0 ? "disabled" : ""}
          >Prev</button>
          <button onClick={this.handleIncreaseIndex} disabled={this.state.albums.length - this.state.startIndex <= 8}>Next</button>
        </div>
      </main>
    )
  }
}

export default AlbumsContainer