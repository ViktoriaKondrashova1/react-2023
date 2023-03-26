import React from "react";
import "../textInput/textInput.scss";

interface selectInputProps {
  propRef: React.RefObject<HTMLSelectElement>;
  handleChange?: () => void;
}

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
          onChange={this.props.handleChange}
          required
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
      </label>
    );
  }
}

export default SelectInput;
