import React from "react";
import { Link } from "react-router-dom";
import "./linkButton.scss";

interface linkButtonProps {
  text?: string;
  link: string;
}

class LinkButton extends React.Component<linkButtonProps> {
  constructor(props: linkButtonProps) {
    super(props);
  }
  render() {
    return (
      <button type="button" className="link-btn">
        <Link className="link-btn__link" to={this.props.link}>
          {this.props.text}
        </Link>
      </button>
    );
  }
}

export default LinkButton;
