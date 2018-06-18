import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loremIpsum from 'lorem-ipsum';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Virtualized</h1>
        <div>{loremIpsum({
          count: 1,
          units: 'sentences',
          sentenceLowerBound: 4,
          sentenceUpperBound: 8
        })}</div>
      </div>
    )
  }
}

export default App;
