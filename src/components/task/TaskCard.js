import React from "react";
import dotsSettingsIcon from '../../assets/images/dotsSettings.svg';
import expandTaskGroupIcon from '../../assets/images/expand_task_group.svg';
import '../../styles/tasksWorkspace/taskCard.css';
import { Task } from "./Task";

export const TaskCard = ({tasks,onDragStart}) => {

  return (
    <div className="tasks_group">
      <div className="tasks_group__header">
        <textarea
          type="text"
          className="tasks_group__header-title"
          placeholder="Введите новое имя"
        ></textarea>
        <div className="tasks_group__header-wrapper">
          <button className="tasks_group__header-expand">
            <img
              src={expandTaskGroupIcon}
              alt=""
              className="tasks_group__header-expand_icon"
            />
          </button>
          <button className="tasks_group__header-settings">
            <img
              src={dotsSettingsIcon}
              alt=""
              className="tasks_group__header-settings_icon"
            />
          </button>
        </div>
      </div>
      <div className="tasks_group__tasks">
        {tasks.map( (task )=> (
            <Task taskText={task.title} onDragStart={onDragStart(task.id)}/>
        )
        )}
      </div>
      <div className="tasks_group__footer">
        <button className="add__task">
          <img src="../assets/images/plus.svg" alt="" className="add__task-icon" />
          <p className="add__task-text">Добавить карточку</p>
        </button>
      </div>
    </div>
  );
};
