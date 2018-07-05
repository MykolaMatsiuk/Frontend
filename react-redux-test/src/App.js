import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    const age = 30;

    return (
      <Fragment>
        <Header name='Bob' age={age} />
        <Body />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
