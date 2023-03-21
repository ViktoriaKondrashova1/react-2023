import React from "react";
import BaseInput from "../../components/inputs/baseInput/baseInput";
import SelectInput from "../../components/inputs/selectInput/selectInput";
import RadioInput from "../../components/inputs/radioInput/radioInput";
import CheckboxInput from "../../components/inputs/checkboxInput/checkboxInput";
import Button from "../../components/button/button";
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
        <form className="radio-input-form">
          <RadioInput name="Female" />
          <RadioInput name="Male" />
          <RadioInput name="Other" />
        </form>
        <BaseInput
          name="user-image"
          type="file"
          accept="image/png, image/jpg, image/gif, image/jpeg"
          className="file-input"
        />
        <CheckboxInput label="I consent to the processing of my personal data" />
        <CheckboxInput label="I agree with the privacy policy" />
        <Button text="Submit" />
      </div>
    );
  }
}

export default Form;
