import React from "react";
import { userCardProps } from "../../types";
import "./userCard.scss";

class UserCard extends React.Component<userCardProps> {
  render() {
    return (
      <div className="user-card" data-testid="user-card">
        <img
          className="user-card__image"
          src={this.props.image}
          alt={this.props.lastName}
        />
        <div className="user-card__info">
          <h3 className="user-card__title">
            {this.props.name} {this.props.lastName}
          </h3>
          <p className="user-card__text">Gender: {this.props.gender}</p>
          <p className="user-card__text">
            Date of Birth: {this.props.birthDate}
          </p>
          <p className="user-card__text">Residence: {this.props.country}</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
