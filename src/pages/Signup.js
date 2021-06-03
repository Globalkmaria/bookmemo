import React from 'react';
import SignupContainer from '../container/SignupContainer';
import './pages.scss';
function SignUp() {
  return (
    <section className="signup-page">
      <div className="picbox"></div>
      <div className="textbox">
        <SignupContainer />
      </div>
    </section>
  );
}

export default SignUp;
