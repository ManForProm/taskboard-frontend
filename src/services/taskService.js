import axios from "axios";

const API_URL = "http://localhost:3001/";

export const getTaskGroup = () => {
  return axios.get(`${API_URL}tasksGroups`);
};

export const createTask = (newTask) => {
  return axios.post(`${API_URL}task`, newTask);
};

export const dragTaskToAnotherTaskGroupApi = (taskId,taskGroupId,newTaskGroupId) => {
  return axios.post(`${API_URL}task`,taskId)
}