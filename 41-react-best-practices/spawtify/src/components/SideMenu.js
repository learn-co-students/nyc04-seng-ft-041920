import React from 'react'
import Search from './Search'

const SideMenu = ({ page, handleMenuClick }) => {
  return (
    <div className="side-menu">
      <ul>
        <li className={page === "home" ? "active" : ""} onClick={() => handleMenuClick("home")}>
          <span role="img" aria-label="home">🏚</span>
          Home
        </li>
        <li>
          <span role="img" aria-label="heart">♥️</span>
          Favorites
        </li>
        <li className={page === "new" ? "active" : ""} onClick={() => handleMenuClick("new")}>
          <span role="img" aria-label="plus">➕</span>
          New Album
        </li>
      </ul>
      <Search />
    </div>
  )
}

export default SideMenu