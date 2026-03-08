// useEffect => react code that tell react do some code when one of the following happens
// this component re-renders
// this component mount
// the state of a value

// useEffect(function , [dependencies])

// 1. useEffect(() => {})    // runs on every re-render
// 2. useEffect(() => {}  , [])   // runs only on mount
// 3.  useEffect(() => {}  , [value ])      // runs on mount + when value changes

// uses
// 1. event listerners
// 2. dom manipulation'
// 3. subscription (real-time updates)
// 4. fetching data from an api
// 5. clean up when a component umounts

import React from "react";
import { useState, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count : ${count} ${color} `;
  }, [count, color]);

  function addCount() {
    setCount((prev) => prev + 1);
  }

  function subCount() {
    setCount((prev) => prev - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <div>
      <p style={{ color: color }}>Count : {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default MyComponent;
