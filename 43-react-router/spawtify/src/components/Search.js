import React from 'react'

class Search extends React.Component {
  state = {
    searchTerm: ""
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.setSearch(this.state.searchTerm)
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {

    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          placeholder="Search..."
          autoComplete="off"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <input type="submit" value="🔍" />
      </form>
    )
  }
}

export default Search