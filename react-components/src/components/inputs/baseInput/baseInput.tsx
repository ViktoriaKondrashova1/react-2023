import React from "react";
import "./baseInput.scss";

interface baseInputProps {
  name: string;
  type: string;
  max?: string;
  accept?: string;
  className?: string;
}

class BaseInput extends React.Component<baseInputProps> {
  classes: string;
  constructor(props: baseInputProps) {
    super(props);
    this.classes = `${"input-form__input"} ${this.props.className}`;
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
          className={this.classes}
          max={this.props.max}
          accept={this.props.accept}
          required
        />
      </label>
    );
  }
}

export default BaseInput;
