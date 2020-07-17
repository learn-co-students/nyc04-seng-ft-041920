import React from 'react'
import Logo from './Logo'
import SideMenu from './SideMenu'

class Sidebar extends React.Component {
  state = {
    menuOpen: false
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }))
  }

  render() {
    const { page, handleMenuClick } = this.props
    const { menuOpen } = this.state

    return (
      <aside className={`side-bar${menuOpen ? " open" : ""}`}>
        <nav>
          <button onClick={this.toggleMenu} className="burger">|</button>
          <Logo />
        </nav>
        <SideMenu page={page} handleMenuClick={handleMenuClick} />
      </aside>
    )
  }

}

export default Sidebar