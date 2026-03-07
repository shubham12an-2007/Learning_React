import React, { useState } from "react";

const ArrayComponent = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  const [newFood, setNewFood] = useState(""); // State for the input field

  function handleAddFood() {
    if (newFood.trim() !== "") {
      setFoods((f) => [...f, newFood]);
      setNewFood(""); // Clear the input
    }
  }

  function handleDeleteFood(index) {
    // Filter out the element where its position matches the clicked index
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li
            key={index}
            onClick={() => handleDeleteFood(index)}
            style={{ cursor: "pointer" }}
          >
            {food}
          </li>
        ))}
      </ul>

      <input
        type="text"
        id="foodInput"
        placeholder="Enter food name..."
        value={newFood} // Tied to newFood state
        onChange={(e) => setNewFood(e.target.value)} // Update state as you type
      />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
};

export default ArrayComponent;
