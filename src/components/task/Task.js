import React from "react";

export const Task = ({taskText}) => (
  <div class="task__wrapper">
    <div class="task__flags"></div>
    <d class="task__content">
      <p class="task__text">{taskText}</p>
    </d>
  </div>
);
