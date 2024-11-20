import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice.js';
import boardReducer from './slices/board/boardSlice.js';
import tasksReducer from './slices/tasks/tasksSlice.js';

const store = configureStore({
    reducer: {
      board: boardReducer,
      auth: authReducer,
      taskGroups: tasksReducer,
    },
  });


export default store;