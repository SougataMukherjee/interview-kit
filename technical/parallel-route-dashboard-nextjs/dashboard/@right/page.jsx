"use client";
import { useState } from "react";

export default function RightSection() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Dashboard Content</h3>
      <p>Counter Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
