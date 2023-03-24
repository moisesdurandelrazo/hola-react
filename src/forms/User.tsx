/** @format */

import React, { ChangeEventHandler, MouseEventHandler } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function UserForm() {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
  };
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log("Hola mundo");
  };

  return (
    <>
      <Input placeholder="Nombre" handleChange={handleChange} />
      <Input placeholder="Apellido" handleChange={handleChange} />
      <Button handleClick={handleClick}>Hola mundo</Button>
    </>
  );
}
