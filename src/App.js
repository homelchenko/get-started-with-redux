import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import counter from './counterReducer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <p>{counter(8, { type: 'INCREMENT'})}</p>
          <p>{counter(3, { type: 'DECREMENT'})}</p>
          <p>{counter(undefined, { type: 'INCREMENT'})}</p>
        </div>
      </div>
    );
  }
}

export default App;