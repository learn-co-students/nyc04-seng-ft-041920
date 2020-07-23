import React from 'react'
import { NavLink } from 'react-router-dom'

const SideMenu = ({ page, setPage }) => {
  return (
    <ul>
      <li>
        <NavLink to="/albums" className="link" exact>
          <span role="img" aria-label="home">🏚</span>Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/favorites" className="link">
          <span role="img" aria-label="heart">♥️</span>Favorites
        </NavLink>
      </li>
      <li>
        <NavLink to="/albums/new" className="link">
          <span role="img" aria-label="plus">➕</span>New Album
        </NavLink>
      </li>
    </ul>
  )
}

export default SideMenu