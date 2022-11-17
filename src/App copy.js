import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home";
// import { useState } from "react";

// auth0

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";




// aut0 ends

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="div_main">

      {/* routing */}

      <Router>

        <div className="nav">
          {isAuthenticated && <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">about me</Link>
          </nav>}
        </div>

        <Switch>
          <Route path="/" element={isAuthenticated ? <Home /> : <Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element="<Me/>"></Route>

        </Switch>

      </Router>
      {/* Routing ends */}

    </div>
  );
}

export default App;
