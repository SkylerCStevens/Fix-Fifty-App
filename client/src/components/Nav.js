import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="nav">
    <NavLink exact to="/" className="link">
      <img 
      className='logo'
      src={require('../img/logo.png')} 
      alt='clymb logo'
      ></img>
    </NavLink>

    <NavLink className="link" exact to="/users">
      Users
    </NavLink>

    <NavLink className="link" exact to="/jobs">
      Jobs
    </NavLink>

    <NavLink className="link" exact to="/reviews">
      Reviews
    </NavLink>

    <NavLink className="link" exact to="/counter">
      Counter
    </NavLink>

    <NavLink className="link" exact to="/login">
      Login
    </NavLink>
  </nav>
);

export default Nav;
