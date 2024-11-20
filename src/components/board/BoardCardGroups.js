import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard, loadBoards } from "../../redux/slices/board/boardSlice";
import { closeModal, openModal } from "../../redux/slices/board/boardSlice.js";
import { TaskCardPlaceHolder } from "../task/TaskCardPlaceholder.js";
import { ErrorModal } from "../utils/ErrorModal.js";
import { AddNewBoardCard } from "./AddNewBoardCard.js";
import { AddNewBoardModal } from "./AddNewBoardModal.js";
import { BoardCard } from "./BoardCard.js";
export const BoardCardGroups = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.isModalOpen);
  const { boards, status, error } = useSelector((state) => state.board);

  const handleOpenModal = () => {
    console.log("Modal opened");
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    dispatch(loadBoards());
  }, [dispatch]);

  const handleAddBoard = (boardData) => {
    dispatch(addBoard(boardData));
  };

  const handleErrorModalClose = () => {
    console.log("Modal closed");
    dispatch(loadBoards());
  };

  if (status === "loading") {
    return <TaskCardPlaceHolder />;
  }

  if (status === "failed") {
    return (
      <ErrorModal
        isOpen={true}
        message={error}
        onClose={handleErrorModalClose}
      />
    );
  }

  return (
    <div className="desk__group-desks">
      <AddNewBoardModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <AddNewBoardCard onClick={handleOpenModal} />
      {boards.map((board) => <BoardCard key={board.id} board={board} /> )}
    </div>
  );
};
