import React from 'react';

import Sidebar from './Sidebar'
import ProfileMenu from './ProfileMenu';
import AlbumsContainer from './AlbumsContainer';
import NewAlbum from './NewAlbum';

class App extends React.Component {
  state = {
    albums: [],
    page: "home"
  }

  addAlbum = album => {
    this.setState({
      albums: [album, ...this.state.albums]
    })
  }

  changePage = page => {
    this.setState({ page })
  }

  handleFetchClick = () => {
    fetch("http://localhost:3001/albums")
      .then(r => r.json())
      .then(albumsArray => {
        // set state will make the component re-render
        this.setState({ albums: albumsArray })
      })
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
          <button onClick={this.handleFetchClick}>Fetch albums</button>
          {this.renderPage()}
        </main>
      </div>
    );
  }
}

export default App;
