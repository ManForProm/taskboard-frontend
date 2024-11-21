import { useSelector } from "react-redux";
import "./App.css";
import { ProtectedRoute } from "./components/login/ProtectedRoute.js";
import { BoardsPage } from "./pages/BoardsPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { TasksPage } from "./pages/TasksPage.jsx";
import "./styles/global.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <BoardsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/board/:boardId"
          element={
            <ProtectedRoute>
              <TasksPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
