import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {  
    return (
      <Fragment>
        <Link to="/header">Header</Link>
        <Link to="/feed/25">Feed</Link>
        <Link to="/footer">Footer</Link>
      </Fragment>
    );
  }
}

export default Header;
