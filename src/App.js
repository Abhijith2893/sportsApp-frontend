import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Routes from "./routes";

function App() {
  return (
    <div className="App container">
      <Routes />
      <a href="/soccer">Soccer</a>
    </div>
  );
}

export default App;