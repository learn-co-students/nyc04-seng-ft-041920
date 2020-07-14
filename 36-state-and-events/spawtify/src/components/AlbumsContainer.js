import React from 'react'
import GenrePicker from './GenrePicker'
import Album from './Album'

// importing data for now, eventually we'll fetch!
import albumsArray from '../albums.json'
import ClickCounter from './ClickCounter'

class AlbumsContainer extends React.Component {

  renderAlbums() {
    return albumsArray.map(album =>
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
    return (
      <main>
        <ClickCounter />
        <GenrePicker />
        <section className="albums">
          {this.renderAlbums()}
        </section>
      </main>
    )
  }
}

export default AlbumsContainer