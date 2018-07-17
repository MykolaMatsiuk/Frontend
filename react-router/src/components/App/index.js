import React, { Component } from 'react';
import { Link } from 'react-router';
import { AppActions } from '../../actions/actions';
import Item from '../Item';

class App extends Component {
  render() {
    return (
      <div>
        <h1>List of products</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
