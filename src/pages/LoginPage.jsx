import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slices/auth/authSlice.js";
import "../styles/login/login.css";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAuthenticated", "true");
      dispatch(login());
      navigate("/");
    } else {
      alert("Неверное имя пользователя или пароль!");
    }
  };

  return (
    <div className="login">
      <h1 className="login__title">Вход</h1>
      <form
        className="login__form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div className="login__form-group">
          <label className="login__label">Имя пользователя:</label>
          <input
            type="text"
            className="login__input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login__form-group">
          <label className="login__label">Пароль:</label>
          <input
            type="password"
            className="login__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login__button">
          Войти
        </button>
      </form>
    </div>
  );
};
