import React from "react";
import TextInput from "../../components/inputs/textInput/textInput";
import DateInput from "../../components/inputs/dateInput/dateInput";
import SelectInput from "../../components/inputs/selectInput/selectInput";
import FileInput from "../../components/inputs/fileInput/fileInput";
import RadioInput from "../../components/inputs/radioInput/radioInput";
import CheckboxInput from "../../components/inputs/checkboxInput/checkboxInput";
import SubmitInput from "../../components/inputs/submitInput/submitInput";
import "./form.scss";

interface FormProps {
  handleSubmit?: () => void;
}

interface FormState {
  nameValue: string;
  lastNameValue: string;
  birthValue: string;
  selectValue: string;
  radioValue: string;
  imageValue: string;
}

class Form extends React.Component<FormProps, FormState> {
  private nameRef: React.RefObject<HTMLInputElement>;
  private lastNameRef: React.RefObject<HTMLInputElement>;
  private birthRef: React.RefObject<HTMLInputElement>;
  private selecteRef: React.RefObject<HTMLSelectElement>;
  private femaleRadioRef: React.RefObject<HTMLInputElement>;
  private maleRadioRef: React.RefObject<HTMLInputElement>;
  private otherRadioRef: React.RefObject<HTMLInputElement>;
  private imageRef: React.RefObject<HTMLInputElement>;
  private formRef: React.RefObject<HTMLFormElement>;
  constructor(props: FormProps) {
    super(props);
    this.state = {
      nameValue: "",
      lastNameValue: "",
      birthValue: "",
      selectValue: "",
      radioValue: "",
      imageValue: "",
    };
    this.nameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.birthRef = React.createRef();
    this.selecteRef = React.createRef();
    this.femaleRadioRef = React.createRef();
    this.maleRadioRef = React.createRef();
    this.otherRadioRef = React.createRef();
    this.imageRef = React.createRef();
    this.formRef = React.createRef();
  }

  setDataStates = () => {
    this.setState({
      nameValue: this.nameRef.current?.value || "",
      lastNameValue: this.lastNameRef.current?.value || "",
      birthValue: this.birthRef.current?.value || "",
      selectValue: this.selecteRef.current?.value || "",
      radioValue: [this.femaleRadioRef, this.maleRadioRef, this.otherRadioRef]
        .filter((ref) => ref.current?.checked)
        .map((ref) => ref.current?.value)
        .join(""),
      imageValue: this.imageRef.current?.value || "",
    });
  };

  handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.formRef.current?.reset();
    console.log(this.state.nameValue);
    console.log(this.state.lastNameValue);
    console.log(this.state.birthValue);
    console.log(this.state.selectValue);
    console.log(this.state.radioValue);
    console.log(this.state.imageValue);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit} ref={this.formRef}>
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
          <SelectInput
            propRef={this.selecteRef}
            defaultValue={this.state.selectValue}
            handleChange={this.setDataStates}
          />
        </div>
        <fieldset className="radio-input-wrapper">
          <RadioInput propRef={this.femaleRadioRef} name="Female" />
          <RadioInput propRef={this.maleRadioRef} name="Male" />
          <RadioInput propRef={this.otherRadioRef} name="Other" />
        </fieldset>
        <FileInput
          propRef={this.imageRef}
          defaultValue={this.state.imageValue}
          handleChange={this.setDataStates}
        />
        <CheckboxInput label="I consent to the processing of my personal data" />
        <CheckboxInput label="I agree with the privacy policy" />
        <SubmitInput disabled={false} handleClick={this.props.handleSubmit} />
      </form>
    );
  }
}

export default Form;
