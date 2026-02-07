# Styled Components Complete Guide with TypeScript

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Basic Styling](#basic-styling)
4. [Props-Based Styling](#props-based-styling)
5. [Extending Styles](#extending-styles)
6. [Pseudo-Classes and Nested Selectors](#pseudo-classes-and-nested-selectors)
7. [Component Selectors](#component-selectors)
8. [As Polymorphic Prop](#as-polymorphic-prop)
9. [Styling Custom Components](#styling-custom-components)
10. [Attrs Method](#attrs-method)
11. [Animations](#animations)
12. [Media Queries](#media-queries)
13. [Theming](#theming)
14. [Advanced Patterns](#advanced-patterns)
15. [Best Practices](#best-practices)

---

## Introduction

**Styled Components** is a CSS-in-JS library that allows you to write actual CSS code to style your React components. It uses tagged template literals to style components with full TypeScript support.

### Key Benefits
- **Component-scoped styles** - No CSS class name conflicts
- **Dynamic styling** - Use props to change styles
- **Automatic vendor prefixing** - Browser compatibility
- **Server-side rendering support** - SSR ready
- **Full TypeScript support** - Type-safe styling

---

## Installation

```bash
# NPM
npm install styled-components

# Yarn
yarn add styled-components

# TypeScript types
npm install --save-dev @types/styled-components
```

### Import Statement
```typescript
import styled from 'styled-components';
```

---

## Basic Styling

### Example 1: Simple Styled Components

**BasicExample.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

// Styled h1 element
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
  margin-bottom: 0.5em;
`;

// Styled section element
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  border-radius: 8px;
`;

const BasicExample: React.FC = () => {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
  );
};

export default BasicExample;
```

**Output CSS:**
```css
.Title-xxx {
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
  margin-bottom: 0.5em;
}

.Wrapper-yyy {
  padding: 4em;
  background: papayawhip;
  border-radius: 8px;
}
```

---

### Example 2: Multiple Styled Components

**Card.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  max-width: 400px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

const CardBody = styled.div`
  padding: 20px;
  background: white;
`;

const CardText = styled.p`
  margin: 0;
  color: #666;
  line-height: 1.6;
`;

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>{content}</CardText>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
```

---

## Props-Based Styling

### Example 3: Using Props with TypeScript

**Button.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  $primary?: boolean;
  $size?: 'small' | 'medium' | 'large';
}

const Button = styled.button<ButtonProps>`
  /* Dynamic background based on $primary prop */
  background: ${(props) => (props.$primary ? '#bf4f74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#bf4f74')};
  
  /* Dynamic size */
  font-size: ${(props) => {
    switch (props.$size) {
      case 'small':
        return '0.875em';
      case 'large':
        return '1.25em';
      default:
        return '1em';
    }
  }};
  
  margin: 1em;
  padding: ${(props) => {
    switch (props.$size) {
      case 'small':
        return '0.15em 0.75em';
      case 'large':
        return '0.35em 1.5em';
      default:
        return '0.25em 1em';
    }
  }};
  
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ButtonExample: React.FC = () => {
  return (
    <div>
      <Button>Normal</Button>
      <Button $primary>Primary</Button>
      <Button $primary $size="small">Small Primary</Button>
      <Button $primary $size="large">Large Primary</Button>
    </div>
  );
};

export default ButtonExample;
```

**Note:** Use `$` prefix for transient props (props that shouldn't be passed to DOM elements).

---

### Example 4: Advanced Props with Conditional Styling

**Alert.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  $type: AlertType;
  $dismissible?: boolean;
}

const getAlertColor = (type: AlertType): string => {
  switch (type) {
    case 'success':
      return '#28a745';
    case 'error':
      return '#dc3545';
    case 'warning':
      return '#ffc107';
    case 'info':
      return '#17a2b8';
    default:
      return '#6c757d';
  }
};

const AlertContainer = styled.div<AlertProps>`
  padding: 1rem 1.25rem;
  margin: 1rem 0;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  background-color: ${(props) => `${getAlertColor(props.$type)}20`};
  border-color: ${(props) => getAlertColor(props.$type)};
  color: ${(props) => getAlertColor(props.$type)};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: inherit;
  opacity: 0.5;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

interface AlertComponentProps {
  type: AlertType;
  message: string;
  dismissible?: boolean;
  onClose?: () => void;
}

const Alert: React.FC<AlertComponentProps> = ({ 
  type, 
  message, 
  dismissible = false, 
  onClose 
}) => {
  return (
    <AlertContainer $type={type} $dismissible={dismissible}>
      <span>{message}</span>
      {dismissible && <CloseButton onClick={onClose}>×</CloseButton>}
    </AlertContainer>
  );
};

export default Alert;
```

---

## Extending Styles

### Example 5: Style Inheritance

**ExtendedButtons.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

// Base button
const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #bf4f74;
    color: white;
  }
`;

// Extended button with overridden styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;

  &:hover {
    background: tomato;
    color: white;
  }
`;

// Another extended button
const SuccessButton = styled(Button)`
  color: #28a745;
  border-color: #28a745;

  &:hover {
    background: #28a745;
    color: white;
  }
`;

const ExtendedButtonExample: React.FC = () => {
  return (
    <div>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <SuccessButton>Success Button</SuccessButton>
    </div>
  );
};

export default ExtendedButtonExample;
```

---

### Example 6: Inheritance with Input Fields

**FormInputs.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

// Base input style
const Input = styled.input`
  padding: 10px 15px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  &::placeholder {
    color: #999;
  }
`;

// Extended input with dark theme
const DarkInput = styled(Input)`
  background: #2d3748;
  color: #fff;
  border-color: #4a5568;

  &:focus {
    border-color: #667eea;
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

// Password input with specific type
const PasswordInput = styled(Input).attrs({
  type: 'password',
})`
  border: 2px solid #e53e3e;
  
  &:focus {
    border-color: #fc8181;
  }
`;

// Email input
const EmailInput = styled(Input).attrs({
  type: 'email',
  placeholder: 'Enter your email',
})`
  border: 2px solid #3182ce;
  
  &:focus {
    border-color: #63b3ed;
  }
`;

const FormInputsExample: React.FC = () => {
  return (
    <form style={{ maxWidth: '400px', padding: '20px' }}>
      <div style={{ marginBottom: '15px' }}>
        <Input placeholder="Normal input" />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <DarkInput placeholder="Dark input" />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <PasswordInput placeholder="Password" />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <EmailInput />
      </div>
    </form>
  );
};

export default FormInputsExample;
```

---

## Pseudo-Classes and Nested Selectors

### Example 7: Pseudo-Classes

**HoverButton.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

interface ButtonStyleProps {
  $active?: boolean;
  $borderColor?: string;
}

const Button = styled.button<ButtonStyleProps>`
  display: inline-block;
  color: ${(props) => (props.$active ? 'lightblue' : 'orange')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.$borderColor || '#ccc'};
  border-radius: 3px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;

  /* Hover pseudo-class */
  &:hover {
    border-color: blue;
    background: #f0f0f0;
    transform: scale(1.05);
  }

  /* Active pseudo-class */
  &:active {
    transform: scale(0.95);
  }

  /* Disabled pseudo-class */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Focus pseudo-class */
  &:focus {
    outline: 2px solid #667eea;
    outline-offset: 2px;
  }

  /* Nested span selector */
  & > span {
    display: block;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

const PseudoClassExample: React.FC = () => {
  return (
    <div>
      <Button $borderColor="red">
        <span>Normal Button</span>
      </Button>
      <Button $active $borderColor="green">
        <span>Active Button</span>
      </Button>
      <Button disabled $borderColor="gray">
        <span>Disabled Button</span>
      </Button>
    </div>
  );
};

export default PseudoClassExample;
```

---

### Example 8: Advanced Nested Selectors

**NavigationMenu.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #2d3748;
  padding: 1rem 2rem;

  /* Direct child ul */
  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;

    /* All li elements */
    li {
      position: relative;
      
      /* Link inside li */
      a {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        display: block;
        transition: all 0.3s ease;

        /* Hover state */
        &:hover {
          color: #667eea;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        /* Before pseudo-element */
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #667eea;
          transition: width 0.3s ease;
        }

        &:hover::before {
          width: 100%;
        }
      }
    }
  }
`;

const NavigationExample: React.FC = () => {
  return (
    <Nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </Nav>
  );
};

export default NavigationExample;
```

---

## Component Selectors

### Example 9: Targeting Styled Components

**CheckboxList.tsx**
```typescript
import React from 'react';
import styled, { css } from 'styled-components';

const Input = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 8px;
  cursor: pointer;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
`;

interface LabelTextProps {
  $mode?: 'light' | 'dark';
}

const LabelText = styled.span<LabelTextProps>`
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;

  ${(props) => {
    switch (props.$mode) {
      case 'dark':
        return css`
          background-color: #2d3748;
          color: white;

          /* Target Input component when checked */
          ${Input}:checked + && {
            color: #63b3ed;
            background-color: #1a202c;
            font-weight: bold;
          }

          ${Input}:hover + && {
            background-color: #4a5568;
          }
        `;
      default:
        return css`
          background-color: #f7fafc;
          color: #2d3748;

          ${Input}:checked + && {
            color: #e53e3e;
            background-color: #fed7d7;
            font-weight: bold;
          }

          ${Input}:hover + && {
            background-color: #edf2f7;
          }
        `;
    }
  }}
`;

const CheckboxListExample: React.FC = () => {
  return (
    <div>
      <Label>
        <Input defaultChecked />
        <LabelText>Light Mode - Checked</LabelText>
      </Label>
      <Label>
        <Input />
        <LabelText>Light Mode - Unchecked</LabelText>
      </Label>
      <Label>
        <Input defaultChecked />
        <LabelText $mode="dark">Dark Mode - Checked</LabelText>
      </Label>
      <Label>
        <Input />
        <LabelText $mode="dark">Dark Mode - Unchecked</LabelText>
      </Label>
    </div>
  );
};

export default CheckboxListExample;
```

---

## As Polymorphic Prop

### Example 10: Changing Component Type

**PolymorphicButton.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  background: white;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    background: #bf4f74;
    color: white;
  }
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;

  &:hover {
    background: tomato;
    color: white;
  }
`;

const PolymorphicExample: React.FC = () => {
  return (
    <div>
      {/* Renders as button */}
      <Button>Normal Button</Button>
      
      {/* Renders as anchor tag */}
      <Button as="a" href="#link">
        Button as Link
      </Button>
      
      {/* Extended component as anchor */}
      <TomatoButton as="a" href="#tomato">
        Tomato Link
      </TomatoButton>
      
      {/* Renders as div */}
      <Button as="div">Button as Div</Button>
    </div>
  );
};

export default PolymorphicExample;
```

---

### Example 11: Custom Component with As Prop

**CustomRendering.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: #667eea;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #667eea;
  border-radius: 3px;
  background: white;
  cursor: pointer;

  &:hover {
    background: #667eea;
    color: white;
  }
`;

interface ReversedButtonProps {
  children: string;
}

const ReversedButton: React.FC<ReversedButtonProps> = ({ children, ...props }) => (
  <button {...props}>{children.split('').reverse().join('')}</button>
);

const UpperCaseButton: React.FC<ReversedButtonProps> = ({ children, ...props }) => (
  <button {...props}>{children.toUpperCase()}</button>
);

const CustomRenderingExample: React.FC = () => {
  return (
    <div>
      <Button>Normal Button</Button>
      <Button as={ReversedButton}>Reversed Text</Button>
      <Button as={UpperCaseButton}>Uppercase Text</Button>
    </div>
  );
};

export default CustomRenderingExample;
```

---

## Styling Custom Components

### Example 12: Styling Functional Components

**StyledCustomComponent.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

// Custom component that receives className
interface LinkProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
}

const Link: React.FC<LinkProps> = ({ className, children, href = '#' }) => (
  <a className={className} href={href}>
    {children}
  </a>
);

// Styled version of custom component
const StyledLink = styled(Link)`
  color: #bf4f74;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: #bf4f74;
    color: white;
  }
`;

// Another custom component
interface CardProps {
  className?: string;
  title: string;
  description: string;
}

const CardComponent: React.FC<CardProps> = ({ className, title, description }) => (
  <div className={className}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const StyledCard = styled(CardComponent)`
  padding: 1.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 1rem 0;
    color: #2d3748;
  }

  p {
    margin: 0;
    color: #718096;
    line-height: 1.6;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;

const StyledCustomExample: React.FC = () => {
  return (
    <div>
      <Link href="#">Unstyled Link</Link>
      <br />
      <StyledLink href="#">Styled Link</StyledLink>
      <br />
      <br />
      <StyledCard 
        title="Custom Card" 
        description="This is a styled custom component with hover effects."
      />
    </div>
  );
};

export default StyledCustomExample;
```

---

### Example 13: Styling Class Components

**Counter.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
  max-width: 300px;
  margin: 2rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 3rem;
  color: white;
  margin: 1rem 0;
  font-weight: bold;
`;

const Button = styled.button`
  background: white;
  color: #667eea;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 8px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;

interface CounterState {
  count: number;
}

class Counter extends React.Component<{}, CounterState> {
  state: CounterState = { count: 0 };

  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = (): void => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = (): void => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <StyledCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <div>
          <Button onClick={this.decrement}>-</Button>
          <Button onClick={this.reset}>Reset</Button>
          <Button onClick={this.increment}>+</Button>
        </div>
      </StyledCounter>
    );
  }
}

export default Counter;
```

---

## Attrs Method

### Example 14: Default Props with Attrs

**AttrsExample.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  $active?: boolean;
}

// Set default attributes
const Button = styled.button.attrs<ButtonProps>({
  borderColor: 'orange',
})<ButtonProps>`
  padding: 10px 20px;
  background: ${(props) => (props.$active ? 'blue' : 'white')};
  color: ${(props) => (props.$active ? 'white' : 'blue')};
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

// Dynamic attrs based on props
const Input = styled.input.attrs<{ $size?: 'small' | 'large' }>(props => ({
  type: 'text',
  size: props.$size === 'small' ? 20 : 40,
}))`
  padding: ${props => props.$size === 'small' ? '5px' : '10px'};
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: ${props => props.$size === 'small' ? '0.875rem' : '1rem'};
`;

const AttrsExample: React.FC = () => {
  return (
    <div>
      <Button>Normal Button</Button>
      <Button $active>Active Button</Button>
      <br />
      <br />
      <Input $size="small" placeholder="Small input" />
      <br />
      <Input $size="large" placeholder="Large input" />
    </div>
  );
};

export default AttrsExample;
```

---

### Example 15: Checkbox with Attrs

**StyledCheckbox.tsx**
```typescript
import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxInput = styled.input.attrs({ 
  type: 'checkbox' 
})`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
  padding: 8px;
  border-radius: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: #f7fafc;
  }
`;

const LabelText = styled.span`
  font-size: 1rem;
  color: #2d3748;
`;

const CheckboxGroup = styled.div`
  max-width: 400px;
  padding: 1.5rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
`;

const CheckboxExample: React.FC = () => {
  const [checked, setChecked] = useState({
    option1: false,
    option2: true,
    option3: false,
  });

  return (
    <CheckboxGroup>
      <Label>
        <CheckboxInput 
          checked={checked.option1}
          onChange={() => setChecked({ ...checked, option1: !checked.option1 })}
        />
        <LabelText>Option 1</LabelText>
      </Label>
      <Label>
        <CheckboxInput 
          checked={checked.option2}
          onChange={() => setChecked({ ...checked, option2: !checked.option2 })}
        />
        <LabelText>Option 2</LabelText>
      </Label>
      <Label>
        <CheckboxInput 
          checked={checked.option3}
          onChange={() => setChecked({ ...checked, option3: !checked.option3 })}
        />
        <LabelText>Option 3</LabelText>
      </Label>
    </CheckboxGroup>
  );
};

export default CheckboxExample;
```

---

## Animations

### Example 16: Keyframes Animation

**AnimatedComponent.tsx**
```typescript
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Create rotation animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Fade in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Pulse animation
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const RotatingDiv = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem;
  font-size: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FadeInBox = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
  padding: 2rem;
  background: #48bb78;
  color: white;
  border-radius: 8px;
  margin: 1rem 0;
`;

const PulsingButton = styled.button`
  animation: ${pulse} 1.5s ease-in-out infinite;
  padding: 1rem 2rem;
  background: #e53e3e;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

const AnimationExample: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <RotatingDiv>🎨</RotatingDiv>
      <FadeInBox>This box fades in on mount</FadeInBox>
      <PulsingButton>Click Me!</PulsingButton>
    </div>
  );
};

export default AnimationExample;
```

---

### Example 17: Conditional Animations

**ConditionalAnimation.tsx**
```typescript
import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

interface AnimatedBoxProps {
  $isVisible: boolean;
}

const AnimatedBox = styled.div<AnimatedBoxProps>`
  padding: 2rem;
  background: #667eea;
  color: white;
  border-radius: 8px;
  margin: 1rem 0;
  
  ${props => props.$isVisible
    ? css`animation: ${slideIn} 0.5s ease-in-out;`
    : css`animation: ${slideOut} 0.5s ease-in-out;`
  }
`;

const ToggleButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #48bb78;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: #38a169;
  }
`;

const ConditionalAnimationExample: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ padding: '2rem' }}>
      <ToggleButton onClick={() => setIsVisible(!isVisible)}>
        Toggle Animation
      </ToggleButton>
      {isVisible && (
        <AnimatedBox $isVisible={isVisible}>
          This box slides in and out!
        </AnimatedBox>
      )}
    </div>
  );
};

export default ConditionalAnimationExample;
```

---

## Media Queries

### Example 18: Responsive Design

**ResponsiveHeader.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  $active?: boolean;
}

const Header = styled.header<HeaderProps>`
  padding: 10px 20px;
  margin: 0 auto;
  background: #2d3748;
  color: white;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0 0;

    li {
      margin: 0.5rem 0;
    }

    a {
      color: white;
      text-decoration: none;
      
      &:hover {
        color: #667eea;
      }
    }
  }

  /* Tablet and above */
  @media (min-width: ${(props) => (props.$active ? '920px' : '768px')}) {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      margin: 0;
      display: flex;
      gap: 1.5rem;

      li {
        margin: 0;
      }
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    padding: 15px 40px;
    
    h2 {
      font-size: 2rem;
    }
  }
`;

const ResponsiveHeaderExample: React.FC = () => {
  return (
    <Header>
      <h2>My Blog</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </Header>
  );
};

export default ResponsiveHeaderExample;
```

---

### Example 19: Responsive Grid

**ResponsiveGrid.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;

  /* Tablet */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 1.5rem;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
  }

  /* Large Desktop */
  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GridItem = styled.div`
  padding: 1.5rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    margin: 0 0 0.5rem 0;
    color: #2d3748;
  }

  p {
    margin: 0;
    color: #718096;
    line-height: 1.6;
  }
`;

const ResponsiveGridExample: React.FC = () => {
  const items = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    description: 'This is a responsive grid item that adapts to screen size.',
  }));

  return (
    <GridContainer>
      {items.map(item => (
        <GridItem key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default ResponsiveGridExample;
```

---

## Theming

### Example 20: Theme Provider

**ThemedApp.tsx**
```typescript
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Define theme interface
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    border: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: string;
}

// Light theme
const lightTheme: Theme = {
  colors: {
    primary: '#667eea',
    secondary: '#764ba2',
    background: '#ffffff',
    text: '#2d3748',
    border: '#e2e8f0',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
  borderRadius: '8px',
};

// Dark theme
const darkTheme: Theme = {
  colors: {
    primary: '#9f7aea',
    secondary: '#b794f4',
    background: '#1a202c',
    text: '#f7fafc',
    border: '#4a5568',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
  borderRadius: '8px',
};

const Container = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  min-height: 100vh;
  padding: ${props => props.theme.spacing.large};
  transition: all 0.3s ease;
`;

const Card = styled.div`
  background: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing.large};
  margin-bottom: ${props => props.theme.spacing.medium};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

const ThemedApp: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Card>
          <h1>Themed Components</h1>
          <p>This app uses theme provider for consistent styling.</p>
          <Button onClick={() => setIsDark(!isDark)}>
            Toggle {isDark ? 'Light' : 'Dark'} Mode
          </Button>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default ThemedApp;
```

---

## Advanced Patterns

### Example 21: CSS Helper and Dynamic Styles

**DynamicStyles.tsx**
```typescript
import React from 'react';
import styled, { css } from 'styled-components';

type IconType = 'success' | 'error' | 'warning' | 'info';

interface StyledIconProps {
  $type: IconType;
}

// CSS helper function
const getIconStyles = (type: IconType) => {
  const styles = {
    success: { color: '#48bb78', fontSize: '24px' },
    error: { color: '#f56565', fontSize: '24px' },
    warning: { color: '#ed8936', fontSize: '24px' },
    info: { color: '#4299e1', fontSize: '24px' },
  };
  
  return styles[type];
};

const StyledIcon = styled.div<StyledIconProps>`
  display: flex;
  flex: 0 0 auto;
  align-self: flex-start;
  color: ${(props) => getIconStyles(props.$type).color};
  font-size: ${(props) => getIconStyles(props.$type).fontSize};
  margin-right: 12px;

  ${(props) => {
    // Additional dynamic styles based on type
    if (props.$type === 'error') {
      return css`
        animation: shake 0.5s ease-in-out;
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `;
    }
    return '';
  }}
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 8px;
  margin: 0.5rem 0;
  background: #f7fafc;
`;

const DynamicStylesExample: React.FC = () => {
  return (
    <div>
      <MessageContainer>
        <StyledIcon $type="success">✓</StyledIcon>
        <span>Success message</span>
      </MessageContainer>
      <MessageContainer>
        <StyledIcon $type="error">✗</StyledIcon>
        <span>Error message</span>
      </MessageContainer>
      <MessageContainer>
        <StyledIcon $type="warning">⚠</StyledIcon>
        <span>Warning message</span>
      </MessageContainer>
      <MessageContainer>
        <StyledIcon $type="info">ℹ</StyledIcon>
        <span>Info message</span>
      </MessageContainer>
    </div>
  );
};

export default DynamicStylesExample;
```

---

### Example 22: Styled Component with Complex Props

**StatusLink.tsx**
```typescript
import React from 'react';
import styled from 'styled-components';

interface ComplianceStatus {
  status: 'compliant' | 'non-compliant' | 'pending';
  percentage: number;
}

interface StyledLinkProps {
  $color: string;
  $hoverColor?: string;
}

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'compliant':
      return '#48bb78';
    case 'non-compliant':
      return '#f56565';
    case 'pending':
      return '#ed8936';
    default:
      return '#718096';
  }
};

const StyledComplianceStatusLink = styled.a<StyledLinkProps>`
  color: ${(props) => props.$color};
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    color: ${(props) => props.$hoverColor || props.$color};
    background: ${(props) => `${props.$color}20`};
    text-decoration: none;
  }

  &:active,
  &:visited {
    color: ${(props) => props.$color};
    text-decoration: none;
  }
`;

const StatusBadge = styled.span<{ $color: string }>`
  background: ${props => props.$color};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  margin-left: 0.5rem;
`;

interface ComplianceStatusLinkProps {
  status: ComplianceStatus;
  label: string;
  href: string;
}

const ComplianceStatusLink: React.FC<ComplianceStatusLinkProps> = ({ 
  status, 
  label, 
  href 
}) => {
  const color = getStatusColor(status.status);
  
  return (
    <StyledComplianceStatusLink 
      href={href} 
      $color={color}
      $hoverColor={color}
    >
      {label}
      <StatusBadge $color={color}>
        {status.percentage}%
      </StatusBadge>
    </StyledComplianceStatusLink>
  );
};

const StatusLinkExample: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <ComplianceStatusLink 
        status={{ status: 'compliant', percentage: 95 }}
        label="Compliance Report"
        href="#compliant"
      />
      <br /><br />
      <ComplianceStatusLink 
        status={{ status: 'non-compliant', percentage: 45 }}
        label="Compliance Report"
        href="#non-compliant"
      />
      <br /><br />
      <ComplianceStatusLink 
        status={{ status: 'pending', percentage: 70 }}
        label="Compliance Report"
        href="#pending"
      />
    </div>
  );
};

export default ComplianceStatusLink;
```

---

### Example 23: Form with State Management

**FormExample.tsx**
```typescript
import React, { useState } from 'react';
import styled from 'styled-components';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const FormContainer = styled.form`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #2d3748;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const FormExample: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2 style={{ marginTop: 0, color: '#2d3748' }}>Contact Us</h2>
      
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <TextArea
          id="message"
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <SubmitButton type="submit">Send Message</SubmitButton>
    </FormContainer>
  );
};

export default FormExample;
```

---

### Example 24: Tag Input Component

**TagInput.tsx**
```typescript
import React, { useState, KeyboardEvent } from 'react';
import styled from 'styled-components';

const TagContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  min-height: 60px;
  margin-bottom: 1rem;

  &:focus-within {
    border-color: #667eea;
  }
`;

const Tag = styled.span`
  background: #667eea;
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: 16px;
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.125rem;
  padding: 0;
  line-height: 1;
  
  &:hover {
    opacity: 0.8;
  }
`;

const TagInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  min-width: 120px;
  font-size: 1rem;
  padding: 0.375rem;

  &::placeholder {
    color: #a0aec0;
  }
`;

interface TagInputComponentProps {
  initialTags?: string[];
  placeholder?: string;
}

const TagInputComponent: React.FC<TagInputComponentProps> = ({ 
  initialTags = [],
  placeholder = 'Type and press Enter...'
}) => {
  const [tags, setTags] = useState<string[]>(initialTags);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue('');
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <TagContainer>
      <h3 style={{ marginTop: 0 }}>Email Tags</h3>
      <TagsWrapper>
        {tags.map((tag, index) => (
          <Tag key={index}>
            {tag}
            <RemoveButton onClick={() => removeTag(index)}>×</RemoveButton>
          </Tag>
        ))}
        <TagInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={tags.length === 0 ? placeholder : ''}
        />
      </TagsWrapper>
      <p style={{ color: '#718096', fontSize: '0.875rem', margin: 0 }}>
        Press Enter to add a tag, Backspace to remove the last tag
      </p>
    </TagContainer>
  );
};

// Example usage with email separation
const EmailTagExample: React.FC = () => {
  const [emailString, setEmailString] = useState('john@example.com;jane@example.com');
  const [tags, setTags] = useState<string[]>(() => {
    if (emailString) {
      return emailString.split(';').filter(Boolean);
    }
    return [];
  });

  React.useEffect(() => {
    setEmailString(tags.join(';'));
  }, [tags]);

  return (
    <div>
      <TagInputComponent initialTags={tags} placeholder="Enter email addresses..." />
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <strong>Joined String:</strong> {emailString || 'No emails'}
      </div>
    </div>
  );
};

export default EmailTagExample;
```

---

## Best Practices

### 1. Use Transient Props ($prefix)
```typescript
// ✅ Good - using $ prefix for style-only props
const Box = styled.div<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? 'blue' : 'gray'};
`;

// ❌ Bad - prop will be passed to DOM
const Box = styled.div<{ isActive: boolean }>`
  background: ${props => props.isActive ? 'blue' : 'gray'};
`;
```

### 2. Avoid Inline Styles
```typescript
// ✅ Good
const Button = styled.button`
  padding: 1rem;
  background: blue;
`;

// ❌ Bad
<button style={{ padding: '1rem', background: 'blue' }}>Click</button>
```

### 3. Use Theme for Consistency
```typescript
// ✅ Good - centralized theme
const theme = {
  colors: {
    primary: '#667eea',
    secondary: '#764ba2',
  }
};

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
`;

// ❌ Bad - hardcoded colors everywhere
const Button = styled.button`
  background: #667eea;
`;
```

### 4. Component Organization
```typescript
// ✅ Good - co-locate styles with component
// Button.tsx
import styled from 'styled-components';

const StyledButton = styled.button`...`;

export const Button = () => <StyledButton>Click</StyledButton>;

// ❌ Bad - separate styles file
// styles.ts
export const StyledButton = styled.button`...`;
// Button.tsx
import { StyledButton } from './styles';
```

### 5. Naming Conventions
```typescript
// ✅ Good - clear, descriptive names
const CardContainer = styled.div`...`;
const CardTitle = styled.h2`...`;
const PrimaryButton = styled.button`...`;

// ❌ Bad - vague names
const Div1 = styled.div`...`;
const Text = styled.h2`...`;
const Btn = styled.button`...`;
```

### 6. Performance Optimization
```typescript
// ✅ Good - define outside component
const Button = styled.button`
  padding: 1rem;
`;

const MyComponent = () => <Button>Click</Button>;

// ❌ Bad - recreated on every render
const MyComponent = () => {
  const Button = styled.button`
    padding: 1rem;
  `;
  return <Button>Click</Button>;
};
```

### 7. TypeScript Props Interface
```typescript
// ✅ Good - clear interface
interface ButtonProps {
  $variant: 'primary' | 'secondary';
  $size: 'small' | 'large';
  $fullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
  background: ${props => props.$variant === 'primary' ? 'blue' : 'gray'};
`;

// ❌ Bad - any type
const Button = styled.button<any>`
  background: blue;
`;
```

### 8. Avoid Deep Nesting
```typescript
// ✅ Good - flat structure
const Nav = styled.nav`...`;
const NavList = styled.ul`...`;
const NavItem = styled.li`...`;

// ❌ Bad - deeply nested
const Nav = styled.nav`
  ul {
    li {
      a {
        span {
          /* too deep! */
        }
      }
    }
  }
`;
```

---

