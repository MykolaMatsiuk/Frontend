import React, { Component } from 'react';
import logo from '../../logo.svg';

class Body extends Component {
  render() {
    const bodyHeader = (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );

    return (
      <div className="App">
        {bodyHeader}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Body;
