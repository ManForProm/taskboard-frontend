import { default as React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorModal } from "../../components/utils/ErrorModal.js";
import { getTaskGroups } from "../../redux/slices/tasks/tasksSlice.js";
import { TaskCard } from "./TaskCard.js";
import { TaskCardPlaceHolder } from "./TaskCardPlaceholder.js";

export const TaskCardGroups = () => {
  const dispatch = useDispatch();
  const { taskGroups, status, error } = useSelector(
    (state) => state.taskGroups
  );

  useEffect(() => {
    dispatch(getTaskGroups());
  }, [dispatch]);

  const handleModalClose = () => {
    console.log("Modal closed");
    dispatch(getTaskGroups());
  };

  if (status === "loading") {
    return <TaskCardPlaceHolder />;
  }

  if (status === "failed") {
   return <ErrorModal isOpen={true} message={error} onClose={handleModalClose} />;
  }
  return taskGroups.map((taskGroup) => <TaskCard tasks={taskGroup.tasks} />);
};
