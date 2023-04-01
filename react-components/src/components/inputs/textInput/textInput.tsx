import { FieldValues } from "react-hook-form";
import { InputProps } from "../../../types";
import "./textInput.scss";

const TextInput = <T extends FieldValues>(props: InputProps<T>) => {
  return (
    <label htmlFor={props.name} className="input-form__label">
      {(props.name![0].toUpperCase() + props.name!.slice(1))
        .split("N")
        .join(" N")}
      <br />
      <input
        type="text"
        {...props.register(props.name, {
          required: "Value is required",
          minLength: { value: 3, message: "Value should be at least 3 chars" },
          validate: (value: string) =>
            value[0] === value[0].toUpperCase() ||
            "Value should start with uppercase",
        })}
        name={props.name}
        className="input-form__input"
      />
      {props.errors[props.name] && (
        <p className="form__error">
          {props.errors[props.name]?.message?.toString()}
        </p>
      )}
    </label>
  );
};

export default TextInput;
