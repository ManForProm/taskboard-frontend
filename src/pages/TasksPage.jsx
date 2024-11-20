import { default as React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddTaskCardButton } from "../components/task/AddTaskCardButton.js";
import { TaskCardGroups } from "../components/task/TaskCardGroups.js";
import { TasksPageHeader } from "../components/task/TasksPageHeader.js";
import { addTask, getTaskGroups } from "../redux/slices/tasks/tasksSlice.js";
import "../styles/tasksWorkspace/tasksWorkspace.css";

export const TasksPage = () => {
  const dispatch = useDispatch();
  const { taskGroups, status, error } = useSelector((state) => state.taskGroups);
  const { boardId } = useParams();
 
  const handleAddTask = () => {
    const text = prompt("Введите текст задачи:");
    const time = prompt("Введите время выполнения (HH:MM):");
    if (text) {
      dispatch(addTask({ text, time}));
    }
  };
  
  useEffect(() => {
    dispatch(getTaskGroups());
  }, [dispatch]);

  
  if (status === "succeeded") {
    const boardExists = taskGroups.some((board) => board.id === boardId);
    // if (!boardExists) {
    //   return <BoardIsNotFound />;
    // }
  }

  
  return (
    <div className="tasks-page__wrapper">
      <TasksPageHeader boardId={boardId} />
      <section className="desk__workspace">
        <div className="container">
          <div className="tasks_grops-wrapper">
            <TaskCardGroups boardId={boardId} taskGroups={taskGroups} status={status} error={error}/>
            <AddTaskCardButton />
          </div>
        </div>
      </section>
    </div>
  );
};
