import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className='navbar' id='login-navlink' to="/login">Log In</NavLink>
        <NavLink className='navbar' id='signup-navlink' to="/signup">Sign Up</NavLink>
        <NavLink className='navbar' id='demo-navlink' to="/demo">Demo</NavLink>
      </>
    );
  }

  return (
    <>
      <ul>
        <li><span className='logo' id='logo-one'>One<span className='logo' id='logo-up'>Up</span></span></li>
        <nav>
          <li className='navlinks'>
            <NavLink className='navbar' id='home-navlink' exact to="/">Home</NavLink>
            {isLoaded && sessionLinks}
          </li>
        </nav>
      </ul>
    </>
  );
}

export default Navigation;
