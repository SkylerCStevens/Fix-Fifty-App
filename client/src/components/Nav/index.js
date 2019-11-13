import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'
import icon from '../../assets/images/icon.svg';
import demarche from '../../assets/images/demarche.svg';
import search from '../../assets/images/Search.svg';

const Nav = () => (
  <nav className="nav">
    <div>
      <NavLink to="/" className="link">
        <img src={demarche} className="icon-1" alt="jobs" />
        Jobs</NavLink>
    </div>
    <div>
      <NavLink to="/schedule" className="link">
        <img src={search} className="icon-2" alt="search" />
        Schedule</NavLink>
    </div>
    <div>
      <NavLink to="/profile/Unverified" className="link">
        <img src={icon} className="icon-3" alt="profile" />
        Profile</NavLink>
    </div>
  </nav>
);

export default Nav;
