import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <nav className="navbar">
        <h3>Logo</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="content">
        <p>Scroll down to see the sticky navbar in action 👇</p>
        {[...Array(50)].map((_, i) => (
          <p key={i}>This is dummy content line {i + 1}</p>
        ))}
      </div>
    </>
  );
}