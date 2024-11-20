import { useSelector } from "react-redux";
import "./App.css";
import { BoardsPage } from "./pages/BoardsPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { TasksPage } from "./pages/TasksPage.jsx";
import "./styles/global.css";

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" 
              element={isAuthenticated ? <BoardsPage /> : <Navigate to="/login" />} />
        <Route path="/board/:boardId" element={isAuthenticated ? <TasksPage/> : <Navigate to="/login"/>} />
      </Routes>
    </Router>
  );
}

export default App;
