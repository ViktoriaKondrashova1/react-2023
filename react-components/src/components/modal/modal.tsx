import { modalProps } from "../../types";
import "./modal.scss";

const Modal = (props: modalProps) => {
  return !props.isOpen ? null : (
    <div className="modal" data-testid="modal">
      <div className="modal__container">
        <button type="button" className="modal__close" />
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
            <p className="modal__info-item">Origin: {props.data.origin}</p>
            <p className="modal__info-item">Location: {props.data.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
