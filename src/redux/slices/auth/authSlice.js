import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticated: false,
    // isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  },
  reducers: {
    // login: (state) => {
    //   state.isAuntheficated = true;
    // },
    // logout: (state) => {
    //   state.isAuntheficated = false;
    //   localStorage.removeItem('isAuthenticated'); 
    // },

    login: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
