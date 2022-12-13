import React, { useState } from 'react';

import LoginPwd from './LoginPwd';
import LoginId from './LoginId';
import { clickLoginButton } from './ChangeForm';
import { loginData, inputLoginId, inputLoginPwd } from '../Recoil/loginState';
import { useRecoilState } from 'recoil';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

let isUserExist = 'false';

function LoginForm() {
  const [loginForm, setLoginForm] = useState({ userId: '', userPwd: '' });
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [isUserExist, setUserExist] = useState('');

  const navigate = useNavigate();

  const navigateToHome = () => {
    setUserExist(clickLoginButton(loginForm));
    console.log(isUserExist);
    if (isUserExist == 'false') {
      alert('잘못된 아이디 혹은 비밀번호입니다.');
      navigate('/login');
    }
    navigate('/');
  };
  return (
    <form action="" method="post" onSubmit={navigateToHome}>
      <fieldset style={{ maxWidth: '350px' }}>
        <legend>로그인</legend>
        <div>
          <label for="inputId" style={{ margin: '13px' }}>
            아이디
          </label>
          <input
            name="inputId"
            onChange={(e) => {
              setLoginForm({ ...loginForm, userId: e.target.value });
            }}
            id="inputId"
          ></input>
        </div>
        <label for="inputPwd" style={{ margin: '5px' }}>
          비밀번호
        </label>
        <input
          name="inputPwd"
          onChange={(e) => {
            setLoginForm({ ...loginForm, userPwd: e.target.value });
          }}
          id="inputPwd"
        ></input>

        <button type="submit" style={{ margin: '5px' }}>
          login
        </button>
      </fieldset>
    </form>
  );
}

export default LoginForm;
