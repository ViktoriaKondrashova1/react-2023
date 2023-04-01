import { FieldValues } from "react-hook-form";
import { InputProps } from "../../../types";
import "../textInput/textInput.scss";
import "./fileInput.scss";

const FileInput = <T extends FieldValues>(props: InputProps<T>) => {
  return (
    <label htmlFor={props.name} className="input-form__label">
      User Image
      <br />
      <input
        type="file"
        {...props.register(props.name, {
          required: "Image is required",
          validate: (files: FileList) =>
            ["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(
              files[0]?.type
            ) || "Only PNG, JPEG, JPG and GIF are accepted",
        })}
        name={props.name}
        className="input-form__input file-input"
        accept="image/png, image/jpg, image/gif, image/jpeg"
      />
      {props.errors[props.name] && (
        <p className="form__error">
          {props.errors[props.name]?.message?.toString()}
        </p>
      )}
    </label>
  );
};

export default FileInput;
