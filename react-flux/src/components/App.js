import React, { Component } from 'react';
import './App.css';
import { ButtonAdd, ButtonRemove, ButtonUpload } from './Buttons.js';
import { AppActions } from '../actions';
import { store } from '../index.js';
import { connect } from 'react-redux';

class App extends Component {
  addBtn = () => {
    const { dispatch } = this.props;
    dispatch(AppActions.addBlock());
  };
  rmvBtn = () => {
    const { dispatch } = this.props;
    dispatch(AppActions.removeBlock());
  };
  upldBtn = () => {
    const { dispatch } = this.props;
    dispatch(AppActions.uploadBlocks(['block', 'block']));
  }
  render() {
    return (
      <div>
        <div className="btn-content">
          <ButtonAdd onClickA={this.addBtn}>Add block!</ButtonAdd>
          <ButtonRemove onClickR={this.rmvBtn}>Remove block!</ButtonRemove>
          <ButtonUpload onClickU={this.upldBtn}>Upload blocks!</ButtonUpload>  
        </div>
        <div className="blocks-content">
          {this.props.blocks.map((item, i) => {
            if (i === this.props.blocks.length - 1 && i < 4) {
              return (
                <div key={i} className="block" style={{ 
                    borderTopRightRadius: 15,
                  }} 
                />
              );
            } else {
              return (
                <div key={i} className="block"/>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
export default connect(store => ({ ...store }))(App);
