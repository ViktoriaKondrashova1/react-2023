import React from "react";
import "../baseInput/baseInput.scss";

interface selectInputProps {
  name: string;
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
      <form className="input-form">
        <label htmlFor={this.props.name} className="input-form__label">
          {this.props.name
            .split("-")
            .map((word) => word[0].toUpperCase() + word.substring(1))
            .join(" ")}
          <br />
          <select name={this.props.name} className="input-form__input" required>
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
