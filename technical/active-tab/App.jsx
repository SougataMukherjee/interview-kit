import { useState } from "react";
import "./styles.css";

export default function App() {
  const [active, setActive] = useState("Home"); 

  const handleClick = (name) => {
    setActive(name); 
  };

  return (
    <div>
      <ul>
        <li>
          <a
            href="#"
            className={active === "Home" ? "active" : ""}
            onClick={() => handleClick("Home")}
          >
            Home
          </a>
          <a
            href="#"
            className={active === "About" ? "active" : ""}
            onClick={() => handleClick("About")}
          >
            About
          </a>
          <a
            href="#"
            className={active === "Contact" ? "active" : ""}
            onClick={() => handleClick("Contact")}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="main">
        <h3>Heading</h3>
        <span>Subheading</span>
        <p>sss</p>
      </div>
    </div>
  );
}
