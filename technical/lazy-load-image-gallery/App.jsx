import { useState, useEffect } from "react";

export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imgUrls = [];
    for (let i = 10; i < 30; i++) {
      imgUrls.push(`https://picsum.photos/id/${i}/400/250`);
    }
    setImages(imgUrls);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "10px",
      }}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          loading="lazy"
          alt={`Random ${i}`}
          style={{ width: "100%" }}
        />
      ))}
    </div>
  );
}
