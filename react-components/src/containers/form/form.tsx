import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../components/inputs/textInput/textInput";
import DateInput from "../../components/inputs/dateInput/dateInput";
import SelectInput from "../../components/inputs/selectInput/selectInput";
import FileInput from "../../components/inputs/fileInput/fileInput";
import RadioInput from "../../components/inputs/radioInput/radioInput";
import CheckboxInput from "../../components/inputs/checkboxInput/checkboxInput";
import SubmitInput from "../../components/inputs/submitInput/submitInput";
import SubmitMessage from "../../components/submitMessage/submitMessage";
import { FormProps, FormInputs } from "../../types";
import "./form.scss";

const Form: React.FC<FormProps> = (props) => {
  const { register, handleSubmit, reset } = useForm<FormInputs>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    props.updateCards([
      {
        name: data.firstName,
        lastName: data.lastName,
        birthDate: data.date,
        country: data.country,
        gender: data.gender,
        image:
          data.image!.length !== 0 ? URL.createObjectURL(data.image![0]) : "",
      },
    ]);
    reset();
  };

  const handleFormReset = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      onReset={handleFormReset}
    >
      <div className="form__wrapper">
        <TextInput register={register} name="firstName" />
        <TextInput register={register} name="lastName" />
      </div>
      <div className="form__wrapper">
        <DateInput register={register} />
        <SelectInput register={register} />
      </div>
      <fieldset className="radio-input-wrapper">
        <RadioInput register={register} name="Female" />
        <RadioInput register={register} name="Male" />
        <RadioInput register={register} name="Other" />
      </fieldset>
      {false ? <p className="form__error">Choose your gender</p> : null}
      <FileInput register={register} />
      <CheckboxInput
        name="I consent to the processing of my personal data"
        register={register}
      />
      <SubmitInput disabled={false} />
      <SubmitMessage open={isOpen} />
    </form>
  );
};

// class Form extends React.Component<FormProps, FormState> {
//   constructor(props: FormProps) {
//     super(props);
//     this.state = {
//       isFormValid: false,
//       isOpen: false,
//       nameError: false,
//       lastNameError: false,
//       birthError: false,
//       countryError: false,
//       genderError: false,
//       imageError: false,
//       checkError: false,
//     };
//   }

//   showErrors = () => {
//     const nameValue = this.nameRef.current?.value;
//     const lastNameValue = this.lastNameRef.current?.value;
//     const radioValue = [
//       this.femaleRadioRef,
//       this.maleRadioRef,
//       this.otherRadioRef,
//     ]
//       .filter((ref) => ref.current?.checked)
//       .map((ref) => ref.current?.value)
//       .join("");

//     if (
//       !nameValue ||
//       nameValue.length < 3 ||
//       nameValue[0] !== nameValue[0].toUpperCase()
//     ) {
//       this.setState({ nameError: true });
//     }
//     if (
//       !lastNameValue ||
//       lastNameValue.length < 3 ||
//       lastNameValue[0] !== lastNameValue[0].toUpperCase()
//     ) {
//       this.setState({ lastNameError: true });
//     }
//     if (!this.birthRef.current?.value) {
//       this.setState({ birthError: true });
//     }
//     if (!this.selecteRef.current?.value) {
//       this.setState({ countryError: true });
//     }
//     if (!radioValue) {
//       this.setState({ genderError: true });
//     }
//     if (
//       this.imageRef.current?.files &&
//       this.imageRef.current?.files.length === 0
//     ) {
//       this.setState({ imageError: true });
//     }
//     if (!this.checkboxRef.current?.checked) {
//       this.setState({ checkError: true });
//     }
//     if (
//       !this.state.nameError &&
//       !this.state.lastNameError &&
//       !this.state.birthError &&
//       !this.state.countryError &&
//       !this.state.genderError &&
//       !this.state.imageError &&
//       !this.state.checkError
//     ) {
//       this.setState({
//         isFormValid: true,
//       });
//     }
//   };

//   hideErrors = () => {
//     this.setState({
//       nameError: false,
//       lastNameError: false,
//       birthError: false,
//       countryError: false,
//       genderError: false,
//       imageError: false,
//       checkError: false,
//     });
//   };

//   handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     this.showErrors();
//     if (this.state.isFormValid) {
//       this.props.handleSubmit([
//         {
//           name: this.nameRef.current?.value || "",
//           lastName: this.lastNameRef.current?.value || "",
//           birthDate: this.birthRef.current?.value || "",
//           country: this.selecteRef.current?.value || "",
//           gender: [this.femaleRadioRef, this.maleRadioRef, this.otherRadioRef]
//             .filter((ref) => ref.current?.checked)
//             .map((ref) => ref.current?.value)
//             .join(""),
//           image: this.imageRef.current?.files
//             ? URL.createObjectURL(this.imageRef.current.files[0])
//             : "",
//         },
//       ]);
//       this.hideErrors();
//       event.currentTarget.reset();
//       this.setState({
//         isFormValid: false,
//       });
//     }
//   };
//   render() {
//     return (
//       <form
//         className="form"
//         onSubmit={this.handleSubmit}
//         onReset={this.handleFormReset}
//       >
//         <div className="form__wrapper">
//           <TextInput
//             propRef={this.nameRef}
//             name="first-name"
//             showError={this.state.nameError}
//           />
//           <TextInput
//             propRef={this.lastNameRef}
//             name="last-name"
//             showError={this.state.lastNameError}
//           />
//         </div>
//         <div className="form__wrapper">
//           <DateInput
//             propRef={this.birthRef}
//             showError={this.state.birthError}
//           />
//           <SelectInput
//             propRef={this.selecteRef}
//             showError={this.state.countryError}
//           />
//         </div>
//         <fieldset className="radio-input-wrapper">
//           <RadioInput propRef={this.femaleRadioRef} name="Female" />
//           <RadioInput propRef={this.maleRadioRef} name="Male" />
//           <RadioInput propRef={this.otherRadioRef} name="Other" />
//         </fieldset>
//         {this.state.genderError ? (
//           <p className="form__error">Choose your gender</p>
//         ) : null}
//         <FileInput propRef={this.imageRef} showError={this.state.imageError} />
//         <CheckboxInput
//           label="I consent to the processing of my personal data"
//           propRef={this.checkboxRef}
//           showError={this.state.checkError}
//         />
//         <SubmitInput
//           disabled={false}
//           handleClick={() => this.props.handleSubmit}
//         />
//         <SubmitMessage open={this.state.isOpen} />
//       </form>
//     );
//   }
// }

export default Form;
