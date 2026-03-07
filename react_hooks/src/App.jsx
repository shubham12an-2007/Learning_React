import { useState } from "react";
import "./App.css";
// import MyComponent from "./MyComponent";
import Counter from "./Counter";

// React hook => special function that allows functional components to use React features without writting class components

// useState() = a react hook that allows the creation of a  stateful variable AND a setter function to update its value in the virtual dom

function App() {
  return (
    <>
      <Counter></Counter>
    </>
  );
}

export default App;
