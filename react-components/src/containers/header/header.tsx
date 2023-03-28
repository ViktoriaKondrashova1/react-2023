import React, { useState } from "react";
import Navigation from "../../components/navigation/navigation";
import "./header.scss";

const Header: React.FC = () => {
  const [title, setTitle] = useState<string>(
    location.pathname === "/" ? "MAIN PAGE" : ""
  );

  const updateTitle = () => {
    const pages = {
      "/": "MAIN",
      "/about": "ABOUT",
      "/form": " FORM",
    };
    const titleName = pages[location.pathname as keyof object]
      ? `${pages[location.pathname as keyof object]} PAGE`
      : "";
    setTitle(titleName);
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
