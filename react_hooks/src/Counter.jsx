import React from "react";
import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-variable">
      <p className="count-disply">{count}</p>
      <button className="counter-button " onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button " onClick={increment}>
        Increment
      </button>
      <button className="counter-button " onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
