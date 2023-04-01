import { SubmitMessageProps } from "../../types";
import "./submitMessage.scss";

const SubmitMessage = (props: SubmitMessageProps) => {
  return !props.open ? null : (
    <p className="submit-message">The form has been submitted!</p>
  );
};

export default SubmitMessage;
