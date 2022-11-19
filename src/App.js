import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home";
import About from "./Component/About";
import Start from "./Component/Start";
// import { useState } from "react";

// auth0

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// aut0 end

function App() {
  c
  const { isAuthenticated } = useAuth0();
  return (
    <div className="div_main">

      {/* routing */}

      <Router>

        <div className="nav">
          <nav className="topnav">
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/home">Details</Link>
            <br></br>
          </nav>
        </div>
        <Switch>
          <Route path="/" element={isAuthenticated ? <About /> : <Start />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<About />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Switch>
      </Router>
      {/* Routing ends */}

    </div>
  );
}

export default App;
