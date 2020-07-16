import React from 'react'
import Logo from './Logo'
import Search from './Search'
import SideMenu from './SideMenu'

const Sidebar = (props) => {
  console.log("in Sidebar, props", props)

  return (
    <aside className="side-bar">
      <Logo />
      <Search />
      <SideMenu page={props.page} handleMenuClick={props.handleMenuClick} />
    </aside>
  )
}

export default Sidebar