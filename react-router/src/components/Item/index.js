import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router';
import { AppActions } from '../../actions/actions';

class Item extends Component {
  constructor(props) {
    super(props);
    // const { dispatch } = this.props;
    // dispatch(AppActions.getItems());
  }
  static propTypes = {
    pic: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
  };
  render() {
    // const { items } = this.props.data;
    return (
      <div className="item">
        <Link to={"/" + this.props.name}><img src={this.props.pic} alt={this.props.name} width="150"/></Link>
        <h2>{this.props.name}</h2>
        <p>${this.props.price}</p>
        <button className='desc'>Description</button>
        <button className='buy'>Buy</button>
      </div>
    );
  }
}

export default Item;
