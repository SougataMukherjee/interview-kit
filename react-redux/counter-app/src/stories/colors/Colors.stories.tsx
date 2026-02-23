import ColorPalette from './ColorPalette';
import { colorPalette } from './colors';
import ColorCard from './ColorCard'
export default {
  title: 'Design System/Colors',
  component: ColorPalette,
  parameters: {
    docs: {
      description: {
        component: `
# Color System

Our design system uses a comprehensive color palette that ensures consistency and accessibility across all components.

## Usage
- Click any color card to copy the hex code
- Colors are organized by semantic meaning
- Each color has multiple shades from 50 (lightest) to 900 (darkest)

## Color Categories
${Object.entries(colorPalette).map(([key, category]) => 
  `- **${category.name}**: Used for ${key} actions and states`
).join('\n')}
        `
      }
    },
    layout: 'fullscreen'
  }
};

export const AllColors = {
  render: () => <ColorPalette />,
  name: 'Complete Color Palette'
};

// Individual color category stories
export const Primary = {
  render: () => (
    <div className="color-palette-container">
      <div className="color-section">
        <h2 className="color-section-title">Primary Colors</h2>
        <div className="color-grid">
          {Object.entries(colorPalette.primary.colors).map(([shade, colorValue]) => (
            <ColorCard
              key={shade}
              colorName="Primary"
              colorValue={colorValue}
              shade={shade}
            />
          ))}
        </div>
      </div>
    </div>
  )
};

export const Secondary = {
  render: () => (
    <div className="color-palette-container">
      <div className="color-section">
        <h2 className="color-section-title">Secondary Colors</h2>
        <div className="color-grid">
          {Object.entries(colorPalette.secondary.colors).map(([shade, colorValue]) => (
            <ColorCard
              key={shade}
              colorName="Secondary"
              colorValue={colorValue}
              shade={shade}
            />
          ))}
        </div>
      </div>
    </div>
  )
};