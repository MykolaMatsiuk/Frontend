import React, { Component } from 'react';
import Item from '../Item';
import { connect } from 'react-redux';
import { AppActions } from '../../actions/actions';
import { Link } from 'react-router';
import { store } from '../../store';


class Items extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(AppActions.getItems());
    // console.log(this.props.data);
    console.log(this.props.data);
  }

  render() {
    const { items } = this.props.data; 
    return (
      <div>
        {items.map((item, i) => {
          return (
            <div key={i}>
              <Item
                pic   = {item.pic}
                name  = {item.name}
                price = {item.price}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStoreToProps = store => ({
  data: store.data
});

export default connect(mapStoreToProps)(Items);

