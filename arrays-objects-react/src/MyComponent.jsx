import React, { useState } from "react";

const MyComponent = () => {
  const [car, setCar] = useState({
    year: 2024,
    make: "ford",
    model: "Mustang",
  });

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handlemakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function handlemodelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  return (
    <div>
      <p>
        Your favourite car is : {car.year} {car.make} {car.model}{" "}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handlemakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handlemodelChange} />
      <br />
    </div>
  );
};

export default MyComponent;
