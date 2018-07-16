import React, { Component } from "react";
import FormContainer from "./FormContainer";
import FormComponent from "./FormComponent";

const Forma = FormContainer(FormComponent);

class Form extends Component {
  render() {
    return <Forma />;
  }
}

export default Form;
