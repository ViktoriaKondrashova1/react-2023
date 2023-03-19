import React from "react";
import "./textInput.scss";

interface textInputProps {
  name: string;
}

class textInput extends React.Component<textInputProps> {
  constructor(props: textInputProps) {
    super(props);
  }
  render() {
    return (
      <form className="text-input">
        <label htmlFor={this.props.name} className="text-input__label">
          {this.props.name
            .split("-")
            .map((word) => word[0].toUpperCase() + word.substring(1))
            .join(" ")}
          <br />
          <input
            type="text"
            name={this.props.name}
            className="text-input__input"
          />
        </label>
      </form>
    );
  }
}

export default textInput;
