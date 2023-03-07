import { Link } from "react-router-dom";
import "./linkButton.scss";

interface linkButtonProps {
  text?: string;
  link: string;
}

function LinkButton(props: linkButtonProps) {
  return (
    <button className="link-btn">
      <Link className="link-btn__link" to={props.link}>
        {props.text}
      </Link>
    </button>
  );
}

export default LinkButton;
