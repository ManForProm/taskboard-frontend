import { default as React } from "react";
import { useDispatch } from "react-redux";
import { ErrorModal } from "../../components/utils/ErrorModal.js";
import { getTaskGroups } from "../../redux/slices/tasks/tasksSlice.js";
import { TaskCard } from "./TaskCard.js";
import { TaskCardPlaceHolder } from "./TaskCardPlaceholder.js";

export const TaskCardGroups = ({ boardId, taskGroups, status, error }) => {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    console.log("Modal closed");
    dispatch(getTaskGroups());
  };

  const onDragTaskStart = (taskId) => {

  }

  const filteredTaskGroups = taskGroups.filter(
    (taskGroup) => taskGroup.parentBoardId === boardId
  );

  if (status === "loading") {
    return <TaskCardPlaceHolder />;
  }

  if (status === "failed") {
    return (
      <ErrorModal isOpen={true} message={error} onClose={handleModalClose} />
    );
  }
  return (
    <>
      {filteredTaskGroups.map((taskGroup) => (
        <TaskCard key={taskGroup.id} tasks={taskGroup.tasks} onDragStart={onDragTaskStart} />
      ))}
    </>
  );
};
