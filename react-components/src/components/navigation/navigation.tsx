import { NavLink } from "react-router-dom";
import { pages } from "../../containers/header/header";
import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {Object.values(pages).map((page, index) => {
          return (
            <li className="nav__item" key={index}>
              <NavLink to={Object.keys(pages)[index]}>{page}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
