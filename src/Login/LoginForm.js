import React, { useState } from 'react';

import LoginPwd from './LoginPwd';
import LoginId from './LoginId';
import { clickLoginButton } from './ChangeForm';
import { loginData, inputLoginId, inputLoginPwd } from '../Recoil/loginState';
import { useRecoilState } from 'recoil';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function LoginForm() {
  const [loginForm, setLoginForm] = useState({ userId: '', userPwd: '' });
  const [userIdCoil, setUserIdCoil] = useRecoilState(inputLoginId);
  const [userPwdCoil, setUserPwdCoil] = useRecoilState(inputLoginPwd);

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };
  return (
    <form action="" method="post" onSubmit={navigateToHome}>
      <fieldset>
        <legend>로그인</legend>
        <LoginId></LoginId>
        <LoginPwd></LoginPwd>
        <button
          type="submit"
          onClick={() => {
            setLoginForm({
              userId: userIdCoil.userId,
              userPwd: userPwdCoil.userPwd,
            });
            clickLoginButton(loginForm);
          }}
          style={{ margin: '5px' }}
        >
          login
        </button>
      </fieldset>
    </form>
  );
}

export default LoginForm;
