import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onClick = () => {
    alert("You clicked!");
  }

  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={this.onClick}>Click me!</button>
      </div>
    );
  }
}

export default App;
