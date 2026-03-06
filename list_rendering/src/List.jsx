import React from "react";

const List = ({ items, category }) => {
  // for asceding order according to alphabetical order
  // fruits.sort((a, b) => a.name.localeCompare(b.name));

  // for reverse order
  // fruits.sort((a, b) => b.name.localeCompare(a.name));

  // for ascending calories wise
  items.sort((a, b) => a.calories - b.calories);

  // for descending calories order
  // fruits.sort((a, b) => b.calories - a.calories);

  // for fruits having calories greater than 100 cals
  const lowCalFruits = items.filter((item) => item.calories < 100);

  // for fruits having calories greater than 100 cals
  const highCalFruits = items.filter((item) => item.calories > 100);

  // list of fruits having cals less than 100 cals
  const lowCalItems = lowCalFruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; {fruit.calories}
    </li>
  ));

  // for fruits having cals greater than 100 cals
  const highCalItems = highCalFruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; {fruit.calories}
    </li>
  ));

  // const listItems = fruits.map((fruit) => (
  //   <li key={fruit.id}>
  //     {fruit.name}: &nbsp; {fruit.calories}
  //   </li>
  // ));

  return (
    <>
      {/* <ul>{listItems}</ul>  */}
      <h1>{category}</h1>
      <ul>{lowCalItems}</ul>
      <ul>{highCalItems}</ul>
    </>
  );
};

export default List;
