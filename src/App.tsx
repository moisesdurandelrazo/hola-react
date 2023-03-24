/** @format */

import React, { ChangeEventHandler, MouseEventHandler } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import "bulma/css/bulma.css";
import "./App.css";

function App() {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
  };
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log("Hola mundo");
  };
  return (
    <div className="App">
      <Input placeholder="Nombre" handleChange={handleChange} />
      <Button handleClick={handleClick}>Hola mundo</Button>
    </div>
  );
}

export default App;
