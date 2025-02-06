import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonWrapper from "../components/utils/ButtonWrapper.js";
import LoadingSpinner from "../components/utils/LoadingSpinner.js";
import { login } from "../redux/slices/auth/authSlice.js";
import { loginService } from "../services/loginService.js";
import "../styles/login/login.css";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginState, setIsLoginState] = useState("login");

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const token = await loginService(username, password);
      localStorage.setItem("token", token);

      dispatch(login({ token }));
      navigate("/");
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handelRegister = async () => {

  }

  return (
    <div className="login">
      <h1 className="login__title">Вход</h1>
      <form
        className="login__form"
        onSubmit={(e) => {
          e.preventDefault();
          isLoginState === "register" ? handelRegister() : handleLogin()
        }}
      >
        <div className="login__form-group">
          <label className="login__label">Email:</label>
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
        {isLoading ? (
          <div className="spinner__wrapper">
            <LoadingSpinner size={50} color="#3498db" />
          </div>
        ) : (
          <>
            <ButtonWrapper
              type={"submit"}
              buttonText="Войти"
              className="login"
              onClick={() => setIsLoginState("login")}
            />
            <ButtonWrapper
              type={"submit"}
              buttonText="Зарегестрироваться"
              className="register"
              onClick={() => setIsLoginState("register")}
            />
          </>
        )}
      </form>
{/*       
      <div className="login__register">
        <p>Нет аккаунта?</p>
        <button
          className="login__register-button"
          onClick={() => navigate("/register")}
        >
          Зарегистрироваться
        </button>
      </div> */}
    </div>
  );
};
