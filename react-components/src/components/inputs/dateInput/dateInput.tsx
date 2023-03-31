import React from "react";
import { InputProps } from "../../../types";
import "../textInput/textInput.scss";

const DateInput: React.FC<InputProps> = (props) => {
  return (
    <label htmlFor="date" className="input-form__label">
      Date of Birth
      <br />
      <input
        type="date"
        {...props.register("date", {
          required: "Date of Birth is required",
        })}
        name="date"
        className="input-form__input"
        max={new Date().toISOString().split("T")[0]}
      />
      {props.errors.date && (
        <p className="form__error">{props.errors.date.message}</p>
      )}
    </label>
  );
};

export default DateInput;
