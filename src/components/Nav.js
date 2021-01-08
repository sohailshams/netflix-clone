import React from 'react';
import './Nav.css';
import logo from '../images/netflix.png';
function Nav() {
  return (
    <div className="nav-bar">
      <img className="nav-logo" src={logo} alt="Netflix Logo" />
      <img
        className="nav-avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
