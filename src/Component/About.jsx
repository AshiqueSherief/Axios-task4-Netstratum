import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "./Nav";
// import Nav from "./Component/Nav";

function About() {
  const { logout, user } = useAuth0();
  return (
    <div>
      {/* input box starts */}
      <div className="container2">
        <Nav />
        <div className="container3">
          <img src={user.picture} alt="fb logo" className="container__log2" />
          <div className="container__box2">
            <div className="last">
              <h2>{user.Name}</h2>
              <h3>{user.Email}</h3>
            </div>
            <button
              type="submit"
              onClick={() => logout({ returnTo: window.location.origin })}
              className="container__box--button"
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
