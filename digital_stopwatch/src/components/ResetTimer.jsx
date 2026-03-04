import React from "react";

const ResetTimer = ({ resetTimer }) => {
  return (
    <>
      <button
        onClick={resetTimer}
        className="py-4 bg-[#1a1a1a] text-white font-bold rounded-2xl border border-white/5 hover:bg-gray-700 transition-all duration-300 active:scale-95"
      >
        RESET
      </button>
    </>
  );
};

export default ResetTimer;
