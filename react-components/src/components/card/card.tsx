import { cardProps } from "../../types";
import "./card.scss";

const Card = (props: cardProps) => {
  return (
    <div className="card" data-testid="card">
      <img className="card__image" src={props.image} alt={props.title} />
      <div className="card__info">
        <h3 className="card__title">{props.title}</h3>
        <p className="card__author">Owner: {props.owner}</p>
      </div>
    </div>
  );
};

export default Card;
