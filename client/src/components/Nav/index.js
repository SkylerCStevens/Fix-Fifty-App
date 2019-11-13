import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'
import icon from '../../assets/images/icon.svg';
import demarche from '../../assets/images/demarche.svg';
import search from '../../assets/images/Search.svg';

const Nav = () => (
  <nav className="nav">
<<<<<<< HEAD
  <NavLink to="/" className="link">Job Listing</NavLink>
  <NavLink to="/schedule" className="link">Schedule Meeting</NavLink>
  <NavLink to="/profileUnverified" className="link">profileUnverified</NavLink>
  <NavLink to="/profileVerified" className="link">profileVerified</NavLink>
||||||| merged common ancestors
  <NavLink to="/" className="link">Job Listing</NavLink>
  <NavLink to="/schedule" className="link">Schedule Meeting</NavLink>
  <NavLink to="/profile" className="link">Profile</NavLink>
=======
    <div>
    <NavLink to="/" className="link">
       <img src={demarche} className="icon-1" alt="jobs"/>
        Jobs</NavLink>
    </div>
    <div>
        <NavLink to="/schedule" className="link">
        <img src={search} className="icon-2" alt="search"/>
        Schedule</NavLink>
    </div>
    <div>
      <NavLink to="/profile" className="link">
      <img src={icon} className="icon-3" alt="profile"/>
      Profile</NavLink>
    </div>
>>>>>>> 7392980ca95ea4fc0ab8513d6a501231b28131bc
  </nav>
);

export default Nav;
