# 🧪 React Testing Notes (Jest / RTL / Vitest)

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
## 1. Test Lifecycle Hooks

---

**`beforeAll`** — runs once before all tests (heavy setup, e.g. DB connection)

**`afterAll`** — runs once after all tests (final cleanup)

**`beforeEach`** — runs before every single test (fresh setup)

**`afterEach`** — runs after every single test (cleanup)

```tsx
beforeAll(() => {
  connectToDatabase(); // only once
});

afterAll(() => {
  jest.resetAllMocks();
});

beforeEach(() => {
  render(<Component {...props} />);
});

afterEach(() => {
  jest.clearAllMocks();
  expect.hasAssertions();
});
```

**Execution order for `it('test1')`, `it('test2')`:**
```
beforeEach → test1 → afterEach
beforeEach → test2 → afterEach
```

---
## 2.1 `describe`

as long as the nesting reflects meaningful groupings. The goal is to organize tests by behavior

```tsx
describe('MyComponent', () => {
  describe('Rendering', () => {
    it('renders the title', () => {});
    it('renders the button', () => {});
  });

  describe('Interactions', () => {
    it('calls onClick when the button is clicked', () => {});
    it('opens the modal', () => {});
  });

  describe('Updates', () => {
    it('updates when props change', () => {});
    it('displays loading state', () => {});
  });
});
```
---
## 2.2. `describe.only` / `it.only`

---

📝 Runs **only** the marked block/test, skips all others in the file — useful for debugging a single failing test.

```tsx
describe.only('UserProfile', () => {
  it('renders user name', () => {});
});

it.only('should show loading state', () => {});
```

⚠️ Remove `.only` before committing — otherwise other tests get silently skipped in CI.

---

## 3. `act()` — React Update Handling

---

📝 Ensures state/UI updates finish before assertions run. RTL's `render`, `fireEvent`, and `userEvent` already wrap in `act` internally — use manually only for raw state updates (e.g. inside hooks tests).

```tsx
act(() => {
  result.current.increment();
});

act(() => {
  fireEvent.click(getByText('Increment'));
});

act(() => {
  rerender(<User name="Alice" />);
});
```

---

## 4. Mocks — Jest Core API

---

📝 A mock is a fake version of a real function/API, used to isolate the unit under test.

**Top 6 Jest APIs**
1. `jest.mock(moduleName, factory?)` — replace a module with a fake
2. `jest.fn(implementation?)` — create a mock function
3. `jest.spyOn(object, methodName)` — watch/replace a method, keeps original if needed
4. `jest.clearAllMocks()` — resets call count/state (keeps implementation)
5. `jest.resetAllMocks()` — resets calls AND removes implementation
6. `jest.requireActual(moduleName)` — get the real, unmocked module

```tsx
jest.mock('./service');
mockApi.mockResolvedValue({ data: 'test' });   // fake success
mockApi.mockRejectedValue('error');            // fake failure

const myMock = jest.fn(() => 'Hello');
jest.fn().mockReturnValue(5); // always returns 5
```

⚠️ You **cannot** call `jest.mock()` for the same module twice in one file — the second call is silently ignored.

**`jest.spyOn` example**
```tsx
const user = { getName: () => 'John' };
const spy = jest.spyOn(user, 'getName');

user.getName();
expect(spy).toHaveBeenCalled(); // ✅
```

**Mock jest.requireActual()**

Used when you want to mock only part of a module/hook/utility.

```tsx
// math.js

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

//test

jest.mock('./math', () => ({
  ...jest.requireActual('./math'),
  add: jest.fn(() => 100),
}));
add(2, 3);       // 100
subtract(5, 2);  // 3 (real function)

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));
```

---

## 5. `userEvent` vs `fireEvent`

---

📝 `userEvent` simulates **realistic browser behavior** (focus, hover, keyboard events) — prefer it over `fireEvent`. `fireEvent` dispatches a raw DOM event only.

```tsx
// ✅ Preferred — userEvent (always async, always await)
const user = userEvent.setup();
await user.click(button);
await user.type(input, 'Hello');
await user.clear(input);

// ⚠️ fireEvent — lower-level, less realistic
fireEvent.click(button);
fireEvent.change(input, { target: { value: 'Hello' } });
```

✅ Do **not** wrap `user.click` in `waitFor` — it already handles waiting internally.
```tsx
await user.click(vendorOption); // ✅ correct
```

---

## 6. Asynchronous Testing — `waitFor` / `findBy`

---

📝 Use these when UI updates after an async action (API call, state update).

```tsx
// ✅ findBy — built-in wait, cleanest for async elements
const element = await screen.findByText(/loaded/i);

// ✅ waitFor — wrap custom/multiple assertions
await waitFor(() => {
  expect(screen.getByText(/loaded/i)).toBeInTheDocument();
});
```

**`getBy` vs `findBy`**

| Feature | `getBy` | `findBy` |
|---|---|---|
| Type | Sync | Async |
| Waits? | ❌ No | ✅ Yes |
| Use case | Immediate UI | Delayed UI |

**Full async flow example**
```tsx
it('fetches and displays user data', async () => {
  global.fetch = vi.fn().mockResolvedValueOnce({
    json: async () => ({ name: 'John' }),
  });

  render(<UserProfile userId={4} />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: /john/i })).toBeInTheDocument();
  });
});
```

---

## 7. Queries — RTL

---

📝 Priority order: `getByRole` → `getByLabelText` → `getByPlaceholderText` → `getByText` → `getByTestId` (last resort).

```tsx
screen.getByRole('button', { name: /submit/i });   // accessible role
screen.getByLabelText(/username/i);                // form input via label
screen.getByPlaceholderText(/search/i);             
screen.getByText('Submit');                         // visible text
screen.getByAltText('profile picture');             // image alt
screen.getByTitle('Close');                         // title attribute
screen.getByTestId('btn');                          // last resort

// Safe negative test — returns null if not found
screen.queryByText('Error');

// Async
await screen.findByText('Loaded');
await screen.findAllByRole('button');
```

---

## 8. Debugging Tools

---

```tsx
import { logRoles, prettyDOM } from '@testing-library/dom';

screen.debug();               // prints full DOM
logRoles(container);          // shows accessible roles
console.log(prettyDOM(container, undefined, { maxLength: 500 }));
```

---

## 9. Assertions Cheat Sheet

---

```tsx
expect(5).toBe(5);                          // exact match
expect(button).not.toBeInTheDocument();
expect(obj).toHaveProperty('name');
expect([1, 2, 3]).toHaveLength(3);
expect(button).toHaveAttribute('disabled');
expect(1).toBeTruthy();
expect(0).toBeFalsy();
expect(value).toBeDefined();
expect(value).toBeUndefined();
expect(nullValue).toBeNull();
expect(button).toBeDisabled();
expect(checkbox).toBeChecked();
expect(console.log).not.toThrow();

// Function call checks
expect(mockFn).toHaveBeenCalledWith('test');
expect(mockFn).toHaveBeenCalledTimes(2);
```

**`toEqual` vs `toStrictEqual`**
```tsx
expect({ a: 1 }).toEqual({ a: 1, b: undefined });        // ✅ passes
expect({ a: 1 }).toStrictEqual({ a: 1, b: undefined });  // ❌ fails (checks undefined keys too)
```

Other matchers: `toMatch()`, `toMatchObject()`, `toBeLessThan()`, `toBeLessThanOrEqual()`, `toThrow()`

---

## 10. `document` vs `screen`

---

📝 Always prefer `screen` (RTL) over raw `document` — it's accessibility-focused and framework-aware.

```tsx
// ❌ Avoid — native DOM API
document.querySelector('.submit-btn');
document.getElementById('title');

// ✅ Preferred — RTL
screen.getByRole('button', { name: /submit/i });
screen.getByRole('heading', { name: /title/i });
```

---

## 11. `unmount()`

---

📝 Simulates removing a component from the DOM — useful to verify cleanup (e.g. no memory leaks, subscriptions removed).

```tsx
const { unmount } = render(<Component />);
unmount();
// assert no crash / cleanup verified
```

---

## 12. `renderHook` (Custom Hooks)

---

```tsx
it('increments counter', () => {
  const { result } = renderHook(() => useCounter(0));
  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
});
```

---

## 13. Risky Test Pattern — Avoid Conditional Assertions

---

📝 If the element is `null`, an `if` block is skipped and **no assertion runs** — the test passes falsely.

```tsx
// ❌ Risky
const text = screen.queryByText(/My Shop/);
if (text) {
  expect(text).toBeInTheDocument();
}

// ✅ Always assert directly
expect(screen.getByText(/My Shop/)).toBeInTheDocument();
```

✅ Also ensure every test has at least one assertion:
```tsx
afterEach(() => expect.hasAssertions());
```

---

## 14. Type Assertion for DOM Elements

---

```tsx
const input = screen.getByTestId('name-input') as HTMLInputElement;
input.value = 'John';
expect(input.value).toBe('John');

const dropdown = screen.getByTestId('country') as HTMLSelectElement;
expect(dropdown.value).toBe('India');

const btn = screen.getByTestId('primary-btn') as HTMLButtonElement;
btn.disabled = true;
```

---

## 15. Generic Component Test Structure

---

```tsx
describe('ComponentName', () => {
  const mockHandler = jest.fn();
  const defaultProps = { onAction: mockHandler };

  const renderComponent = (props = {}) =>
    render(<ComponentName {...defaultProps} {...props} />);

  afterEach(() => jest.clearAllMocks());

  describe('Rendering', () => {
    it('should render component without crashing', () => {
      renderComponent();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('should trigger action on click', async () => {
      const user = userEvent.setup();
      renderComponent();
      await user.click(screen.getByRole('button'));
      expect(mockHandler).toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty props safely', () => {
      renderComponent({ onAction: undefined });
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });
});
```

---

## 16. Custom Renderer with Store/Theme Providers

---

📝 A reusable currying render function to inject Redux store (mock or real) and Theme provider per test.

```tsx
export function createRenderer<TProps>(Component: React.ComponentType<TProps>, defaultProps: TProps) {
  return (overrides: Partial<TProps> = {}, options: any = {}) => {
    const { withStore, mockStore = true, initialState = {}, reducers } = options;
    let ui = <Component {...defaultProps} {...overrides} />;
    let store;

    if (withStore) {
      store = mockStore
        ? configureMockStore([])(initialState)
        : configureStore({ reducer: reducers, preloadedState: initialState });
      ui = <Provider store={store}>{ui}</Provider>;
    }

    return { ...render(ui), store, dispatch: store?.dispatch, getState: store?.getState };
  };
}
```

**Usage**
```tsx
const { container, store, dispatch } = createRenderer(MyComponent, defaultProps)(
  {},
  { withStore: true, initialState: createMockState() }
);

dispatch(myAction());
expect(store.getActions()).toContainEqual(myAction());
```

---

## 17. Best Practices — Quick Reference

---

✅ Use accessible queries first (`getByRole` → `getByLabelText` → `getByText` → `getByTestId` last)

✅ Always `await` `userEvent` actions

✅ Organize tests with nested `describe` blocks (Rendering / Interactions / Edge Cases)

✅ Clean up after each test: `jest.clearAllMocks()`, `jest.restoreAllMocks()`

✅ Test **behavior**, not implementation

```tsx
// ❌ BAD - implementation detail
expect(component.state.isOpen).toBe(true);

// ✅ GOOD - behavior
expect(screen.getByRole('dialog')).toBeVisible();
```

✅ Prefer `findBy` over manual `waitFor` for simple async lookups

✅ Write descriptive test names starting with `'should'`

```tsx
// ❌ BAD
it('test 1', () => {});

// ✅ GOOD
it('should display error message when email is invalid', () => {});
```

✅ Use regex for flexible, case-insensitive text matches
```tsx
screen.getByText(/welcome/i);
screen.getByRole('button', { name: /submit/i });
```

✅ Test description should not mention implementation details (variable/function/constant names)

✅ Avoid logic (`if`, loops) inside test bodies