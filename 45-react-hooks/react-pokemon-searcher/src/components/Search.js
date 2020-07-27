import React from 'react'

class Search extends React.Component {
  state = {
    query: this.props.query
  }

  handleChange = e => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSearchSubmit(this.state.query)
  }

  render() {

    return (
      <form className="ui search" onSubmit={this.handleSubmit}>
        <div className="ui icon input">
          <input className="prompt" onChange={this.handleChange} value={this.state.query} />
          <i className="search icon" />
        </div>
      </form>
    )
  }
}

export default Search
