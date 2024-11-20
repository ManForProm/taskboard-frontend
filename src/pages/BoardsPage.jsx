import React from "react";
import { useDispatch } from "react-redux";
import { BoardCardGroups } from "../components/board/BoardCardGroups.js";
import { BoardsHeader } from "../components/board/BoardsHeader.js";
import "../styles/boardWorkspace/boardsWorkspace.css";

export const BoardsPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="boards-page__wrapper">
      <BoardsHeader />
      <section className="desks__workspace">
        <div className="container">
          <div className="devider__line"></div>
          <h1 className="desks__title">Доски</h1>
          <div className="desks__filter">
            <div className="desks__sortfilter-wrapper">
              <div className="desks__sort">
                <h1 className="desks__sort-title">Сортировать по</h1>
                <select className="desks__sort-selection">
                  <option className="desk__sort-option" value="date">
                    Дате
                  </option>
                  <option className="desk__sort-option" value="priority">
                    Приоритету
                  </option>
                  <option className="desk__sort-option" value="name">
                    Имени
                  </option>
                </select>
              </div>
              <div className="desks__filtering">
                <h1 className="desks__filtering-title">Фильтр:</h1>
                <select className="desks__filtering-selection">
                  <option className="desk__filtering-option" value="priority">
                    Приоритету
                  </option>
                  <option className="desk__filtering-option" value="name">
                    Имени
                  </option>
                  <option className="desk__filtering-option" value="date">
                    Дате
                  </option>
                </select>
              </div>
            </div>
            <div className="desks__search">
              <p className="desks__search-text">Поиск</p>
              <div className="desks__search-container">
                <img
                  src="../../assets/images/search.svg"
                  alt=""
                  className="desks__search-icon"
                />
                <input
                  type="text"
                  className="desks__search-input"
                  placeholder="Поиск досок"
                />
              </div>
            </div>
          </div>
          <div className="desks__group">
            <div className="desks__group-title">
              <img
                src="../assets/images/contrebutors.svg"
                alt=""
                className="group__title-icon"
              />
              <h2 className="group__title-text">Мои доски</h2>
            </div>
              <BoardCardGroups/>
          </div>
        </div>
      </section>
    </div>
  );
};
