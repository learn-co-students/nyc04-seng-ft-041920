import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {
  state = {
    number: 0,
    myInteral: null,
    color: "white"
  }

  componentDidMount() {
    this.startTimer()
  }

  componentDidUpdate(prevProp, prevState) {
    // be careful of infinite loops!
    // use condition to set state
    if (this.state.number > prevState.number) {
      this.setState({ color: "green" })
    } else if (this.state.number < prevState.number) {
      this.setState({ color: "red" })
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.myInteral)
  }

  handleClick = () => {
    if (this.state.myInteral) {
      clearInterval(this.state.myInteral)
      this.setState({ myInteral: null })
    } else {
      this.startTimer()
    }
  }

  startTimer() {
    const myInteral = setInterval(() => {
      console.log(this.state)
      this.setState({
        number: Math.floor(Math.random() * 100) + 1
      })
    }, 1000)
    this.setState({ myInteral })
  }

  /*
    What do we need?

    componentDidMount()

    componentDidUpdate()

    componentWillUnmount()

    none of the above!
  */

  // Don't forget to clean up the intervals if this component goes away!

  render() {
    return (
      <div className="box" style={{ backgroundColor: this.state.color }}>
        <button onClick={this.handleClick}>Stop/Start Ticker</button>
        <Ticker number={this.state.number} />
      </div>
    )
  }
}

export default TickerContainer