import React from "react";
import "../../styles/boardWorkspace/boardsWorkspace.css";
import { AddNewBoardCard } from "./AddNewBoardCard.js";
import { BoardCard } from "./BoardCard.js";

export const Boards = () => (
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
            <AddNewBoardCard/>
            <BoardCard/>
            <BoardCard/>
          </div>
        </div>
      </div>
  </section>
);
