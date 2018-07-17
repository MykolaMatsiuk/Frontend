// import { withStateHandlers } from "recompose";
import { connect } from "react-redux";

import { textAction, submitAction } from "./actions";

const mapStateToProps = state => state.form;
const mapDispatchToProps = { textAction, submitAction };

// const FormContainer = withStateHandlers(
//   ({ text = "" }) => ({ text }),
//   {
//     onTextChange: () => event => ({
//       text: event.target.value
//     }),
//     onFormSubmit: ({ text }) => event => {
//       event.preventDefault();
//       alert(text);
//     }
//   }
// );

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
