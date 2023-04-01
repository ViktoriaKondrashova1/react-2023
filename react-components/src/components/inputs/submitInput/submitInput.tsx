import React from "react";
import { SubmitInputProps } from "../../../types";
import "./submitInput.scss";

const SubmitInput: React.FC<SubmitInputProps> = (props) => {
  return (
    <input
      type="submit"
      className="input-form__submit"
      value="Submit"
      disabled={props.disabled}
    />
  );
};

export default SubmitInput;
