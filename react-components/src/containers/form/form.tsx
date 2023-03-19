import React from "react";
import BaseInput from "../../components/inputs/baseInput/baseInput";
import "./form.scss";

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <div className="form__wrapper">
          <BaseInput name="first-name" type="text" />
          <BaseInput name="last-name" type="text" />
        </div>
        <div className="form__wrapper">
          <BaseInput
            name="date-of-birth"
            type="date"
            max={new Date().toISOString().split("T")[0]}
          />
        </div>
      </div>
    );
  }
}

export default Form;
