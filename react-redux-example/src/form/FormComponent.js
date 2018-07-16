import React, { Component } from "react";

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.onFormSubmit}>
        <h1>Our form example</h1>
        <div>
          <textarea onChange={this.props.onTextChange}>
            {this.props.text}
          </textarea>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default FormComponent;
