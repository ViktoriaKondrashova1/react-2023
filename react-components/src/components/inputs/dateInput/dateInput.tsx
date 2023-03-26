import React from "react";
import "../textInput/textInput.scss";

interface dateInputProps {
  propRef: React.RefObject<HTMLInputElement>;
  showError: boolean;
}

class DateInput extends React.Component<dateInputProps> {
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
