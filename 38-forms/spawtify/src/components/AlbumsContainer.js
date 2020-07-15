import React from 'react'
import GenrePicker from './GenrePicker'
import Album from './Album'

class AlbumsContainer extends React.Component {

  state = {
    selectedGenre: "All",
    albums: [],
    startIndex: 0
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
    this.setState({ startIndex: this.state.startIndex - 8 })
  }

  handleIncreaseIndex = () => {
    this.setState({ startIndex: this.state.startIndex + 8 })
  }

  filterAlbums() {
    if (this.state.selectedGenre === "All") {
      return this.state.albums
    } else {
      return this.state.albums.filter(album => album.genre === this.state.selectedGenre)
    }
  }

  renderAlbums() {
    return this.filterAlbums()
      .slice(this.state.startIndex, this.state.startIndex + 8)
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

  render() {
    console.log("in AlbumContainer, state:", this.state)

    const { selectedGenre, albums, startIndex } = this.state

    if (albums.length === 0) {
      return <button onClick={this.handleFetchClick}>Fetch albums</button>
    }

    return (
      <div>
        <GenrePicker
          handleSelectedGenre={this.handleSelectedGenre}
          selectedGenre={selectedGenre}
        />
        <section className="albums">
          {this.renderAlbums()}
        </section>
        <div className="pager">
          <button onClick={this.handleDecreaseIndex} disabled={startIndex === 0} >Prev</button>
          <button onClick={this.handleIncreaseIndex} disabled={albums.length - startIndex <= 8}>Next</button>
        </div>
      </div>
    )
  }
}

export default AlbumsContainer