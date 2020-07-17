import React, { Component } from 'react'

export default class Filter extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.toggleGreased}>Toggle Greazy Pigs</button>
        <button onClick={this.props.toggleSortName}>Sort by Name</button>
        <button>Sort by Weight</button>
      </div>
    )
  }
}