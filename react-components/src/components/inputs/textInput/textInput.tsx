import React from "react";
import { InputProps } from "../../../types";
import "./textInput.scss";

const TextInput: React.FC<InputProps> = (props) => {
  return (
    <label htmlFor={props.name} className="input-form__label">
      {props
        .name!.split("-")
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(" ")}
      <br />
      <input
        type="text"
        {...props.register(props.name!)}
        name={props.name}
        className="input-form__input"
      />
      {/* {props.showError ? (
        <p className="form__error">
          Value should start with uppercase and be at least 3 chars
        </p>
      ) : null} */}
    </label>
  );
};

export default TextInput;
