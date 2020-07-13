import React from 'react'
import GenrePicker from './GenrePicker'
import Album from './Album'

import albumsArray from './albums.json'
// const firstAlbum = albumsArray[0]
// console.log(firstAlbum)

const AlbumsContainer = (props) => {

  const renderAlbums = () => {
    return albumsArray.map(album => {
      return (
        <Album
          key={album.id}
          image={album.image}
          genre={album.genre}
          name={album.name}
        />
      )
    })
  }

  return (
    <div>
      <h1>AlbumsContainer</h1>
      <GenrePicker />
      {renderAlbums()}
    </div>
  )
}

export default AlbumsContainer