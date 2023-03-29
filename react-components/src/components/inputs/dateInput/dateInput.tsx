import React from "react";
import { InputProps } from "../../../types";
import "../textInput/textInput.scss";

class DateInput extends React.Component<InputProps> {
  render() {
    return (
      <label htmlFor="date-of-birth" className="input-form__label">
        Date of Birth
        <br />
        <input
          ref={this.props.propRef}
          type="date"
          name="date-of-birth"
          className="input-form__input"
          max={new Date().toISOString().split("T")[0]}
        />
        {this.props.showError ? (
          <p className="form__error">Choose your date of birth</p>
        ) : null}
      </label>
    );
  }
}

export default DateInput;
