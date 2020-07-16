import React from 'react'
import Grandchild from './Grandchild'
import { getLoggingInfo } from '../utils/logger';

class Child extends React.Component {
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
        <p>Child</p>
        <Grandchild name="grandchild" />
      </div>
    );
  }
}

export default Child

