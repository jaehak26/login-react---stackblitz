import React, { useEffect } from 'react';
import './style.css';
import LoginForm from './Login/LoginForm';
import { Button } from '@mui/material';
import Password from './Login/Password.js';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { loginData, inputLoginId, inputLoginPwd } from './Recoil/loginState';
import { useRecoilState } from 'recoil';

export default function App() {
  const [userIdCoil, setUserIdCoil] = useRecoilState(inputLoginId);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button onClick={navigateToLogin}>Login</Button>
    </div>
  );
}
