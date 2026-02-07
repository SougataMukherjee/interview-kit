# React Testing Library Complete Guide with TypeScript

## Table of Contents
1. [Introduction](#introduction)
2. [Setup](#setup)
3. [Test Structure](#test-structure)
4. [Query Methods](#query-methods)
5. [User Interactions](#user-interactions)
6. [Assertions](#assertions)
7. [Asynchronous Testing](#asynchronous-testing)
8. [API Testing](#api-testing)
9. [Advanced Patterns](#advanced-patterns)
10. [Common Mistakes](#common-mistakes)
11. [Best Practices](#best-practices)

---

## Introduction

**React Testing Library (RTL)** is a testing library that encourages testing React components from a user's perspective. It focuses on how users interact with your application rather than implementation details.

### Key Principles
- Test behavior, not implementation
- Query elements as users would find them
- Avoid testing internal state or component methods
- Write tests that give you confidence

---

## Setup

### Installation

```bash
# Install React Testing Library
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event

# TypeScript types (usually included)
npm install --save-dev @types/jest
```

### Configuration

**setupTests.ts**
```typescript
import '@testing-library/jest-dom';
```

**File Naming Convention**
- `ComponentName.test.tsx` or `ComponentName.spec.tsx`
- Keep test files next to components or in `__tests__` folder

---

## Test Structure

### Example 1: Basic Test Structure with beforeEach and afterEach

**Description:** `beforeEach` runs before every test case, and `afterEach` runs after every test case. Use them for setup and cleanup.

**UserList.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserList from './UserList';

describe('UserList Component', () => {
  // Runs before each test
  beforeEach(() => {
    console.log('Runs before each test');
    localStorage.clear();
  });

  // Runs after each test - cleanup
  afterEach(() => {
    console.log('Runs after each test - cleanup');
    jest.clearAllMocks();
  });

  it('renders user list correctly', () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it('displays user count', () => {
    const users = [{ id: 1, name: 'Alice' }];
    render(<UserList users={users} />);
    expect(screen.getByText(/1 user/i)).toBeInTheDocument();
  });
});
```

---

### Example 2: beforeAll and afterAll

**Description:** `beforeAll` runs once before all tests in the suite, and `afterAll` runs once after all tests complete. Use for expensive operations like database connections.

**Database.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import DatabaseComponent from './DatabaseComponent';

describe('Database Component', () => {
  // Runs once before all tests
  beforeAll(() => {
    console.log('Setting up database connection');
    // Setup database
  });

  // Runs once after all tests
  afterAll(() => {
    console.log('Closing database connection');
    // Close database
  });

  beforeEach(() => {
    console.log('Before each test');
  });

  afterEach(() => {
    console.log('After each test');
  });

  it('test case 1', () => {
    expect(true).toBe(true);
  });

  it('test case 2', () => {
    expect(true).toBe(true);
  });
});
```

---

### Example 3: Nested Describe Blocks

**Description:** Use nested `describe` blocks to organize related tests and share setup/teardown logic.

**Form.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form Component', () => {
  describe('Rendering', () => {
    it('renders all form fields', () => {
      render(<Form />);
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    it('renders submit button', () => {
      render(<Form />);
      expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('allows typing in name field', async () => {
      const user = userEvent.setup();
      render(<Form />);
      
      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, 'John Doe');
      
      expect(nameInput).toHaveValue('John Doe');
    });

    it('submits form with valid data', async () => {
      const mockSubmit = jest.fn();
      const user = userEvent.setup();
      render(<Form onSubmit={mockSubmit} />);
      
      await user.type(screen.getByLabelText(/name/i), 'John');
      await user.click(screen.getByRole('button', { name: /submit/i }));
      
      expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('Validation', () => {
    it('shows error for invalid email', async () => {
      const user = userEvent.setup();
      render(<Form />);
      
      await user.type(screen.getByLabelText(/email/i), 'invalid');
      await user.click(screen.getByRole('button', { name: /submit/i }));
      
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    });
  });
});
```

---

### Example 4: describe.only and describe.skip

**Description:** Use `describe.only` to run only specific test suites, and `describe.skip` to skip test suites temporarily.

**FeatureToggle.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import Feature from './Feature';

describe('Feature Component', () => {
  it('renders feature', () => {
    render(<Feature />);
    expect(screen.getByText(/feature/i)).toBeInTheDocument();
  });
});

// Only this describe block will run
describe.only('Feature Component - Critical Tests', () => {
  it('critical test 1', () => {
    expect(true).toBe(true);
  });

  it('critical test 2', () => {
    expect(true).toBe(true);
  });
});

// This describe block will be skipped
describe.skip('Feature Component - WIP Tests', () => {
  it('work in progress test', () => {
    expect(true).toBe(true);
  });
});
```

---

## Query Methods

### Query Priority (Best to Worst)

1. **getByRole** - Accessible to everyone (best)
2. **getByLabelText** - Form inputs
3. **getByPlaceholderText** - If no label
4. **getByText** - Non-interactive elements
5. **getByDisplayValue** - Current input value
6. **getByAltText** - Images
7. **getByTitle** - Title attribute
8. **getByTestId** - Last resort (avoid if possible)

---

### Example 5: getByRole

**Description:** Query elements by their ARIA role. This is the most accessible and recommended query method.

**Navigation.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation Component', () => {
  it('finds elements by role', () => {
    render(<Navigation />);
    
    // heading role
    const heading = screen.getByRole('heading', { name: /welcome/i });
    expect(heading).toBeInTheDocument();
    
    // button role
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeInTheDocument();
    
    // textbox role (input type="text")
    const textbox = screen.getByRole('textbox', { name: /username/i });
    expect(textbox).toBeInTheDocument();
    
    // link role
    const link = screen.getByRole('link', { name: /home/i });
    expect(link).toBeInTheDocument();
    
    // checkbox role
    const checkbox = screen.getByRole('checkbox', { name: /agree/i });
    expect(checkbox).toBeInTheDocument();
  });
});
```

**Common ARIA Roles:**
- `button` - `<button>` or `<input type="button">`
- `textbox` - `<input type="text">` or `<textarea>`
- `heading` - `<h1>` to `<h6>`
- `link` - `<a href="...">`
- `checkbox` - `<input type="checkbox">`
- `radio` - `<input type="radio">`
- `listitem` - `<li>`
- `list` - `<ul>` or `<ol>`

---

### Example 6: getAllByRole vs getByRole

**Description:** Use `getAllByRole` when multiple elements match the query. Returns an array.

**ProductList.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

describe('ProductList Component', () => {
  it('renders multiple list items', () => {
    const products = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
    ];
    
    render(<ProductList products={products} />);
    
    // getAllByRole returns an array
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    
    // Can iterate over results
    listItems.forEach((item, index) => {
      expect(item).toBeInTheDocument();
    });
  });

  it('renders multiple buttons', () => {
    render(<ProductList products={[{ id: 1, name: 'Product' }]} />);
    
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});
```

---

### Example 7: getByLabelText and getAllByLabelText

**Description:** Query form inputs by their associated label. Best for form testing.

**LoginForm.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {
  it('finds input by label text', () => {
    render(<LoginForm />);
    
    // Finds input associated with label
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('finds multiple checkboxes by label', () => {
    render(
      <form>
        <label>
          <input type="checkbox" /> Option 1
        </label>
        <label>
          <input type="checkbox" /> Option 2
        </label>
        <label>
          <input type="checkbox" /> Option 3
        </label>
      </form>
    );
    
    const option1 = screen.getByLabelText(/option 1/i);
    expect(option1).toBeInTheDocument();
    
    // If you need all checkboxes (not recommended, use specific queries)
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(3);
  });
});
```

---

### Example 8: getByPlaceholderText

**Description:** Query inputs by placeholder attribute. Use when label is not available.

**SearchBar.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  it('finds input by placeholder', () => {
    render(<SearchBar />);
    
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('allows typing in search field', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);
    
    const searchInput = screen.getByPlaceholderText(/search products/i);
    await user.type(searchInput, 'laptop');
    
    expect(searchInput).toHaveValue('laptop');
  });
});
```

---

### Example 9: getByText vs getAllByText

**Description:** Query elements by their text content. `getAllByText` returns multiple matches.

**MessageList.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import MessageList from './MessageList';

describe('MessageList Component', () => {
  it('finds element by exact text', () => {
    render(<MessageList />);
    
    const message = screen.getByText('Welcome back!');
    expect(message).toBeInTheDocument();
  });

  it('finds element by regex', () => {
    render(<MessageList />);
    
    const message = screen.getByText(/welcome/i);
    expect(message).toBeInTheDocument();
  });

  it('finds multiple elements with same text', () => {
    render(
      <div>
        <p>Delete</p>
        <p>Delete</p>
        <p>Delete</p>
      </div>
    );
    
    const deleteTexts = screen.getAllByText(/delete/i);
    expect(deleteTexts).toHaveLength(3);
  });
});
```

---

### Example 10: getByTitle

**Description:** Query elements by their title attribute (tooltip text).

**IconButton.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import IconButton from './IconButton';

describe('IconButton Component', () => {
  it('finds button by title attribute', () => {
    render(<IconButton title="Close dialog" />);
    
    const closeButton = screen.getByTitle(/close dialog/i);
    expect(closeButton).toBeInTheDocument();
  });

  it('verifies title attribute value', () => {
    render(<IconButton title="Edit profile" />);
    
    const editButton = screen.getByTitle('Edit profile');
    expect(editButton).toHaveAttribute('title', 'Edit profile');
  });
});
```

---

### Example 11: getByTestId (Last Resort)

**Description:** Query by `data-testid` attribute. Use only when other queries don't work.

**CustomComponent.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import CustomComponent from './CustomComponent';

describe('CustomComponent', () => {
  it('finds element by test id', () => {
    render(<CustomComponent />);
    
    // Component: <div data-testid="custom-wrapper">...</div>
    const wrapper = screen.getByTestId('custom-wrapper');
    expect(wrapper).toBeInTheDocument();
  });

  it('should use other queries first', () => {
    render(<CustomComponent />);
    
    // ❌ Bad - using testId when role is available
    // const button = screen.getByTestId('submit-button');
    
    // ✅ Good - using role
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeInTheDocument();
  });
});
```

---

### Example 12: queryBy vs getBy vs findBy

**Description:** Different query variants for different scenarios:
- **getBy**: Throws error if not found (synchronous)
- **queryBy**: Returns null if not found (for asserting non-existence)
- **findBy**: Waits for element (asynchronous, returns Promise)

**VisibilityToggle.spec.tsx**
```typescript
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VisibilityToggle from './VisibilityToggle';

describe('VisibilityToggle Component', () => {
  it('uses queryBy to assert element does not exist', () => {
    render(<VisibilityToggle initialVisible={false} />);
    
    // queryBy returns null if not found (doesn't throw)
    const hiddenElement = screen.queryByText(/hidden content/i);
    expect(hiddenElement).not.toBeInTheDocument();
  });

  it('uses getBy for elements that should exist', () => {
    render(<VisibilityToggle initialVisible={true} />);
    
    // getBy throws error if not found
    const visibleElement = screen.getByText(/visible content/i);
    expect(visibleElement).toBeInTheDocument();
  });

  it('uses findBy for async elements', async () => {
    render(<VisibilityToggle />);
    
    // findBy waits for element to appear (returns Promise)
    const asyncElement = await screen.findByText(/loaded content/i);
    expect(asyncElement).toBeInTheDocument();
  });

  it('shows and hides content on toggle', async () => {
    const user = userEvent.setup();
    render(<VisibilityToggle initialVisible={true} />);
    
    // Initially visible
    expect(screen.getByText(/visible content/i)).toBeInTheDocument();
    
    // Click to hide
    await user.click(screen.getByRole('button', { name: /toggle/i }));
    
    // Should not be in document
    expect(screen.queryByText(/visible content/i)).not.toBeInTheDocument();
  });
});
```

---

### Example 13: findAllByRole vs getAllByRole

**Description:** `findAllByRole` is async and waits for elements. `getAllByRole` is synchronous.

**AsyncList.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import AsyncList from './AsyncList';

describe('AsyncList Component', () => {
  it('waits for async list items with findAllByRole', async () => {
    render(<AsyncList />);
    
    // findAllByRole waits for elements (returns Promise)
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(5);
  });

  it('gets sync list items with getAllByRole', () => {
    render(<AsyncList initialItems={['A', 'B', 'C']} />);
    
    // getAllByRole is synchronous
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });
});
```

---

## User Interactions

### Example 14: userEvent.click()

**Description:** Simulates user clicking on an element. Always use `userEvent.setup()` and `await`.

**Counter.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter Component', () => {
  it('increments counter on button click', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    
    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    
    // Click once
    await user.click(incrementBtn);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
    
    // Click again
    await user.click(incrementBtn);
    expect(screen.getByText(/count: 2/i)).toBeInTheDocument();
  });

  it('decrements counter on button click', async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={5} />);
    
    const decrementBtn = screen.getByRole('button', { name: /decrement/i });
    
    await user.click(decrementBtn);
    expect(screen.getByText(/count: 4/i)).toBeInTheDocument();
  });
});
```

---

### Example 15: userEvent.type()

**Description:** Simulates typing text into an input field. More realistic than `fireEvent.change`.

**Input.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input Component', () => {
  it('updates input value on type', async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Enter name" />);
    
    const input = screen.getByRole('textbox');
    
    await user.type(input, 'John Doe');
    
    expect(input).toHaveValue('John Doe');
  });

  it('types into multiple inputs', async () => {
    const user = userEvent.setup();
    render(
      <form>
        <input aria-label="First Name" />
        <input aria-label="Last Name" />
      </form>
    );
    
    await user.type(screen.getByLabelText(/first name/i), 'John');
    await user.type(screen.getByLabelText(/last name/i), 'Doe');
    
    expect(screen.getByLabelText(/first name/i)).toHaveValue('John');
    expect(screen.getByLabelText(/last name/i)).toHaveValue('Doe');
  });

  it('clears input and types new value', async () => {
    const user = userEvent.setup();
    render(<Input defaultValue="Old Value" />);
    
    const input = screen.getByRole('textbox');
    
    await user.clear(input);
    await user.type(input, 'New Value');
    
    expect(input).toHaveValue('New Value');
  });
});
```

---

### Example 16: fireEvent vs userEvent

**Description:** `userEvent` is recommended as it simulates real user interactions. `fireEvent` is lower-level.

**ComparisonExample.spec.tsx**
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('fireEvent vs userEvent', () => {
  it('using fireEvent.change (old way)', () => {
    render(<Input />);
    
    const input = screen.getByRole('textbox');
    
    // ❌ Less realistic - directly changes value
    fireEvent.change(input, { target: { value: 'Test' } });
    
    expect(input).toHaveValue('Test');
  });

  it('using userEvent.type (recommended)', async () => {
    const user = userEvent.setup();
    render(<Input />);
    
    const input = screen.getByRole('textbox');
    
    // ✅ More realistic - simulates actual typing
    await user.type(input, 'Test');
    
    expect(input).toHaveValue('Test');
  });

  it('fireEvent for specific events', () => {
    const handleFocus = jest.fn();
    render(<Input onFocus={handleFocus} />);
    
    const input = screen.getByRole('textbox');
    
    // fireEvent is useful for specific events
    fireEvent.focus(input);
    
    expect(handleFocus).toHaveBeenCalled();
  });
});
```

---

### Example 17: userEvent.selectOptions()

**Description:** Selects options from a select dropdown.

**SelectDropdown.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectDropdown from './SelectDropdown';

describe('SelectDropdown Component', () => {
  it('selects an option from dropdown', async () => {
    const user = userEvent.setup();
    render(
      <select aria-label="Country">
        <option value="">Select country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
      </select>
    );
    
    const select = screen.getByLabelText(/country/i);
    
    await user.selectOptions(select, 'us');
    
    expect(select).toHaveValue('us');
  });

  it('selects multiple options', async () => {
    const user = userEvent.setup();
    render(
      <select aria-label="Countries" multiple>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
      </select>
    );
    
    const select = screen.getByLabelText(/countries/i);
    
    await user.selectOptions(select, ['us', 'uk']);
    
    expect(select).toHaveValue(['us', 'uk']);
  });
});
```

---

## Assertions

### Example 18: toBeInTheDocument()

**Description:** Asserts that an element is present in the DOM.

**Alert.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import Alert from './Alert';

describe('Alert Component', () => {
  it('shows alert when visible', () => {
    render(<Alert show={true} message="Success!" />);
    
    expect(screen.getByText('Success!')).toBeInTheDocument();
  });

  it('hides alert when not visible', () => {
    render(<Alert show={false} message="Success!" />);
    
    expect(screen.queryByText('Success!')).not.toBeInTheDocument();
  });

  it('shows and hides alert on rerender', () => {
    const { rerender } = render(<Alert show={true} message="Error!" />);
    
    expect(screen.getByText('Error!')).toBeInTheDocument();
    
    rerender(<Alert show={false} message="Error!" />);
    
    expect(screen.queryByText('Error!')).not.toBeInTheDocument();
  });
});
```

---

### Example 19: toHaveTextContent()

**Description:** Asserts that an element contains specific text.

**Greeting.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  it('displays correct text content', () => {
    render(<Greeting name="John" />);
    
    const element = screen.getByRole('heading');
    
    expect(element).toHaveTextContent('Hello, John');
    expect(element).toHaveTextContent(/hello/i);
  });

  it('renders initial count', () => {
    render(<Counter />);
    
    const countText = screen.getByText(/count/i);
    expect(countText).toBeInTheDocument();
    expect(countText).toHaveTextContent('Count: 0');
    expect(countText).toHaveTextContent(/0/);
  });
});
```

---

### Example 20: toHaveAttribute()

**Description:** Asserts that an element has a specific attribute with a specific value.

**Link.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import Link from './Link';

describe('Link Component', () => {
  it('has correct href attribute', () => {
    render(<Link href="https://example.com" target="_blank" />);
    
    const link = screen.getByRole('link');
    
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('has placeholder attribute on input', () => {
    render(<input placeholder="Enter name" />);
    
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Enter name');
  });

  it('has disabled attribute', () => {
    render(<button disabled>Submit</button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('disabled');
    expect(button).toBeDisabled();
  });
});
```

---

### Example 21: toHaveClass()

**Description:** Asserts that an element has specific CSS classes.

**Badge.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge Component', () => {
  it('applies correct CSS classes', () => {
    render(<Badge type="success" text="Active" />);
    
    const badge = screen.getByText('Active');
    
    expect(badge).toHaveClass('badge');
    expect(badge).toHaveClass('badge-success');
    expect(badge).toHaveClass('badge', 'badge-success');
  });

  it('applies multiple classes', () => {
    render(<div className="card shadow rounded">Content</div>);
    
    const element = screen.getByText('Content');
    expect(element).toHaveClass('card');
    expect(element).toHaveClass('shadow');
    expect(element).toHaveClass('rounded');
  });
});
```

---

### Example 22: toHaveLength()

**Description:** Asserts that an array has a specific length.

**ItemList.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

describe('ItemList Component', () => {
  it('renders correct number of items', () => {
    const items = ['Apple', 'Banana', 'Cherry'];
    render(<ItemList items={items} />);
    
    const listItems = screen.getAllByRole('listitem');
    
    expect(listItems).toHaveLength(3);
    expect(listItems.length).toBe(3);
  });

  it('renders empty list', () => {
    render(<ItemList items={[]} />);
    
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
  });
});
```

---

### Example 23: toHaveValue()

**Description:** Asserts the current value of an input element.

**FormInput.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormInput from './FormInput';

describe('FormInput Component', () => {
  it('has correct initial value', () => {
    render(<FormInput defaultValue="Initial" />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Initial');
  });

  it('updates value on user input', async () => {
    const user = userEvent.setup();
    render(<FormInput />);
    
    const input = screen.getByRole('textbox');
    
    await user.type(input, 'New Value');
    
    expect(input).toHaveValue('New Value');
  });

  it('has empty value initially', () => {
    render(<input type="text" />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
  });
});
```

---

### Example 24: toBe() and Comparison Matchers

**Description:** Exact equality and comparison assertions.

**Calculator.spec.tsx**
```typescript
import { add, subtract, calculateScore } from './calculator';

describe('Calculator Functions', () => {
  it('calculates sum correctly', () => {
    const result = add(2, 3);
    
    expect(result).toBe(5);
    expect(result).not.toBe(6);
  });

  it('validates score range', () => {
    const score = calculateScore(85);
    
    expect(score).toBeGreaterThan(50);
    expect(score).toBeGreaterThanOrEqual(85);
    expect(score).toBeLessThan(100);
    expect(score).toBeLessThanOrEqual(85);
  });

  it('handles edge cases', () => {
    expect(add(0, 0)).toBe(0);
    expect(subtract(5, 5)).toBe(0);
  });
});
```

---

### Example 25: toBeNull(), toBeTruthy(), toBeFalsy()

**Description:** Assert null values and truthy/falsy conditions.

**Validation.spec.tsx**
```typescript
import { searchUser, isValidEmail } from './utils';

describe('Validation Functions', () => {
  it('returns null when no results', () => {
    const result = searchUser('nonexistent');
    
    expect(result).toBeNull();
    expect(result).not.toBeDefined();
  });

  it('validates email format', () => {
    const validEmail = isValidEmail('test@example.com');
    const invalidEmail = isValidEmail('invalid');
    
    expect(validEmail).toBeTruthy();
    expect(invalidEmail).toBeFalsy();
  });

  it('checks undefined values', () => {
    let uninitializedVariable;
    
    expect(uninitializedVariable).toBeUndefined();
    expect(uninitializedVariable).not.toBeDefined();
  });
});
```

---

### Example 26: toBeDisabled() and toBeChecked()

**Description:** Assert disabled state and checkbox/radio checked state.

**Checkbox.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  it('is checked when clicked', async () => {
    const user = userEvent.setup();
    render(<input type="checkbox" aria-label="Accept terms" />);
    
    const checkbox = screen.getByRole('checkbox');
    
    expect(checkbox).not.toBeChecked();
    
    await user.click(checkbox);
    
    expect(checkbox).toBeChecked();
  });

  it('is disabled when prop is set', () => {
    render(<input type="checkbox" disabled aria-label="Disabled" />);
    
    const checkbox = screen.getByRole('checkbox');
    
    expect(checkbox).toBeDisabled();
    expect(checkbox).not.toBeEnabled();
  });

  it('toggles checked state', async () => {
    const user = userEvent.setup();
    render(<input type="checkbox" defaultChecked aria-label="Toggle" />);
    
    const checkbox = screen.getByRole('checkbox');
    
    expect(checkbox).toBeChecked();
    
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
    
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
```

---

### Example 27: not.toThrow()

**Description:** Assert that a function does not throw an error.

**ErrorBoundary.spec.tsx**
```typescript
import { render } from '@testing-library/react';
import SafeComponent from './SafeComponent';

describe('SafeComponent', () => {
  it('does not throw error with valid props', () => {
    expect(() => {
      render(<SafeComponent data="valid" />);
    }).not.toThrow();
  });

  it('throws error with invalid props', () => {
    // Suppress console.error for this test
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => {
      render(<SafeComponent data={null} />);
    }).toThrow();
    
    spy.mockRestore();
  });

  it('renders without errors', () => {
    const renderComponent = () => render(<SafeComponent />);
    
    expect(renderComponent).not.toThrow();
  });
});
```

---

## Mock Functions

### Example 28: jest.fn() - Basic Mock

**Description:** Create mock functions to test callbacks and function calls.

**LoginForm.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {
  it('calls onSubmit when button is clicked', async () => {
    const mockSubmit = jest.fn();
    const user = userEvent.setup();
    
    render(<LoginForm onSubmit={mockSubmit} />);
    
    const button = screen.getByRole('button', { name: /submit/i });
    await user.click(button);
    
    expect(mockSubmit).toHaveBeenCalled();
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });

  it('does not call onSubmit when form is invalid', async () => {
    const mockSubmit = jest.fn();
    const user = userEvent.setup();
    
    render(<LoginForm onSubmit={mockSubmit} />);
    
    // Submit without filling required fields
    const button = screen.getByRole('button', { name: /submit/i });
    await user.click(button);
    
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
```

---

### Example 29: toHaveBeenCalledWith()

**Description:** Assert that a mock function was called with specific arguments.

**AddUser.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddUserForm from './AddUserForm';

describe('AddUserForm Component', () => {
  it('calls onAdd with correct user data', async () => {
    const mockOnAdd = jest.fn();
    const user = userEvent.setup();
    
    render(<AddUserForm onAdd={mockOnAdd} />);
    
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.click(screen.getByRole('button', { name: /add/i }));
    
    expect(mockOnAdd).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
    });
  });

  it('calls onClick handler with event', async () => {
    const mockClick = jest.fn();
    const user = userEvent.setup();
    
    render(<button onClick={mockClick}>Click Me</button>);
    
    await user.click(screen.getByRole('button'));
    
    expect(mockClick).toHaveBeenCalled();
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
```

---

### Example 30: Multiple Mock Function Calls

**Description:** Test functions that are called multiple times.

**Counter.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter with Callbacks', () => {
  it('calls onChange multiple times', async () => {
    const mockOnChange = jest.fn();
    const user = userEvent.setup();
    
    render(<Counter onChange={mockOnChange} />);
    
    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    
    expect(mockOnChange).toHaveBeenCalledTimes(3);
    expect(mockOnChange).toHaveBeenNthCalledWith(1, 1);
    expect(mockOnChange).toHaveBeenNthCalledWith(2, 2);
    expect(mockOnChange).toHaveBeenNthCalledWith(3, 3);
  });
});
```

---

## Array and Loop Testing

### Example 31: forEach with Array of Objects

**Description:** Test rendering multiple items from an array using forEach.

**UserTable.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import UserTable from './UserTable';

describe('UserTable Component', () => {
  it('renders multiple users from array', () => {
    const users = [
      { id: 1, name: 'Alice', email: 'alice@test.com' },
      { id: 2, name: 'Bob', email: 'bob@test.com' },
      { id: 3, name: 'Charlie', email: 'charlie@test.com' },
    ];

    render(<UserTable users={users} />);

    // Verify each user is rendered
    users.forEach(user => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
    });
  });

  it('renders correct number of rows', () => {
    const users = [
      { id: 1, name: 'Alice', email: 'alice@test.com' },
      { id: 2, name: 'Bob', email: 'bob@test.com' },
    ];

    render(<UserTable users={users} />);

    const rows = screen.getAllByRole('row');
    // +1 for header row
    expect(rows).toHaveLength(users.length + 1);
  });
});
```

---

### Example 32: Testing Multiple Elements with Loops

**Description:** Use loops to test multiple similar elements.

**ButtonGroup.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

describe('ButtonGroup Component', () => {
  it('renders all buttons and verifies they exist', () => {
    render(<ButtonGroup />);
    
    const buttons = screen.getAllByRole('button');
    
    // Test each button exists
    for (let i = 0; i < buttons.length; i++) {
      expect(buttons[i]).toBeInTheDocument();
    }
  });

  it('verifies button text content', () => {
    const buttonLabels = ['Save', 'Cancel', 'Delete'];
    render(<ButtonGroup labels={buttonLabels} />);
    
    const buttons = screen.getAllByRole('button');
    
    buttonLabels.forEach((label, index) => {
      expect(buttons[index]).toHaveTextContent(label);
    });
  });

  it('all buttons are enabled by default', () => {
    render(<ButtonGroup count={5} />);
    
    const buttons = screen.getAllByRole('button');
    
    buttons.forEach(button => {
      expect(button).toBeEnabled();
      expect(button).not.toBeDisabled();
    });
  });
});
```

---

## Debugging

### Example 33: screen.debug()

**Description:** Print the DOM to help debug test failures.

**Card.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component Debug Example', () => {
  it('debugs the component output', () => {
    render(<Card title="Test Card" />);
    
    // Prints entire DOM to console
    screen.debug();
    
    // Prints specific element
    const heading = screen.getByRole('heading');
    screen.debug(heading);
  });

  it('uses debug when element is not found', () => {
    render(<Card title="Test" />);
    
    // Element not found? Use debug to see what's rendered
    screen.debug();
    
    // Then fix your query
    const title = screen.getByText('Test');
    expect(title).toBeInTheDocument();
  });
});
```

---

### Example 34: Using render debug

**Description:** Access debug from render return value.

**DebugExample.spec.tsx**
```typescript
import { render } from '@testing-library/react';
import ComplexComponent from './ComplexComponent';

describe('Debug from Render', () => {
  it('uses debug from render return', () => {
    const { debug } = render(<ComplexComponent />);
    
    // Print entire component
    debug();
  });

  it('debugs after user interaction', async () => {
    const { debug } = render(<ComplexComponent />);
    
    // Debug before interaction
    debug();
    
    // ... user interactions ...
    
    // Debug after interaction
    debug();
  });
});
```

---

## Asynchronous Testing

### Example 35: waitFor()

**Description:** Wait for assertions to pass (for async state updates).

**AsyncComponent.spec.tsx**
```typescript
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AsyncComponent from './AsyncComponent';

describe('AsyncComponent', () => {
  it('shows success message after async operation', async () => {
    const user = userEvent.setup();
    render(<AsyncComponent />);
    
    await user.click(screen.getByRole('button', { name: /load/i }));
    
    // Wait for success message to appear
    await waitFor(() => {
      expect(screen.getByText(/success/i)).toBeInTheDocument();
    });
  });

  it('waits with timeout', async () => {
    render(<AsyncComponent />);
    
    await waitFor(
      () => {
        expect(screen.getByText(/loaded/i)).toBeInTheDocument();
      },
      { timeout: 3000 } // Wait up to 3 seconds
    );
  });
});
```

---

### Example 36: findBy Queries (Async)

**Description:** `findBy` queries automatically wait for elements (returns Promise).

**LazyLoad.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import LazyLoadComponent from './LazyLoadComponent';

describe('LazyLoadComponent', () => {
  it('loads content asynchronously', async () => {
    render(<LazyLoadComponent />);
    
    // findBy automatically waits (default 1000ms)
    const content = await screen.findByText(/loaded content/i);
    expect(content).toBeInTheDocument();
  });

  it('finds multiple async elements', async () => {
    render(<LazyLoadComponent />);
    
    const items = await screen.findAllByRole('listitem');
    expect(items).toHaveLength(5);
  });

  it('waits with custom timeout', async () => {
    render(<LazyLoadComponent />);
    
    const content = await screen.findByText(
      /slow content/i,
      {},
      { timeout: 5000 } // Wait up to 5 seconds
    );
    expect(content).toBeInTheDocument();
  });
});
```

---

## API Testing

### Example 37: Mocking API Calls with jest.mock()

**Description:** Mock API calls to test components that fetch data.

**UserProfile.spec.tsx**
```typescript
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';

// Mock the API module
jest.mock('./api', () => ({
  fetchUser: jest.fn(),
}));

import { fetchUser } from './api';

describe('UserProfile Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches and displays user data', async () => {
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    };

    (fetchUser as jest.Mock).mockResolvedValue(mockUser);

    render(<UserProfile userId={1} />);

    // Wait for loading to disappear
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(fetchUser).toHaveBeenCalledWith(1);
  });

  it('displays error message on API failure', async () => {
    (fetchUser as jest.Mock).mockRejectedValue(new Error('API Error'));

    render(<UserProfile userId={1} />);

    const errorMessage = await screen.findByText(/error/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
```

---

### Example 38: Mocking fetch()

**Description:** Mock global fetch for testing API calls.

**FetchData.spec.tsx**
```typescript
import { render, screen, waitFor } from '@testing-library/react';
import FetchDataComponent from './FetchDataComponent';

describe('FetchDataComponent', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('fetches and displays data', async () => {
    const mockData = { title: 'Test Post', body: 'Content' };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    render(<FetchDataComponent />);

    await waitFor(() => {
      expect(screen.getByText('Test Post')).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith('/api/posts/1');
  });

  it('handles fetch errors', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network Error'));

    render(<FetchDataComponent />);

    const error = await screen.findByText(/failed to load/i);
    expect(error).toBeInTheDocument();
  });
});
```

---

### Example 39: Testing Loading States

**Description:** Test loading indicators and state transitions.

**DataFetcher.spec.tsx**
```typescript
import { render, screen } from '@testing-library/react';
import DataFetcher from './DataFetcher';

describe('DataFetcher Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('shows loading state then data', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ message: 'Success' }),
    });

    render(<DataFetcher />);

    // Initially shows loading
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for data to appear
    const data = await screen.findByText(/success/i);
    expect(data).toBeInTheDocument();

    // Loading should be gone
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });

  it('displays error state', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Failed'));

    render(<DataFetcher />);

    const errorMessage = await screen.findByText(/error/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
```

---

## Common Mistakes

### 1. ❌ Not Using async/await with userEvent

**Problem:**
```typescript
// ❌ BAD - Not awaiting userEvent
it('wrong test', () => {
  const user = userEvent.setup();
  render(<Counter />);
  
  user.click(screen.getByRole('button')); // Missing await!
  
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument(); // Will fail
});
```

**Solution:**
```typescript
// ✅ GOOD - Always await userEvent
it('correct test', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  
  await user.click(screen.getByRole('button'));
  
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
```

---

### 2. ❌ Using getBy for Elements That Don't Exist

**Problem:**
```typescript
// ❌ BAD - getBy throws error if element doesn't exist
it('wrong test', () => {
  render(<Component />);
  
  const element = screen.getByText('Not Here'); // Throws error!
  expect(element).not.toBeInTheDocument();
});
```

**Solution:**
```typescript
// ✅ GOOD - Use queryBy to assert non-existence
it('correct test', () => {
  render(<Component />);
  
  const element = screen.queryByText('Not Here');
  expect(element).not.toBeInTheDocument();
});
```

---

### 3. ❌ Not Waiting for Async Updates

**Problem:**
```typescript
// ❌ BAD - Not waiting for async state update
it('wrong test', async () => {
  render(<AsyncComponent />);
  
  expect(screen.getByText(/loaded/i)).toBeInTheDocument(); // Fails!
});
```

**Solution:**
```typescript
// ✅ GOOD - Use findBy or waitFor
it('correct test', async () => {
  render(<AsyncComponent />);
  
  // Option 1: findBy (preferred)
  expect(await screen.findByText(/loaded/i)).toBeInTheDocument();
  
  // Option 2: waitFor
  await waitFor(() => {
    expect(screen.getByText(/loaded/i)).toBeInTheDocument();
  });
});
```

---

### 4. ❌ Forgetting to Call userEvent.setup()

**Problem:**
```typescript
// ❌ BAD - Not calling setup()
it('wrong test', async () => {
  render(<Button />);
  
  await userEvent.click(screen.getByRole('button')); // Error!
});
```

**Solution:**
```typescript
// ✅ GOOD - Always call setup() first
it('correct test', async () => {
  const user = userEvent.setup();
  render(<Button />);
  
  await user.click(screen.getByRole('button'));
});
```

---

### 5. ❌ Testing Implementation Details

**Problem:**
```typescript
// ❌ BAD - Testing state directly
it('wrong test', () => {
  const { container } = render(<Counter />);
  const instance = container.querySelector('.counter').__reactInternalInstance$;
  
  expect(instance.state.count).toBe(0);
});
```

**Solution:**
```typescript
// ✅ GOOD - Test behavior/output
it('correct test', () => {
  render(<Counter />);
  
  expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
});
```

---

### 6. ❌ Using getAllByRole When Element Might Not Exist

**Problem:**
```typescript
// ❌ BAD - getAllByRole throws if no elements found
it('wrong test', () => {
  render(<EmptyList />);
  
  const items = screen.getAllByRole('listitem'); // Throws error!
  expect(items).toHaveLength(0);
});
```

**Solution:**
```typescript
// ✅ GOOD - Use queryAllByRole for potentially empty results
it('correct test', () => {
  render(<EmptyList />);
  
  const items = screen.queryAllByRole('listitem');
  expect(items).toHaveLength(0);
});
```

---

### 7. ❌ Not Cleaning Up Mocks

**Problem:**
```typescript
// ❌ BAD - Mocks persist between tests
describe('Tests', () => {
  it('test 1', () => {
    global.fetch = jest.fn().mockResolvedValue({ data: 'test' });
    // ...
  });
  
  it('test 2', () => {
    // fetch is still mocked from test 1!
  });
});
```

**Solution:**
```typescript
// ✅ GOOD - Clean up in afterEach
describe('Tests', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it('test 1', () => {
    global.fetch = jest.fn().mockResolvedValue({ data: 'test' });
    // ...
  });
  
  it('test 2', () => {
    // Clean slate!
  });
});
```

---

### 8. ❌ Using fireEvent Instead of userEvent

**Problem:**
```typescript
// ❌ BAD - fireEvent is less realistic
it('wrong approach', () => {
  render(<Input />);
  
  fireEvent.change(screen.getByRole('textbox'), { 
    target: { value: 'test' } 
  });
});
```

**Solution:**
```typescript
// ✅ GOOD - userEvent simulates real interactions
it('better approach', async () => {
  const user = userEvent.setup();
  render(<Input />);
  
  await user.type(screen.getByRole('textbox'), 'test');
});
```

---

### 9. ❌ Incorrect Query Selection

**Problem:**
```typescript
// ❌ BAD - Using getByTestId when better queries exist
it('wrong query', () => {
  render(<Button>Submit</Button>);
  
  const button = screen.getByTestId('submit-btn');
  expect(button).toBeInTheDocument();
});
```

**Solution:**
```typescript
// ✅ GOOD - Use accessible queries
it('correct query', () => {
  render(<Button>Submit</Button>);
  
  const button = screen.getByRole('button', { name: /submit/i });
  expect(button).toBeInTheDocument();
});
```

---

### 10. ❌ Not Using Regular Expressions for Text Matching

**Problem:**
```typescript
// ❌ BAD - Brittle exact string matching
it('fragile test', () => {
  render(<Component />);
  
  expect(screen.getByText('Welcome, User!')).toBeInTheDocument();
  // Fails if text changes slightly
});
```

**Solution:**
```typescript
// ✅ GOOD - Use regex for flexible matching
it('flexible test', () => {
  render(<Component />);
  
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  // Case-insensitive, matches partial text
});
```

---

### 11. ❌ Forgetting to Mock Third-Party Libraries

**Problem:**
```typescript
// ❌ BAD - Not mocking external dependencies
it('might fail', () => {
  render(<ChartComponent />); // Uses chart.js
  // Test fails because chart.js needs canvas
});
```

**Solution:**
```typescript
// ✅ GOOD - Mock external libraries
jest.mock('chart.js', () => ({
  Chart: jest.fn(),
}));

it('works correctly', () => {
  render(<ChartComponent />);
  expect(screen.getByRole('img')).toBeInTheDocument();
});
```

---

### 12. ❌ Not Testing Accessibility

**Problem:**
```typescript
// ❌ BAD - Not considering accessibility
render(<button>Submit</button>);
const button = screen.getByText('Submit');
```

**Solution:**
```typescript
// ✅ GOOD - Use accessible queries and test aria labels
render(<button aria-label="Submit form">Submit</button>);
const button = screen.getByRole('button', { name: /submit form/i });
expect(button).toHaveAccessibleName('Submit form');
```

---

## Best Practices

### 1. ✅ Use Accessible Queries First

```typescript
// Priority order:
// 1. getByRole
const button = screen.getByRole('button', { name: /submit/i });

// 2. getByLabelText
const input = screen.getByLabelText(/email/i);

// 3. getByPlaceholderText
const search = screen.getByPlaceholderText(/search/i);

// 4. getByText
const heading = screen.getByText(/welcome/i);

// Last resort: getByTestId
const custom = screen.getByTestId('custom-element');
```

---

### 2. ✅ Always Use async/await with userEvent

```typescript
it('user interaction test', async () => {
  const user = userEvent.setup(); // Always setup first
  render(<Component />);
  
  await user.click(element);     // Always await
  await user.type(input, 'text'); // Always await
  await user.clear(input);        // Always await
});
```

---

### 3. ✅ Use describe Blocks for Organization

```typescript
describe('Component Name', () => {
  describe('Rendering', () => {
    it('renders correctly', () => {});
  });
  
  describe('User Interactions', () => {
    it('handles clicks', async () => {});
  });
  
  describe('Edge Cases', () => {
    it('handles errors', () => {});
  });
});
```

---

### 4. ✅ Clean Up After Each Test

```typescript
describe('Tests', () => {
  beforeEach(() => {
    // Setup
  });
  
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    cleanup(); // RTL does this automatically
  });
});
```

---

### 5. ✅ Test Behavior, Not Implementation

```typescript
// ❌ BAD - Testing implementation
expect(component.state.isOpen).toBe(true);

// ✅ GOOD - Testing behavior
expect(screen.getByRole('dialog')).toBeVisible();
```

---

### 6. ✅ Use findBy for Async Elements

```typescript
// ✅ GOOD - Automatically waits
const element = await screen.findByText(/loaded/i);

// Instead of:
await waitFor(() => {
  expect(screen.getByText(/loaded/i)).toBeInTheDocument();
});
```

---

### 7. ✅ Write Descriptive Test Names

```typescript
// ❌ BAD
it('test 1', () => {});

// ✅ GOOD
it('displays error message when email is invalid', () => {});
it('calls onSubmit with form data when submit button is clicked', () => {});
```

---

### 8. ✅ Use Regular Expressions for Flexibility

```typescript
// ✅ GOOD - Case-insensitive, flexible
screen.getByText(/welcome/i);
screen.getByRole('button', { name: /submit/i });

// Avoid:
screen.getByText('Welcome User');
```

---
