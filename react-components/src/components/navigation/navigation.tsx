import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/">Main</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
