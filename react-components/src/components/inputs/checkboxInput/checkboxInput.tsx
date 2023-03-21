import React from "react";
import "./checkboxInput.scss";

interface CheckboxInputProps {
  label: string;
}

class CheckboxInput extends React.Component<CheckboxInputProps> {
  render() {
    return (
      <label htmlFor="checkbox" className="input-form__label">
        <input
          type="checkbox"
          name="checkbox"
          className="checkbox-input"
          required
        />
        {this.props.label}
      </label>
    );
  }
}

export default CheckboxInput;
