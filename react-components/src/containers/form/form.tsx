import React from "react";
import BaseInput from "../../components/inputs/baseInput/baseInput";
import SelectInput from "../../components/inputs/selectInput/selectInput";
import RadioInput from "../../components/inputs/radioInput/radioInput";
import CheckboxInput from "../../components/inputs/checkboxInput/checkboxInput";
import Button from "../../components/button/button";
import "./form.scss";

type FormProps = {
  [key: string]: never;
};

interface FormState {
  nameValue: string;
  lastNameValue: string;
  birthValue: string;
  imageValue: string;
}

class Form extends React.Component<FormProps, FormState> {
  private nameRef: React.RefObject<HTMLInputElement>;
  private lastNameRef: React.RefObject<HTMLInputElement>;
  private birthRef: React.RefObject<HTMLInputElement>;
  private imageRef: React.RefObject<HTMLInputElement>;
  constructor(props: FormProps) {
    super(props);
    this.state = {
      nameValue: "",
      lastNameValue: "",
      birthValue: "",
      imageValue: "",
    };
    this.nameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.birthRef = React.createRef();
    this.imageRef = React.createRef();
  }

  setDataStates = () => {
    this.setState({
      nameValue: this.nameRef.current?.value || "",
      lastNameValue: this.lastNameRef.current?.value || "",
      birthValue: this.birthRef.current?.value || "",
      imageValue: this.imageRef.current?.value || "",
    });
    console.log(this.nameRef.current?.value);
  };

  render() {
    return (
      <div className="form">
        <div className="form__wrapper">
          <BaseInput
            propRef={this.nameRef}
            name="first-name"
            type="text"
            handleChange={this.setDataStates}
            defaultValue={this.state.nameValue}
          />
          <BaseInput
            propRef={this.lastNameRef}
            name="last-name"
            type="text"
            defaultValue={this.state.lastNameValue}
            handleChange={this.setDataStates}
          />
        </div>
        <div className="form__wrapper">
          <BaseInput
            name="date-of-birth"
            type="date"
            max={new Date().toISOString().split("T")[0]}
            propRef={this.birthRef}
            defaultValue={this.state.birthValue}
            handleChange={this.setDataStates}
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
          propRef={this.imageRef}
          defaultValue={this.state.imageValue}
          handleChange={this.setDataStates}
        />
        <CheckboxInput label="I consent to the processing of my personal data" />
        <CheckboxInput label="I agree with the privacy policy" />
        <Button text="Submit" />
      </div>
    );
  }
}

export default Form;
