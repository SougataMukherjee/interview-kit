import { useState, useEffect, useRef } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const runner = customTimer(setTime)(); // start custom timer
      timerRef.current = setInterval(runner, 20); // small interval
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
export function customTimer(setTime) {
  let prev = Date.now();

  return function tick() {
    const now = Date.now();

    // run every 1 second
    if (now - prev >= 1000) {
      setTime((t) => t + 1);
      prev = now;
    }
    return tick; // return itself so setInterval can call it
  };
}
