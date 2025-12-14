import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  const like = () => {
    setShow(true);
    setTimeout(() => setShow(false), 800);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container} onDoubleClick={like}>
        <img src="/img/a.jpg" alt="post" style={styles.img} />
        <i
          style={{
            ...styles.heart,
            transform: `translate(-50%, -50%) scale(${show ? 1 : 0})`,
          }}
        >
          ❤️
        </i>
      </div>
    </div>
  );
}

const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f2f2f2",
  },
  container: { position: "relative" },
  img: {
    width: 300,
    height: 350,
    objectFit: "cover",
    borderRadius: 8,
    cursor: "pointer",
  },
  heart: {
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: 80,
    color: "red",
    transition: "transform 0.3s ease",
    pointerEvents: "none",
  },
};
