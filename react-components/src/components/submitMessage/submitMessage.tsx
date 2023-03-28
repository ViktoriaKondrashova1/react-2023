import React from "react";
import { submitMessageProps } from "../../types";
import "./submitMessage.scss";

const SubmitMessage: React.FC<submitMessageProps> = (props) => {
  return !props.open ? null : (
    <p className="submit-message">The form has been submitted!</p>
  );
};

export default SubmitMessage;
