import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className='form-div login-register-div' id='register-form-div'>
      <h1>Sign Up</h1>
      <form className='login-register-form' id='register-form' onSubmit={handleSubmit}>
        <div className='errors-div login-register-errors-div' id='register-errors-div'>
          <ul className='errors login-register-errors' id='register-errors'>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
        </div>
        <div className='label-div' id='email-div'>
          <div className='input-div' id='email-input-div'>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='register-input'
            />
          </div>
          <label>
            Email
          </label>
        </div>
        <div className='label-div'>
          <div className='input-div'>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className='register-input'
            />
          </div>
          <label>
            Username
          </label>
        </div>
        <div className='label-div'>
          <label>
            <div className='input-div'>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='register-input'
              />
            </div>
            Password
          </label>
        </div>
        <div className='label-div'>
          <label>
            <div className='input-div'>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className='register-input'
              />
            </div>
            Confirm Password
          </label>
        </div>
        <div className='button-div login-register-button-div' id='register-button-div'>
          <button className='buttons login-register-buttons' id='register-button' type="submit">Sign Up</button>
        </div>
        <div className='link-div login-register-link-div'>
          <Link className='other-page-link login-register-page-link' to='/login'>Already have an account?<br />Log in here!</Link>
        </div>
      </form>
    </div>
  );
}

export default SignupFormPage;
