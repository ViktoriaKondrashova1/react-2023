import React from "react";
import Navigation from "../../components/navigation/navigation";
import "./header.scss";

interface HeaderState {
  title: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
class Header extends React.Component<{}, HeaderState> {
  constructor(props: React.Component) {
    super(props);
    this.state = {
      title: "",
    };
  }
  updateTitle = () => {
    const pages: object = {
      "/": "MAIN PAGE",
      "/about": "ABOUT PAGE",
    };
    const titleName = pages[location.pathname as keyof object] || "";
    this.setState({ title: titleName });
  };
  render() {
    this.updateTitle();
    return (
      <header className="header">
        <div className="container header__container">
          <Navigation />
          <h1 className="header__title">{this.state.title}</h1>
        </div>
      </header>
    );
  }
}

export default Header;
