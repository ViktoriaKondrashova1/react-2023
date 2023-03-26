import React from "react";
import "../textInput/textInput.scss";

interface dateInputProps {
  propRef: React.RefObject<HTMLInputElement>;
  handleChange: () => void;
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
          onChange={this.props.handleChange}
          required
        />
      </label>
    );
  }
}

export default DateInput;
