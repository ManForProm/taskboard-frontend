import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddNewBoardCard } from "../components/board/AddNewBoardCard.js";
import { AddNewBoardModal } from "../components/board/AddNewBoardModal";
import { BoardCard } from "../components/board/BoardCard.js";
import { BoardsHeader } from "../components/board/BoardsHeader.js";
import { addBoard, loadBoards } from "../redux/slices/board/boardSlice";
import { closeModal, openModal } from "../redux/slices/board/boardSlice.js";
import "../styles/boardWorkspace/boardsWorkspace.css";

export const BoardsPage = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.isModalOpen);
  const { boards, status } = useSelector((state) => state.board);

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

  if (status === "loading") {
    return <p>Загрузка...</p>;
  }

  if (status === "failed") {
    return <p>Ошибка загрузки досок.</p>;
  }

  return (
    <div className="boards-page__wrapper">
      <BoardsHeader />
      <section class="desks__workspace">
        <div class="container">
          <div class="devider__line"></div>
          <h1 class="desks__title">Доски</h1>
          <div class="desks__filter">
            <div class="desks__sortfilter-wrapper">
              <div class="desks__sort">
                <h1 class="desks__sort-title">Сортировать по</h1>
                <select class="desks__sort-selection">
                  <option class="desk__sort-option" value="date">
                    Дате
                  </option>
                  <option class="desk__sort-option" value="priority">
                    Приоритету
                  </option>
                  <option class="desk__sort-option" value="name">
                    Имени
                  </option>
                </select>
              </div>
              <div class="desks__filtering">
                <h1 class="desks__filtering-title">Фильтр:</h1>
                <select class="desks__filtering-selection">
                  <option class="desk__filtering-option" value="priority">
                    Приоритету
                  </option>
                  <option class="desk__filtering-option" value="name">
                    Имени
                  </option>
                  <option class="desk__filtering-option" value="date">
                    Дате
                  </option>
                </select>
              </div>
            </div>
            <div class="desks__search">
              <p class="desks__search-text">Поиск</p>
              <div class="desks__search-container">
                <img
                  src="../../assets/images/search.svg"
                  alt=""
                  class="desks__search-icon"
                />
                <input
                  type="text"
                  class="desks__search-input"
                  placeholder="Поиск досок"
                />
              </div>
            </div>
          </div>
          <div class="desks__group">
            <div class="desks__group-title">
              <img
                src="../assets/images/contrebutors.svg"
                alt=""
                class="group__title-icon"
              />
              <h2 class="group__title-text">Мои доски</h2>
            </div>
            <div class="desk__group-desks">
              <AddNewBoardModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
              />
              <AddNewBoardCard onClick={handleOpenModal} />
              {boards.map((board) => (
                <BoardCard key={board.id} board={board} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
