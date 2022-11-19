import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home";
import About from "./Component/About";
import Start from "./Component/Start";


// auth0

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
let flag = 0;

// aut0 end

function App() {

  const { isAuthenticated } = useAuth0();
  return (
    <div className="div_main">

      {/* routing */}

      <Router>
        <div className="nav">
          {isAuthenticated ? flag = 1 : flag = 0}
        </div>
        <Switch>
          <Route path="/" element={flag === 1 ? <About /> : <Start />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={flag === 1 && <About />}></Route>
          <Route path="/home" element={flag === 1 && <Home />}></Route>

        </Switch>
      </Router>
      {/* Routing ends */}

    </div>
  );
}

export default App;
