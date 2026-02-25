import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import World from "./World";
import "./style.css";

function App() {
  return(
    <>
      <World name="abc"/>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);