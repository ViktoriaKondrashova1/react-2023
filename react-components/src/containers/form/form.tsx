import React from "react";
import TextInput from "../../components/inputs/textInput/textInput";
import DateInput from "../../components/inputs/dateInput/dateInput";
import SelectInput from "../../components/inputs/selectInput/selectInput";
import FileInput from "../../components/inputs/fileInput/fileInput";
import RadioInput from "../../components/inputs/radioInput/radioInput";
import CheckboxInput from "../../components/inputs/checkboxInput/checkboxInput";
import SubmitInput from "../../components/inputs/submitInput/submitInput";
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
          <TextInput
            propRef={this.nameRef}
            name="first-name"
            handleChange={this.setDataStates}
            defaultValue={this.state.nameValue}
          />
          <TextInput
            propRef={this.lastNameRef}
            name="last-name"
            defaultValue={this.state.lastNameValue}
            handleChange={this.setDataStates}
          />
        </div>
        <div className="form__wrapper">
          <DateInput
            propRef={this.birthRef}
            defaultValue={this.state.birthValue}
            handleChange={this.setDataStates}
          />
          <SelectInput />
        </div>
        <form className="radio-input-form">
          <RadioInput name="Female" />
          <RadioInput name="Male" />
          <RadioInput name="Other" />
        </form>
        <FileInput
          propRef={this.imageRef}
          defaultValue={this.state.imageValue}
          handleChange={this.setDataStates}
        />
        <CheckboxInput label="I consent to the processing of my personal data" />
        <CheckboxInput label="I agree with the privacy policy" />
        <SubmitInput value="Submit" disabled={true} />
      </div>
    );
  }
}

export default Form;
