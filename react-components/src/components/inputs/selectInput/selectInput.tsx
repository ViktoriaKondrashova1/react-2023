import React from "react";
import { selectInputProps } from "../../../types";
import "../textInput/textInput.scss";

class SelectInput extends React.Component<selectInputProps> {
  countries: string[];
  constructor(props: selectInputProps) {
    super(props);
    this.countries = [
      "Belarus",
      "Ukraine",
      "Poland",
      "Lithuania",
      "Latvia",
      "Estonia",
    ];
  }
  render() {
    return (
      <label htmlFor="place-of-residence" className="input-form__label">
        Place Of Residence
        <br />
        <select
          name="place-of-residence"
          className="input-form__input"
          ref={this.props.propRef}
        >
          <option value="" hidden>
            Choose country
          </option>
          {this.countries.map((country, index) => {
            return (
              <option value={country} key={index}>
                {country}
              </option>
            );
          })}
        </select>
        {this.props.showError ? (
          <p className="form__error">Choose your country</p>
        ) : null}
      </label>
    );
  }
}

export default SelectInput;
