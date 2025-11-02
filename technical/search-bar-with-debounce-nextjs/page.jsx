"use client";
import { useEffect, useState } from "react";

export default function DebouncingExample() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (name === "") {
      setLoading(false);
      return;
    }

    setLoading(true); 

    const timerId = setTimeout(() => {
      console.log("Debounced Value:", name);
      setLoading(false); 
    }, 1000);

    return () => {
      clearTimeout(timerId); 
    };
  }, [name]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type something..."
      />

      {loading ? <p>⏳ Loading...</p> : <p>✅ Done</p>}

      <div>Hello {name}</div>
    </>
  );
}
