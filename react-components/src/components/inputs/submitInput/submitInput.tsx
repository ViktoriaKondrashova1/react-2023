import React from "react";
import "./submitInput.scss";

interface submitInputProps {
  disabled?: boolean;
  handleClick?: () => void;
}

class SubmitInput extends React.Component<submitInputProps> {
  render() {
    return (
      <input
        type="submit"
        className="input-form__submit"
        value="Submit"
        onClick={this.props.handleClick}
        disabled={this.props.disabled}
      />
    );
  }
}

export default SubmitInput;
