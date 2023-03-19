import React from "react";
import TextInput from "../../components/inputs/textInput/textInput";
import "./form.scss";

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <div className="container">
          <h1 className="form__title">Fill in the form</h1>
          <div className="form__inputs">
            <div className="form__inputs__name">
              <TextInput name="first-name" />
              <TextInput name="last-name" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
