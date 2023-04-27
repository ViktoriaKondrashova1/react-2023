import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";
import "./header.scss";

export const pages = {
  "/": "Main",
  "/about": "About Us",
  "/form": "Form",
};

const Header = () => {
  const location = useLocation();

  const [title, setTitle] = useState<string>();

  useEffect(() => {
    setTitle(`${pages[location.pathname as keyof object]} Page`);
  }, [location]);

  return (
    <header className="header">
      <div className="container header__container">
        <Navigation />
        <h1 className="header__title">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
