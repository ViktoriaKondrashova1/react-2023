import { Link } from "react-router-dom";
import "./404.scss";

function Page404() {
  return (
    <div className="page404">
      <div className="container">
        <h1 className="page404__title">404</h1>
        <h2 className="page404__subtitle">The page was not found</h2>
        <Link to="/">Go to the main page</Link>
      </div>
    </div>
  );
}

export default Page404;
