import React from 'react'
import GenrePicker from './GenrePicker'
import Album from './Album'

class AlbumsContainer extends React.Component {

  state = {
    selectedGenre: "All",
    startIndex: 0
  }

  handleSelectedGenre = genre => {
    this.setState({
      selectedGenre: genre
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
      return this.props.albums
    } else {
      return this.props.albums.filter(album => album.genre === this.state.selectedGenre)
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

    const { selectedGenre, startIndex } = this.state
    const { albums } = this.props

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