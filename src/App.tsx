/** @format */

import React, { ChangeEventHandler, MouseEventHandler } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import "bulma/css/bulma.css";
import "./App.css";
import UserForm from "./forms/User";

function App() {
  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;
