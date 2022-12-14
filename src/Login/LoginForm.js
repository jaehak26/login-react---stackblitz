import React, { useState, useEffect } from 'react';

import { clickLoginButton } from './ChangeForm';
import { loginMessage } from '../Recoil/loginState';
import { useRecoilState } from 'recoil';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import useAsync from './useAsync';

async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

function LoginForm() {
  const [loginForm, setLoginForm] = useState({ userId: '', userPwd: '' });
  const [loginMessageCoil, setLoginMessageCoil] = useRecoilState(loginMessage);
  const [state, refetch] = useAsync(getUser, [], false);
  const [user, setUser] = useState('');
  const { loading, data: users, error } = state;

  const navigate = useNavigate();

  const userExist = () => {
    refetch();
    setUser(users[0].username);
    // if (!users) {

    //   }
  };

  useEffect(() => {
    if (user !== '') {
      console.log(loginForm.userId);
      if (user == loginForm.userId) {
        setLoginMessageCoil({
          ...loginMessageCoil,
          userId: loginForm.userId,
          message: 'SUCCESS',
        });
        navigate('/');
      } else {
        alert('잘못된 아이디 혹은 비밀번호입니다.' + user + loginForm.userId);
      }
    }
  }, [user]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return <button onClick={() => refetch()}>불러오기</button>;
  return (
    <>
      <fieldset style={{ maxWidth: '350px' }}>
        <legend>로그인</legend>
        <div>
          <label style={{ margin: '13px' }}>아이디</label>
          <input
            name="inputId"
            onChange={(e) => {
              setLoginForm({ ...loginForm, userId: e.target.value });
              console.log(loginForm);
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
      <>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} ({user.name})
            </li>
          ))}
        </ul>
        <button onClick={refetch}>다시 불러오기</button>
      </>
    </>
  );
}

export default LoginForm;
