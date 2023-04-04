import Card from "../../components/card/card";
import { cardListProps } from "../../types";
import "./cardList.scss";

const CardList = (props: cardListProps) => {
  return (
    <div className="card-list__cards" data-testid="cards-list">
      {props.data.map((item) => {
        return (
          <Card
            title={item.title}
            key={item.id}
            image={item.image}
            owner={item.owner}
          />
        );
      })}
    </div>
  );
};

export default CardList;
