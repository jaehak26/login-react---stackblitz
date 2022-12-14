import React, { useEffect } from 'react';
import './style.css';
import { Button } from '@mui/material';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { loginData, inputLoginId, inputLoginPwd } from './Recoil/loginState';
import { useRecoilState } from 'recoil';
import { loginMessage } from './Recoil/loginState';
import {use} from './Login/useAsync'

export default function LoginComp() {
  const [userIdCoil, setUserIdCoil] = useRecoilState(inputLoginId);
  const [loginMessageCoil, setLoginMessageCoil] = useRecoilState(loginMessage);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const LoginButton = () => {
    if (loginMessageCoil.message == 'SUCCESS') {
      return (
        <>
          <div>{loginMessageCoil.userId}님 안녕하세요</div>
          <Button onClick={navigateToLogout}>LOGOUT</Button>
        </>
      );
    }
    return <Button onClick={navigateToLogin}>Login</Button>;
  };

  const navigateToLogout = () => {
    setLoginMessageCoil({ userId: '', message: 'FAILED' });
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <LoginButton></LoginButton>
    </div>
  );
}
