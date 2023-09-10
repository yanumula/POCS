import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Start from "./TestPoc";
import Slider from "./Slider";
import Sorting from "./Sorting";

export const startContext = React.createContext({});

function App() {
  const object = {
    name: "sai",
    age: "30",
    sex: "male",
  };

  const createObject = {
    name: "keerthi" + " " + object.name,
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <startContext.Provider value={createObject}>
          <Start />
          <br />
          {`Hello from app file ${createObject.name}`}
        </startContext.Provider>
        <br />
        <Slider />
        <br />
        <Sorting />
      </header>
    </div>
  );
}

export default App;
