import axios from "axios";

const API_URL = "http://localhost:3003/board/"; 

// Get desks list
export const fetchBoards = async () => {
  const token = localStorage.getItem("authToken")
  // const id = 'f2479ed7-e169-4a7a-bb1a-42e544c978c7'
  const response = await axios.get(`${API_URL}`, {
    headers:{
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

// create new desk
export const createBoard = async (boardData) => {
  const response = await axios.post(API_URL, boardData);
  return response.data;
};