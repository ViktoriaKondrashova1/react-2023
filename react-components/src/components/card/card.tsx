import "./card.scss";

interface cardProps {
  title: string;
  //   author: string;
  image: string;
  //   link: string;
  //   time: number;
  //   veg: boolean;
}

function Card(props: cardProps) {
  return (
    <div className="card">
      <img className="card__image" src={props.image} alt={props.title} />
      <h3 className="card__title">{props.title}</h3>
    </div>
  );
}

export default Card;
