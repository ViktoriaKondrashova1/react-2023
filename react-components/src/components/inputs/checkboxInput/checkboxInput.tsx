import React from "react";
import "./checkboxInput.scss";

interface CheckboxInputProps {
  label: string;
  propRef: React.RefObject<HTMLInputElement>;
  showError: boolean;
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
        />
        {this.props.label}
        {this.props.showError ? (
          <p className="form__error">Should be checked</p>
        ) : null}
      </label>
    );
  }
}

export default CheckboxInput;
