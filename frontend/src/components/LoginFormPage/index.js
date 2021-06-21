// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import * as sessionActions from '../../store/session';
import './LoginForm.css'

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div className='page-container'>
      <div className='form-div' id='login-form-div'>
        <h1 className='header' id='login-header'>Log In</h1>
        <form className='user-form' id='login-form' onSubmit={handleSubmit}>
          <ul className='errors' id='login-errors'>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <div className='label-div' id='credential-div'>
            <label className='form-label' id='credential-label'>
              Username or Email
            </label>
            <div className='input-div'>
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='label-div' id='password-div'>
            <label className='form-label' id='password-label'>
              Password
            </label>
            <div className='input-div'>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='buttonDiv' id='login-button-div'>
            <button className='buttons' id='login-button' type="submit">Log In</button>
          </div>
          <div className='link-div'>
            <Link className='other-page-link' to='/register'>Need an account? Sign up here!</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFormPage;
