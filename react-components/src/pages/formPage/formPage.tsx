import React, { useState } from "react";
import Form from "../../containers/form/form";
import UserCard from "../../components/userCard/userCard";
import { UserCardProps } from "../../types";
import "./formPage.scss";

const FormPage: React.FC = () => {
  const [userCardList, setUserCardList] = useState<UserCardProps[]>([]);

  const clickSubmit = (value: UserCardProps[]) => {
    setUserCardList([...userCardList, ...value]);
  };

  return (
    <div className="form-page">
      <div className="container">
        <h1 className="form-page__title">Fill in the form</h1>
        <Form
          userCardList={userCardList}
          updateCards={(value) => clickSubmit(value)}
        />
        <div className="form-page__user-cards">
          {userCardList.map((item, index) => {
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
};

export default FormPage;
