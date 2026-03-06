import React from "react";
import profilePic from "./assets/pfp.png";

const Card = ({ name = "Shubham", hobby, age, isStudent }) => {
  return (
    <>
      <div className="card">
        <img className="card-image" src={profilePic} alt="image" />
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{hobby}</p>
        <p>My age is {age}</p>
        <p>Student : {isStudent ? "a student " : "not a student "}</p>
      </div>
    </>
  );
};

export default Card;
