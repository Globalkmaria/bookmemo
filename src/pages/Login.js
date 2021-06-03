import React from 'react';
import LoginContainer from '../container/LoginContainer';
import './pages.scss';
function Login() {
  return (
    <section className="login-page">
      <div className="picbox"></div>
      <div className="textbox">
        <LoginContainer />
      </div>
    </section>
  );
}

export default Login;
