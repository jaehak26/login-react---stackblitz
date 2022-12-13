import React, { useState, useEffect } from 'react';

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

  const userExist = () => {
    if (clickLoginButton(loginForm) == 'false') {
      alert('잘못된 아이디 혹은 비밀번호입니다.');
    }
  };

  const navigateToHome = () => {
    if (isUserExist == 'true') {
      navigate('/');
    }
  };

  return (
    <fieldset style={{ maxWidth: '350px' }}>
      <legend>로그인</legend>
      <div>
        <label style={{ margin: '13px' }}>아이디</label>
        <input
          name="inputId"
          onChange={(e) => {
            setLoginForm({ ...loginForm, userId: e.target.value });
          }}
          id="inputId"
        ></input>
      </div>
      <label style={{ margin: '5px' }}>비밀번호</label>
      <input
        name="inputPwd"
        onChange={(e) => {
          setLoginForm({ ...loginForm, userPwd: e.target.value });
        }}
        id="inputPwd"
      ></input>

      <button style={{ margin: '5px' }} onClick={userExist}>
        login
      </button>
    </fieldset>
  );
}

export default LoginForm;
