import React from "react";
import "./radioInput.scss";

interface radioInputProps {
  name: string;
}

class RadioInput extends React.Component<radioInputProps> {
  constructor(props: radioInputProps) {
    super(props);
  }
  render() {
    return (
      <>
        <input
          type="radio"
          name="gender"
          className="radio-input"
          value={this.props.name}
          id={this.props.name}
        />
        <label htmlFor={this.props.name} className="radio-input__label">
          {this.props.name}
        </label>
      </>
    );
  }
}

export default RadioInput;
