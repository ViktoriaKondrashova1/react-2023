import React from "react";
import { userCardProps } from "../../types";
import "./userCard.scss";

const UserCard: React.FC<userCardProps> = (props) => {
  return (
    <div className="user-card" data-testid="user-card">
      <img
        className="user-card__image"
        src={props.image}
        alt={props.lastName}
      />
      <div className="user-card__info">
        <h3 className="user-card__title">
          {props.name} {props.lastName}
        </h3>
        <p className="user-card__text">Gender: {props.gender}</p>
        <p className="user-card__text">Date of Birth: {props.birthDate}</p>
        <p className="user-card__text">Residence: {props.country}</p>
      </div>
    </div>
  );
};

export default UserCard;
