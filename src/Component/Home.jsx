import Axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./Nav";
//library for router

function Home() {
  const [data, setData] = useState([]);
  const [l, setL] = useState(false);

  //function for API call
  useEffect(() => {
    Axios.get("https://api.publicapis.org/entries").then((a) => {
      setData(a.data.entries);
      setL(true);
    });
  }, []);

  return (
    <div className="App">
      <Nav />
      {l ? (
        <table className=".table">
          <tr className="tr">
            <th className="th">Sl.no.</th>
            <th className="th">Name</th>
            <th className="th">Description</th>
            <th className="th">Link</th>
          </tr>
          {data.map((e, i) => (
            <tr className="tr">
              <td className="td">&nbsp;{i + 1}</td>
              <td className="td">&nbsp;{e.API}</td>
              <td className="td">&nbsp;{e.Description}</td>
              <td className="td">&nbsp;{e.Link}</td>
            </tr>
          ))}
        </table>
      ) : (
        <img
          className="container__log"
          src="loading.png"
          alt="Loading ..."
        ></img>
      )}
    </div>
  );
}

export default Home;
