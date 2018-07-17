import { FORM_TEXT } from "./types";

const defaultState = {
  text: ""
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FORM_TEXT:
      return { ...state, ...action };
    default:
      return state;
  }
};
