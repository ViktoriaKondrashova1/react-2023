import React from "react";
import "./textInput.scss";

interface textInputProps {
  name: string;
  propRef: React.RefObject<HTMLInputElement>;
  handleChange: () => void;
}

class TextInput extends React.Component<textInputProps> {
  render() {
    return (
      <label htmlFor={this.props.name} className="input-form__label">
        {this.props.name
          .split("-")
          .map((word) => word[0].toUpperCase() + word.substring(1))
          .join(" ")}
        <br />
        <input
          ref={this.props.propRef}
          type="text"
          name={this.props.name}
          className="input-form__input"
          onChange={this.props.handleChange}
          required
        />
      </label>
    );
  }
}

export default TextInput;
