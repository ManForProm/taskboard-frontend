import React from "react";
import favoriteIcon from '../../assets/images/favorite.svg';
import "../../styles/boardWorkspace/boardCard.css";

export const BoardCard = ({ board }) => (
  <div className="desk__group-desk">
    <p className="desk__title">{board.name}</p>
    <img src={favoriteIcon} alt="" class="desk__group-desk_icon"></img>
  </div>
);
