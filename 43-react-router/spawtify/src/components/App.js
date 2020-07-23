import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Sidebar from './Sidebar'
import ProfileMenu from './ProfileMenu';
import AlbumsContainer from './AlbumsContainer';
import NewAlbum from './NewAlbum';
import Login from './Login';
import AlbumDetail from './AlbumDetail';

class App extends React.Component {
  state = {
    page: "home",
    searchTerm: ""
  }

  setPage = page => {
    this.setState({
      page,
      searchTerm: ""
    })
  }

  setSearch = searchTerm => {
    this.setState({
      page: "home",
      searchTerm: searchTerm
    })
  }

  renderPage() {
    switch (this.state.page) {
      case "home":
        return (
          <AlbumsContainer
            onlyFavorites={false}
            searchTerm={this.state.searchTerm}
            updateAlbum={this.updateAlbum}
            setPage={this.setPage}
          />
        )

      case "favorites":
        return (
          <AlbumsContainer
            onlyFavorites={true}
            searchTerm={""}
            updateAlbum={this.updateAlbum}
            setPage={this.setPage}
          />
        )

      case "show":
        return <AlbumDetail />

      case "new":
        return <NewAlbum setPage={this.setPage} />

      case "login":
        return <Login />

      default:
        return <h1>404 Not Found</h1>
    }
  }

  render() {
    return (
      <div className="app-container">
        <Sidebar page={this.state.page} setPage={this.setPage} setSearch={this.setSearch} />
        <ProfileMenu setPage={this.setPage} />
        <main>
          <Switch>
            <Route exact path="/albums" render={() => (
              <AlbumsContainer
                onlyFavorites={false}
                searchTerm={this.state.searchTerm}
                updateAlbum={this.updateAlbum}
                setPage={this.setPage}
              />
            )} />
            <Route exact path="/favorites" render={routeProps => (
              <AlbumsContainer
                {...routeProps}
                onlyFavorites={true}
                searchTerm={this.state.searchTerm}
                updateAlbum={this.updateAlbum}
                setPage={this.setPage}
              />
            )} />
            <Route path="/albums/new" render={routeProps => <NewAlbum {...routeProps} />} />

            {/* <Route path="/albums/:id" component={AlbumDetail} /> */}

            <Route path="/albums/:id" render={routeProps => (
              <AlbumDetail {...routeProps} myCustomProp={"anything"} searchTerm={this.state.searchTerm} />
            )} />

            <Route path="/login" render={() => <Login />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
