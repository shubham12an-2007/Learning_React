import React, { useState } from "react";

const MyComponent = () => {
  let [cars, setCars] = useState([]);
  let [carsYear, setCarsYears] = useState(new Date().getFullYear());
  let [carsMake, setCarsMake] = useState("");
  let [carsModel, setCarsModel] = useState("");

  const handleAddCar = () => {
    const newCar = { year: carsYear, make: carsMake, model: carsModel };
    setCars((c) => [...c, newCar]);

    // reseting all the values
    setCarsYears(new Date().getFullYear());
    setCarsMake("");
    setCarsModel("");
  };

  const handleRemoveCar = (index) => {
    setCars((c) => c.filter((_, i) => i !== index));
  };

  const handleYearChange = (event) => {
    setCarsYears(event.target.value);
  };

  const handleMakeChange = (event) => {
    setCarsMake(event.target.value);
  };

  const handleModelChange = (event) => {
    setCarsModel(event.target.value);
  };

  return (
    <div>
      <h2>List of Car Objects </h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}{" "}
          </li>
        ))}
      </ul>
      <input type="number" value={carsYear} onChange={handleYearChange} />{" "}
      <br />
      <input
        type="text"
        value={carsMake}
        onChange={handleMakeChange}
        placeholder="Enter Car make "
      />
      <br />
      <input
        type="text"
        value={carsModel}
        onChange={handleModelChange}
        placeholder="Enter Car model"
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
};

export default MyComponent;
