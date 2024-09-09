import { useState } from "react";
import "./App.css";

function App() {
  let [heros, setheros] = useState([]);
  let herosNewMovies = async () => {
    let reqOptions = {
      method: "GET",
    };
    let JSONData = await fetch("http://localhost:4567/heros", reqOptions);
    let JSOData = await JSONData.json();
    setheros(JSOData);
    console.log(JSOData);
  };

  return (
    <div className="appDiv">
      <button
        type="button"
        onClick={() => {
          herosNewMovies();
        }}
      >
        heros
      </button>
      {heros.map((ele, i) => {
        return (
          <div className="detailsDiv">
            <h2>{ele.name}</h2>
            <h3>{ele.title}</h3>
            {ele.upcomingMovies.map((ele, i) => (
              <p key={i}>{ele}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default App;
