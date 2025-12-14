export default function App() {
  // return a random 6-digit hex color
  function randomColor() {
    const chars = "0123456789abcdef";
    let color = "";

    for (let i = 0; i < 6; i++) {
      color += chars[Math.floor(Math.random() * chars.length)];
    }
    return color;
  }

  return (
    <div style={styles.container}>
      {Array.from({ length: 30 }).map((_, i) => {
        const color = randomColor();
        return (
          <div
            key={i}
            style={{ ...styles.box, backgroundColor: `#${color}` }}
          >
            #{color}
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    width: "16rem",
    height: "10rem",
    margin: "0.4rem",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    border: "2px solid",
    borderRadius: "0.6rem",
  },
};
