import React from 'react'

const ProfileMenu = (props) => {
  return (
    <nav className="menu">
      <button>
        <span className="profile-logo" role="img" aria-label="user">👤</span>
        <span className="profile-menu">username</span>
      </button>
    </nav>
  )
}

export default ProfileMenu