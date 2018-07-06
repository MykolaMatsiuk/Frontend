import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { name, age, likes } = this.props;

    return (
      <Fragment>
        <h1>Header. Hello, my name is {name}. I am {age} years old.</h1>
        <h2>Likes: {likes}</h2>
      </Fragment>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    likes: store.likes
  }
}

export default connect(mapStoreToProps)(Header);
