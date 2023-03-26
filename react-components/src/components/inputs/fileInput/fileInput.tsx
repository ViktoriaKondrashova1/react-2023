import React from "react";
import "../textInput/textInput.scss";
import "./fileInput.scss";

interface fileInputProps {
  propRef: React.RefObject<HTMLInputElement>;
  showError: boolean;
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
          className="input-form__input file-input"
          accept="image/png, image/jpg, image/gif, image/jpeg"
        />
        {this.props.showError ? (
          <p className="form__error">Choose profile image</p>
        ) : null}
      </label>
    );
  }
}

export default FileInput;
