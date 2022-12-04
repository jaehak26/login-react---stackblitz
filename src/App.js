import React from 'react';
import './style.css';
import LoginForm from './Login/LoginForm';
import { Button } from '@mui/material';
import Password from './Login/Password.js';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button onClick={navigateToLogin}>Login</Button>
      <LoginForm></LoginForm>
    </div>
  );
}
