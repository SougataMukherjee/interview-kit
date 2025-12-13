import { useEffect, useState } from "react";

export default function App() {
  const [images, setImages] = useState([]);

  async function loadImage() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setImages((prev) => [...prev, data.message]);
  }

  useEffect(() => {
    for (let i = 0; i < 8; i++) loadImage();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 20
      ) {
        loadImage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="dog"
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
        />
      ))}
    </div>
  );
}
