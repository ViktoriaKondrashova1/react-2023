import Card from "../../components/card/card";
import { cardListProps } from "../../types";
import "./cardList.scss";

const CardList = (props: cardListProps) => {
  return !props.data ? (
    <div className="card-list__error">The cards are not found!</div>
  ) : (
    <div className="card-list__cards" data-testid="cards-list">
      {props.data.map((item) => {
        return (
          <Card
            name={item.name}
            key={item.id}
            image={item.image}
            gender={item.gender}
            status={item.status}
          />
        );
      })}
    </div>
  );
};

export default CardList;
