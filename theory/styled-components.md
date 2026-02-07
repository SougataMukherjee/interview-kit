# Styled Components Complete Guide with TypeScript

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [File Naming Convention](#file-naming-convention)
4. [Basic Styling](#basic-styling)
5. [Props-Based Styling](#props-based-styling)
6. [Extending Styles](#extending-styles)
7. [Pseudo-Classes and Nested Selectors](#pseudo-classes-and-nested-selectors)
8. [Component Selectors](#component-selectors)
9. [As Polymorphic Prop](#as-polymorphic-prop)
10. [Styling Custom Components](#styling-custom-components)
11. [Attrs Method](#attrs-method)
12. [Animations](#animations)
13. [Media Queries](#media-queries)
14. [Best Practices](#best-practices)

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
## File Naming Convention

`Purpose:` Separate styled components from business logic while maintaining co-location.
```js
 Folder/
      ├── ComponentName.tsx
      ├── ComponentName.styles.ts
      └── index.ts
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

### Example 11.1: Custom Component with As Prop

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
### Example 11.2: Custom Component with As Prop
**Button.styles.ts**
```typescript
import styled, { css } from 'styled-components';
export interface ButtonProps {
  $variant?: 'primary' | 'secondary' | 'outline';
  $size?: 'small' | 'medium' | 'large';
  $fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* Size variants */
  ${(props) => {
    switch (props.$size) {
      case 'small':
        return css`
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
      case 'large':
        return css`
          padding: 1rem 2rem;
          font-size: 1.125rem;
        `;
      default:
        return css`
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
    }
  }}
  
  /* Variant styles */
  ${(props) => {
    switch (props.$variant) {
      case 'primary':
        return css`
          background: #667eea;
          color: white;
          
          &:hover:not(:disabled) {
            background: #5568d3;
          }
        `;
      case 'secondary':
        return css`
          background: #48bb78;
          color: white;
          
          &:hover:not(:disabled) {
            background: #38a169;
          }
        `;
      case 'outline':
        return css`
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
          
          &:hover:not(:disabled) {
            background: #667eea;
            color: white;
          }
        `;
      default:
        return css`
          background: #e2e8f0;
          color: #2d3748;
          
          &:hover:not(:disabled) {
            background: #cbd5e0;
          }
        `;
    }
  }}
  
  /* Full width */
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  
  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ButtonIcon = styled.span`
  display: inline-flex;
  margin-right: 0.5rem;
`;

export const ButtonText = styled.span`
  display: inline-flex;
`;
```

**Button.tsx**
```typescript
import React from 'react';
import { StyledButton, ButtonIcon, ButtonText } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  $variant = 'primary',
  $size = 'medium',
  $fullWidth = false,
  ...rest 
}) => {
  return (
    <StyledButton 
      $variant={$variant} 
      $size={$size}
      $fullWidth={$fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
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

  &:hover,
  &:focus {
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

## Best Practices

### 1. Use Transient Props ($prefix)
```typescript
// ✅ Good - using $ prefix for style-only props
const Box = styled.div<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? 'blue' : 'gray'};
`;
<Box $isActive={true} />
// ❌ Bad - prop will be passed to DOM
const Box = styled.div<{ isActive: boolean }>`
  background: ${props => props.isActive ? 'blue' : 'gray'};
`;
<Box isActive={true} />
```

### 2. Avoid Inline Styles
```typescript
// ✅ GOOD - Define outside component
const Button = styled.button`
  padding: 1rem;
  background: blue;
`;

const MyComponent = () => {
  return <Button>Click</Button>;
};

// ❌ BAD - Component recreated on every render
const MyComponent = () => {
  const Button = styled.button`
    padding: 1rem;
    background: blue;
  `;
  
  return <Button>Click</Button>;
};
```
### 3.1: Not Forwarding className to Custom Components

```typescript
// ❌ BAD - className not forwarded
const CustomLink = ({ href, children }) => (
  <a href={href}>{children}</a>
);

const StyledLink = styled(CustomLink)`
  color: blue; // Won't work!
`;
```
```typescript
// ✅ GOOD - className forwarded
interface CustomLinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ className, href, children }) => (
  <a className={className} href={href}>
    {children}
  </a>
);

const StyledLink = styled(CustomLink)`
  color: blue; // Works!
`;
```

### 3.2. Use Theme for Consistency
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
### 8. Avoid Incorrect attrs Usage
```typescript
// ❌ BAD - attrs with wrong syntax
const Input = styled.input.attrs({
  type: 'text',
  placeholder: props => props.placeholder, // Won't work correctly
})`
  padding: 1rem;
`;
```
```typescript
// ✅ GOOD - Correct attrs usage
interface InputProps {
  $placeholder?: string;
}

const Input = styled.input.attrs<InputProps>(props => ({
  type: 'text',
  placeholder: props.$placeholder || 'Enter text...',
}))<InputProps>`
  padding: 1rem;
  border: 2px solid #ddd;
`;
```
### 9. Avoid Using Wrong Selector Syntax
```typescript
// ❌ BAD - Invalid nested component selector
const Text = styled.span`
  color: blue;
`;

const Container = styled.div`
  Text { // Won't work!
    color: red;
  }
`;
```
```typescript
// ✅ GOOD - Correct component selector
const Text = styled.span`
  color: blue;
`;

const Container = styled.div`
  ${Text} { // Correct!
    color: red;
  }
`;
```
### 10. Not Handling Responsive Design
```typescript
// ❌ BAD - Fixed sizes, no responsiveness
const Container = styled.div`
  width: 1200px;
  padding: 50px;
`;
```
```typescript
// ✅ GOOD - Responsive with media queries
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;
```
### 11. Avoid Deep Nesting
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

