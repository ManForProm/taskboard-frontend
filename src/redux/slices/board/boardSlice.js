import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createBoard, fetchBoards } from "../../../services/boardService.js";
import { networkCases } from '../../../utils/networkCases.js';


export const loadBoards = createAsyncThunk("boards/loadBoards", async () => {
  return await fetchBoards();
});

export const addBoard = createAsyncThunk(
  "boards/addBoard",
  async (boardData) => {
    return await createBoard(boardData);
  }
);


const boardSlice = createSlice({
  name: 'board',
  initialState: {
    boards: [],
    status: "idle", // idle | loading | succeeded | failed
    error:null,
    isModalOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    networkCases(builder,loadBoards,"boards")
  },
});
export const { openModal, closeModal } = boardSlice.actions;
export default boardSlice.reducer;