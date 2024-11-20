import React from "react";
import { useNavigate } from "react-router-dom";
import favoriteIcon from "../../assets/images/favorite.svg";
import "../../styles/boardWorkspace/boardCard.css";

export const BoardCard = ({ board }) => {
  const navigate = useNavigate();

  const handleBoardClick = (boardId) => {
    navigate(`/board/${boardId}`);
  };
  return (
    <div className="desk__group-desk" onClick={() => handleBoardClick(board.id)}>
      <p className="desk__title">{board.name}</p>
      <img src={favoriteIcon} alt="" className="desk__group-desk_icon"></img>
    </div>
  );
};
