import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import AlbumsContainer from './AlbumsContainer';
import ProfileMenu from './ProfileMenu';

// named export
// export function helloThere() {
//   console.log("hi")
// }

function App() {
  return (
    <div className="App">
      <Sidebar />
      <AlbumsContainer />
      <ProfileMenu />
    </div>
  );
}

// default export
export default App;
