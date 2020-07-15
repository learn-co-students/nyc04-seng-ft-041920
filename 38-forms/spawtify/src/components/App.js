import React from 'react';

import Sidebar from './Sidebar'
import ProfileMenu from './ProfileMenu';
import AlbumsContainer from './AlbumsContainer';
import NewAlbum from './NewAlbum';

class App extends React.Component {

  render() {
    return (
      <div className="app-container">
        <Sidebar />
        <ProfileMenu />
        <main>
          <NewAlbum />
          <AlbumsContainer />
        </main>
      </div>
    );
  }
}

export default App;
