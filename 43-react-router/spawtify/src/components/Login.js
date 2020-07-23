import React from 'react'

class NewAlbum extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="form-container">
        <h2>Login</h2>
        <form className="form" onSubmit={e => e.preventDefault()}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={this.handleInputChange} value={this.state.username} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={this.handleInputChange} value={this.state.password} />

          <input type="submit" value="Login" />
        </form>

      </div>
    )
  }
}

export default NewAlbum