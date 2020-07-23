import React from 'react'
import Logo from './Logo'
import SideMenu from './SideMenu'
import Search from './Search'

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
    const { page, setPage, setSearch } = this.props
    const { menuOpen } = this.state

    return (
      <aside className={`side-bar${menuOpen ? " open" : ""}`}>
        <nav>
          <button onClick={this.toggleMenu} className="burger">|</button>
          <Logo />
        </nav>
        <div className="side-menu">
          <SideMenu page={page} setPage={setPage} />
          <Search setSearch={setSearch} />
        </div>
      </aside>
    )
  }

}

export default Sidebar