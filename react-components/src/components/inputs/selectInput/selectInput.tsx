import { FieldValues } from "react-hook-form";
import { InputProps } from "../../../types";
import "../textInput/textInput.scss";

const SelectInput = <T extends FieldValues>(props: InputProps<T>) => {
  const countries = [
    "Belarus",
    "Ukraine",
    "Poland",
    "Lithuania",
    "Latvia",
    "Estonia",
  ];
  return (
    <label htmlFor={props.name} className="input-form__label">
      Place Of Residence
      <br />
      <select
        {...props.register(props.name, {
          required: "Country is required",
        })}
        name={props.name}
        className="input-form__input"
        defaultValue=""
      >
        <option value="" hidden>
          Choose country
        </option>
        {countries.map((country, index) => {
          return (
            <option value={country} key={index}>
              {country}
            </option>
          );
        })}
      </select>
      {props.errors[props.name] && (
        <p className="form__error">
          {props.errors[props.name]?.message?.toString()}
        </p>
      )}
    </label>
  );
};

export default SelectInput;
