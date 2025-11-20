"use client";
import { useState, useRef } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const canRun = useTimer(2000); // throttle: 2 seconds

  function handleChange(e) {
    setText(e.target.value);

    if (canRun()) {
      console.log("Throttled:", e.target.value);
    }
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type quickly to test throttle..."
      />
      <div>Hello {text}</div>
    </>
  );
}

export function useTimer(delay = 1000) {
  const lastTime = useRef(0);

  function canRun() {
    const now = Date.now();

    if (now - lastTime.current >= delay) {
      lastTime.current = now;
      return true;
    }
    return false;
  }

  return canRun;
}
