import { Link } from "react-router-dom";
import "./card.scss";

interface cardProps {
  title: string;
  author: string;
  image: string;
  link: string;
  time: number;
  veg: boolean;
  raiting: number;
}

function Card(props: cardProps) {
  const vegClass = props.veg === true ? "card__veg" : "card__meat";
  return (
    <Link to={props.link} target="_blank">
      <div className="card">
        <img className="card__image" src={props.image} alt={props.title} />
        <div className="card__info">
          <h3 className="card__title">{props.title}</h3>
          <p className="card__author">by {props.author}</p>
          <p className="card__rating">raiting: {props.raiting}</p>
          <div className="card__additional">
            <p className="card__time">{props.time} min</p>
            <div className={vegClass} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
