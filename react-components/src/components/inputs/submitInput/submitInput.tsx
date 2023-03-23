import React from "react";
import "./submitInput.scss";

interface submitInputProps {
  value: string;
  disabled?: boolean;
  handleClick?: () => void;
}

class SubmitInput extends React.Component<submitInputProps> {
  render() {
    return (
      <input
        type="submit"
        className="input-form__submit"
        value={this.props.value}
        onClick={this.props.handleClick}
        disabled={this.props.disabled}
      />
    );
  }
}

export default SubmitInput;
