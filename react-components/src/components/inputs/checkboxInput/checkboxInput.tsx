import React from "react";
import { CheckboxInputProps } from "../../../types";
import "./checkboxInput.scss";

const CheckboxInput: React.FC<CheckboxInputProps> = (props) => {
  return (
    <label htmlFor="checkbox" className="input-form__label">
      <input type="checkbox" name="checkbox" className="checkbox-input" />
      {props.label}
      {props.showError ? (
        <p className="form__error">Should be checked</p>
      ) : null}
    </label>
  );
};

export default CheckboxInput;
