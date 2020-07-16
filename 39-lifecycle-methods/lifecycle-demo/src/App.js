import React from 'react';
import './App.css'
import LifeCycleApp from './lifecycle/LifeCycleApp'
// import TickerContainer from './ticker/TickerContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <LifeCycleApp />
      </div>
    );
  }
}

export default App;
