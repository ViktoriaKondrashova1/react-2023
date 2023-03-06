import { Link } from "react-router-dom";
import "./404.scss";

function Page404() {
  return (
    <div>
      <h1>404</h1>
      <h2>The page was not found</h2>
      <Link to="/">Go to the main page</Link>
    </div>
  );
}

export default Page404;
