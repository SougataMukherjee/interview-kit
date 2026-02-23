import React, { useState } from 'react';
import './ColorCard.css';

const ColorCard = ({ colorName, colorValue, shade }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const isLightColor = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128;
  };

  const textColor = isLightColor(colorValue) ? '#000000' : '#ffffff';

  return (
    <div 
      className="color-card"
      style={{ backgroundColor: colorValue }}
      onClick={() => copyToClipboard(colorValue)}
    >
      <div className="color-info" style={{ color: textColor }}>
        <div className="color-name">{colorName}-{shade}</div>
        <div className="color-value">{colorValue.toUpperCase()}</div>
        {copied && <div className="copied-indicator">Copied!</div>}
      </div>
    </div>
  );
};

export default ColorCard;