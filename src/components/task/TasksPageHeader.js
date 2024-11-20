import React from "react";
import "../../styles/tasksWorkspace/headerTasks.css";

export const TasksPageHeader = () => {
  return (
    <header class="header__desk">
      <div class="container">
        <div class="header__desk-wrapper">
          <div class="header__desk-left">
            <p class="desk__name-title">Важно</p>
            <button class="desk__tasks_group-add_to_favorite-btn">
              <img
                src={<favoriteIcon fill='red'/>}
                alt=""
                class="desk__add_to_favorite-icon"
              />
            </button>
            <button class="desk__tasks_group-private-btn">
              <img
                src="../assets/images/private_white.svg"
                alt=""
                class="desk__private-icon"
              />
            </button>
            <div class="filter__tasks_group">
              <button class="desk__tasks_group-filter">
                <img
                  src="../assets/images/filter_task_group.svg"
                  alt=""
                  class="icon__tasks_group-filter"
                />
                <p class="selected__tasks_group-filter">По доске</p>
              </button>
              <img
                src="../assets/images/expand_down.svg"
                alt=""
                class="expand__tasks_group-filter"
              />
            </div>
          </div>
          <div class="header__desk-right">
            <button class="filter__tasks-btn">
              <img
                src="../assets/images/filter_tasks.svg"
                alt=""
                class="filter_tasks__icon"
              />
              <p class="filter_tasks__text">Фильтры</p>
            </button>
            <button class="profile__btn">
              <div class="profile__btn-content">М</div>
            </button>
            <button class="share__desk-btn">
              <img
                src="../assets/images/share_black.svg"
                alt=""
                class="share__desk-icon"
              />
              <p class="share__desk-text">Поделиться</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
