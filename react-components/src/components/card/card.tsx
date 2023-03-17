import React from "react";
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

class Card extends React.Component<cardProps> {
  vegClass: string;
  constructor(props: cardProps) {
    super(props);
    this.vegClass = this.props.veg === true ? "card__veg" : "card__meat";
  }
  render() {
    return (
      <Link to={this.props.link} target="_blank">
        <div className="card" data-testid="card">
          <img
            className="card__image"
            src={this.props.image}
            alt={this.props.title}
          />
          <div className="card__info">
            <h3 className="card__title">{this.props.title}</h3>
            <p className="card__author">by {this.props.author}</p>
            <p className="card__rating">raiting: {this.props.raiting}</p>
            <div className="card__additional">
              <p className="card__time">{this.props.time} min</p>
              <div className={this.vegClass} />
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Card;
