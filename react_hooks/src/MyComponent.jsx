import React from "react";
import { useState } from "react";

const MyComponent = () => {
  let [name, setName] = useState("guest");
  let [age, setAge] = useState(0);
  let [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Spongebob");
  };

  const updateAge = () => {
    setAge((prev) => prev + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed((prev) => !prev);
  };

  return (
    <>
      <p>Name : {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Name : {age}</p>
      <button onClick={updateAge}>Set Age </button>

      <p>{isEmployed ? "Yes " : "No"}</p>
      <button onClick={toggleEmployedStatus}>IS Employed</button>
    </>
  );
};

export default MyComponent;
