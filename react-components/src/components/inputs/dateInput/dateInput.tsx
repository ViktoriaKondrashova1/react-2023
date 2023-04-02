import { FieldValues } from "react-hook-form";
import { InputProps } from "../../../types";
import "../textInput/textInput.scss";

const DateInput = <T extends FieldValues>(props: InputProps<T>) => {
  return (
    <label htmlFor={props.name} className="input-form__label">
      Date of Birth
      <br />
      <input
        type="date"
        {...props.register(props.name, {
          required: "Date of birth is required",
        })}
        id={props.name}
        name={props.name}
        className="input-form__input"
        max={new Date().toISOString().split("T")[0]}
        data-testid={props.name}
      />
      {props.errors[props.name] && (
        <p role="alert" className="form__error">
          {props.errors[props.name]?.message?.toString()}
        </p>
      )}
    </label>
  );
};

export default DateInput;
