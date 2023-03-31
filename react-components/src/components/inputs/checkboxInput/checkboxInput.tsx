import React from "react";
import { InputProps } from "../../../types";
import "./checkboxInput.scss";

const CheckboxInput: React.FC<InputProps> = (props) => {
  return (
    <label htmlFor="checkbox" className="input-form__label">
      <input
        {...props.register("checkbox", {
          required: "Should be checked",
        })}
        type="checkbox"
        name="checkbox"
        className="checkbox-input"
      />
      {props.name}
      {props.errors.checkbox && (
        <p className="form__error">{props.errors.checkbox.message}</p>
      )}
    </label>
  );
};

export default CheckboxInput;
