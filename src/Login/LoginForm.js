import React,{useState} from 'react';

import Password from './Password.js';


let loginForm = {
  id: 'abcd',
  passwd: '1234',
  message: 'SUCCESS',
};

function LoginForm() {

  const [loginForm, setLoginForm] = useState({id:"",passwd:""})

  return (
    <>
      <div id="loginId">
        <label for="inputId" style={{ margin: '13px' }}>
          아이디
        </label>
        <input 
        onChange={}
        id="inputId"></input>
      </div>
      <Password onChange={}></Password>
      <button 
      onChange={}
      style={{ margin: '5px' }}>login</button>
    </>
  );
}

export default LoginForm;
