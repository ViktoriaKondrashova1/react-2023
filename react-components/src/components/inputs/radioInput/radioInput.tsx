import React from "react";
import { radioInputProps } from "../../../types";
import "./radioInput.scss";

const RadioInput: React.FC<radioInputProps> = (props) => {
  return (
    <>
      <input
        type="radio"
        name="gender"
        className="radio-input"
        ref={props.propRef}
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
