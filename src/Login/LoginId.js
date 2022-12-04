import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { inputLoginId } from '../Recoil/loginState';
import { changeId } from './ChangeForm';

function LoginId() {
  const [userIdCoil, setUserIdCoil] = useRecoilState(inputLoginId);

  return (
    <div>
      <label for="inputId" style={{ margin: '13px' }}>
        아이디
      </label>
      <input
        name="inputId"
        onChange={(e) => {
          changeId(e.target.value, userIdCoil, setUserIdCoil);
          console.log(userIdCoil);
        }}
        id="inputId"
      ></input>
    </div>
  );
}

export default LoginId;
