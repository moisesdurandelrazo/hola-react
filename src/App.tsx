/** @format */

import React, { MouseEventHandler } from "react";
import Button from "./components/Button";
import "bulma/css/bulma.css";
import "./App.css";

function App() {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log("Hola mundo");
  };
  return (
    <div className="App">
      <Button handleClick={handleClick}>Hola mundo</Button>
    </div>
  );
}

export default App;
