import React from "react";
import { InputProps } from "../../../types";
import "./radioInput.scss";

const RadioInput: React.FC<InputProps> = (props) => {
  return (
    <>
      <input
        {...props.register("gender", {
          required: "Gender is required",
        })}
        type="radio"
        name="gender"
        className="radio-input"
        value={props.name}
        id={props.name}
      />
      <label htmlFor={props.name} className="radio-input__label">
        {props.name}
      </label>
    </>
  );
};

export default RadioInput;
