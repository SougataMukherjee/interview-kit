export default function App() {
  const images = [
    "/img/girl1.jpg",
    "/img/girl2.jpg",
    "/img/girl3.jpg",
    "/img/girl4.jpg",
    "/img/girl5.jpg",
    "/img/girl6.jpg",
    "/img/girl7.jpg",
    "/img/girl8.jpg",
    "/img/girl1.jpg",
    "/img/girl2.jpg",
  ];

  return (
    <div style={styles.container}>
      {images.map((src, i) => (
        <img key={i} src={src} alt={`Girl ${i + 1}`} style={styles.img} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: "min(1000px, 100%)",
    margin: "0 auto",
    columns: "3 300px",
    columnGap: "1em",
  },
  img: {
    width: "100%",
    display: "block",
    marginBottom: "1em",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};
