import LinkButton from "../../components//linkButton/linkButton";
import "./404.scss";

function Page404() {
  return (
    <div className="page404">
      <div className="container">
        <h1 className="page404__title">404</h1>
        <h2 className="page404__subtitle">The page was not found</h2>
        <LinkButton link="/" text="Go to the main page" />
      </div>
    </div>
  );
}

export default Page404;
