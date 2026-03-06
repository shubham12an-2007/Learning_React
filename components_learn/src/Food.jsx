import React from "react";

const Food = () => {
  const food1 = "papaya";
  const food2 = "banana ";

  return (
    <>
      <ul>
        <li>Apple</li>
        <li>Orange </li>
        <li>{food1.toUpperCase()}</li>
        <li>{food2.toUpperCase()}</li>
      </ul>
    </>
  );
};

export default Food;
