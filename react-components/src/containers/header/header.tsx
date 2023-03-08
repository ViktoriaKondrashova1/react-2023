import React from "react";
import Navigation from "../../components/navigation/navigation";
import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
