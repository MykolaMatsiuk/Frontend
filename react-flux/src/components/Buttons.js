import React, { Component } from 'react';

class ButtonAdd extends Component {
  render() {
    return (
      <button className="btn-add" onClick={this.props.onClickA}>
        {this.props.children}
      </button>
    );
  }
}

class ButtonRemove extends Component {
  render() {
    return (
      <button className="btn-remove" onClick={this.props.onClickR}>
        {this.props.children}
      </button>
    );
  }
}

class ButtonUpload extends Component {
  render() {
    return (
      <button className="btn-upload" onClick={this.props.onClickU}>
        {this.props.children}
      </button>
    );
  }
}

export { ButtonAdd, ButtonRemove, ButtonUpload };
