import React from "react";
import { submitInputProps } from "../../../types";
import "./submitInput.scss";

const SubmitInput: React.FC<submitInputProps> = (props) => {
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
