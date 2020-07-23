import React from 'react'
import GenrePicker from './GenrePicker'
import AlbumCard from './AlbumCard'

class AlbumsContainer extends React.Component {

  state = {
    loaded: false,
    albums: [],
    selectedGenre: "All",
    startIndex: 0
  }

  componentDidMount() {
    fetch("http://localhost:3001/albums")
      .then(r => r.json())
      .then(albumsArray => {
        this.setState({
          albums: albumsArray,
          loaded: true
        })
      })
  }

  updateAlbum = updatedAlbum => {
    this.setState(prevState => {
      const updatedAlbums = prevState.albums.map(album => {
        if (updatedAlbum.id === album.id) return updatedAlbum
        return album
      })
      return {
        albums: updatedAlbums
      }
    })
  }

  handleSelectedGenre = genre => {
    this.setState({ selectedGenre: genre })
  }

  handleDecreaseIndex = () => {
    this.setState({ startIndex: this.state.startIndex - 8 })
  }

  handleIncreaseIndex = () => {
    this.setState({ startIndex: this.state.startIndex + 8 })
  }

  filterAlbums() {
    let filteredAlbums = this.state.albums
    if (this.state.selectedGenre !== "All") {
      filteredAlbums = filteredAlbums.filter(album => album.genre === this.state.selectedGenre)
    }
    if (this.props.onlyFavorites) {
      filteredAlbums = filteredAlbums.filter(album => album.favorite)
    }
    if (this.props.searchTerm !== "") {
      filteredAlbums = filteredAlbums.filter(album => album.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
    }
    return filteredAlbums
  }

  renderAlbums(albums) {
    return albums
      .slice(this.state.startIndex, this.state.startIndex + 8)
      .map(album =>
        <AlbumCard
          key={album.id}
          album={album}
          setPage={this.props.setPage}
          updateAlbum={this.updateAlbum}
        />
      )
  }

  render() {
    if (!this.state.loaded) return <h1>Loading...</h1>

    const { selectedGenre, startIndex } = this.state
    const albums = this.filterAlbums()

    return (
      <>
        <GenrePicker handleSelectedGenre={this.handleSelectedGenre} selectedGenre={selectedGenre} />
        <section className="albums">
          {this.renderAlbums(albums)}
        </section>
        {albums.length > 0 && (
          <div className="pager">
            <button onClick={this.handleDecreaseIndex} disabled={startIndex === 0} >Prev</button>
            <button onClick={this.handleIncreaseIndex} disabled={albums.length - startIndex <= 8}>Next</button>
          </div>
        )}
      </>
    )
  }
}

export default AlbumsContainer