import React from "react";
import addGroupTasksIcon from '../../assets/images/plusWhite.svg';


export const AddTaskCardButton = () => (
    <div className="add__group_tasks">
                    <button className="add__group_tasks-btn">
                        <img src = {addGroupTasksIcon} alt="" className="add__group_tasks-icon"/>
                        <p className="add__group_tasks-title">Добавьте еще одну колонку</p>
                    </button>
                </div>
)



// import React, { useState } from "react";

// export const AddTaskCardButton = ({ onAddTask }) => {
//   const [newTask, setNewTask] = useState({
//     title: "",
//     description: "",
//     status: "todo",
//     dueDate: "",
//     deskId: "",
//     miniDeskId: "",
//   });

//   const handleSubmit = () => {
//     if (newTask.title && newTask.dueDate) {
//       onAddTask(newTask);
//       setNewTask({
//         title: "",
//         description: "",
//         status: "todo",
//         dueDate: "",
//         deskId: "",
//         miniDeskId: "",
//       });
//     }
//   };

//   return (
//     <div className="add-task-card">
//       <input
//         type="text"
//         placeholder="Task title"
//         value={newTask.title}
//         onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//       />
//       <textarea
//         placeholder="Task description"
//         value={newTask.description}
//         onChange={(e) =>
//           setNewTask({ ...newTask, description: e.target.value })
//         }
//       />
//       <input
//         type="date"
//         value={newTask.dueDate}
//         onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
//       />
//       <button onClick={handleSubmit}>Add Task</button>
//     </div>
//   );
// };