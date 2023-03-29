import React from "react";
import { submitMessageProps } from "../../types";
import "./submitMessage.scss";

class SubmitMessage extends React.Component<submitMessageProps> {
  render() {
    return !this.props.open ? null : (
      <p className="submit-message">The form has been submitted!</p>
    );
  }
}

export default SubmitMessage;
