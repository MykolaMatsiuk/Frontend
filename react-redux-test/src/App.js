import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Feed from './components/Feed/Feed';
import Preloader from './components/Preloader/Preloader';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Bob',
      age: 30
    };
  }

  componentWillMount() {
    console.log('componentWillMount');

    setTimeout(this.fetchDataFromServer, 1000);
  }

  fetchDataFromServer = () => {
    fetch('/feed.json')
      .then(res => res.json())
      .then(res => this.setState({
        news: res
      }));
  }

  render() {
    const { name, age, news } = this.state;

    if (!this.state.news) {
      return <Preloader />
    }

    return (
      <Fragment>
        <Header name={name} age={age} />
        <Body />
        <Route path='/feed' render={() => <Feed news={this.state.news}/>} />
        <Route exact path='/footer' component={Footer} />
      </Fragment>
    );
  }
}

export default App;
