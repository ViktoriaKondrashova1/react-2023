import { ModalProps } from "../../types";
import "./modal.scss";

const Modal = (props: ModalProps) => {
  return !props.isOpen ? null : (
    <div className="modal" data-testid="modal" onClick={props.handleClick}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal__close"
          onClick={props.handleClick}
        />
        <div className="modal__info-wrapper">
          <img
            src={props.data.image}
            alt={props.data.name}
            className="modal__image"
          />
          <div className="modal__info">
            <h1 className="modal__title">{props.data.name}</h1>
            <p className="modal__info-item">Status: {props.data.status}</p>
            <p className="modal__info-item">Species: {props.data.species}</p>
            <p className="modal__info-item">Gender: {props.data.gender}</p>
            <p className="modal__info-item">Type: {props.data.type}</p>
            <p className="modal__info-item">
              Origin: {props.data.origin!.name}
            </p>
            <p className="modal__info-item">
              Location: {props.data.location!.name}
            </p>
            <p className="modal__info-item">
              Created:{" "}
              {props.data.created
                ? new Date(props.data.created).toLocaleDateString("en-GB")
                : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
