import React from "react";
import "./button.scss";

interface buttonProps {
  text?: string;
  className?: string;
  disabled?: boolean;
}

class Button extends React.Component<buttonProps> {
  classes: string;
  constructor(props: buttonProps) {
    super(props);
    this.classes = `${"button"} ${this.props.className}`;
  }
  render() {
    return (
      <button type="submit" className={this.classes} disabled>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
