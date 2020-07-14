import React from 'react';


import Sidebar from './Sidebar'
import AlbumsContainer from './AlbumsContainer';
import ProfileMenu from './ProfileMenu';

const App = () => {

  return (
    <div className="app-container">
      <Sidebar />
      <ProfileMenu />
      <AlbumsContainer />
    </div>
  );
}



export default App;
