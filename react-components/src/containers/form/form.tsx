import { useState, useEffect } from "react";
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

const Form = (props: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormInputs>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onSubmit = (data: FormInputs) => {
    props.updateCards([
      {
        name: data.firstName,
        lastName: data.lastName,
        birthDate: data.date,
        country: data.country,
        gender: data.gender,
        image: URL.createObjectURL(data.file![0]),
      },
    ]);
  };

  const handleFormReset = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      onReset={handleFormReset}
    >
      <div className="form__wrapper">
        <TextInput register={register} errors={errors} name="firstName" />
        <TextInput register={register} errors={errors} name="lastName" />
      </div>
      <div className="form__wrapper">
        <DateInput register={register} errors={errors} name="date" />
        <SelectInput register={register} errors={errors} name="country" />
      </div>
      <fieldset className="radio-input-wrapper">
        <RadioInput
          register={register}
          errors={errors}
          value="Female"
          name="gender"
        />
        <RadioInput
          register={register}
          errors={errors}
          value="Male"
          name="gender"
        />
        <RadioInput
          register={register}
          errors={errors}
          value="Other"
          name="gender"
        />
      </fieldset>
      {errors.gender && (
        <p role="alert" className="form__error">
          {errors.gender.message}
        </p>
      )}
      <FileInput register={register} errors={errors} name="file" />
      <CheckboxInput
        value="I consent to the processing of my personal data"
        name="checkbox"
        register={register}
        errors={errors}
      />
      <SubmitInput disabled={false} />
      <SubmitMessage open={isOpen} />
    </form>
  );
};

export default Form;
