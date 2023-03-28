import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

interface NavigationProps {
  handleClick: () => void;
}

const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item" onClick={props.handleClick}>
          <NavLink to="/">Main</NavLink>
        </li>
        <li className="nav__item" onClick={props.handleClick}>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li className="nav__item" onClick={props.handleClick}>
          <NavLink to="/form">Form</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
