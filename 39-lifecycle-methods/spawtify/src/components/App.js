import React from 'react';

import Sidebar from './Sidebar'
import ProfileMenu from './ProfileMenu';
import AlbumsContainer from './AlbumsContainer';
import NewAlbum from './NewAlbum';

class App extends React.Component {
  state = {
    albums: [],
    page: "home",
    loaded: false
  }

  componentDidMount() {
    fetch("http://localhost:3001/albums")
      .then(r => r.json())
      .then(albumsArray => {
        // set state will make the component re-render
        this.setState({
          albums: albumsArray,
          loaded: true
        })
      })
  }

  addAlbum = album => {
    this.setState({
      albums: [album, ...this.state.albums]
    })
  }

  changePage = page => {
    this.setState({ page })
  }

  renderPage() {
    if (this.state.page === "home") {
      return <AlbumsContainer albums={this.state.albums} />
    } else if (this.state.page === "new") {
      return <NewAlbum handleAddAlbum={this.addAlbum} />
    }
  }

  render() {
    return (
      <div className="app-container">
        <Sidebar page={this.state.page} handleMenuClick={this.changePage} />
        <ProfileMenu />
        <main>
          {this.state.loaded ? this.renderPage() : <h1>Loading...</h1>}
        </main>
      </div>
    );
  }
}

export default App;
