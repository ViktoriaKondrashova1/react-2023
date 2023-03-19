import React from "react";
import Form from "../../containers/form/form";
import "./formPage.scss";

class FormPage extends React.Component {
  render() {
    return (
      <div className="form-page">
        <div className="container">
          <h1 className="form-page__title">Fill in the form</h1>
          <Form />
        </div>
      </div>
    );
  }
}

export default FormPage;
