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
        type="file"
        {...props.register("file", {
          required: "Image is required",
        })}
        name="file"
        className="input-form__input file-input"
        accept="image/png, image/jpg, image/gif, image/jpeg"
      />
      {props.errors.file && (
        <p className="form__error">{props.errors.file.message}</p>
      )}
    </label>
  );
};

export default FileInput;
