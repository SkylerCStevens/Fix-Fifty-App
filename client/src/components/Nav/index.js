import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="nav">
    <NavLink exact to="/" className="link">
      <img
        className='logo'
        // src={require('../img/logo.png')}
        alt='clymb logo'
      ></img>
    </NavLink>
  <NavLink to="/" className="link">Job Listing</NavLink>
  <NavLink to="/schedule" className="link">Schedule Meeting</NavLink>
  <NavLink to="/profile" className="link">Profile</NavLink>
  </nav>
);

export default Nav;
