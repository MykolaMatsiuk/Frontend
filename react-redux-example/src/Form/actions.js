import { FORM_TEXT, FORM_SUBMIT } from "./types";

export const textAction = text => ({
  type: FORM_TEXT,
  text
});

export const submitAction = () => ({
  type: FORM_SUBMIT
});
