import React from 'react'

const SideMenu = ({ page, setPage }) => {
  return (
    <ul>
      <li>
        <span className={`link${page === "home" ? " active" : ""}`} onClick={() => setPage("home")}>
          <span role="img" aria-label="home">🏚</span>Home
        </span>
      </li>
      <li>
        <span className={`link${page === "favorites" ? " active" : ""}`} onClick={() => setPage("favorites")}>
          <span role="img" aria-label="heart">♥️</span>Favorites
        </span>
      </li>
      <li>
        <span className={`link${page === "new" ? " active" : ""}`} onClick={() => setPage("new")}>
          <span role="img" aria-label="plus">➕</span>New Album
        </span>
      </li>
    </ul>
  )
}

export default SideMenu