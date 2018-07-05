import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Feed from './components/Feed/Feed';
import Preloader from './components/Preloader/Preloader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log('componentWillMount');

    setTimeout(this.fetchDataFromServer, 3000);
  }

  fetchDataFromServer = () => {
    fetch('/feed.json')
      .then(res => res.json())
      .then(res => this.setState({
        news: res
      }));
  }

  render() {
    const age = 30;

    if (!this.state.news) {
      return <Preloader />
    }

    return (
      <Fragment>
        <Header name='Bob' age={age} />
        <Body />
        <Feed news={this.state.news} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
