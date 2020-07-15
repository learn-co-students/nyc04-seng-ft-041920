import React from 'react'
import Logo from './Logo'

const Sidebar = (props) => {
  console.log("in Sidebar, props", props)


  return (
    <aside className="side-bar">
      <Logo />
      <ul className="side-menu">
        <li className={props.page === "home" ? "active" : ""} onClick={() => props.handleMenuClick("home")}>
          <span role="img" aria-label="home">🏚</span>
          Home
        </li>
        <li>
          <span role="img" aria-label="heart">♥️</span>
          Favorites
        </li>
        <li className={props.page === "new" ? "active" : ""} onClick={() => props.handleMenuClick("new")}>
          <span role="img" aria-label="plus">➕</span>
          New Album
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar