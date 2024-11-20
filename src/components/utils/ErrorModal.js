import backIcon from "../../assets/images/logout_back.svg";
import '../../styles/utils/modalError.css';
import ButtonWrapper from "./ButtonWrapper";

export const ErrorModal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal__error">
          <h1 className="modal__error-message">{message}</h1>
          <ButtonWrapper
          iconSrc={backIcon}
          onClick={onClose}
          buttonText="Попробовать еще раз"
          className="modal__error-btn"
        />
        </div>
      </div>
    );
  };