import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feed extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Feed</h1>
        <button  onClick={() => this.props.dispatch({
          type: 'NEW_LIKE'
        })}>Like</button>
      </div>
    );
  }
}

export default connect()(Feed);
