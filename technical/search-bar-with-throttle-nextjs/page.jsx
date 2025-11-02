
'use client'
import { useRef, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const lastCall = useRef(0);

  function handleChange(e) {
    const now = Date.now();
    if (now - lastCall.current >= 2000) { // 2 seconds
      console.log("Throttled Value:", e.target.value);
      lastCall.current = now;
    }
    setText(e.target.value);
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
