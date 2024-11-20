import React from "react";
import "../../styles/tasksWorkspace/headerTasks.css";

export const TasksPageHeader = ({boardId}) => {
  return (
    <header className="header__desk">
      <div className="container">
        <div className="header__desk-wrapper">
          <div className="header__desk-left">
            <p className="desk__name-title">Важно</p>
            <button className="desk__tasks_group-add_to_favorite-btn">
              <img
                src={<favoriteIcon fill='red'/>}
                alt=""
                className="desk__add_to_favorite-icon"
              />
            </button>
            <button className="desk__tasks_group-private-btn">
              <img
                src="../assets/images/private_white.svg"
                alt=""
                className="desk__private-icon"
              />
            </button>
            <div className="filter__tasks_group">
              <button className="desk__tasks_group-filter">
                <img
                  src="../assets/images/filter_task_group.svg"
                  alt=""
                  className="icon__tasks_group-filter"
                />
                <p className="selected__tasks_group-filter">По доске</p>
              </button>
              <img
                src="../assets/images/expand_down.svg"
                alt=""
                className="expand__tasks_group-filter"
              />
            </div>
          </div>
          <div className="header__desk-right">
            <button className="filter__tasks-btn">
              <img
                src="../assets/images/filter_tasks.svg"
                alt=""
                className="filter_tasks__icon"
              />
              <p className="filter_tasks__text">Фильтры</p>
            </button>
            <button className="profile__btn">
              <div className="profile__btn-content">М</div>
            </button>
            <button className="share__desk-btn">
              <img
                src="../assets/images/share_black.svg"
                alt=""
                className="share__desk-icon"
              />
              <p className="share__desk-text">Поделиться</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
