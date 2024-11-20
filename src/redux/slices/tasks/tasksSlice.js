import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createTask, dragTaskToAnotherTaskGroupApi, getTaskGroup } from "../../../services/taskService.js";
import { networkCases } from '../../../utils/networkCases.js';



export const getTaskGroups = createAsyncThunk("tasks/getTasks", async () => {
  const response = await getTaskGroup();
  return response.data;
});

export const addTask = createAsyncThunk("tasks/addTask", async (newTask) => {
  const response = await createTask(newTask);
  return response.data;
});

export const dragTaskToAnotherTaskGroup = createAsyncThunk("tasks/dragTaskToAnotherTaskGroup", async(taskId,taskGroupId,newTaskGroupId) => {
  const response = await dragTaskToAnotherTaskGroupApi(taskId,taskGroupId,newTaskGroupId);
  return response.data;

});


const tasksSlice = createSlice({
  name: "taskGroups",
  initialState: {
    taskGroups: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    networkCases(builder,getTaskGroups,"taskGroups")
  },
});


// export const {  removeTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;