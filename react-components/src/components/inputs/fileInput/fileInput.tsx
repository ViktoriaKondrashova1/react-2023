import React from "react";
import { InputProps } from "../../../types";
import "../textInput/textInput.scss";
import "./fileInput.scss";

const FileInput: React.FC<InputProps> = (props) => {
  return (
    <label htmlFor="user-image" className="input-form__label">
      User Image
      <br />
      <input
        ref={props.propRef}
        type="file"
        name="user-image"
        className="input-form__input file-input"
        accept="image/png, image/jpg, image/gif, image/jpeg"
      />
      {props.showError ? (
        <p className="form__error">Choose profile image</p>
      ) : null}
    </label>
  );
};

export default FileInput;
