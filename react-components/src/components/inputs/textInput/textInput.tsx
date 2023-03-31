import React from "react";
import { InputProps } from "../../../types";
import "./textInput.scss";

const TextInput: React.FC<InputProps> = (props) => {
  return (
    <label htmlFor={props.name} className="input-form__label">
      {(props.name![0].toUpperCase() + props.name!.slice(1))
        .split("N")
        .join(" N")}
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
