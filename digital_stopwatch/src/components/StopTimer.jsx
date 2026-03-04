import React from "react";

const StopTimer = ({ stopTimer }) => {
  return (
    <>
      <button
        onClick={stopTimer}
        className="py-4 bg-[#1a1a1a] text-white font-bold rounded-2xl border border-white/5 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 active:scale-95"
      >
        STOP
      </button>
    </>
  );
};

export default StopTimer;
