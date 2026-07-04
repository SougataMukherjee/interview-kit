
📋 Code Review Checklist

1. Requirements & Planning
---------------------------

✅ Document requirements, user flows, finalize component names, require props(non-default,default,optional),local and global states, review designs,common components and usages
✅ Identify reusable components and patterns with Design mockups before coding
✔️ Cross-check with Figma Design

Match layout, spacing, typography, and interactions
Validate component hierarchy before coding
✔️ Check existing implementation

Verify if similar section/component already exists
Reuse instead of creating new
Avoid duplicate UI/logic


2. Project Structure
----------------------

✅ Use absolute paths for different modules: from 'src/constants'
❌ Don't use deep nested imports: '../../../../constants/work-in-process-report/FinancialSummaryConstants'

3. Exports/Imports
--------------------
✔️ Use index barrel exports Avoid direct named export
✅ Use export * from './Component' in index files and organize with Alt+Shift+O
❌ Don't use export { Component } from './Component'
✔️ Import Order Standard

External libraries
Absolute imports (src/...)
Relative (./, ../)
✔️ Use path-based imports for better bundle size import Grid from '@mui/material/Grid';
❌ Avoid top-level imports: import { Grid } from '@mui/material';


4. Constants & Interfaces & states variables
--------------------------------------------

✔️ Wrap all UI text with translateFn
✔️ Avoid raw strings
✅ Create prefixed constants: 
const WORK_IN = 'work-in';
const WORK_IN_HEADER = `${WORK_IN}-header`; 
extend common interfaces
❌ Don't use 'as const' in constant files, avoid hardcoded values
✔️ Merge constants into objects
export const WORK_IN_CONSTANTS = {
  HEADER: 'work-in-header',
  FOOTER: 'work-in-footer'
};
✔️ Spell check all constants
✔️ Use meaningful boolean naming (is/has/should)
✅ const isVisible: boolean = true;
✅ const hasError: boolean = false;
❌ Don’t use: Avoid double negation for readability {!!value} prefer Boolean(value)
🔹🔹 when use null when use undefined?
	Object/Array state [] /API data
	✅ Using null
	const [profile, setProfile] = useState(null);

	⚠️ Using undefined
	const [profile, setProfile] = useState();

	Form inputs
	✅ Using ''
	const [name, setName] = useState("");
	⚠️ Using undefined
	const [name, setName] = useState(undefined);

const price = 0 or false or '';	
if (price !== null && price !== undefined) {
  console.log("Price exists"); // ✅ runs but  Rejects: null, undefined
}
if (price) {
  console.log("Price exists"); //❌ not execute because rejects false, 0, "", null, undefined, NaN
}


5. Component Structure
-----------------------

✅ Do: Break large components into smaller ones (✔️ Split large components)
✅Avoid adding new stateful logic and JSX into one component. Move stateful logic & side effects to custom hooks and JSX to children component

❌ Bad:
function Dashboard() {
  return (
    <div>
      <header>Header</header>
      <section>Content</section>
      <footer>Footer</footer>
    </div>
  );
}
✅ Good:
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
✅ Do: Proper structure with TSDoc
/**
 * @interface IProps
 * @property title - Component title @example ABC.tsx
 * @property isVisible - Controls visibility
 */
✔️ Separate interface files (NOT inside component)
✔️ Interface naming = file name prefix with I
✔️ Maintain props order in interface: (1.Required  2.Default values 3.Optional (at last) )
interface IProps {
  title: string;           // Required
  isVisible = false
  isVisible?: boolean;     // Optional
}

export const Component: React.FC<IProps> = ({ title, isVisible = false }) => {
  const handleClick = useCallback(() => {}, []); // Functions outside return
  const shouldShow = isVisible && title; // Conditional variables above return
  return <div>{shouldShow && <Content />}</div>;
};

✅ Do: Use Arrow functions and spread/rest operator
❌ Don't use: no implicit return or missing return type
const fetchData = async (params: object) => ({ ...defaultParams, ...params });
const [first, ...rest] = items;

✅ Every function should have comments describing what it does
✔️ Avoid empty functions
const handleClick = (): void => {
  // TODO: Implement click logic
};

✅ No unused props being passed
✅ Do accessibility friendly and check in lighthouse 
✅Use Semantic HTML (Always First Priority)
Use native HTML elements before ARIA.
 <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>,
<table>, <thead>, <tbody>, <th>, <tr>, <td>
else use role attribute
role="banner" | "navigation" |"main" | "search" | "form" | "article" | "section" | "heading" | "list" | "listitem" | "tooltip" | "table" | "row" | "button" | "link" |
"searchbox" | "textbox" | "option" | "menu" | "tab" | "grid" | "switch" | "alert" | "slider" | "img" | "input" | "select" 

✅Use ARIA only if semantic elements are not available. start wit area-*
aria-label -For inputs or icons without visible text
aria-hidden - Hide decorative SVGs from screen readers
aria-expanded - use for accordian
aria-labelledby- label using existing text
aria-label-
area-required-for required field
area-model- for dialogs
❌ Avoid using <div> where semantic tags exist.


✅Use Correct Elements for Actions vs Navigation
Buttons → actions
Links (<a>) → navigation
<button>Save</button>
<a href="/profile">Go to Profile</a>

❌ Don’t use <div> or <span> as buttons.

Images Must Have Meaningful Alt Text
✅ Informative image:
<img src="chart.png" alt="Sales increased by 20% in Q1">

✅ for Keyboard Accessibility
Support Enter & Space
Escape closes modals, menus
✅ for focus elements
tabindex="0" → focusable
tabindex="-1" → programmatic focus only


✅ Group similar values under enum
enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger'
}
✅ Use accessibility attributes
<input
    type="search"
    placeholder={placeholder}
    aria-label="Search products"
    role="searchbox"
    onChange={onSearch}
  />

🎨 Styling & UI
6. Styling Standards
-------------------------
✔️ Use Mag tokens (Updated) ❌ Avoid Mi tokens
✅ Use MUI Grid with item and container, responsive breakpoints
✔️ Use: <Grid item xs={12}>(Takes full width (100%) of container Sections, rows) 
         <Grid item xs="auto">(Width is based on content size ,Buttons, icons) 
		 <Grid item>(No explicit size is defined Basic layouts)
❌ Avoid:<Grid>   // behaves like div
@media (min-width: ${Mag.layoutBreakpointSm}) { /* Mobile */ }
✅ Use flex and grid, 
❌avoid absolute positioning
❌ Avoid !important
❌ Don't create style folders inside components, use CSS Grid, hardcode values
❌ Don't use inline styles <Box sx={{ padding: 2 }}>
✔️ Use external styling (CSS / styled / theme tokens)



7. Responsive Design
---------------------

✅ Test all breakpoints: Mobile ${Mi.layoutBreakpointSm}=600px, Tablet ${Mi.layoutBreakpointMd}=960px, Desktop ${Mi.layoutBreakpointLg}=1280px
import useMediaQuery from '@mui/material/useMediaQuery';
const isMobileScreen = useMediaQuery('(max-width: 600px)');
📝 Code Quality
8. Documentation & Naming
----------------------------

✅ Use TSDoc with @param @returns @property, give meaningful names for boolean variables and interfaces: isLoading, hasError, IWorkInProcessProps
maintain the order of interface (required, default value, optional at last)
const isLoading = true;
const hasError = false;
interface IWorkInProcessHeaderProps {
  // Properties
}

// ❌ Don't use: no any/unknown/Object type

✅ Import translations: 
import { ITranslation } from 'src/common/interface/ITranslation'
import { defaultTranslateFn } from 'src/common/utility/TranslationUtilities';
9. Conditional Logic
-----------------------

// ✅ Do: Proper function checks and switch statements
// ✅ Check function existence properly
if (onSearch) {
  onSearch(value);
}

// ❌ Don't use
onSearch && onSearch(value);

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

// ✅ Conditional variables above return
const shouldShowHeader = isVisible && !isLoading;
const canEdit = hasPermission && !isReadOnly;

return (
  <div>
    {shouldShowHeader && <Header />}
    {canEdit && <EditButton />}
  </div>
);

// ✅ Avoid filter.map() - use if-else inside map
const items = data.map(item => {
  if (item.isVisible) {
    return <ItemComponent key={item.id} item={item} />;
  }
  return null;
});
12. useEffect Optimization
// ✅ Proper cleanup to prevent memory leaks
React.useEffect(() => {
  const subscription = subscribe();
  
  return () => {
    subscription.unsubscribe(); // Cleanup
  };
}, []);

// ✅ Avoid redundant useEffects
// Combine related effects when possible

✅ 16. Error Handling & Resilience 
-----------------------------------
✔️ Handle all API failures gracefully
try {
  const data = await fetchData();
} catch (error) {
  setError(true);
}
✔️ Show proper UI states:

Loading
Empty
Error

⚡ Performance
11. Optimization
-------------------

✅✔️ Use: Use React.memo, useCallback, useMemo, avoid filter().map() - use conditional inside map
✔️ Prevent re-renders
✅ Cleanup useEffect: return () => subscription.unsubscribe()
✅ No unnecessory re-render and prevent memory leak
export const Component = React.memo<IComponentProps>(({ prop1, prop2 }) => {
  // Component logic
});

const handleClick = React.useCallback(() => {
  // Handler logic
}, [dependency]);

const expensiveValue = React.useMemo(() => {
  return heavyCalculation(data);
}, [data]);

🧪 Testing
12. Test Coverage & Organization
----------------------------------

✔️ Use Jest functions instead of DOM selectors
❌ Avoid: document.querySelector()
✔️ Merge similar test cases

✅ 100% TSX and test coverage, test all props/events/edge cases, use querySelector not getElementById
✅ Don't test multiple concerns in same test and Avoid logic in tests
✅ Define types, use separately write default props,mock fun,const,array of object and renderWrapper {...defaultProps} pattern, separate test files when dividing components
❌ Don't overcomplicate test setup, remove redundant tests after coverage check
13. Test Structure
--------------------
✔️ Remove unused code
✔️ Remove unnecessary test cases
✔️ Keep tests minimal and relevant
✔️avoid risky test case
If text === null, the if block is skipped,no assertion runs test falsy
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


✔️ with type assertion like HTMLLabelElement,HTMLOptionElement,HTMLDivElement,HTMLSpanElement,HTMLParagraphElement,HTMLHeadingElement  

const primaryBtn = screen.getByTestId('primary-btn') as HTMLButtonElement;
primaryBtn.disabled = true; ✅ 
primaryBtn.click(); ✅

const input = screen.getByTestId('name-input') as HTMLInputElement;
input.value = 'John';✅ 
expect(input.value).toBe('John'); ✅ 

const dropdown = screen.getByTestId('country') as HTMLSelectElement;
expect(dropdown.value).toBe('India');✅ 

//Without type assertion
const primaryBtn = screen.getByTestId('primary-btn');
primaryBtn.disabled // ❌ Error

✔️ Use mock data from speedWord files
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


📚 Storybook
14. Implementation
----------------------

✅ Use alert() instead of console.log, test all device breakpoints with viewport parameters
🚀 Pre-PR Checklist
14. Final Quality Check

✅ Remove console.logs, Remove all commented out code, format with Prettier, organize imports(Alt+Shift+O), No hardcoded values,Avoid undefined unless necessary
✅ 100% test case coverage,All tests passing, Remove failing tests if necessary (after coverage check)
✅ 
15. PR Standards & PR Strategy
------------------

✅ Meaningful title: (MCR)feat: Add ComponentName with responsive design
✅ Detailed description with what/why changed, build checks passed with snapshot
✅ Keep PR under 20 files
✔️ Break work into small, manageable PRs
One PR = one feature / small unit
Avoid large PRs
✔️ Maintain PR flow:
Base structure PR
Logic PR
Styling PR
Testing PR
✅ Use // TODO: comments for pending tasks


========================

Avoid writing business logic in connected components.

in test Prefer user-event over fireEvent because user-event simulates realistic browser behaviour.

Ideally, test description should not mention implementation details like variables, functions, constants names.

testcase should always start from 'should' and Avoid a