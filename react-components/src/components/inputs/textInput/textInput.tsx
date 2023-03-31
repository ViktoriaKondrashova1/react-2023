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
        {...props.register(props.name!, {
          required: "Value is required",
          minLength: { value: 3, message: "Value should be at least 3 chars" },
          validate: (value: string) =>
            value[0] === value[0].toUpperCase() ||
            "Value should start with uppercase",
        })}
        name={props.name}
        className="input-form__input"
      />
      {props.errors.firstName && (
        <p className="form__error">{props.errors.firstName.message}</p>
      )}
    </label>
  );
};

export default TextInput;
