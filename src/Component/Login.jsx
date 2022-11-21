import React from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const updatePassword = (e) => setPassword(e.target.value);
  console.table({ email, password });

  let EPattern = /(^\w[a-zA-Z0-9.]{3,}[@][a-zA-Z0-9.]+[.][a-zA-Z]{1,4}$)/g;
  let PPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/gm;
  let resultMail = email.match(EPattern);
  let resultPass = password.match(PPattern);
  const [result, setResult] = useState("");

  const [s, setS] = useState({});

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const Validate = () => {
    if (resultMail == null || resultPass == null) {
      setResult("Invalid Email or Invalid Password");
      setS({ color: "red", size: "30px" });
    } else {
      setResult("Login Successfull");
      setS({ color: "green", size: "30px" });
      loginWithRedirect();
      isAuthenticated && Navigate("/home");
    }
  };

  const submit = (b) => {
    b.preventDefault();
  };
  return (
    <div>
      {/* input box starts */}
      <div className="container">
        <img src="/logo.jpg" alt="fb logo" className="container__log_login" />
        <div className="container__box">
          <div className="login_title">
            <p>
              <strong>LOG IN</strong>
            </p>
          </div>
          <form onSubmit={submit}>
            <input
              type="email"
              className="container__box--input"
              placeholder="Email address or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              className="container__box--input"
              placeholder="Password"
              onChange={updatePassword}
              value={password}
              required
            />

            {/* login button */}

            <button
              type="submit"
              onClick={Validate}
              className="container__box--button"
            >
              Log in
            </button>
            {/* login button ends */}
          </form>
          <div className="links">
            <a
              className="container__box--titles"
              href="https://www.facebook.com/"
            >
              <p style={{ color: "black" }}>Forgotten account?</p>
            </a>
          </div>
          <br></br>
          <br></br>
          <p style={s}>{result}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
