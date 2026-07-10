# React-Redux with Redux-Saga Complete Guide (TypeScript)

## Table of Contents
1. [Introduction to Redux](#introduction-to-redux)
2. [Introduction to Redux-Saga](#introduction-to-redux-saga)
3. [Generator Functions](#generator-functions)
4. [Redux Saga Effects](#redux-saga-effects)
5. [Basic Project Structure](#basic-project-structure)
6. [Core Concepts](#core-concepts)
7. [Project 1: E-commerce Product CRUD](#project-1-e-commerce-product-crud)
8. [Project 2: Image Gallery with Infinite Scroll](#project-2-image-gallery-with-infinite-scroll)
9. [Debugging Techniques](#debugging-techniques)
10. [Common Mistakes](#common-mistakes)
11. [Best Practices](#best-practices)

---

## Introduction to Redux

### What is Redux?

**Redux** is a state management library that stores application data in one central store, making state predictable, shared, and easier to manage across components.

### Key Principles
1. **Single Source of Truth** - One centralized store for entire app state
2. **State is Read-Only** - Only way to change state is by dispatching actions
3. **Changes with Pure Functions** - Reducers are pure functions that return new state

<img src="./img/redux.png" alt="redux" />

### When to Use Redux

✅ **Use Redux When:**
- Large and complex state shared across many components
  - E-commerce applications
  - Dashboards
  - Chat applications
  - Admin panels
- Frequent state updates (user actions, forms, filters, shopping carts)
- Multiple data sources (API calls, caching, async logic)
- Need scalable architecture (actions, reducers, store)

❌ **Don't Use Redux When:**
- Small applications with minimal state
- State is only used in a few components
- Simple parent-child component communication
- Using React Context is sufficient

---

## Introduction to Redux-Saga

### What is Redux-Saga?

**Redux-Saga** is a middleware library that handles side effects (API calls, async operations, Debouncing, Caching) in Redux applications using **generator functions**.
<img src="./img/saga.png" alt="saga" />

### Why Use Redux-Saga?

✅ **Advantages:**
- Cleaner async logic (compared to Redux Thunk)
- Easier to test (pure generator functions)
- Better error handling
- Cancellable operations
- Debouncing and throttling built-in
- Sequential and parallel async operations

### How Redux-Saga Works

```
User Action → Saga Middleware → Generator Function → API Call → Action Dispatch → Reducer → Store Update
```

---

## Generator Functions

### What are Generator Functions?

**Description:** Generator functions are special functions that can pause execution and resume later, allowing multiple return values.

<img src="./img/generator.png" alt="generator" />

### Basic Generator Example

**generator-example.ts**
```typescript
// Regular function - can only return once
function sayHi(): string {
  return 'hello';
  return 'world'; // Never executed
}

// Generator function - can yield multiple times
function* sayHiGen(): Generator<string, void, unknown> {
  yield 'hello';
  yield 'world';
  yield 'how are you?';
}

// Usage
const obj = sayHiGen();
console.log(obj.next()); // { value: 'hello', done: false }
console.log(obj.next()); // { value: 'world', done: false }
console.log(obj.next()); // { value: 'how are you?', done: false }
console.log(obj.next()); // { value: undefined, done: true }
```
---
### Basic Generator  Example 2

```typescript
function* twoWayCommunication(): Generator<string, void, string> {
  const firstName = yield 'What is your first name?';
  console.log(`First name: ${firstName}`);
  
  const lastName = yield 'What is your last name?';
  console.log(`Last name: ${lastName}`);
  
  console.log(`Full name: ${firstName} ${lastName}`);
}

// Usage
const gen = twoWayCommunication();

console.log(gen.next().value);        // "What is your first name?"
console.log(gen.next('John').value);  // Logs "First name: John"
                                       // Returns "What is your last name?"
gen.next('Doe');                       // Logs "Last name: Doe"
                                       // Logs "Full name: John Doe"
```
---

### Basic Generator Example 3:

```typescript
function* numberGenerator(): Generator<number> {
  yield 1;
  yield 2;
  yield 3;
}

function* letterGenerator(): Generator<string> {
  yield 'A';
  yield 'B';
  yield 'C';
}

function* combinedGenerator(): Generator<number | string> {
  yield* numberGenerator(); // Delegate to numbers
  yield* letterGenerator(); // Delegate to letters
  yield* [10, 20, 30];      // Delegate to array
}

// Usage
const gen = combinedGenerator();
console.log([...gen]); // [1, 2, 3, 'A', 'B', 'C', 10, 20, 30]
```
### Basic Generator  Example 4
```typescript
function* genfun(){
    yield "happy"
    const newvar = yield "coding"
    return newvar;
}

const result = genfun()

console.log(result.next())//{ value: "happy", done: false }
console.log(result.next())//{ value: "coding", done: false }
console.log(result.next("this is me"))//{ value: "this is me", done: true }
```
### Basic Generator  Example 5
```typescript
function* one(){
    yield '1'
}
function foo(test){
    return test
}
function* two(){
    const param = yield "waiting for input";
    yield foo(param);
}
function* root(){
    yield [one(),two()]
}
const gen=root();
const generators = gen.next().value;
console.log(generators[1].next())
console.log(generators[1].next("hi"))
console.log(generators[0].next())
```
---

### Generator with Parameters

**generator-params.ts**
```typescript
function* counterGen(start: number): Generator<number, void, unknown> {
  let count = start;
  while (true) {
    yield count++;
  }
}

const counter = counterGen(1);
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
```

---

### Generator for Async Operations

**generator-async.ts**
```typescript
function* fetchUserGen(userId: number): Generator<Promise<any>, void, any> {
  console.log('Fetching user...');
  
  const response = yield fetch(`/api/users/${userId}`);
  const data = yield response.json();
  
  console.log('User data:', data);
  return data;
}

// How Saga uses generators
const gen = fetchUserGen(1);
gen.next(); // Start execution
gen.next(); // Continue to next yield
```

---

### All Generator Variations

**generator-variations.ts**
```typescript
// 1. Basic generator
function* basicGen(): Generator<number> {
  yield 1;
  yield 2;
  yield 3;
}

// 2. Generator with return
function* genWithReturn(): Generator<number, string, unknown> {
  yield 1;
  yield 2;
  return 'done';
}

// 3. Generator with parameters
function* genWithParams(name: string): Generator<string> {
  yield `Hello, ${name}`;
  yield `Goodbye, ${name}`;
}

// 4. Generator delegating to another generator
function* delegatingGen(): Generator<number | string> {
  yield* [1, 2, 3]; // Delegate to array
  yield* genWithParams('Alice'); // Delegate to another generator
}

// 5. Infinite generator
function* infiniteGen(): Generator<number> {
  let i = 0;
  while (true) {
    yield i++;
  }
}

// 6. Generator with error handling
function* errorHandlingGen(): Generator<string, void, unknown> {
  try {
    yield 'trying...';
    throw new Error('Something went wrong');
  } catch (error) {
    yield `caught error: ${error}`;
  }
}
```
---
## Redux Saga Effects

### take:
Waits for a specific action (blocking) until specific action will be dispatched .its a watcher function execute based on action changes and it runs only once
Use case: When you need to wait for a specific action before proceeding.
```typescript
import { take } from "redux-saga/effects";
function* watchLoginSaga() {
  // Pause until LOGIN action is dispatched
  const action = yield take('LOGIN');
  console.log('User credentials:', action.payload);
}

```
### takeLatest:
Takes only the latest action of a specific type
Use case: For operations like search where only the latest request matters.
```typescript
import { takeLatest } from "redux-saga/effects";
function* watchSearchSaga() {
  // Only handle the most recent SEARCH action
  yield takeLatest('FETCH_USER', performSearchSaga);
}

function* performSearchSaga(action) {
  const results = yield call(api.search, action.payload);
  yield put({ type: 'SEARCH_RESULTS', payload: results });
}
```
### put:
Dispatches an action to the Redux store, its Equivalent to dispatch()
Use case: When your saga needs to dispatch Redux actions or to trigger reducers after async work we need this.
```typescript
import { put } from "redux-saga/effects";
function* loginSaga(credentials) {
  // Dispatch action to update loading state
  yield put({ type: 'LOGIN_LOADING' });
  
  // After login logic completes
  yield put({ 
    type: 'LOGIN_SUCCESS', 
    payload: userData 
  });
}

```
### call
Calls a function (usually async) and waits for result (blocking)
Use case: For calling API (especially promises) and waiting for their result.
```typescript
import { call } from "redux-saga/effects";
function* fetchUserSaga(userId) {
  // Call API and wait for response
  const user = yield call(api.fetchUser, userId);
  console.log('User data:', user);
}
```
### select 
Extracts data from Redux state
Use case: When you need to access current Redux state.
```typescript
function* userProfileSaga() {
  // Get current user ID from Redux state
  const userId = yield select(state => state.auth.userId);
  
  // Use the ID to fetch profile
  const profile = yield call(api.fetchProfile, userId);
}
```
### all:
Runs multiple effects in parallel
Use case: When you need to run multiple operations concurrently.

```typescript
import { all, call } from "redux-saga/effects";
function* initializeAppSaga() {
  // Run all these sagas in parallel
  yield all([
    call(fetchUserSaga),
    call(fetchSettingsSaga),
    call(fetchNotificationsSaga)
  ]);
  
  yield put({ type: 'APP_INITIALIZED' });
}

```
### fork: 
Runs a saga in the background (non-blocking) it replace call 
Use case: For starting "watcher" sagas that run independently.
```typescript
import { fork } from "redux-saga/effects";
function* mainSaga() {
  // Start watchLoginSaga in background it will not block untill response come
  yield fork(watchLoginSaga);
  
  // This code runs immediately, doesn't wait for watchLoginSaga
  console.log('Main saga continues...');
}
```
### delay:
Pauses execution for a specified time
Use case: When you need to add timing to your saga flow.
```typescript
import { delay } from "redux-saga/effects";
function* notificationSaga() {
  yield put({ type: 'SHOW_NOTIFICATION', message: 'Success!' });
  
  // Wait 3 seconds
  yield delay(3000);
  
  yield put({ type: 'HIDE_NOTIFICATION' });
}

```
### race:
Runs effects in a race, cancels losers
Use case: For implementing timeouts or handling competing conditions.
```typescript
function* fetchWithTimeoutSaga() {
  const { data, timeout } = yield race({
    data: call(api.fetchData),
    timeout: delay(5000)
  });
  
  if (data) {
    yield put({ type: 'FETCH_SUCCESS', data });
  } else {
    yield put({ type: 'FETCH_TIMEOUT' });
  }
}

```
---

## Basic Project Structure

### Complete flow visualize

```

	
					 ┌───────────────────────────────┐
                     │        REACT FRONTEND         │
                     │   (Dotted Rectangle Boundary) │                      
                     │                               │
                     │   Storybook                   │
                     │       │                       │
                     │       ▼                       │
                     │   Container /Hook layer       │
					 │   (useSelector / useDispatch) │
                     │       │                       │
                     │       ▼                       │
                     │   Component                   │
                     │    ▲  │                       │
                     │    |  └──── UI Events         │
                     │  selector      │              │
                     │    ▲           ▼              │
                     │    ▼     dispatch(Action)     │
                     │   store        │		         │	
                     │     ▲          │              │
                     │     |          ▼              │
                     │🧤Reducer◄─── Action dispatch	 │
					 (update state)   │    🔴     	 │
					 │      Slice     │              │
                     │         ▲      ▼    🧤        |
                     │         │    RTK Query/       │
					 │         │    Saga (async)     │
                     │         │      │              │
                     │         │      ▼              │
                     │            Service(fetch)     │
                     │      (API call layer)         │
                     │               │               │
                     └───────────────┼───────────────┘
                                     │
                                     │ HTTP / REST API /GET /POST/ PUT
                                     ▼
                     ┌───────────────────────────────┐
                     │        JAVA/NODE.JS BACKEND   │
                     │   (Spring Boot / REST APIs)   │
                     │                               │
                     │       Controller/ routes      │
                     │           │                   │
                     │           ▼                   │
                     │        Service Layer          │
                     │           │                   │
                     │           ▼                   │
                     │        Repository             │
					 │          /ORM:Prisma          │
					 │			 │					 │
					 │			 │					 │
					 │			 ▼					 │
					 │		   Database				 │			  
                     └───────────────────────────────┘

```


---

## Core Concepts

### 1. Actions

**Description:** Actions are plain JavaScript objects that sends data from React to Redux. They must have a `type` property and can carry data as payload.

**Rules:**
- Must be a plain object
- Must contain a type field
- Can carry data via payload



---

### 2. Reducers

**Description:** Reducers are pure functions that take the current state and an action, then return a new state. They must not mutate state.

**Rules**

- Must be a pure function
- Must not mutate state
- Must always return a value


---

### 3. Combine Reducers

**Description:** Combine multiple reducers into a single root reducer for the store.allowing you to split state management by domain or feature.

---

### 4. Store Configuration

**Description:** Create and configure the Redux store with saga middleware.


---

### 5. Selectors

**Description:** Selectors extract and compute derived data from the Redux store. Use `reselect` for memoization.


---

## Project 1: Redux Button Disable With Async Promise Flow

### Description
Create a JSON Server API for e-commerce products with full CRUD operations using Redux-Saga.

**App.tsx**
```typescript
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  store,
  getFetchRequestAction,
  getIsDisableButton,
  getResponseData,
} from "./redux";

// ─── Inner Component ─────────────────────────────────────────────────────────

const ButtonComponent = () => {
  const dispatch = useDispatch();
  const isDisable = useSelector(getIsDisableButton);
  const data = useSelector(getResponseData);

  const handleClick = () => {
    dispatch(getFetchRequestAction());
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <button
        onClick={handleClick}
        disabled={isDisable}
        style={{
          backgroundColor: isDisable ? "#aaa" : "#4f46e5",
          cursor: isDisable ? "not-allowed" : "pointer",
        }}
      >
        {isDisable ? "Loading..." : "Click Me"}
      </button>

      {data && (
        <div>
          <strong>Response:</strong> {data.message}
        </div>
      )}
    </div>
  );
};

// ─── Root Component ──────────────────────────────────────────────────────────

const App = () => (
  <Provider store={store}>
    <ButtonComponent />
  </Provider>
);

export default App;
```

**redux.ts**

```typescript
import { createStore, applyMiddleware } from "redux";
import { createSelector } from "reselect";
import createSagaMiddleware from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

// ─── Constants ───────────────────────────────────────────────────────────────

export const BASE_STATE = "BASE_STATE";
export const RESET_STATE = "RESET_STATE";
export const LOADING_STATE = "LOADING_STATE";
export const SUCCESS_STATE = "SUCCESS_STATE";
export const FAILURE_STATE = "FAILURE_STATE";
export const FETCH_REQUEST = "FETCH_REQUEST";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ResponseData {
  message: string;
}

interface ResponseState {
  data: ResponseData | null;
  isDisable: boolean;
}

interface BaseAction {
  type: typeof BASE_STATE | typeof RESET_STATE;
}

interface LoadingAction {
  type: typeof LOADING_STATE;
}

interface FetchRequestAction {
  type: typeof FETCH_REQUEST;
}

interface SuccessAction {
  type: typeof SUCCESS_STATE;
  payload: { data: ResponseData };
}

interface FailureAction {
  type: typeof FAILURE_STATE;
  payload: { error: string };
}

type ResponseAction =
  | BaseAction
  | LoadingAction
  | FetchRequestAction
  | SuccessAction
  | FailureAction;

interface RootState {
  response: ResponseState | null;
}

// ─── Action Creators ─────────────────────────────────────────────────────────

export const getBaseAction = (): BaseAction => ({
  type: BASE_STATE,
});

export const getResetAction = (): BaseAction => ({
  type: RESET_STATE,
});

export const getLoadingAction = (): LoadingAction => ({
  type: LOADING_STATE,
});

export const getFetchRequestAction = (): FetchRequestAction => ({
  type: FETCH_REQUEST,
});

export const getSuccessAction = (data: ResponseData): SuccessAction => ({
  type: SUCCESS_STATE,
  payload: { data },
});

export const getFailureAction = (error: string): FailureAction => ({
  type: FAILURE_STATE,
  payload: { error },
});

// ─── Fake API Service ─────────────────────────────────────────────────────────

class ResponseService {
  private static instance: ResponseService;

  static getInstance(): ResponseService {
    if (!ResponseService.instance) {
      ResponseService.instance = new ResponseService();
    }
    return ResponseService.instance;
  }

  fetchData(): Promise<{ data: ResponseData }> {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve({ data: { message: "Hello from console.log!" } }),
        2000
      )
    );
  }
}

// ─── Saga ─────────────────────────────────────────────────────────────────────

export function* fetchResponseSaga(
  action: FetchRequestAction,
  responseService: ResponseService = ResponseService.getInstance()
) {
  try {
    yield put(getLoadingAction());

    const response: { data: ResponseData } = yield call({
      context: responseService,
      fn: responseService.fetchData,
    });

    if (response && response.data) {
      console.log("Response:", response.data);
      yield put(getSuccessAction(response.data));
    }
  } catch {
    yield put(getFailureAction("Something went wrong"));
  }
}

export function* watchFetchResponse() {
  yield takeLatest(FETCH_REQUEST, fetchResponseSaga);
}

// ─── Reducer ─────────────────────────────────────────────────────────────────

export const getResponseReducer = (
  state: ResponseState | null = null,
  action: ResponseAction
): ResponseState | null => {
  switch (action.type) {
    case BASE_STATE:
    case RESET_STATE:
      return null;

    case LOADING_STATE:
      return {
        data: null,
        isDisable: true,
      };

    case SUCCESS_STATE:
      return {
        ...action.payload,
        isDisable: false,
      };

    case FAILURE_STATE:
      return {
        data: null,
        isDisable: false,
      };

    default:
      return state;
  }
};

// ─── Root Reducer ─────────────────────────────────────────────────────────────

const rootReducer = (
  state: RootState = { response: null },
  action: ResponseAction
): RootState => ({
  response: getResponseReducer(state.response, action),
});

// ─── Store ───────────────────────────────────────────────────────────────────

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchResponse);

// ─── Selectors ───────────────────────────────────────────────────────────────

const selectResponseState = (state: RootState): ResponseState | null =>
  state.response;

const selectIsDisable = (state: RootState): boolean =>
  state.response?.isDisable ?? false;

const selectData = (state: RootState): ResponseData | null =>
  state.response?.data ?? null;

export const getIsDisableButton = createSelector(
  [selectIsDisable],
  (isDisable) => isDisable
);

export const getResponseData = createSelector([selectData], (data) => data);

export const getResponseState = createSelector(
  [selectResponseState],
  (response) => response
);

```

Flow

```txt
Click Button
     │
     ▼
dispatch(getFetchRequestAction())   → FETCH_REQUEST
     │
     ▼
watchFetchResponse (takeLatest)
     │
     ▼
fetchResponseSaga
     │
     ▼
put(getLoadingAction())             → LOADING_STATE → isDisable: true  → Button disabled
     │
     ▼
call(responseService.fetchData)     → Promise delay 2000ms
     │
     ├── resolve → console.log → put(getSuccessAction) → SUCCESS_STATE → isDisable: false
     │
     └── catch  →               put(getFailureAction)  → FAILURE_STATE → isDisable: false
```
