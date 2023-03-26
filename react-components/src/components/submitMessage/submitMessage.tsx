import React from "react";
import "./submitMessage.scss";

interface submitMessageProps {
  open: boolean;
}

class SubmitMessage extends React.Component<submitMessageProps> {
  render() {
    return !this.props.open ? null : (
      <p className="submit-message">The form has been submitted!</p>
    );
  }
}

export default SubmitMessage;
