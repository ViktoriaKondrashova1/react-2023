import { useSelector, useDispatch } from "react-redux";
import Form from "../../containers/form/form";
import UserCard from "../../components/userCard/userCard";
import { UserCardProps, FormCardsState } from "../../types";
import { updateCards } from "../../store/formCardsSlice";
import "./formPage.scss";

const FormPage = () => {
  const dispatch = useDispatch();
  const userCardList = useSelector(
    (state: FormCardsState) => state.formCardsList.cards
  );

  const clickSubmit = (value: UserCardProps[]) => {
    dispatch(updateCards([...userCardList, ...value]));
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
