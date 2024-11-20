import React from "react";

export const Task = ({ taskText, onDragStart}) => {
  return (
    <div
      className="task__wrapper"
      draggable
      onDragStart={(e) => onDragStart(e,)}
    >
      <div className="task__flags"></div>
      <d className="task__content">
        <p className="task__text">{taskText}</p>
      </d>
    </div>
  );
};
