import React from 'react'
import { getLoggingInfo } from '../utils/logger';

class Grandchild extends React.Component {
  constructor(props) {
    super(props)
    // console.log(...getLoggingInfo(this))
  }

  state = {
    clicked: true
  }

  toggle = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }))
  }

  render() {
    return (
      <div className="box">
        <button onClick={this.toggle}>{this.state.clicked ? "Off" : "On"}</button>
        <p>Grandchild</p>
      </div>
    );
  }
}

export default Grandchild 