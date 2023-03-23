import React from "react";
import Form from "../../containers/form/form";
// import UserCard from "../../components/userCard/userCard";
import "./formPage.scss";

type FormPageProps = {
  [key: string]: never;
};

interface FormPageState {
  userCardList: object[];
}

class FormPage extends React.Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      userCardList: [],
    };
  }
  render() {
    return (
      <div className="form-page">
        <div className="container">
          <h1 className="form-page__title">Fill in the form</h1>
          <Form />
          {/* <div className="form-page__user-cards">
            {this.state.userCardList.map((item, index) => {
              return <UserCard {...this.props} key={index} />;
            })}
          </div> */}
        </div>
      </div>
    );
  }
}

export default FormPage;
