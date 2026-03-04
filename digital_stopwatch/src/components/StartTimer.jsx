import React from "react";

const StartTimer = ({ startTimer }) => {
  return (
    <>
      <button
        onClick={startTimer}
        className="col-span-2 py-4 bg-white text-black font-bold rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300 active:scale-95 shadow-lg"
      >
        START
      </button>
    </>
  );
};

export default StartTimer;
