import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div id="navbar">
    <h1>Math Magicians</h1>
    <div className="nav">
      <Link to="/io/math-magicians/">Home </Link>
      <Link to="/io/math-magicians/App">Calculator </Link>
      <Link to="/io/math-magicians/Quote">Quote </Link>
    </div>
  </div>
);

export default NavBar;
