import React from 'react'
import Grandchild from './Grandchild'
import { getLoggingInfo } from '../utils/logger';

class Child extends React.Component {
  constructor(props) {
    super(props)
    console.log(...getLoggingInfo(this))
  }

  state = {
    clicked: true
  }

  componentDidMount() {
    console.log(...getLoggingInfo(this))
  }

  componentDidUpdate() {
    console.log(...getLoggingInfo(this))
  }

  componentWillUnmount() {
    console.log(...getLoggingInfo(this))
  }

  toggle = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }))
  }

  render() {
    console.log(...getLoggingInfo(this))
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

