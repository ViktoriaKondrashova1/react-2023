import React from "react";
import "./checkboxInput.scss";

interface CheckboxInputProps {
  label: string;
  propRef: React.RefObject<HTMLInputElement>;
  handleChange?: () => void;
}

class CheckboxInput extends React.Component<CheckboxInputProps> {
  render() {
    return (
      <label htmlFor="checkbox" className="input-form__label">
        <input
          type="checkbox"
          name="checkbox"
          ref={this.props.propRef}
          className="checkbox-input"
          onChange={this.props.handleChange}
          required
        />
        {this.props.label}
      </label>
    );
  }
}

export default CheckboxInput;
