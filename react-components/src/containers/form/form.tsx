import React from "react";
import TextInput from "../../components/inputs/textInput/textInput";
import "./form.scss";

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <div className="form__name">
          <TextInput name="first-name" />
          <TextInput name="last-name" />
        </div>
      </div>
    );
  }
}

export default Form;
