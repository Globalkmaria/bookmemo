import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../modules/login';
function SignupComponent() {
  const [doubleClick, setDoubleClick] = useState(false);
  const [input, setInput] = useState({
    id: '',
    password: '',
    checkPassword: '',
  });
  const [check, setCheck] = useState('');
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onCheck = (e) => {
    onChange(e);
    if (input.password === e.target.value || e.target.value === '') {
      setCheck('');
    } else {
      setCheck('check');
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (doubleClick) return;
    setDoubleClick(true);
    if (input.id === '' || input.password === '' || input.checkPassword === '')
      return;
    if (!(input.password === input.checkPassword)) {
      alert('비밀번호가 일치하지 않습니다.');
    }
    signup(input);
  };
  return (
    <div className="signup">
      <form action="submit" onSubmit={onSubmit}>
        <fieldset>
          <legend>회원가입</legend>
          <div className="id-box form-input">
            <label htmlFor="id">아이디</label>
            <input
              type="text"
              id="id"
              name="id"
              value={input.id}
              onChange={onChange}
            />
          </div>
          <div className="password-box form-input">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={input.password}
              onChange={onChange}
              name="password"
            />
          </div>
          <div className="password-box form-input">
            <label htmlFor="password">비밀번호 확인</label>
            <input
              type="password"
              id="checkPassword"
              value={input.checkPassword}
              onChange={onCheck}
              name="checkPassword"
            />
          </div>
          <p className={`repeat ${check}`}>비밀번호가 일치하지 않습니다.</p>
          <div className="btn-grounp">
            <button
              type="submit"
              className="form-button btn"
              onSubmit={onSubmit}
            >
              가입하기
            </button>
            <p>이미 계정이 있으신가요?</p>
            <Link to="/login">
              <button className="form-button btn">로그인</button>
            </Link>
            <Link to="/">
              <button className="form-button btn">홈으로</button>
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default SignupComponent;
