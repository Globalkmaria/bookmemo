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
      alert('Check your password.');
    }
    signup(input);
  };
  return (
    <div className="signup">
      <form action="submit" onSubmit={onSubmit}>
        <fieldset>
          <legend>
            Create your <br /> account!
          </legend>
          <div className="id-box form-input">
            {/* <label htmlFor="id"></label> */}
            <input
              type="text"
              id="id"
              name="id"
              value={input.id}
              onChange={onChange}
              placeholder="ID"
            />
          </div>
          <div className="password-box form-input">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              id="password"
              value={input.password}
              onChange={onChange}
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="password-box form-input">
            {/* <label htmlFor="password"></label> */}
            <input
              type="password"
              id="checkPassword"
              value={input.checkPassword}
              onChange={onCheck}
              name="checkPassword"
              placeholder="Confirm Password"
            />
          </div>
          <p className={`repeat ${check}`}>Passwords must match</p>
          <div className="btn-grounp">
            <button
              type="submit"
              className="form-button btn"
              onSubmit={onSubmit}
            >
              Sign Up
            </button>
            <p>Already have an account?</p>
            <Link to="/login">
              <button className="form-button btn">Sign in</button>
            </Link>
            <Link to="/">
              <button className="form-button btn">Home</button>
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default SignupComponent;
