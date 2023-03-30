import React from "react";
import { InputProps } from "../../../types";
import "./checkboxInput.scss";

const CheckboxInput: React.FC<InputProps> = (props) => {
  return (
    <label htmlFor="checkbox" className="input-form__label">
      <input
        {...props.register("checkbox")}
        type="checkbox"
        name="checkbox"
        className="checkbox-input"
      />
      {props.name}
      {/* {props.showError ? (
        <p className="form__error">Should be checked</p>
      ) : null} */}
    </label>
  );
};

export default CheckboxInput;
