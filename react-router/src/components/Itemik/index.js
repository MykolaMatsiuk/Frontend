import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';


class Itemik extends Component {
  render() {
    // const { items } = this.props.data;
    return (
      <div className="item">
        <h2>{this.props.params.name}</h2>
      </div>
    );
  }
}

export default Itemik;
