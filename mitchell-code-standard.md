# Code Standards Guide - Best Practices

## Table of Contents
1. [Git PR Process](#git-pr-process)
2. [Redux State Structure](#redux-state-structure)
3. [Redux Best Practices](#redux-best-practices)
4. [Interface Design](#interface-design)
5. [Styling Standards](#styling-standards)
6. [Testing Standards](#testing-standards)
7. [Component Structure](#component-structure)
8. [Path References](#path-references)
9. [Project Structure](#project-structure)

---

## Git PR Process

### 1. PR Size

#### ❌ BAD PR

**PR Title:** Implement New Dashboard with Analytics Features

**Changes (48 files changed):**
- Created new dashboard UI components (15 files)
- Added analytics data fetching services (8 files)
- Implemented charting components (12 files)
- Added new Redux state for analytics (10 files)
- Updated routing configuration (3 files)

**Description:**
```
This PR adds the new analytics dashboard we discussed in the planning meeting. 
I've implemented all the requirements including data visualization, filters, 
and export functionality.
```

**Why this is bad:**
- Too many files changed in one PR
- Multiple features mixed together
- Difficult to review
- High risk of conflicts
- Hard to rollback if issues arise

---

#### ✅ GOOD PR

**PR Title:** Add Dashboard Layout Components

**Changes (7 files changed):**
- Created DashboardLayout component
- Added DashboardHeader component
- Added DashboardSidebar component
- Added basic routing for dashboard pages
- Added unit tests for components

**Description:**
```
This PR implements the basic layout structure for the new analytics dashboard.
It includes the main container components and routing setup, but no actual
analytics functionality yet.

This is the first PR in the analytics dashboard epic (JIRA-123).
Subsequent PRs will add:
1. Analytics data fetching services
2. Chart components
3. Dashboard filters
4. Export functionality

Screenshots:
[Screenshot of basic dashboard layout]

Testing:
- All unit tests pass
- Manually verified responsive behavior on mobile and desktop
```

**Why this is good:**
- Focused on single responsibility
- Easy to review
- Clear description of scope
- Links to related tickets
- Includes testing information

---

### 2. Code Coverage Exemptions

#### ❌ BAD PR

**PR Title:** Add User Authentication Flow

**Changes:**
- Added login form and authentication logic
- Added token management utilities
- Added protected route components

**Code:**
```javascript
// In src/utils/authHelpers.js
/* istanbul ignore next */ // Ignoring this complex function
export function parseJwtToken(token) {
  // Complex token parsing logic
}

/* istanbul ignore file */
// This file is too complex to test
export function generateAuthHeaders() {
  // ...
}
```

**Description:**
```
This PR implements the user authentication flow. I've excluded some 
utility functions from test coverage because they're complex.
```

**Why this is bad:**
- No justification for exemptions
- No approval from director
- No plan to add tests later
- Generic excuses ("too complex")

---

#### ✅ GOOD PR

**PR Title:** Add User Authentication Flow

**Changes:**
- Added login form and authentication logic
- Added token management utilities
- Added protected route components

**Code:**
```javascript
// In src/utils/authHelpers.js
/* istanbul ignore next */
// EXEMPTION REASON: Uses browser-specific crypto APIs that Jest cannot test
// APPROVED BY: @director-username in meeting on 2023-06-15
// TICKET: SECURITY-456 tracks adding integration tests for this function
export function parseJwtToken(token) {
  // Complex token parsing logic using browser crypto
}
```

**Description:**
```
This PR implements the user authentication flow. 

@director-username I've added one test coverage exemption for the JWT parsing
function that uses browser crypto APIs which can't be easily mocked in Jest.
We discussed this on June 15th, and agreed to add integration tests in 
SECURITY-456 ticket instead.

Test coverage is 94% overall with this exemption.
```

**Why this is good:**
- Clear reason for exemption
- Director approval documented
- Ticket reference for future work
- Overall coverage still reported

---

### 3. Approvals

#### ❌ BAD PR

**PR Title:** Update Payment Processing Logic

**Reviewers:**
- @tech-lead (Required)

**Description:**
```
Updated the payment processing logic to handle new payment methods.
Please review and approve.
```

**Comments:**
```
@tech-lead: Looks good! Approved.
[Tech lead approves]

[PR merged by author immediately after tech lead approval]
```

**Why this is bad:**
- Only one reviewer for critical code
- No discussion or questions
- Rushed approval
- Missing second opinion

---

#### ✅ GOOD PR

**PR Title:** Update Payment Processing Logic

**Reviewers:**
- @tech-lead (Required)
- @senior-dev (Required)
- @payment-team-member

**Description:**
```
Updated the payment processing logic to handle new payment methods:
- Added support for Apple Pay
- Updated validation logic for credit cards
- Added error handling for declined transactions

Testing:
- Added unit tests for new validation logic
- Manually tested with test accounts
- Verified in staging environment
```

**Comments:**
```
@tech-lead: Looks good! I especially like the error handling approach. Approved.
[Tech lead approves]

@author: Thanks! @senior-dev could you please review as well?

@senior-dev: The validation logic looks correct. Have you considered adding 
logging for declined transactions?

@author: Good point. I've added transaction logging in the latest commit.

@senior-dev: Perfect, approved!
[Senior dev approves]

[PR merged by author after both required approvals]
```

**Why this is good:**
- Multiple reviewers
- Constructive discussion
- Issues addressed before merge
- Thorough review process

---

### 4. Merging

#### ❌ BAD PR

**PR Title:** Fix Bug in Search Results

**Reviewers:**
- @tech-lead (Required)
- @team-member (Required)

**Description:**
```
Fixed the search results sorting bug reported in JIRA-789.
```

**Timeline:**
```
[Both reviewers approve]

[PR left open for days with no merging]

@another-dev: Hey, is this going to be merged soon? We need this fix.

@author: Oh, I thought someone else would merge it. I'll do it now.

[PR merged 5 days after approval]

@build-bot: Build failed due to merge conflicts.

@author: I'll fix it tomorrow.
```

**Why this is bad:**
- Long delay after approval
- Merge conflicts developed
- No monitoring of build
- No ownership

---

#### ✅ GOOD PR

**PR Title:** Fix Bug in Search Results

**Reviewers:**
- @tech-lead (Required)
- @team-member (Required)

**Description:**
```
Fixed the search results sorting bug reported in JIRA-789.

The fix:
- Corrects the comparison function in the sorting algorithm
- Adds a test case that reproduces the original bug
- Updates documentation for the search API

I'll handle merging once approved.
```

**Timeline:**
```
[Both reviewers approve]

@author: Thanks for the reviews! Merging now and will monitor the build.

[PR merged by author immediately after all approvals]

@build-bot: Build successful! Deployment to staging initiated.

@author: Build successful and verified the fix in staging. Closing ticket JIRA-789.
```

**Why this is good:**
- Clear ownership
- Immediate merge after approval
- Build monitoring
- Ticket closed promptly

---

## Redux State Structure

### DO ✅

1. **Normalize state like a database (objects by ID)**
2. **Flatten state (max 3 levels deep)**
3. **Use domain separation for different data types**
4. **Reference by ID between related entities**
5. **Store collections as objects with separate ID arrays**

---

### Example 1: Normalized State

#### ✅ GOOD

```javascript
{
  posts: {
    data: {
      "post1": { id: "post1", title: "Redux Patterns", authorId: "author1" },
      "post2": { id: "post2", title: "State Management", authorId: "author2" }
    },
    ids: ["post1", "post2"],
    status: {
      isLoading: false,
      error: null,
      lastFetched: "2023-06-15T14:30:00Z"
    }
  },
  authors: {
    data: {
      "author1": { id: "author1", name: "Jane Doe" },
      "author2": { id: "author2", name: "John Smith" }
    },
    ids: ["author1", "author2"],
    status: {
      isLoading: false,
      error: null
    }
  },
  comments: {
    data: {},
    ids: [],
    status: {
      isLoading: true,
      error: null
    }
  }
}
```

**Why this is good:**
- Normalized structure (no duplication)
- Easy to look up by ID (O(1) access)
- Status tracked separately
- Clear data relationships

---

### Example 2: Domain Separation

#### ✅ GOOD

```javascript
{
  domain: {
    vehicles: {
      byId: {
        'v1': { id: 'v1', make: 'Toyota', model: 'Camry' },
        'v2': { id: 'v2', make: 'Honda', model: 'Accord' }
      },
      allIds: ['v1', 'v2']
    },
    parts: {
      byId: {
        'p1': { id: 'p1', name: 'Brake Pad', vehicleId: 'v1' },
        'p2': { id: 'p2', name: 'Oil Filter', vehicleId: 'v1' }
      },
      allIds: ['p1', 'p2']
    }
  }
}
```

**Why this is good:**
- Clear domain boundaries
- Related entities reference by ID
- Consistent structure across domains

---

### Example 3: UI State Separation

#### ✅ GOOD

```javascript
// Temporary uncommitted changes stored in UI state
{
  domain: {
    estimates: {
      byId: {
        'e1': { id: 'e1', name: 'Estimate 1', total: 500 }
      }
    }
  },
  ui: {
    estimates: {
      byId: {
        'e1': { id: 'e1', name: 'Draft Estimate 1', total: 650 }
      }
    }
  }
}
```

**Why this is good:**
- Separates domain data from UI state
- Allows draft changes without mutating source
- Clear distinction between saved and unsaved data

---

### DON'T ❌

1. **Avoid nesting objects deeply**
2. **Don't duplicate data across state**
3. **Don't store derived data (use selectors)**
4. **Don't organize state by view/page**
5. **Don't use arrays for collections of objects**

---

### Example 1: Deep Nesting

#### ❌ BAD

```javascript
{
  user: {
    profile: {
      personal: {
        name: {
          first: "John",
          last: "Doe"
        },
        contact: {
          email: {
            primary: "john@example.com",
            secondary: "johnd@work.com"
          }
        }
      }
    }
  }
}
```

**Why this is bad:**
- Too deeply nested (5+ levels)
- Hard to access data
- Difficult to update immutably

#### ✅ GOOD

```javascript
{
  user: {
    firstName: "John",
    lastName: "Doe",
    primaryEmail: "john@example.com",
    secondaryEmail: "johnd@work.com"
  }
}
```

**Why this is good:**
- Flat structure (1-2 levels)
- Easy to access and update
- Clear property names

---

### Example 2: Data Duplication

#### ❌ BAD

```javascript
{
  activeUser: {
    id: "u1",
    name: "Sarah",
    email: "sarah@example.com",
    role: "admin"
  },
  users: {
    "u1": {
      id: "u1",
      name: "Sarah",
      email: "sarah@example.com",
      role: "admin"
    },
    "u2": {
      id: "u2",
      name: "Mike",
      email: "mike@example.com",
      role: "user"
    }
  }
}
```

**Why this is bad:**
- Sarah's data duplicated
- Updates must happen in two places
- Risk of inconsistency

#### ✅ GOOD

```javascript
{
  activeUserId: "u1",
  users: {
    "u1": {
      id: "u1",
      name: "Sarah",
      email: "sarah@example.com",
      role: "admin"
    },
    "u2": {
      id: "u2",
      name: "Mike",
      email: "mike@example.com",
      role: "user"
    }
  }
}
```

**Why this is good:**
- Single source of truth
- Reference by ID
- No duplication

---

### Example 3: Storing Derived Data

#### ❌ BAD

```javascript
{
  todos: {
    "t1": { id: "t1", text: "Buy milk", completed: true },
    "t2": { id: "t2", text: "Learn Redux", completed: false },
    "t3": { id: "t3", text: "Exercise", completed: true }
  },
  completedCount: 2,
  incompletedCount: 1,
  totalCount: 3
}
```

**Why this is bad:**
- Counts are derived data
- Must update counts manually
- Risk of inconsistency

#### ✅ GOOD

```javascript
{
  todos: {
    "t1": { id: "t1", text: "Buy milk", completed: true },
    "t2": { id: "t2", text: "Learn Redux", completed: false },
    "t3": { id: "t3", text: "Exercise", completed: true }
  }
}

// Use selectors for derived data
export const getCompletedCount = createSelector(
  [getTodos],
  (todos) => Object.values(todos).filter(t => t.completed).length
);
```

**Why this is good:**
- Store only source data
- Calculate derived data with selectors
- Always consistent

---

### Example 4: Organizing by Page/View

#### ❌ BAD

```javascript
{
  dashboardPage: {
    user: { id: "u1", name: "John" },
    recentOrders: [
      { id: "o1", total: 35.99 },
      { id: "o2", total: 24.50 }
    ]
  },
  profilePage: {
    user: { id: "u1", name: "John" }, // Duplicated!
    settings: { theme: "dark" }
  },
  orderPage: {
    currentOrder: { id: "o1", total: 35.99 }, // Duplicated!
    relatedProducts: [...]
  }
}
```

**Why this is bad:**
- Data duplicated across pages
- Organized by UI, not domain
- Inconsistent updates

#### ✅ GOOD

```javascript
{
  users: {
    "u1": { id: "u1", name: "John" }
  },
  orders: {
    "o1": { id: "o1", total: 35.99 },
    "o2": { id: "o2", total: 24.50 }
  },
  settings: {
    theme: "dark"
  },
  ui: {
    currentPage: "profile",
    currentOrderId: "o1"
  }
}
```

**Why this is good:**
- Organized by domain entity
- No duplication
- UI state separate

---

### Example 5: Arrays for Collections

#### ❌ BAD

```javascript
{
  products: [
    { id: "p1", name: "Laptop", price: 999 },
    { id: "p2", name: "Phone", price: 699 },
    { id: "p3", name: "Headphones", price: 149 }
  ]
}

// Finding a product requires O(n) operation
const product = state.products.find(p => p.id === "p2");
```

**Why this is bad:**
- O(n) lookup time
- Inefficient updates
- Difficult to maintain order and access

#### ✅ GOOD

```javascript
{
  products: {
    byId: {
      "p1": { id: "p1", name: "Laptop", price: 999 },
      "p2": { id: "p2", name: "Phone", price: 699 },
      "p3": { id: "p3", name: "Headphones", price: 149 }
    },
    allIds: ["p1", "p2", "p3"]
  }
}

// Finding a product is O(1)
const product = state.products.byId["p2"];
```

**Why this is good:**
- O(1) lookup time
- Easy updates
- Maintain order with allIds array

---

## Redux Best Practices

### DO ✅

1. **Use selectors for accessing state**
2. **Split reducers by domain**
3. **Keep UI state local when possible**
4. **Test reducers and selectors thoroughly**
5. **Use memoization for derived data**

---

### Example 1: Using Selectors

#### ❌ BAD

```javascript
// Direct state access in component
function ProductList() {
  // Directly accessing nested state structure
  const products = useSelector(state => state.entities.products.byId);
  const productIds = useSelector(state => state.entities.products.allIds);
  
  return (
    <div>
      {productIds.map(id => (
        <ProductItem key={id} product={products[id]} />
      ))}
    </div>
  );
}
```

**Why this is bad:**
- Components know state structure
- Hard to refactor state shape
- No reusability

#### ✅ GOOD

```javascript
// selectors.js
export const getProducts = state => state.entities.products.byId;
export const getProductIds = state => state.entities.products.allIds;
export const getAllProducts = state => {
  const products = getProducts(state);
  return getProductIds(state).map(id => products[id]);
};

// Component using selectors
function ProductList() {
  const products = useSelector(getAllProducts);
  
  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
```

**Why this is good:**
- Components don't know state structure
- Selectors are reusable
- Easy to refactor

---

### Example 2: Splitting Reducers

#### ❌ BAD

```javascript
// One large reducer handling multiple domains
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: {
          ...state.users,
          data: action.payload,
          loading: false
        }
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: {
          ...state.products,
          items: [...state.products.items, action.payload]
        }
      };
    case 'UPDATE_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          items: action.payload
        }
      };
    default:
      return state;
  }
};
```

**Why this is bad:**
- Single file handling everything
- Hard to maintain
- Difficult to test

#### ✅ GOOD

```javascript
// users/reducer.js
const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

// products/reducer.js
const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};

// cart/reducer.js
const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case 'UPDATE_CART':
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

// rootReducer.js
const rootReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  cart: cartReducer
});
```

**Why this is good:**
- Each domain has its own reducer
- Easy to maintain and test
- Clear boundaries

---

### Example 3: Keeping UI State Local

#### ❌ BAD

```javascript
// Storing UI state in Redux
// actions.js
export const toggleDropdown = () => ({
  type: 'TOGGLE_DROPDOWN'
});

// reducer.js
const uiReducer = (state = { dropdownOpen: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_DROPDOWN':
      return {
        ...state,
        dropdownOpen: !state.dropdownOpen
      };
    default:
      return state;
  }
};

// Component.jsx
function Dropdown() {
  const isOpen = useSelector(state => state.ui.dropdownOpen);
  const dispatch = useDispatch();
  
  return (
    <div>
      <button onClick={() => dispatch(toggleDropdown())}>
        Toggle Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
        </ul>
      )}
    </div>
  );
}
```

**Why this is bad:**
- Unnecessary Redux complexity
- Local UI state in global store
- Extra boilerplate

#### ✅ GOOD

```javascript
// Using local React state
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
        </ul>
      )}
    </div>
  );
}
```

**Why this is good:**
- Simple local state
- No Redux boilerplate
- Component self-contained

---

### Example 4: Testing Reducers

#### ✅ GOOD

```javascript
// reducer.test.js
describe('todosReducer', () => {
  it('should add a todo when ADD_TODO action is dispatched', () => {
    const initialState = {
      byId: {},
      allIds: []
    };
    
    const action = {
      type: 'ADD_TODO',
      payload: { id: '1', text: 'Learn Redux', completed: false }
    };
    
    const nextState = todosReducer(initialState, action);
    
    expect(nextState.byId['1']).toEqual({
      id: '1',
      text: 'Learn Redux',
      completed: false
    });
    expect(nextState.allIds).toContain('1');
  });
});

// selector.test.js
describe('getCompletedTodos', () => {
  it('should return only completed todos', () => {
    const state = {
      todos: {
        byId: {
          '1': { id: '1', text: 'Learn Redux', completed: true },
          '2': { id: '2', text: 'Write tests', completed: false }
        },
        allIds: ['1', '2']
      }
    };
    
    const result = getCompletedTodos(state);
    
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('1');
  });
});
```

**Why this is good:**
- Clear test descriptions
- Tests actual behavior
- Easy to understand

---

### Example 5: Using Memoization

#### ❌ BAD

```javascript
// Recalculating derived data on every render
function Dashboard() {
  const todos = useSelector(state => state.todos.items);
  
  // This will be recalculated on every render
  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = todos.length - completedCount;
  
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Completed: {completedCount}</p>
      <p>Pending: {pendingCount}</p>
      <TodoList todos={todos} />
    </div>
  );
}
```

**Why this is bad:**
- Recalculated every render
- Performance impact
- No memoization

#### ✅ GOOD

```javascript
// Using memoized selectors
import { createSelector } from 'reselect';

const getTodos = state => state.todos.items;

const getCompletedCount = createSelector(
  [getTodos],
  (todos) => todos.filter(todo => todo.completed).length
);

const getPendingCount = createSelector(
  [getTodos, getCompletedCount],
  (todos, completedCount) => todos.length - completedCount
);

function Dashboard() {
  const todos = useSelector(getTodos);
  const completedCount = useSelector(getCompletedCount);
  const pendingCount = useSelector(getPendingCount);
  
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Completed: {completedCount}</p>
      <p>Pending: {pendingCount}</p>
      <TodoList todos={todos} />
    </div>
  );
}
```

**Why this is good:**
- Memoized calculations
- Only recalculate when dependencies change
- Better performance

---

### DON'T ❌

1. **Don't access state shape directly in components**
2. **Don't put derived data in state**
3. **Don't update multiple domains in single action**
4. **Don't expose unnecessary state to Redux**
5. **Don't create reducers that are too large**

---

### Example: Avoiding Direct State Access

#### ❌ BAD

```javascript
// Directly accessing state shape
function OrderDetails({ orderId }) {
  // Tightly coupled to state structure
  const order = useSelector(state => 
    state.entities.orders.byId[orderId]
  );
  
  // If state shape changes, this component breaks
  const customer = useSelector(state => 
    state.entities.customers.byId[order.customerId]
  );
  
  return (
    <div>
      <h2>Order #{order.number}</h2>
      <p>Customer: {customer.name}</p>
      <p>Total: ${order.total}</p>
    </div>
  );
}
```

**Why this is bad:**
- Knows state structure
- Hard to refactor
- Tightly coupled

#### ✅ GOOD

```javascript
// Using selectors to abstract state shape
// selectors.js
export const getOrderById = (state, orderId) => 
  state.entities.orders.byId[orderId];

export const getCustomerById = (state, customerId) =>
  state.entities.customers.byId[customerId];

export const getCustomerForOrder = createSelector(
  [getOrderById, (state, orderId) => state],
  (order, state) => getCustomerById(state, order.customerId)
);

// Component
function OrderDetails({ orderId }) {
  const order = useSelector(state => getOrderById(state, orderId));
  const customer = useSelector(state => getCustomerForOrder(state, orderId));
  
  return (
    <div>
      <h2>Order #{order.number}</h2>
      <p>Customer: {customer.name}</p>
      <p>Total: ${order.total}</p>
    </div>
  );
}
```

**Why this is good:**
- Abstracted state access
- Easy to refactor
- Loosely coupled

---

### Example: Avoiding Derived Data in State

#### ❌ BAD

```javascript
// Storing derived data in state
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newItems = [...state.items, action.payload];
      // Calculating and storing derived data
      return {
        ...state,
        items: newItems,
        itemCount: newItems.length,
        totalPrice: newItems.reduce((sum, item) => sum + item.price, 0),
        hasDiscountedItems: newItems.some(item => item.discounted)
      };
    }
    default:
      return state;
  }
};
```

**Why this is bad:**
- Derived data stored in state
- Must update manually
- Risk of inconsistency

#### ✅ GOOD

```javascript
// Only storing minimal state
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};

// Using selectors for derived data
export const getCartItems = state => state.cart.items;

export const getCartItemCount = createSelector(
  [getCartItems],
  (items) => items.length
);

export const getCartTotal = createSelector(
  [getCartItems],
  (items) => items.reduce((sum, item) => sum + item.price, 0)
);

export const hasDiscountedItems = createSelector(
  [getCartItems],
  (items) => items.some(item => item.discounted)
);
```

**Why this is good:**
- Minimal state
- Derived data calculated
- Always consistent

---

## Interface Design

### DO ✅

1. **Use strong types instead of any or Function**
2. **Use descriptive prop names with proper prefixes (is, has, on)**
3. **Keep interfaces focused on what the component actually uses**
4. **Break large components into smaller, reusable pieces**
5. **Use optional props for implicit behavior when appropriate**

---

### Example 1: Strong Types

#### ❌ BAD

```typescript
interface BadProps {
  data: any;
  onSubmit: Function;
  config: any;
}
```

**Why this is bad:**
- No type safety
- Hard to understand
- Easy to make mistakes

#### ✅ GOOD

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

interface GoodProps {
  users: User[];
  onSubmit: (formData: { name: string; email: string }) => void;
  config: {
    showHeader: boolean;
    maxItems: number;
  };
}
```

**Why this is good:**
- Type safe
- Self-documenting
- Catches errors early

---

### Example 2: Descriptive Prop Names

#### ❌ BAD

```typescript
interface BadProps {
  disabled: boolean; // What is disabled?
  loading: boolean; // What is loading?
  click: () => void; // Click what?
  change: (value: string) => void; // Change what?
}
```

**Why this is bad:**
- Ambiguous names
- Hard to understand
- No context

#### ✅ GOOD

```typescript
interface GoodProps {
  isButtonDisabled: boolean;
  isDataLoading: boolean;
  hasErrors: boolean;
  onButtonClick: () => void;
  onInputChange: (value: string) => void;
}
```

**Why this is good:**
- Clear naming
- Proper prefixes
- Self-documenting

---

### DON'T ❌

1. **Avoid breaking changes to existing interfaces**
2. **Don't use shell-specific props like isInWorkCenter**
3. **Don't forward props that your component doesn't use**
4. **Don't use redundant props that overlap in functionality**
5. **Don't create "superviews" with 30+ props**

---

### Example: Avoiding Breaking Changes

#### ❌ BAD

```typescript
// Version 1
interface UserCardProps {
  user: {
    name: string;
    email: string;
  };
}

// Version 2 - Breaking change!
interface UserCardProps {
  user: {
    firstName: string; // Changed from name
    lastName: string; // Added required prop
    email: string;
  };
}
```

**Why this is bad:**
- Breaking change
- Old code breaks
- Migration required

#### ✅ GOOD

```typescript
// Version 1
interface UserCardProps {
  user: {
    name: string;
    email: string;
  };
}

// Version 2 - Backward compatible
interface UserV2 {
  firstName: string;
  lastName: string;
  email: string;
}

interface UserCardPropsV2 {
  user: UserV2 | { name: string; email: string };
  useNewFormat?: boolean;
}
```

**Why this is good:**
- Backward compatible
- Gradual migration
- No breaking changes

---

## Styling Standards

### DO ✅

1. **Use design tokens/constants for colors, spacing, etc.**
2. **Reuse shared styles from your design system**
3. **Use semantic variable names for measurements**

---

### Example 1: Design Tokens

#### ❌ BAD

```javascript
// Hardcoded values scattered throughout components
const Button = styled.button`
  background-color: #0066cc;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;
```

**Why this is bad:**
- Hardcoded values
- Duplication
- Hard to maintain

#### ✅ GOOD

```javascript
// Design tokens in a separate file
// tokens.ts
export const colors = {
  primary: '#0066cc',
  white: '#ffffff',
  black: '#000000',
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};

export const borderRadius = {
  sm: '2px',
  md: '4px',
  lg: '8px',
};

export const shadows = {
  sm: '0px 1px 2px rgba(0, 0, 0, 0.1)',
  md: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  lg: '0px 4px 8px rgba(0, 0, 0, 0.3)',
};

// Using tokens in components
const Button = styled.button`
  background-color: ${colors.primary};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.md};
`;

const Card = styled.div`
  background-color: ${colors.white};
  padding: ${spacing.md};
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.md};
`;
```

**Why this is good:**
- Centralized tokens
- Reusable values
- Easy to maintain

---

### DON'T ❌

1. **Don't hardcode CSS values like colors or pixel values**
2. **Don't create view-specific styles when shared styles exist**
3. **Don't use magic numbers in your CSS**

---

### Example: Avoiding Magic Numbers

#### ❌ BAD

```javascript
// Magic numbers with no explanation
const ProgressBar = styled.div`
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${props => props.percent}%;
  background-color: #0066cc;
  transition: width 0.3s ease;
`;

// Usage with unexplained numbers
function TaskProgress() {
  return (
    <div style={{ marginBottom: 24 }}>
      <ProgressBar>
        <ProgressFill percent={37} />
      </ProgressBar>
      <div style={{ marginTop: 8, fontSize: 12 }}>37% Complete</div>
    </div>
  );
}
```

**Why this is bad:**
- Magic numbers
- No context
- Hard to understand

#### ✅ GOOD

```javascript
// Constants with meaningful names
import { colors, spacing, borderRadius } from './tokens';

const PROGRESS_HEIGHT = '8px';
const LABEL_FONT_SIZE = '12px';
const ANIMATION_DURATION = '0.3s';

const ProgressBar = styled.div`
  height: ${PROGRESS_HEIGHT};
  background-color: ${colors.backgroundLight};
  border-radius: ${borderRadius.sm};
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${props => props.percent}%;
  background-color: ${colors.primary};
  transition: width ${ANIMATION_DURATION} ease;
`;

const ProgressLabel = styled.div`
  margin-top: ${spacing.xs};
  font-size: ${LABEL_FONT_SIZE};
  color: ${colors.textSecondary};
`;

// Usage with task progress from props
function TaskProgress({ task }) {
  const progressPercent = Math.round(
    (task.completedSteps / task.totalSteps) * 100
  );
  
  return (
    <div style={{ marginBottom: spacing.md }}>
      <ProgressBar>
        <ProgressFill percent={progressPercent} />
      </ProgressBar>
      <ProgressLabel>{progressPercent}% Complete</ProgressLabel>
    </div>
  );
}
```

**Why this is good:**
- Named constants
- Clear purpose
- Easy to understand

---

## Testing Standards

### DO ✅

1. **Aim for 100% code coverage for new components**
2. **Write descriptive test names that explain component behavior**
3. **Test all component states and interactions**
4. **Improve coverage when modifying legacy components**

---

### Example: Comprehensive Testing

#### ❌ BAD

```javascript
// Only testing the "happy path" of a component
describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

// Missing tests for:
// - Disabled state
// - Loading state
// - Different variants
// - Error handling
// - Keyboard accessibility
```

**Why this is bad:**
- Only happy path tested
- Missing edge cases
- No accessibility testing

#### ✅ GOOD

```javascript
describe('Button', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Button>Click me</Button>);
    const button = getByText('Click me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-primary');
    expect(button).not.toBeDisabled();
    expect(button).not.toHaveClass('btn-loading');
  });
  
  it('renders with correct variant classes', () => {
    const { getByText, rerender } = render(
      <Button variant="secondary">Click me</Button>
    );
    expect(getByText('Click me')).toHaveClass('btn-secondary');
    
    rerender(<Button variant="danger">Click me</Button>);
    expect(getByText('Click me')).toHaveClass('btn-danger');
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick} disabled>Click me</Button>
    );
    const button = getByText('Click me');
    expect(button).toBeDisabled();
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
  
  it('shows loading state and disables button when isLoading=true', () => {
    const handleClick = jest.fn();
    const { getByText, getByTestId } = render(
      <Button onClick={handleClick} isLoading>Click me</Button>
    );
    
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
    expect(getByText('Click me')).toBeDisabled();
    
    fireEvent.click(getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });
  
  it('is accessible via keyboard', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    const button = getByText('Click me');
    
    // Focus and press Enter
    button.focus();
    expect(document.activeElement).toBe(button);
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    // Press Space
    fireEvent.keyDown(button, { key: ' ', code: 'Space' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
```

**Why this is good:**
- All states tested
- Edge cases covered
- Accessibility tested

---

### DON'T ❌

1. **Don't exclude files from test coverage without approval**
2. **Don't submit PRs with failing tests**
3. **Don't write tests just for coverage without meaningful assertions**
4. **Don't ignore browser compatibility issues**

---

## Component Structure

### DO ✅

1. **Keep components focused on a single responsibility**
2. **Use implicit behavior when it simplifies the API**
3. **Provide sensible defaults for optional props**
4. **Handle edge cases gracefully**

---

### Example: Single Responsibility

#### ❌ BAD

```javascript
// A component that does too many things
const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  
  // Fetch user data
  useEffect(() => { /* ... */ }, []);
  
  // Fetch notifications
  useEffect(() => { /* ... */ }, []);
  
  // Handle tab change, edit toggle, input change, submit...
  
  return (
    <div className="dashboard">
      {/* Massive JSX mixing header, tabs, profile, settings, activity */}
    </div>
  );
};
```

**Why this is bad:**
- Too many responsibilities
- Hard to test
- Difficult to maintain

#### ✅ GOOD

```javascript
// Broken down into focused components

// Custom hook for user data
const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch logic...
  
  return { user, isLoading, error, updateUser };
};

// Notifications component
const NotificationsList = () => {
  // Fetch and display notifications
};

// Tab navigation component
const TabNavigation = ({ activeTab, onTabChange, tabs }) => {
  // Tab UI
};

// Profile components
const ProfileView = ({ user }) => { /* ... */ };
const ProfileEditForm = ({ user, onSave, onCancel }) => { /* ... */ };
const ProfileTab = ({ user, updateUser }) => { /* ... */ };

// Main dashboard component
const UserDashboard = () => {
  const { user, isLoading, error, updateUser } = useUser();
  const [activeTab, setActiveTab] = useState('profile');
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="dashboard">
      <header>
        <h1>Welcome, {user.name}</h1>
        <NotificationsList />
      </header>
      
      <TabNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        tabs={tabs} 
      />
      
      <main>
        {activeTab === 'profile' && <ProfileTab user={user} updateUser={updateUser} />}
        {/* Other tabs */}
      </main>
    </div>
  );
};
```

**Why this is good:**
- Single responsibility
- Easy to test
- Reusable components

---

## Path References

### Absolute Paths

#### DO ✅
- Use absolute paths when importing from outside your domain
- Reference the root index of external domains

#### DON'T ❌
- Use relative paths for external domains
- Reference specific files within external domains

---

### Example: Absolute Paths

#### ❌ BAD

```typescript
// Inside src/domain/vehicles/VehicleList.tsx

// Bad: Using relative paths for external domains
import { formatCurrency } from '../../common/utils/formatters';
import { Button } from '../../../ui/components/Button';
import { fetchData } from '../../../../services/api';

// Bad: Referencing specific files within external domains
import { PartInterface } from 'src/domain/parts/interfaces/partInterfaces';
import { calculateTax } from 'src/domain/pricing/utils/taxCalculator';
```

**Why this is bad:**
- Complex relative paths
- Hard to refactor
- Deep imports into other domains

#### ✅ GOOD

```typescript
// Inside src/domain/vehicles/VehicleList.tsx

// Good: Using absolute paths for external domains
import { formatCurrency } from 'src/common/utils';
import { Button } from 'src/ui/components';
import { fetchData } from 'src/services';

// Good: Referencing the root index of external domains
import { PartInterface } from 'src/domain/parts';
import { calculateTax } from 'src/domain/pricing';
```

**Why this is good:**
- Clear imports
- Easy to refactor
- Public API imports

---

### Relative Paths

#### DO ✅
- Use relative paths for imports within your domain
- Keep path references clear and concise

#### DON'T ❌
- Use absolute paths for same-domain imports
- Reference your domain's barrel file

---

### Example: Relative Paths

#### ❌ BAD

```typescript
// Inside src/domain/vehicles/components/VehicleDetail.tsx

// Bad: Using absolute paths for same-domain imports
import { VehicleInterface } from 'src/domain/vehicles/interfaces';
import { fetchVehicleById } from 'src/domain/vehicles/services';
import { vehicleActions } from 'src/domain/vehicles/actions';

// Bad: Referencing your domain's barrel file
import { VehicleCard } from 'src/domain/vehicles';
```

**Why this is bad:**
- Absolute paths for same domain
- Importing from own barrel file

#### ✅ GOOD

```typescript
// Inside src/domain/vehicles/components/VehicleDetail.tsx

// Good: Using relative paths for same-domain imports
import { VehicleInterface } from '../interfaces';
import { fetchVehicleById } from '../services';
import { vehicleActions } from '../actions';

// Good: Using relative paths for sibling components
import { VehicleCard } from './VehicleCard';
```

**Why this is good:**
- Simple relative paths
- Clear structure
- Easy to understand

---

## Project Structure

### Redux Project Structure

```
src/
├── domain/
│   ├── vehicles/
│   │   ├── componentNameActions.ts
│   │   ├── componentNameReducers.js
│   │   ├── componentNameSelectors.js
│   │   ├── ComponentName.tsx
│   │   ├── componentNameServices.ts
│   │   ├── componentNameSaga.ts
│   │   ├── Interface.ts
│   │   ├── ComponentNameConstant.ts
│   │   └── enum.ts
│   └── parts/
│       └── [same structure]
├── app/
│   ├── actions.ts
│   ├── store.ts
│   ├── styles.style.ts
│   ├── components.tsx
│   ├── services.ts
│   ├── saga.ts
│   ├── interface.ts
│   ├── constant.ts
│   └── enum.ts
└── ui/
    ├── actions.js
    ├── reducers.js
    ├── selectors.js
    ├── interface.ts
    └── constants.ts
```

---

### Hierarchy

**Follow the established hierarchy: App → UI → Domain**

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                      APP NAMESPACE                          │
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐  │
│  │                 │  │                 │  │             │  │
│  │  UI NAMESPACE   │  │  UI NAMESPACE   │  │     ...     │  │
│  │  (Vehicle)      │  │  (Part)         │  │             │  │
│  │                 │  │                 │  │             │  │
│  └────────┬────────┘  └────────┬────────┘  └─────────────┘  │
│           │                    │                            │
└───────────┼────────────────────┼────────────────────────────┘
            │                    │
┌───────────▼────────┐  ┌────────▼───────────┐
│                    │  │                    │
│  DOMAIN NAMESPACE  │◄─┤  DOMAIN NAMESPACE  │
│  (Vehicle)         │  │  (Part)           │
│                    │  │                    │
└────────────────────┘  └────────────────────┘
```

---

### Example Code Structure

#### Reducer Example

```javascript
// Good Example - Domain-specific reducer
const initialState = {
  byId: {},
  allIds: []
};

function partsReducer(state = initialState, action) {
  switch (action.type) {
    case 'PART_ADDED':
      return {
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload
        },
        allIds: [...state.allIds, action.payload.id]
      };
    default:
      return state;
  }
}
```

---

#### Selector Example

```javascript
// Good Example - Memoized selector
import { createSelector } from 'reselect';

const getParts = state => state.domain.parts.byId;
const getVehicleId = (state, vehicleId) => vehicleId;

// Derived data - don't store this in state
export const getPartsForVehicle = createSelector(
  [getParts, getVehicleId],
  (parts, vehicleId) => {
    return Object.values(parts).filter(part => part.vehicleId === vehicleId);
  }
);
```

---

#### Action Example

```javascript
// Good Example - Action creator
export const addPart = (part) => ({
  type: 'PART_ADDED',
  payload: part
});

// Action with side effects using Thunk
export const fetchParts = () => async (dispatch) => {
  dispatch({ type: 'PARTS_LOADING' });
  try {
    const response = await api.getParts();
    dispatch({ type: 'PARTS_LOADED', payload: response.data });
  } catch (error) {
    dispatch({ type: 'PARTS_ERROR', payload: error.message });
  }
};
```

---

#### Component Example

```javascript
// ✅ GOOD Example - Container component
// PartsListContainer.js
import { connect } from 'react-redux';
import { getPartsForVehicle, getIsLoading } from './selectors';
import { addPart, removePart } from './actions';
import PartsList from './PartsList';

const mapStateToProps = (state, ownProps) => ({
  parts: getPartsForVehicle(state, ownProps.vehicleId),
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = {
  onAddPart: addPart,
  onRemovePart: removePart
};

export default connect(mapStateToProps, mapDispatchToProps)(PartsList);

// PartsList.js - Pure presentational component
const PartsList = ({ parts, isLoading, onAddPart, onRemovePart }) => {
  if (isLoading) {
    return <div>Loading parts...</div>;
  }

  return (
    <div className="parts-list">
      <h2>Vehicle Parts</h2>
      {parts.length === 0 ? (
        <p>No parts found for this vehicle</p>
      ) : (
        <ul>
          {parts.map(part => (
            <li key={part.id}>
              {part.name} - ${part.price}
              <button onClick={() => onRemovePart(part.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => onAddPart({ name: 'New Part', price: 0 })}>
        Add Part
      </button>
    </div>
  );
};

export default PartsList;
```

---

