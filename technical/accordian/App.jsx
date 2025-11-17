import { useState } from "react";
import "./styles.css";

export default function App() {
  const [openSection, setOpenSection] = useState(null);

  const imageUrls = [
    {
      name: "https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1470&auto=format&fit=crop",
    },
    {
      name: "https://images.unsplash.com/photo-1697219590638-d2db7748802e?q=80&w=1452&auto=format&fit=crop",
    },
    {
      name: "https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=1470&auto=format&fit=crop",
    },
    {
      name: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1375&auto=format&fit=crop",
    },
  ];

  const toggleSection = (index) => {
    if (openSection === index) {
      setOpenSection(null);
    } else {
      setOpenSection(index);
    }
  };

  return (
    <div className="App">
      <h2> Accordion</h2>
      <div className="accordion">
        {imageUrls.map((img, index) => (
          <div key={index} className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => toggleSection(index)}
              disabled={index % 2 !== 0}
            >
              Image {index + 1}
            </button>

            {openSection === index && (
              <div className="accordion-content">
                <img src={img.name} alt={`Image ${index}`} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

//NOTE: we can use details and summary tag for accordion like
  // {imageUrls.map((img, index) => (
  //         <details
  //           key={index}
  //           className="accordion-item"
  //           // Disable odd items
  //           open={false}
  //           disabled={index % 2 !== 0}
  //         >
  //           <summary className="accordion-header">
  //             Image {index + 1}
  //             {index % 2 !== 0 && (
  //               <span style={{ color: "red", marginLeft: 8 }}>(Disabled)</span>
  //             )}
  //           </summary>

  //           <div className="accordion-content">
  //             <img src={img.name} alt={`Image ${index}`} />
  //           </div>
  //         </details>
  //       ))}