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