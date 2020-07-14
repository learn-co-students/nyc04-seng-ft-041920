import React from 'react'
import GenrePicker from './GenrePicker'
import Album from './Album'

// importing data for now, eventually we'll fetch!
import data from '../albums.json'
const albumsArray = data.albums

class AlbumsContainer extends React.Component {

  state = {
    selectedGenre: "All"
  }

  renderAlbums() {
    let filteredAlbums = albumsArray.filter(album => {
      if (this.state.selectedGenre === "All") {
        return true
      } else {
        return album.genre === this.state.selectedGenre
      }
    })
    return filteredAlbums.map(album =>
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

  render() {
    console.log("in AlbumContainer, state:", this.state)
    return (
      <main>
        <GenrePicker
          handleSelectedGenre={this.handleSelectedGenre}
          selectedGenre={this.state.selectedGenre}
        />
        <section className="albums">
          {this.renderAlbums()}
        </section>
      </main>
    )
  }
}

export default AlbumsContainer