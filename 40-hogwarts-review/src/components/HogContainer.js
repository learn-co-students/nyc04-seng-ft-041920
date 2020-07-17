import React from 'react'
import Filter from './Filter'
import HogTile from './HogTile'

export default class HogContainer extends React.Component {

  state = {
    showGreased: false,
    sortedByName: false
  }

  toggleGreased = () => {
    this.setState({
      showGreased: !this.state.showGreased
    })
  }

  toggleSortName = () => {
    this.setState({
      sortedByName: !this.state.sortedByName
    })
  }

  renderTiles() {
    console.log(this.props.hogs)
    let filteredHogs = [...this.props.hogs]
    if (this.state.showGreased) {
      filteredHogs = this.props.hogs.filter(hog => hog.greased)
    }
    if (this.state.sortedByName) {
      filteredHogs.sort((hogA, hogB) => hogA.name.localeCompare(hogB.name))
    }

    return filteredHogs.map(hog => <HogTile key={hog.name} hog={hog} />)
  }

  render() {
    console.log("in HogContainer, staet", this.state)
    return (
      <div>
        <Filter toggleGreased={this.toggleGreased} toggleSortName={this.toggleSortName} />
        {this.renderTiles()}
      </div>
    )
  }
}