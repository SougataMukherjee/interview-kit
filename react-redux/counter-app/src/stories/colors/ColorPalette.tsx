import React from 'react';
import ColorCard from './ColorCard';
import { colorPalette } from './colors';
import './ColorCard.css';

const ColorPalette = () => {
  return (
    <div className="color-palette-container">
      <div className="palette-header">
        <h1 className="palette-title">Design System Colors</h1>
        <p className="palette-description">
          Click on any color to copy its hex code to your clipboard. 
          Our color system provides consistent and accessible colors for your designs.
        </p>
      </div>

      {Object.entries(colorPalette).map(([categoryKey, category]) => (
        <div key={categoryKey} className="color-section">
          <h2 className="color-section-title">{category.name}</h2>
          <div className="color-grid">
            {Object.entries(category.colors).map(([shade, colorValue]) => (
              <ColorCard
                key={`${categoryKey}-${shade}`}
                colorName={category.name}
                colorValue={colorValue}
                shade={shade}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;