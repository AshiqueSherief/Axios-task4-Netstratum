import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="nav">
        <nav className="topnav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/home">Details</Link>
          <br></br>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
