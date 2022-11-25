import React from 'react';
import './style.css';
import LoginForm from './Login/LoginForm';

import Password from './Login/Password.js';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <LoginForm></LoginForm>
      <br />
      <br />
      <Password></Password>
    </div>
  );
}
