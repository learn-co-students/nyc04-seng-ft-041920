import React from 'react'
import { getLoggingInfo } from '../utils/logger';

class Grandchild extends React.Component {
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
        <p>Grandchild</p>
      </div>
    );
  }
}

export default Grandchild 