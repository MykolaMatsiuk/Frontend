import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { name, age } = this.props;
    
    return (
      <h1>Header. Hello, my name is {name}. I am {age} years old.</h1>
    );
  }
}

export default Header;
