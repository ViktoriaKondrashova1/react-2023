import React from "react";
import "./404.scss";

class Page404 extends React.Component {
  render() {
    return (
      <div className="page404">
        <div className="container">
          <h1 className="page404__title">404</h1>
          <h2 className="page404__subtitle">The page was not found</h2>
        </div>
      </div>
    );
  }
}

export default Page404;
