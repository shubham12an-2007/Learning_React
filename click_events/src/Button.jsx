import React from "react";

const Button = () => {
  let count = 0;

  const handleEvent = (e) => {
    console.log(e);
    e.target.textContent = "Ouch";
  };

  const handleClick = (name) => {
    if (count < 4) {
      count++;
      console.log(`${name} clicked me ${count} times`);
    } else {
      console.log(`${name} stop clicking me `);
    }
  };

  const handleClick2 = (name) => {
    console.log(`${name} stop clicking me`);
  };
  return (
    <>
      <button onClick={() => handleClick("Shubham")}>Click Me </button>
      <button onClick={() => handleClick2("BroCode")}>Bro Button</button>
      <button onClick={(e) => handleEvent(e)}>Event Button</button>
    </>
  );
};

export default Button;
