import React from "react";
import Form from "../../containers/form/form";
import UserCard from "../../components/userCard/userCard";
import { FormPageProps, FormPageState } from "../../types";
import "./formPage.scss";

class FormPage extends React.Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      userCardList: [],
    };
  }
  clickSubmit = (value: FormPageState["userCardList"]) => {
    this.setState({
      userCardList: [...this.state.userCardList, ...value],
    });
  };
  render() {
    return (
      <div className="form-page">
        <div className="container">
          <h1 className="form-page__title">Fill in the form</h1>
          <Form
            userCardList={this.state.userCardList}
            handleSubmit={(value) => this.clickSubmit(value)}
          />
          <div className="form-page__user-cards">
            {this.state.userCardList.map((item, index) => {
              return (
                <UserCard
                  name={item.name}
                  lastName={item.lastName}
                  birthDate={item.birthDate}
                  country={item.country}
                  gender={item.gender}
                  image={item.image}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FormPage;
