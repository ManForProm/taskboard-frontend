import React from "react";
import "../../styles/boardWorkspace/addNewBoardModal.css";

export const AddNewBoardModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button onClick={onClose} className="close-btn">
            Закрыть
          </button>
          <form className="create-board-form">
            <h2>Добавить новую доску</h2>
            <label>
              Название:
              <input type="text" name="boardName" />
            </label>
            <label>
              Описание:
              <textarea name="boardDescription"></textarea>
            </label>
            <button type="submit">Создать</button>
          </form>
        </div>
      </div>
    );
  };