# 📋 Code Review Checklist

## 1. Requirements & Planning

---

✅ Document requirements, user flows, finalize component names, required props (non-default, default, optional), local and global states, review designs, common components and usages
✅ Identify reusable components and patterns with design mockups before coding
✔️ Cross-check with Figma Design
- Match layout, spacing, typography, and interactions
- Validate component hierarchy before coding

✔️ Check existing implementation
- Verify if similar section/component already exists
- Reuse instead of creating new
- Avoid duplicate UI/logic

---

## 2. Project Structure

---

**Use absolute paths for different modules**
```tsx
// ✅ Do
import { X } from 'src/constants';

// ❌ Don't use deep nested imports
import { X } from '../../../../constants/work-in-process-report/FinancialSummaryConstants';
```

---

## 3. Exports/Imports

---

✔️ Use index barrel exports, avoid direct named export

```tsx
// ✅ Do - use export * in index files, organize with Alt+Shift+O
export * from './Component';

// ❌ Don't use
export { Component } from './Component';
```

✔️ **Import order standard**
1. External libraries
2. Absolute imports (`src/...`)
3. Relative (`./`, `../`)

✔️ **Use path-based imports for better bundle size**
```tsx
// ✅ Do
import Grid from '@mui/material/Grid';

// ❌ Avoid top-level imports
import { Grid } from '@mui/material';
```

---

## 4. Constants & Interfaces & State Variables

---

✔️ Wrap all UI text with `translateFn`
✔️ Avoid raw strings

**Create prefixed constants**
```tsx
const WORK_IN = 'work-in';
const WORK_IN_HEADER = `${WORK_IN}-header`;
// extend common interfaces
```

❌ Don't use `as const` in constant files, avoid hardcoded values

✔️ **Merge constants into objects**
```tsx
export const WORK_IN_CONSTANTS = {
  HEADER: 'work-in-header',
  FOOTER: 'work-in-footer'
};
```

✔️ Spell check all constants
✔️ Use meaningful boolean naming (is/has/should)

```tsx
// ✅ Do
const isVisible: boolean = true;
const hasError: boolean = false;

// ❌ Don't use double negation for readability
{!!value}
// prefer
Boolean(value)
```

**🔹 When to use `null` vs `undefined`?**

*Object/Array state [] / API data*
```tsx
// ✅ Using null
const [profile, setProfile] = useState(null);

// ⚠️ Using undefined
const [profile, setProfile] = useState();
```

*Form inputs*
```tsx
// ✅ Using ''
const [name, setName] = useState("");

// ⚠️ Using undefined
const [name, setName] = useState(undefined);
```

**Falsy value checks**
```tsx
const price = 0 || false || '';

if (price !== null && price !== undefined) {
  console.log("Price exists"); // ✅ runs, but rejects: null, undefined
}

if (price) {
  console.log("Price exists"); // ❌ does not execute — rejects false, 0, "", null, undefined, NaN
}
```

---

## 5. Component Structure

---

✅ Do: Break large components into smaller ones (✔️ split large components)
✅ Avoid adding new stateful logic and JSX into one component. Move stateful logic & side effects to custom hooks, and JSX to child components.

```tsx
// ❌ Bad
function Dashboard() {
  return (
    <div>
      <header>Header</header>
      <section>Content</section>
      <footer>Footer</footer>
    </div>
  );
}

// ✅ Good
function Header() {
  return <header>Header</header>;
}

function Content() {
  return <section>Content</section>;
}

function Footer() {
  return <footer>Footer</footer>;
}

function Dashboard() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
```

✅ Do: Proper structure with TSDoc
```tsx
/**
 * @interface IProps
 * @property title - Component title @example ABC.tsx
 * @property isVisible - Controls visibility
 */
```

✔️ Separate interface files (NOT inside component)
✔️ Interface naming = file name prefix with `I`
✔️ Maintain props order in interface: (1. Required 2. Default values 3. Optional (at last))

```tsx
interface IProps {
  title: string;           // Required
  isVisible?: boolean;     // Optional
}

export const Component: React.FC<IProps> = ({ title, isVisible = false }) => {
  const handleClick = useCallback(() => {}, []); // Functions outside return
  const shouldShow = isVisible && title;          // Conditional variables above return
  return <div>{shouldShow && <Content />}</div>;
};
```

✅ Do: Use arrow functions and spread/rest operator
❌ Don't use: no implicit return or missing return type

```tsx
const fetchData = async (params: object) => ({ ...defaultParams, ...params });
const [first, ...rest] = items;
```

✅ Every function should have comments describing what it does
✔️ Avoid empty functions

```tsx
const handleClick = (): void => {
  // TODO: Implement click logic
};
```

✅ No unused props being passed
✅ Do accessibility-friendly checks in Lighthouse
✅ Use semantic HTML (always first priority) — use native HTML elements before ARIA:

```
<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>,
<table>, <thead>, <tbody>, <th>, <tr>, <td>
```

Else use `role` attribute:
```
role="banner" | "navigation" | "main" | "search" | "form" | "article" | "section" |
"heading" | "list" | "listitem" | "tooltip" | "table" | "row" | "button" | "link" |
"searchbox" | "textbox" | "option" | "menu" | "tab" | "grid" | "switch" | "alert" |
"slider" | "img" | "input" | "select"
```

✅ Use ARIA only if semantic elements are not available (start with `aria-*`)
- `aria-label` — for inputs or icons without visible text
- `aria-hidden` — hide decorative SVGs from screen readers
- `aria-expanded` — use for accordion
- `aria-labelledby` — label using existing text
- `aria-required` — for required field
- `aria-modal` — for dialogs

❌ Avoid using `<div>` where semantic tags exist.

**Use correct elements for actions vs navigation**
- Buttons → actions
- Links (`<a>`) → navigation

```tsx
<button>Save</button>
<a href="/profile">Go to Profile</a>
```

❌ Don't use `<div>` or `<span>` as buttons.

**Images must have meaningful alt text**
```tsx
// ✅ Informative image
<img src="chart.png" alt="Sales increased by 20% in Q1" />
```

✅ For keyboard accessibility
- Support Enter & Space
- Escape closes modals, menus

✅ For focus elements
- `tabindex="0"` → focusable
- `tabindex="-1"` → programmatic focus only

✅ Group similar values under enum
```tsx
enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger'
}
```

✅ Use accessibility attributes
```tsx
<input
  type="search"
  placeholder={placeholder}
  aria-label="Search products"
  role="searchbox"
  onChange={onSearch}
/>
```

---

## 🎨 Styling & UI

### 6. Styling Standards

---

✔️ Use Mag tokens (updated) — ❌ avoid Mi tokens
✅ Use MUI Grid with `item` and `container`, responsive breakpoints

```tsx
// ✔️ Use
<Grid item xs={12}>       {/* Takes full width (100%) of container — sections, rows */}
<Grid item xs="auto">     {/* Width based on content size — buttons, icons */}
<Grid item>               {/* No explicit size defined — basic layouts */}

// ❌ Avoid
<Grid>   // behaves like div
```

```css
@media (min-width: ${Mag.layoutBreakpointSm}) { /* Mobile */ }
```

✅ Use flex and grid
❌ Avoid absolute positioning
❌ Avoid `!important`
❌ Don't create style folders inside components, use CSS Grid, hardcode values
❌ Don't use inline styles

```tsx
// ❌ Avoid
<Box sx={{ padding: 2 }}>
```

✔️ Use external styling (CSS / styled / theme tokens)

---

### 7. Responsive Design

---

✅ Test all breakpoints: Mobile `${Mi.layoutBreakpointSm}` = 600px, Tablet `${Mi.layoutBreakpointMd}` = 960px, Desktop `${Mi.layoutBreakpointLg}` = 1280px

```tsx
import useMediaQuery from '@mui/material/useMediaQuery';
const isMobileScreen = useMediaQuery('(max-width: 600px)');
```

---

## 📝 Code Quality

### 8. Documentation & Naming

---

✅ Use TSDoc with `@param` `@returns` `@property`, give meaningful names for boolean variables and interfaces: `isLoading`, `hasError`, `IWorkInProcessProps`
Maintain the order of interface (required, default value, optional at last)

```tsx
const isLoading = true;
const hasError = false;

interface IWorkInProcessHeaderProps {
  // Properties
}
```

❌ Don't use: `any` / `unknown` / `Object` type

✅ Import translations:
```tsx
import { ITranslation } from 'src/common/interface/ITranslation';
import { defaultTranslateFn } from 'src/common/utility/TranslationUtilities';
```

---

### 9. Conditional Logic

---

```tsx
// ✅ Do: Proper function checks and switch statements
if (onSearch) {
  onSearch(value);
}

// ❌ Don't use
onSearch && onSearch(value);
```

```tsx
// ✅ Use switch instead of multiple if-else
switch (status) {
  case 'loading':
    return <LoadingSpinner />;
  case 'error':
    return <ErrorMessage />;
  case 'success':
    return <SuccessContent />;
  default:
    return <DefaultContent />;
}
```

```tsx
// ✅ Conditional variables above return
const shouldShowHeader = isVisible && !isLoading;
const canEdit = hasPermission && !isReadOnly;

return (
  <div>
    {shouldShowHeader && <Header />}
    {canEdit && <EditButton />}
  </div>
);
```

```tsx
// ✅ Avoid filter().map() - use if-else inside map
const items = data.map(item => {
  if (item.isVisible) {
    return <ItemComponent key={item.id} item={item} />;
  }
  return null;
});
```

---

### 10. useEffect Optimization

---

```tsx
// ✅ Proper cleanup to prevent memory leaks
React.useEffect(() => {
  const subscription = subscribe();

  return () => {
    subscription.unsubscribe(); // Cleanup
  };
}, []);

// ✅ Avoid redundant useEffects
// Combine related effects when possible
```

---

### 11. Error Handling & Resilience

---

✔️ Handle all API failures gracefully
```tsx
try {
  const data = await fetchData();
} catch (error) {
  setError(true);
}
```

✔️ Show proper UI states:
- Loading
- Empty
- Error

---

## ⚡ Performance

### 12. Optimization

---

✅ Use `React.memo`, `useCallback`, `useMemo`, avoid `filter().map()` — use conditional inside map
✔️ Prevent re-renders
✅ Cleanup useEffect: `return () => subscription.unsubscribe()`
✅ No unnecessary re-render and prevent memory leak

```tsx
export const Component = React.memo<IComponentProps>(({ prop1, prop2 }) => {
  // Component logic
});

const handleClick = React.useCallback(() => {
  // Handler logic
}, [dependency]);

const expensiveValue = React.useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

---

## 🧪 Testing

### 13. Test Coverage & Organization

---

✔️ Use Jest functions instead of DOM selectors
❌ Avoid: `document.querySelector()`
✔️ Merge similar test cases

✅ 100% TSX and test coverage, test all props/events/edge cases, use `querySelector` not `getElementById`
✅ Don't test multiple concerns in the same test, avoid logic in tests
✅ Define types, write default props, mock functions/constants/array of objects separately, use `renderWrapper {...defaultProps}` pattern, separate test files when dividing components
❌ Don't overcomplicate test setup, remove redundant tests after coverage check

---

### 14. Test Structure

---

✔️ Remove unused code
✔️ Remove unnecessary test cases
✔️ Keep tests minimal and relevant
✔️ Avoid risky test cases — if text is `null`, the `if` block is skipped and no assertion runs, so the test passes falsely

```tsx
it('should display shop name', () => {
  render(<Components {...defaultProps} shopName="My Shop" />);
  const text = screen.queryByText(/My Shop/);

  // ❌ Risk: test passes even if element is missing
  if (text) {
    expect(text).toBeInTheDocument();
  }

  // ✅ Always assert directly (no conditions)
  expect(screen.getByText(/My Shop/)).toBeInTheDocument();
});
```

✔️ Use type assertion like `HTMLLabelElement`, `HTMLOptionElement`, `HTMLDivElement`, `HTMLSpanElement`, `HTMLParagraphElement`, `HTMLHeadingElement`

```tsx
const primaryBtn = screen.getByTestId('primary-btn') as HTMLButtonElement;
primaryBtn.disabled = true; // ✅
primaryBtn.click();         // ✅

const input = screen.getByTestId('name-input') as HTMLInputElement;
input.value = 'John';               // ✅
expect(input.value).toBe('John');   // ✅

const dropdown = screen.getByTestId('country') as HTMLSelectElement;
expect(dropdown.value).toBe('India'); // ✅

// Without type assertion
const primaryBtn = screen.getByTestId('primary-btn');
primaryBtn.disabled // ❌ Error
```

✔️ Use mock data from speedWord files

```tsx
// ✅ Do: Simple setup with default props
// ✅ Do: Define types in test files
interface MockProps {
  title: string;
  onSearch: jest.Mock;
  isVisible?: boolean;
}

const defaultProps: MockProps = {
  title: 'Test Title',
  onSearch: jest.fn(),
  isVisible: true
};

const renderComponent = (props: Partial<MockProps> = {}) => {
  return render(<Component {...defaultProps} {...props} />);
};
```

---

## 📚 Storybook

### 15. Implementation

---

✅ Use `alert()` instead of `console.log`, test all device breakpoints with viewport parameters

---

## 🚀 Pre-PR Checklist

### 16. Final Quality Check

---

✅ Remove console.logs, remove all commented-out code, format with Prettier, organize imports (Alt+Shift+O), no hardcoded values, avoid undefined unless necessary
✅ 100% test case coverage, all tests passing, remove failing tests if necessary (after coverage check)

---

### 17. PR Standards & PR Strategy

---

✅ Meaningful title: `(MCR)feat: Add ComponentName with responsive design`
✅ Detailed description with what/why changed, build checks passed with snapshot
✅ Keep PR under 20 files
✔️ Break work into small, manageable PRs — one PR = one feature / small unit, avoid large PRs

✔️ Maintain PR flow:
1. Base structure PR
2. Logic PR
3. Styling PR
4. Testing PR

✅ Use `// TODO:` comments for pending tasks

---

## 📌 General Notes

---

- Avoid writing business logic in connected components.
- In tests, prefer `user-event` over `fireEvent` because `user-event` simulates realistic browser behaviour.
- Ideally, test descriptions should not mention implementation details like variable, function, or constant names.
- Test case descriptions should always start with `'should'`.