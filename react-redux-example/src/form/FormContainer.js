import { withStateHandlers } from "recompose";

const FormContainer = withStateHandlers(
  ({ text = "" }) => ({ text }),
  {
    onTextChange: () => event => ({
      text: event.target.value
    }),
    onFormSubmit: ({ text }) => event => {
      event.preventDefault();
      alert(text);
    }
  }
);

export default FormContainer;
