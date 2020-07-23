import React from 'react'

const ProfileMenu = ({ setPage }) => {

  return (
    <nav className="menu">
      <button onClick={() => setPage("login")}>
        <span className="profile-logo" role="img" aria-label="user">👤</span>
        <span className="profile-menu">Login</span>
      </button>
    </nav>
  )
}

export default ProfileMenu