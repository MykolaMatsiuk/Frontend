import React from "react";

const FormComponent = props => (
  <form
    onSubmit={event => {
      event.preventDefault();
      props.submitAction();
      alert(props.text);
    }}
  >
    <h1>Our form example</h1>
    <div>
      <textarea
        onChange={event =>
          props.textAction(event.terget.value)
        }
        value={props.text}
      >
        {props.text}
      </textarea>
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
);

export default FormComponent;
