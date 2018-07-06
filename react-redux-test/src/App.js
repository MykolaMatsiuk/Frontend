import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Feed from './components/Feed/Feed';
import Preloader from './components/Preloader/Preloader';
import Menu from './components/Menu/Menu';
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
        <Menu />
        <Route path='/header' render={(props) => <Header {...props} name={this.props.name} age={this.props.age} />} />
        <Body />
        <Route path='/feed/:id' render={(props) => <Feed {...props} news={news}/>} />
        <Route exact path='/footer' component={Footer} />
      </Fragment>
    );
  }
}

export default App;
