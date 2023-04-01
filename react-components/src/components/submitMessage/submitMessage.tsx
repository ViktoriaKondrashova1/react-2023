import React from "react";
import { SubmitMessageProps } from "../../types";
import "./submitMessage.scss";

const SubmitMessage: React.FC<SubmitMessageProps> = (props) => {
  return !props.open ? null : (
    <p className="submit-message">The form has been submitted!</p>
  );
};

export default SubmitMessage;
