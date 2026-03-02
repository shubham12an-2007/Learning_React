import { useState } from "react";
import "./App.css";
import Card10 from "./Card";

function App() {
  let cardNumber1 = 24;
  let cardNumber2 = 36;

  let newArr = [1, 2, 3, 4];
  let newArr2 = [5, 7, 8, 9];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card10 name={"zombie1 "} someObj={newArr}></Card10>
      <Card10 name={"zombie2"} number={cardNumber2} someObj={newArr2}></Card10>
    </>
  );
}

export default App;
