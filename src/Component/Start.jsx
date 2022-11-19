import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    /*1*/ <div className="container6">
      <div className="floatleft">
        <img className="wel" src="/welcome.png" alt="welcome"></img>
        <div className="nav">
          {/* <nav className="topnav">
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/home">Details</Link>
            <br></br>
          </nav> */}
        </div>
      </div>
    </div>
  );
}

export default Start;
