import React from "react";
import "../textInput/textInput.scss";
import "./fileInput.scss";

interface fileInputProps {
  propRef: React.RefObject<HTMLInputElement>;
  defaultValue: string;
  handleChange: () => void;
}

class FileInput extends React.Component<fileInputProps> {
  render() {
    return (
      <label htmlFor="user-image" className="input-form__label">
        User Image
        <br />
        <input
          ref={this.props.propRef}
          type="file"
          name="user-image"
          defaultValue={this.props.defaultValue}
          className="input-form__input file-input"
          accept="image/png, image/jpg, image/gif, image/jpeg"
          onChange={this.props.handleChange}
          required
        />
      </label>
    );
  }
}

export default FileInput;
