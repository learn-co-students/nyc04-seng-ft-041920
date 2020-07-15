import React from 'react'
import Logo from './Logo'

const Sidebar = () => {

  return (
    <aside className="side-bar">
      <Logo />
      <ul className="side-menu">
        <li className="active">
          <span role="img" aria-label="home">🏚</span>
          Home
        </li>
        <li>
          <span role="img" aria-label="heart">♥️</span>
          Favorites
        </li>
        <li>
          <span role="img" aria-label="plus">➕</span>
          New Album
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar