import React from "react";
import { useState } from "react";
// import "./App.css";
import RegComponent from "./regComponent";
import Trow from "./Trow";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { logout } = useAuth0();

  const [data, setData] = useState([]);
  return (
    <div>
      {/*  */}
      <div className="App">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const phone = e.target.phone.value;
            for (let i = 0; i <= data.length; i++) {
              if (data[i]?.ph === phone) {
                alert("phone number already exists  ...");
                return;
              }
            }
            setData([...data, { name, ph: phone }]);
          }}
        >
          <input type="text" name="name" placeholder="ex: Aashiqui"></input>
          <input type="text" name="phone" placeholder="1234567890"></input>
          <button type="submit">Add</button>
        </form>

        <RegComponent>
          {data.map((e, i) => (
            <Trow key={i} sl_no={i + 1} name={e.name} phone={e.ph} />
          ))}
        </RegComponent>
        <div>
          <table className="zigzag">
            <th>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            </th>
          </table>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default Home;
