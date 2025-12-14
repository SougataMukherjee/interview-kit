import { useState, useEffect, useRef } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(useTimer(setTime)(), 20); 
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Stopwatch</h2>
      <h1>{time}</h1>

      <div>
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handlePause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

// customTimer.js
//This closure is used for throttling logic; it compares the current time with prev and updates prev
export function useTimer(setTime) {
  let prev = Date.now();
  return function tick() {
    const now = Date.now();
    if (now - prev >= 1000) {
      setTime((t) => t + 1);
      prev = now;
    }
    return tick;
  };
}
