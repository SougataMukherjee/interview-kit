import { useEffect, useRef, useState } from "react";
import "./styles.css";

const App = () => {
  const [images, setImages] = useState([]);
  const observerRef = useRef(null);

  useEffect(() => {
    const imgList = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      src: `https://picsum.photos/id/${i + 10}/400/250`,
    }));
    setImages(imgList);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    const { current: observer } = observerRef;
    const imgs = document.querySelectorAll(".lazy-img");
    imgs.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, [images]);

  return (
    <div className="gallery">
      {images.map((img) => (
        <img
          key={img.id}
          data-src={img.src}
          src="https://via.placeholder.com/400x250?text=Loading..."
          alt={`Random ${img.id}`}
          className="lazy-img"
        />
      ))}
    </div>
  );
};

export default App;