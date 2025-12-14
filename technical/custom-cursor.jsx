import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div style={styles.body}>
      <div
        style={{
          ...styles.cursor,
          left: pos.x,
          top: pos.y,
        }}
      />
    </div>
  );
}

const styles = {
  body: {
    height: "100vh",
    cursor: "none", // hide default cursor
  },
  cursor: {
    width: 20,
    height: 20,
    border: "2px solid red",
    borderRadius: "50%",
    position: "fixed",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
  },
};
