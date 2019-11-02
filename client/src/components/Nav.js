import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink exact to="/" className="logo">
      Home
    </NavLink>

    <NavLink className="navbar-brand" exact to="/users">
      Users
    </NavLink>

    <NavLink className="navbar-brand" exact to="/jobs">
      Jobs
    </NavLink>

    <NavLink className="navbar-brand" exact to="/reviews">
      Reviews
    </NavLink>

    <NavLink className="navbar-brand" exact to="/counter">
      Counter
    </NavLink>
  </nav>
);

export default Nav;
