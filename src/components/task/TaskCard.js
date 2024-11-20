import React from "react";
import dotsSettingsIcon from '../../assets/images/dotsSettings.svg';
import expandTaskGroupIcon from '../../assets/images/expand_task_group.svg';
import '../../styles/tasksWorkspace/taskCard.css';
import { Task } from "./Task";

export const TaskCard = ({tasks}) => {

  return (
    <div class="tasks_group">
      <div class="tasks_group__header">
        <textarea
          type="text"
          class="tasks_group__header-title"
          placeholder="Введите новое имя"
        ></textarea>
        <div class="tasks_group__header-wrapper">
          <button class="tasks_group__header-expand">
            <img
              src={expandTaskGroupIcon}
              alt=""
              class="tasks_group__header-expand_icon"
            />
          </button>
          <button class="tasks_group__header-settings">
            <img
              src={dotsSettingsIcon}
              alt=""
              class="tasks_group__header-settings_icon"
            />
          </button>
        </div>
      </div>
      <div class="tasks_group__tasks">
        {tasks.map( (task )=> (
            <Task taskText={task.title}/>
        )
        )}
      </div>
      <div class="tasks_group__footer">
        <button class="add__task">
          <img src="../assets/images/plus.svg" alt="" class="add__task-icon" />
          <p class="add__task-text">Добавить карточку</p>
        </button>
      </div>
    </div>
  );
};
