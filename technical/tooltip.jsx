import { useState } from "react";

const TooltipIcons = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const icons = [
    { emoji: "🏠", label: "Home" },
    { emoji: "📧", label: "Email" },
    { emoji: "⚙️", label: "Settings" },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="tooltip-container">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="tooltip-item"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <span>{icon.emoji}</span>

          {hoveredIndex === index && (
            <div className="tooltip-box">
              {icon.label}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TooltipIcons;