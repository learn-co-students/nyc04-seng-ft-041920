import React from 'react'
import Parent from './Parent'

class LifeCycleApp extends React.Component {
  state = {
    showChildren: true
  }

  toggle = () => {
    this.setState(prevState => ({
      showChildren: !prevState.showChildren
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>{this.state.showChildren ? "Unmount" : "Mount"} App</button>
        {this.state.showChildren && <Parent name="parent" />}
      </div>
    )
  }
}

export default LifeCycleApp;

// constructor - parent 
// constructor - child 
// constructor - grandchild 
