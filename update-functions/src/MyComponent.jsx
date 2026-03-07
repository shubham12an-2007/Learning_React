import React from "react";
import { useState } from "react";

// here we will learn about updater functions
// allows to update the UI based on the previos state
// react badges together functions for performanve raesons

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);

    // now this will increment it twice
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <p>Count : {count} </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default MyComponent;
