import React, { useState } from 'react';

import Password from './Password';
import LoginId from './LoginId';
import { clickLoginButton } from './ChangeForm';
import { loginData, inputLoginId, inputLoginPwd } from '../Recoil/loginState';
import { useRecoilState } from 'recoil';

function LoginForm() {
  const [loginForm, setLoginForm] = useState({ userId: '', userPwd: '' });
  const [userIdCoil, setUserIdCoil] = useRecoilState(inputLoginId);
  const [userPwdCoil, setUserPwdCoil] = useRecoilState(inputLoginPwd);
  const [loginDataCoil, setLoginDataCoil] = useRecoilState(loginData);

  return (
    <>
      <LoginId></LoginId>
      <Password></Password>
      <button
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
    </>
  );
}

export default LoginForm;
