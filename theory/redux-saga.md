
REDUX NOTES 
===========

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

- Actions → Objects describing what happened
- Reducers → Pure functions that update state
- Store → Holds the global state tree

**Q4.How does the Redux data flow work?**  

Component → Dispatch(Action) → Reducer → Store updates → UI re-renders

**Q5.What is immutability in Redux?**  

State is never mutated directly; always return a new object using spread or immutable updates.

**Q6.Difference between Redux and Context API.**  

Redux → Centralized store, better for complex state logic  

Context API → Simpler, but causes more re-renders for large apps

**Q7.What are middleware functions in Redux?Why do we need middleware in Redux?**  

Redux middleware sits between dispatching an action and the reducer.
It lets you run code like logging,error handling middleware,async delay.  
Because reducers must be pure and cannot run side-effects.
Middleware allows us to run async logic, call APIs


**Q8.What is Redux Thunk?**  

A middleware that lets you dispatch async functions instead of plain actions — used for API calls.

**Q9.What is Redux Toolkit and its advantages?**  

Official, modern way to write Redux — less boilerplate, includes createSlice, createAsyncThunk, and built-in Immer for immutability

**Q10. Explain createSlice and createAsyncThunk.**  

createSlice → Combines actions + reducers in one place
createAsyncThunk → Handles async logic (like fetching data) easily

```js
const mySlice = createSlice({
  name: "sliceName",

  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers: {
    foo: (state, action) => {
      state.data = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
  },
});
```

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


SAGA NOTES 
=============

