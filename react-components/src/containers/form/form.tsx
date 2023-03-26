import React from "react";
import TextInput from "../../components/inputs/textInput/textInput";
import DateInput from "../../components/inputs/dateInput/dateInput";
import SelectInput from "../../components/inputs/selectInput/selectInput";
import FileInput from "../../components/inputs/fileInput/fileInput";
import RadioInput from "../../components/inputs/radioInput/radioInput";
import CheckboxInput from "../../components/inputs/checkboxInput/checkboxInput";
import SubmitInput from "../../components/inputs/submitInput/submitInput";
import { userCardProps } from "../../components/userCard/userCard";
import "./form.scss";

interface FormProps {
  handleSubmit: (value: userCardProps[]) => void;
  userCardList: userCardProps[];
}

interface FormState {
  nameValue: string;
  lastNameValue: string;
  birthValue: string;
  selectValue: string;
  radioValue: string;
  imageValue: string;
  checkboxValue: (string | undefined)[];
}

class Form extends React.Component<FormProps, FormState> {
  nameRef: React.RefObject<HTMLInputElement>;
  lastNameRef: React.RefObject<HTMLInputElement>;
  birthRef: React.RefObject<HTMLInputElement>;
  selecteRef: React.RefObject<HTMLSelectElement>;
  femaleRadioRef: React.RefObject<HTMLInputElement>;
  maleRadioRef: React.RefObject<HTMLInputElement>;
  otherRadioRef: React.RefObject<HTMLInputElement>;
  imageRef: React.RefObject<HTMLInputElement>;
  checkboxDataRef: React.RefObject<HTMLInputElement>;
  checkboxPolicyRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      nameValue: "",
      lastNameValue: "",
      birthValue: "",
      selectValue: "",
      radioValue: "",
      imageValue: "",
      checkboxValue: [],
    };
    this.nameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.birthRef = React.createRef();
    this.selecteRef = React.createRef();
    this.femaleRadioRef = React.createRef();
    this.maleRadioRef = React.createRef();
    this.otherRadioRef = React.createRef();
    this.imageRef = React.createRef();
    this.checkboxDataRef = React.createRef();
    this.checkboxPolicyRef = React.createRef();
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
      checkboxValue: [this.checkboxDataRef, this.checkboxPolicyRef]
        .filter((ref) => ref.current?.checked)
        .map((ref) => ref.current?.value),
    });
  };

  handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.handleSubmit([
      {
        name: this.state.nameValue,
        lastName: this.state.lastNameValue,
        birthDate: this.state.birthValue,
        country: this.state.selectValue,
        gender: this.state.radioValue,
        image: "",
      },
    ]);
    event.currentTarget.reset();
  };

  handleFormReset = () => {
    console.log("The form has been reset");
  };

  render() {
    return (
      <form
        className="form"
        onSubmit={this.handleSubmit}
        onReset={this.handleFormReset}
      >
        <div className="form__wrapper">
          <TextInput
            propRef={this.nameRef}
            name="first-name"
            handleChange={this.setDataStates}
          />
          <TextInput
            propRef={this.lastNameRef}
            name="last-name"
            handleChange={this.setDataStates}
          />
        </div>
        <div className="form__wrapper">
          <DateInput
            propRef={this.birthRef}
            handleChange={this.setDataStates}
          />
          <SelectInput
            propRef={this.selecteRef}
            handleChange={this.setDataStates}
          />
        </div>
        <fieldset className="radio-input-wrapper">
          <RadioInput propRef={this.femaleRadioRef} name="Female" />
          <RadioInput propRef={this.maleRadioRef} name="Male" />
          <RadioInput propRef={this.otherRadioRef} name="Other" />
        </fieldset>
        <FileInput propRef={this.imageRef} handleChange={this.setDataStates} />
        <CheckboxInput
          label="I consent to the processing of my personal data"
          propRef={this.checkboxDataRef}
          handleChange={this.setDataStates}
        />
        <CheckboxInput
          label="I agree with the privacy policy"
          propRef={this.checkboxPolicyRef}
          handleChange={this.setDataStates}
        />
        <SubmitInput
          disabled={false}
          handleClick={() => this.props.handleSubmit}
        />
      </form>
    );
  }
}

export default Form;
