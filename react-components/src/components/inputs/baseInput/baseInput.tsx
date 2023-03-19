import React from "react";
import "./baseInput.scss";

interface baseInputProps {
  name: string;
  type: string;
  max?: string;
}

class BaseInput extends React.Component<baseInputProps> {
  constructor(props: baseInputProps) {
    super(props);
  }
  render() {
    return (
      <label htmlFor={this.props.name} className="input-form__label">
        {this.props.name
          .split("-")
          .map((word) => word[0].toUpperCase() + word.substring(1))
          .join(" ")}
        <br />
        <input
          type={this.props.type}
          name={this.props.name}
          className="input-form__input"
          max={this.props.max}
          required
        />
      </label>
    );
  }
}

export default BaseInput;
