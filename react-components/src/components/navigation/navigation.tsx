import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

interface NavigationProps {
  handleClick: () => void;
}

class Navigation extends React.Component<NavigationProps> {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item" onClick={this.props.handleClick}>
            <NavLink to="/">Main</NavLink>
          </li>
          <li className="nav__item" onClick={this.props.handleClick}>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="nav__item" onClick={this.props.handleClick}>
            <NavLink to="/form">Form</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
