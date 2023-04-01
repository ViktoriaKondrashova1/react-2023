import { FieldValues } from "react-hook-form";
import { InputProps } from "../../../types";
import "./checkboxInput.scss";

const CheckboxInput = <T extends FieldValues>(props: InputProps<T>) => {
  return (
    <label htmlFor="checkbox" className="input-form__label">
      <input
        {...props.register(props.name, {
          required: "Should be checked",
        })}
        type="checkbox"
        name="checkbox"
        className="checkbox-input"
      />
      {props.value}
      {props.errors[props.name] && (
        <p className="form__error">
          {props.errors[props.name]?.message?.toString()}
        </p>
      )}
    </label>
  );
};

export default CheckboxInput;
