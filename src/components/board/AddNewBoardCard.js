import React from "react";
import "../../styles/boardWorkspace/boardCard.css";

export const AddNewBoardCard = ({onClick}) => { 
  
  return (
    <button onClick={onClick} className="desk__group-desk_create">
      <p className="desk__title-create">Создать доску</p>
    </button>
  );
};
