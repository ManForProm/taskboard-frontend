import axios from "axios";

const API_URL = "http://localhost:3001/desks"; 

// Get desks list
export const fetchBoards = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// create new desk
export const createBoard = async (boardData) => {
  const response = await axios.post(API_URL, boardData);
  return response.data;
};