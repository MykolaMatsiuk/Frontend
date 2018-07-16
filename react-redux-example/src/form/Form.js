import React, { Component } from "react";

class Form extends Component {
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
      <form onSubmit={this.onFormSubmit}>
        <h1>Our form example</h1>
        <div>
          <textarea onChange={this.onTextChange}>
            {this.state.text}
          </textarea>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default Form;
