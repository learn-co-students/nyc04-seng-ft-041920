import React from 'react'
import GenrePicker from './GenrePicker'
import Album from './Album'

// importing data for now, eventually we'll fetch!
import albumsArray from '../albums.json'
import ClickCounter from './ClickCounter'

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

  // function definition 
  // takes in a genre as an argument
  handleSelectedGenre = genre => {
    console.log("in AlbumContainer", genre)
    // use setState to update internal state and re-render component
    this.setState({
      selectedGenre: genre
    })
  }

  render() {
    console.log("in render, state:", this.state)
    return (
      <main>
        <ClickCounter />
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