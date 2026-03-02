import { useState } from "react";
import "./App.css";
import Chai from "./Chai";

let age = 18;
let userName = "Shubham";
function App() {
  return (
    <>
      <h1>
        Hello World | Shubham Kumar Singh : In this first lecture of react with
        vite i learnt about the file structure of react foler diifferent file
        and their importance and how we make our file code look much Cleaner
        <h3>
          My name is : {userName} and age is : {age}
        </h3>
      </h1>
      <Chai></Chai>
    </>
  );
}

// React me js inject krne ke liye use curly braces here they are called evaluated expression

export default App;
