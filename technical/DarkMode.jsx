import { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  }

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#1e1e1e" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#000000",
        minHeight: "100vh",
        padding: "20px",
        transition: "0.3s",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>

      <h1>Dark Mode Toggle Example</h1>
      <p>This example uses conditional rendering and localStorage.</p>
    </div>
  );
}
