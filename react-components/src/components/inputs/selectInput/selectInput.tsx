import React from "react";
import { selectInputProps } from "../../../types";
import "../textInput/textInput.scss";

const SelectInput: React.FC<selectInputProps> = (props) => {
  const countries = [
    "Belarus",
    "Ukraine",
    "Poland",
    "Lithuania",
    "Latvia",
    "Estonia",
  ];

  return (
    <label htmlFor="place-of-residence" className="input-form__label">
      Place Of Residence
      <br />
      <select name="place-of-residence" className="input-form__input">
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
      {props.showError ? (
        <p className="form__error">Choose your country</p>
      ) : null}
    </label>
  );
};

export default SelectInput;
