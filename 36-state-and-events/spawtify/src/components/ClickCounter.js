import React from 'react'

class ClickCounter extends React.Component {

  // older way of initializing state
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: 0,
  //     beef: "steak"
  //   }
  // }

  // React convention we must follow!
  // this.state = {}
  // public instance fields
  state = {
    count: 0,
    beef: "steak"
  }

  // syntheticEvent - React's version of the native browser event
  // that's been optimized

  // remember this! always use arrow fn for callbacks in class components
  handleClick = (syntheticEvent) => {

    // mutating state = NONO NEVER DO THIS!
    // this.state.count = this.state.count + 1

    console.log("before setState", this.state)

    // not mutate state = this.setState
    // object version
    // will work 95% of the time
    // setState takes in an object with keys representing the keys on state we want to change
    // it will update state and cause our component to re-render
    this.setState({
      count: this.state.count + 1  // 0 + 1
    })

    // callback version
    // React best practice:
    // any time you have to calculate next state from the previous version
    // use this callback format
    // https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
    // this.setState(prevState => {
    //   // return an object with the keys we want to update
    //   return {
    //     count: prevState.count + 1  // 0 + 1
    //   }
    // })

    console.log("after setState", this.state)
    // console.log("outside timeout", syntheticEvent.target)

    // // don't nullify the event
    // syntheticEvent.persist()

    // // async code - event is nullified
    // setTimeout(() => {
    //   console.log("inside timeout", syntheticEvent.target)
    // }, 1000)
  }

  render() {
    // console.log(this.props)
    // console.log("in render, state:", this.state)
    return (
      <h2>
        Click Counter:
        <button onClick={this.handleClick}>{this.state.count} Clicks</button>
      </h2>
    )
  }
}

export default ClickCounter