import React from "react";
import { useState } from "react";

const Button = ({ colourName, setColorChange, color }) => {
  return (
    <>
      <button
        className="color-btn"
        style={{ backgroundColor: color }}
        onClick={() => setColorChange(color)}
      >
        {colourName}
      </button>
    </>
  );
};

export default Button;
