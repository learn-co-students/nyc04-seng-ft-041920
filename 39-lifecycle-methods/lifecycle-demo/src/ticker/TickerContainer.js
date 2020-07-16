import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {
  state = {
    number: 0,
  }

  /*
    What do we need?

    componentDidMount()

    componentDidUpdate()

    componentWillUnmount()

    none of the above!
  */

  // When our app loads, get a new random number from 1 - 100 every second
  // On button click, stop/start the interval
  // set Ticker background to RED if the previous number is less than the current number
  // set Ticker background to GREEN if the previous number is greater than the current number
  // Don't forget to clean up the intervals if this component goes away!

  render() {
    return (
      <div className="box">
        <button>Stop/Start Ticker</button>
        <Ticker number={this.state.number} />
      </div>
    )
  }
}

export default TickerContainer