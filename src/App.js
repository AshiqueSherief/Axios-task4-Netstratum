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
        <div >
          {isAuthenticated ? flag = true : flag = false}
        </div>
        <Switch>
          <Route path="/" element={flag === true ? <About /> : <Start />}></Route>
          <Route onClick={<Login />} path="/" element={<Login />}></Route>
          <Route path="/profile" element={flag === true && <About />}></Route>
          <Route path="/home" element={flag === true && <Home />}></Route>

        </Switch>
      </Router>
      {/* Routing ends */}

    </div>
  );
}

export default App;
