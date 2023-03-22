import React from "react";
import Form from "../../containers/form/form";
import UserCard from "../../components/userCard/userCard";
import { userCardProps } from "../../components/userCard/userCard";
import "./formPage.scss";

class FormPage extends React.Component {
  userCards: userCardProps[];
  constructor(props: userCardProps) {
    super(props);
    this.userCards = [
      {
        name: "Victoria",
        lastName: "Kondrashova",
        image:
          "https://i.pinimg.com/564x/0f/bc/19/0fbc19479787c6a34c95fecab51890a7.jpg",
        gender: "Female",
        country: "Belarus",
        birthDate: "21.08.1996",
      },
    ];
  }
  render() {
    return (
      <div className="form-page">
        <div className="container">
          <h1 className="form-page__title">Fill in the form</h1>
          <Form />
          <div className="form-page__user-cards">
            {this.userCards.map((item, index) => {
              return (
                <UserCard
                  name={item.name}
                  key={index}
                  lastName={item.lastName}
                  image={item.image}
                  gender={item.gender}
                  country={item.country}
                  birthDate={item.birthDate}
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
