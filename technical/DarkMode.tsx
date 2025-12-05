import { useState, useEffect } from "react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || Theme.LIGHT;
    setTheme(saved);
  }, []);

  function toggleTheme() {
    const next = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(next);
    localStorage.setItem("theme", next);
  }

  return (
    <div
      style={{
        backgroundColor: theme === Theme.DARK ? "#1e1e1e" : "#ffffff",
        color: theme === Theme.DARK ? "#ffffff" : "#000000",
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
      <p>This example uses enum + localStorage for theme persistence.</p>
    </div>
  );
}
