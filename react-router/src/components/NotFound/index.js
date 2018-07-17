import React, { Component } from 'react';
import { Link } from 'react-router';
import ErrorCode from './ErrorCode';
import './index.css';


export default class NotFound extends Component {
  render() {
    return (
      <div>
        <ErrorCode />
        <h2>Page Not Found</h2>
        <p>Sorry, there is no page you are looking for. Return to <Link to="/">main</Link> page.</p> 
      </div>
    );
  }
}
