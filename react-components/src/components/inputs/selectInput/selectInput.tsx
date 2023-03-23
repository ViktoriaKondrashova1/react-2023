import React from "react";
import "../textInput/textInput.scss";

type selectInputProps = {
  [key: string]: never;
};

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
      <form className="input-form">
        <label htmlFor="place-of-residence" className="input-form__label">
          Place Of Residence
          <br />
          <select
            name="place-of-residence"
            className="input-form__input"
            required
          >
            {this.countries.map((country, index) => {
              return (
                <option value={country} key={index}>
                  {country}
                </option>
              );
            })}
          </select>
        </label>
      </form>
    );
  }
}

export default SelectInput;
