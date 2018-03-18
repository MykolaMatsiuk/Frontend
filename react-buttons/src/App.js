import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {
  render () {
    return <button className={this.props.class}>{this.props.name}</button>
  }
}

class Alert extends Component {
  render () {
    return <p className={this.props.class}>{this.props.name}</p>
  }
}

class Badge extends Component {
  render () {
    return (
      <span className={this.props.class}>{this.props.name}
        <span className={this.props.classBadge}>{this.props.count}</span>
      </span>
    );
  }
}

class App extends Component {
  render () {
    return ([
      <div>
        <h3>Buttons</h3>
        <Button name="Forest" class="btn-green" />
        <Button name="Fire" class="btn-red" />
        <Button name="Ocean" class="btn-blue" />
      </div>,
      <div>
        <h3>Alerts</h3>
        <Alert name="Forest" class="alert-green" />
        <Alert name="Fire" class="alert-red" />
        <Alert name="Ocean" class="alert-blue" />
      </div>,
      <div>
        <h3>Badges</h3>
        <Badge name="Forest" class="item" classBadge="circle" count={5} />
        <Badge name="Fire" class="item" classBadge="circle" count={7} />
        <Badge name="Ocean" class="item" classBadge="circle" count={11} />
      </div>
    ]);
  }
}

export default App;
