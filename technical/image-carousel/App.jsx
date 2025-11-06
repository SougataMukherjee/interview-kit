import { useState } from "react";
import "./styles.css";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://picsum.photos/id/1015/600/350",
    "https://picsum.photos/id/1016/600/350",
    "https://picsum.photos/id/1018/600/350",
  ];
  const prevSlide = () => {
    let index;
    if (currentIndex === 0) {
      //if index in first position make it to last slide and make cycle
      index = images.length - 1;
    } else {
      index = currentIndex - 1; //go to its previous
    }
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    let index;
    if (currentIndex === images.length - 1) {
      //if index in last position make it to 1st slide and make cycle
      index = 0;
    } else {
      index = currentIndex + 1; //go to its next
    }
    setCurrentIndex(index);
  };
  const onError = (e) => {
    console.error("Error loading image", e.target.src);
  };
  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            onError={onError}
            className={index === currentIndex ? "active" : "inactive"} //based on current index active the pic
          />
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>
        [
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        ]
      </button>
    </div>
  );
};

export default App;
