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

    const menuItems = [1,2,3,4,5].map((num, i) => <li key={i}>Item {num}</li>);

    const menu = (
      <ul>
        {menuItems}
      </ul>
    );

    return (
      <div className="App">
        {bodyHeader}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {menu}
      </div>
    );
  }
}

export default Body;
