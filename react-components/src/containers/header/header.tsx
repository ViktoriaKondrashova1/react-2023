import { useState } from "react";
import Navigation from "../../components/navigation/navigation";
import "./header.scss";

export const pages = {
  "/": "Main",
  "/about": "About Us",
  "/form": "Form",
};

const Header = () => {
  const [title, setTitle] = useState<string>(
    pages[location.pathname as keyof object]
      ? `${pages[location.pathname as keyof object]} Page`
      : ""
  );

  const updateTitle = () => {
    setTitle(`${pages[location.pathname as keyof object]} Page`);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Navigation handleClick={updateTitle} />
        <h1 className="header__title">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
