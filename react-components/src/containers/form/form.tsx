import React from "react";
import BaseInput from "../../components/inputs/baseInput/baseInput";
import SelectInput from "../../components/inputs/selectInput/selectInput";
import RadioInput from "../../components/inputs/radioInput/radioInput";
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
          <SelectInput name="place-of-residence" />
        </div>
        <div className="form__wrapper">
          <form className="radio-input-form">
            <RadioInput name="Female" />
            <RadioInput name="Male" />
            <RadioInput name="Other" />
          </form>
        </div>
        <div className="form__wrapper">
          <BaseInput
            name="user-image"
            type="file"
            accept="image/png, image/jpg, image/gif, image/jpeg"
            className="file-input"
          />
        </div>
      </div>
    );
  }
}

export default Form;
