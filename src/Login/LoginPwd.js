import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { inputLoginPwd } from '../Recoil/loginState';
import { changePwd } from './ChangeForm';

function Password() {
  const [userPwdCoil, setUserPwdCoil] = useRecoilState(inputLoginPwd);

  return (
    <>
      <label for="inputPwd" style={{ margin: '5px' }}>
        비밀번호
      </label>
      <input
        name="inputPwd"
        onChange={(e) => {
          changePwd(e.target.value, userPwdCoil, setUserPwdCoil);
        }}
        id="inputPwd"
      ></input>
    </>
  );
}

export default Password;
