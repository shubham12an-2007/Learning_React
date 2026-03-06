import React from "react";
import profilePic from "./assets/pfp.png";

const Card = () => {
  return (
    <>
      <div className="card">
        <img className="card-image" src={profilePic} alt="image" />
        <h2 className="card-title">Bro Code</h2>
        <p className="card-text">I am a student and play video games</p>
      </div>
    </>
  );
};

export default Card;
