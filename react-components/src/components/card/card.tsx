import { cardProps } from "../../types";
import "./card.scss";

const Card = (props: cardProps) => {
  return (
    <div className="card" data-testid="card">
      <img className="card__image" src={props.image} alt={props.name} />
      <div className="card__info">
        <h3 className="card__title">{props.name}</h3>
        <p className="card__additional">Gender: {props.gender}</p>
        <p className="card__additional">Status: {props.status}</p>
      </div>
    </div>
  );
};

export default Card;
