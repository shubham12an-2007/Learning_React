import { useState, useRef, useEffect, useCallback } from "react";
import "./App.css";
import StartTimer from "./components/StartTimer";
import StopTimer from "./components/StopTimer";
import ResetTimer from "./components/ResetTimer";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Time format karne ka logic (00:00:00)
  const formatTime = () => {
    const min = Math.floor((time / 60000) % 60)
      .toString()
      .padStart(2, "0");
    const sec = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const ms = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, "0");

    return `${min}:${sec}:${ms}`;
  };

  // Engine: Har baar isRunning badalne par interval manage karega
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }

    // Cleanup function: memory leaks se bachne ke liye
    return () => clearInterval(intervalId);
  }, [isRunning]);

  // Handlers (useCallback for optimization)
  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setTime(0);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] overflow-hidden">
      {/* Glow Effect in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="relative p-10 rounded-[40px] bg-[#111] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center max-w-sm w-full mx-4">
        <h1 className="text-gray-500 text-xs font-black tracking-[0.3em] uppercase mb-8">
          Chronometer
        </h1>

        {/* Timer Display with tabular-nums for stability */}
        <div className="text-7xl font-black text-white mb-12 tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          {formatTime()}
        </div>

        {/* Controls Grid */}
        <div className="grid grid-cols-2 gap-4">
          <StartTimer startTimer={startTimer}></StartTimer>

          <StopTimer stopTimer={stopTimer}></StopTimer>

          <ResetTimer resetTimer={resetTimer}></ResetTimer>
        </div>
      </div>
    </div>
  );
}

export default App;
