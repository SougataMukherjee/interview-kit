
REDUX THEORY NOTES 
==============================

**Q1.What is Redux and why is it used?**
Redux is a state management library that stores application data in one central store, making state predictable, shared, and easier to manage across components
when use:
- Large and complex state shared across many components(E commerce,dashboard,chat app,admin panel)
- Frequent state updates (user actions, forms, filters, carts)
- Multiple data sources (API calls, caching, async logic)
- Scalable architecture (actions, reducer, store)

```txt
         (User Interaction)
             UI Component
                  │
                  │ dispatch(action)
                  ▼
              ┌─────────┐
              │ Action   │  (What happened?)
              └─────────┘
                  │
                  ▼
              ┌─────────┐
              │ Reducer  │  (Update state based on action)
              └─────────┘
                  │
                  ▼
              ┌─────────┐
              │  Store   │  (Holds updated global state)
              └─────────┘
                  │
                  ▼
           UI Re-Rendered with New State

```
```js
// reducer.js
const initialState = { count: 0 };

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// component.jsx
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </>
  );
}

```

**Q2.What are the core principles of Redux?**
Single source of truth (one store)
State is read-only (immutable)
Changes via pure functions (reducers)

**Q3.What are actions, reducers, and the store?**
Actions → Objects describing what happened
Reducers → Pure functions that update state
Store → Holds the global state tree

**Q4.How does the Redux data flow work?**
Component → Dispatch(Action) → Reducer → Store updates → UI re-renders

**Q5.What is immutability in Redux?**
State is never mutated directly; always return a new object using spread or immutable updates.

**Q6.Difference between Redux and Context API.**
Redux → Centralized store, better for complex state logic
Context API → Simpler, but causes more re-renders for large apps

**Q7.What are middleware functions in Redux?**
Middleware sits between dispatch and reducer, used for logging, async calls, or modifying actions.

**Q8.What is Redux Thunk?**
A middleware that lets you dispatch async functions instead of plain actions — used for API calls.

**Q9.What is Redux Toolkit and its advantages?**
Official, modern way to write Redux — less boilerplate, includes createSlice, createAsyncThunk, and built-in Immer for immutability

**Q10. Explain createSlice and createAsyncThunk.**
createSlice → Combines actions + reducers in one place
createAsyncThunk → Handles async logic (like fetching data) easily

**Q11.What is the purpose of useSelector and useDispatch?**
useSelector → Access Redux state in components
useDispatch → Send actions to the store

**Q12.What is the difference between local and global state?**
Local state → Specific to one component (useState)
Global state → Shared across app (Redux store)

**Q13.How to debug Redux apps?**
Use Redux DevTools Extension to inspect actions, state changes, and time travel debugging.

**Q14.What are extraReducers in Redux Toolkit?**
Used inside createSlice to handle actions from other slices or async thunks.

**Q15.What is reselect and how does it improve performance?**
A library for creating memoized selectors, improving performance by avoiding unnecessary re-renders


Zustand THEORY NOTES 
===================

**Q1.What is Zustand and how is it different from Redux?**
Zustand is a lightweight state-management library for React.
Unlike Redux, it requires less boilerplate, no reducers or actions, and works with hooks for simpler global state handling.

**Q2.What is a store in Zustand?**
A store is a centralized object that holds your app’s state and actions — similar to Redux store but simpler

**Q3.How do you create and use a Zustand store?**
```js
import { create } from 'zustand';
const useStore = create(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 }))
}));
const count = useStore(state => state.count);
```

**Q4.How does Zustand handle re-renders efficiently?**
Zustand re-renders only the components that use the changed state slice, not all subscribers — improving performance.

**Q5.Difference between global and local state in Zustand?**
Global state: Shared across multiple components via the store.
Local state: Used within a single component (via useState).

**Q6.How to persist Zustand state?**
Use the persist middleware:
import { persist } from 'zustand/middleware';
const useStore = create(persist(set => ({ count: 0 }), { name: 'app-storage' }));


**Q7.What is the use of subscribe and getState?**
subscribe() → Listen for store changes manually (outside React).
getState() → Access current store state directly.

**Q8.How to integrate middleware in Zustand?**
Zustand supports middlewares like persist, devtools, and immer by wrapping the store:
create(devtools(persist(...)));

**Q9.Difference between shallow and deep comparison in Zustand?**
Shallow comparison: Checks only top-level changes (faster).
Deep comparison: Checks nested objects deeply (slower).
Zustand uses shallow compare to avoid unnecessary re-renders