import React from 'react';
import { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { login } from '../../modules/login';

function LoginComponent() {
  const [input, setInput] = useState({ id: '', password: '' });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (input.id === null || input.password === null) return;
    login(input.id, input.password);
  };
  return (
    <div className="login-page-content">
      <form className="login-form" action="submit" onSubmit={onSubmit}>
        <fieldset>
          <legend>Bookmemo</legend>
          <div className="id-box form-input">
            <label htmlFor="id">
              <BsFillPersonFill />
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={input.id}
              onChange={onChange}
              placeholder="아이디"
            />
          </div>
          <div className="password-box form-input">
            <label htmlFor="password">
              <RiLockPasswordFill />
            </label>
            <input
              type="password"
              id="password"
              value={input.password}
              onChange={onChange}
              name="password"
              placeholder="비밀번호"
            />
          </div>
          <div className="access-btn-group">
            <button className="form-button btn" onSubmit={onSubmit}>
              로그인
            </button>
            <Link to="/signup">
              <button type="button" className="form-button btn">
                회원가입
              </button>
            </Link>
            <Link to="/">
              <button type="button" className="form-button btn">
                홈으로
              </button>
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default LoginComponent;
