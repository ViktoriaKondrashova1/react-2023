import { SubmitInputProps } from "../../../types";
import "./submitInput.scss";

const SubmitInput = (props: SubmitInputProps) => {
  return (
    <input
      type="submit"
      className="input-form__submit"
      value="Submit"
      disabled={props.disabled}
    />
  );
};

export default SubmitInput;
