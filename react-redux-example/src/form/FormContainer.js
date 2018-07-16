import React, { Component } from "react";

const FormContainer = FormComponent => {
  return class FormContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: ""
      };
    }

    onTextChange = event => {
      this.setState({ text: event.target.value });
    };

    onFormSubmit = event => {
      event.preventDefault();
      alert(this.state.text);
    };

    render() {
      return (
        <FormComponent
          text={this.state.text}
          onTextChange={this.onTextChange}
          onFormSubmit={this.onFormSubmit}
        />
      );
    }
  };
};

export default FormContainer;
