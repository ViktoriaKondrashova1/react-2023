import { FieldValues } from "react-hook-form";
import { InputProps } from "../../../types";
import "./radioInput.scss";

const RadioInput = <T extends FieldValues>(props: InputProps<T>) => {
  return (
    <>
      <input
        {...props.register(props.name, {
          required: "Gender is required",
        })}
        type="radio"
        name={props.name}
        className="radio-input"
        value={props.value}
        id={props.value}
        data-testid={props.value}
      />
      <label htmlFor={props.value} className="radio-input__label">
        {props.value}
      </label>
    </>
  );
};

export default RadioInput;
