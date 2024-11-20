import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logoutIcon from '../../assets/images/logout_back.svg';
import { logout } from '../../redux/slices/auth/authSlice.js';
import '../../styles/login/logoutButton.css';
import ButtonWrapper from '../utils/ButtonWrapper.js';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout =  () => {
    localStorage.setItem('isAuthenticated', 'false');
    dispatch(logout)
    navigate('/login');
  }
  return (
    <ButtonWrapper
      onClick={handleLogout}
      iconSrc= {logoutIcon}
      // altText="logout-icon"
      buttonText="Выйти"
      className="logout"
    />
  );
};

export default LogoutButton;