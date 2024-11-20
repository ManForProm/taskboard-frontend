import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  },
  reducers: {
    login: (state) => {
      state.isAuntheficated = true;
    },
    logout: (state) => {
      state.isAuntheficated = false;
      localStorage.removeItem('isAuthenticated'); 
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
