import React from 'react'

const SideMenu = ({ page, handleMenuClick }) => {
  return (
    <ul className="side-menu">
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
  )
}

export default SideMenu