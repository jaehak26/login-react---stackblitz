import React,{useState} from 'react';
let loginForm = {
  id: 'abcd',
  passwd: '1234',
  message: 'SUCCESS',
};
function LoginForm() {

  const [loginForm, setLoginForm] = useState({})

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
      <label for="inputPasswd" style={{ margin: '5px' }}>
        비밀번호
      </label>
      <input 
      onChange={}
      id="inputPasswd"></input>
      <button 
      onChange={}
      style={{ margin: '5px' }}>login</button>
    </>
  );
}

export default LoginForm;
