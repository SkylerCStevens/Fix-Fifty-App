import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'

const Nav = () => (
  <nav className="nav">
  <NavLink to="/" className="link">Job Listing</NavLink>
  <NavLink to="/schedule" className="link">Schedule Meeting</NavLink>
  <NavLink to="/profileUnverified" className="link">profileUnverified</NavLink>
  <NavLink to="/profileVerified" className="link">profileVerified</NavLink>
  </nav>
);

export default Nav;
