
REACT THEORY NOTES 
==============================

**Q1: What is Virtual DOM?How React Manages Virtual DOM?**
Virtual DOM is a lightweight JavaScript copy of the Real DOM.
On the initial render, React builds the Virtual DOM and then creates the Real DOM from it.
When state or props change, React updates the Virtual DOM—not the Real DOM directly.
React compares the new Virtual DOM with the previous one using a process called diffing.
Only the parts that changed are updated in the Real DOM, not the entire UI.
React batches multiple state updates together to reduce re-renders and improve performance.
This approach makes UI updates faster, efficient, and more optimized than direct DOM manipulation.
```txt
          User Action (e.g., button click) 
                        ↓
               React creates New Virtual DOM
                        ↓
         Compare with Old Virtual DOM (Diffing)
                        ↓
       Update only changed part in Real DOM (Fast)
```

**Q2: What is Reconciliation?**
 The diffing process where React compares old and new virtual DOM trees and updates only changed parts.

How diffing algorithm works in Virtual DOM
 React compares old and new virtual DOM trees, updates only changed nodes (O(n) optimization).
 ```txt
(State/Props Change)
                         |
                         v
                 +----------------+
                 | New Virtual DOM|
                 +----------------+
                          |
                          v
          +--------------------------------+
          | React compares both Virtual DOM|
          |     (Diffing Algorithm)        |
          +--------------------------------+
                      /       \
                     /         \
                    v           v
        +----------------+   +----------------+
        | Same Parts     |   | Changed Parts  |
        | (No Update)    |   | (Mark for DOM  |
        |                |   |    Update)     |
        +----------------+   +----------------+
                                   |
                                   v
                         +---------------------+
                         |   Update Real DOM   |
                         | (Only changed nodes)|
                         +---------------------+
  ```
**Q3: Functional vs Class Components**
- Functional components are simpler to write and understand, use Hooks instead of lifecycle methods, avoid the complexity of this, make logic reuse easier through custom hooks, support better performance optimizations, work seamlessly with Concurrent Mode, enable streaming SSR for faster page load, and are the recommended modern approach in React.
- Class components rely on lifecycle methods, involve more boilerplate, make code harder to reuse, require managing the this keyword, don’t align well with modern React features like Concurrent Mode and streaming SSR, and are now considered older and less preferred for new development.

**Q4: What are Hooks in React?**
 Functions that let you use React features without classes (e.g. useState, useEffect, useMemo, useRef, useCallback, useContext).

**Q5: Explain useState**
 Manages local state in functional components.
Example:
```js
const [name, setName] = useState("");
const [age, setAge] = useState(0);
const [isActive, setIsActive] = useState(true);
const [form, setForm] = useState({ name: "", email: "" });
const [items, setItems] = useState([]);
```

**Q6: Explain useEffect and useLayoutEffect**
useEffect runs after the component renders on the screen. It is used for side effects like API calls, subscriptions, event listeners, timers, and cleanup. It does not block the UI paint, so the user sees the UI first and then the effect runs. Use it for normal async tasks, data fetching, logging, and non-visual updates.
Example:
```js
useEffect(() => { console.log('runs after render only once'); }, []);
useEffect(() => { console.log('Run on State/Prop Change'); }, [count]);
useEffect(() => { console.log('Run on Every Render'); });
useEffect(() => { async function fetchData(){console.log('run async data')}fetchData() }, []);
useEffect(() => { const timer = setInterval(() => console.log("Running after 1 sec"), 1000);return () => {
    clearInterval(timer); // cleanup
  }; },[]);
  ```

useLayoutEffect runs synchronously after render but before the browser paints the UI. It blocks the paint until the code inside finishes. Use it only when you need to measure DOM size, position, scroll, or apply immediate UI updates to avoid flicker. Best suited for reading/writing DOM layout, animations, synchronizing UI, or correcting layout before the user sees it.

```js
useLayoutEffect(() => {
  console.log("Runs before UI paint");
});
```

- Use useEffect for API calls, async operations, events, timers, data fetching & cleanup.
- Use useLayoutEffect for DOM measurements, fixing UI layout before paint, animations, and avoiding flicker.

**Q6: Lifecycle using useEffect**
```js
useEffect(()=>{console.log("Mount")},[]); // Mount
useEffect(()=>{console.log("Update")},[val]); // Update
useEffect(()=>()=>console.log("Unmount"),[]); // Unmount
```
**Q7: useMemo vs useCallback and how they are optimize performance**
useMemo → memoizes computed value
exp.
```js
import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  const expensiveTask = (input) => {
    for (let i = 0; i < 100000; i++) {}
    return input * 2;
  };

  // const doubleValue = () => expensiveTask(count);//UI is hanging after 2-3 times click on button
  const doubleValue = useMemo(() => expensiveTask(count), [count]);

  return (
    <div className="App">
      <p>Expensive Calculation: {doubleValue}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default App;

```
useCallback → memoizes/caches function reference
```js
// App.jsx
import { useState, useCallback } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
//if you not give call back unnecessory child render happen because we pass handleclick function 
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increase Count</button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default App;

// Child.jsx
import { memo } from "react";
function Child({ onClick }) {
  console.log("child rerender");
  return <button onClick={onClick}>child count</button>;
}
export default memo(Child);


```

**Q8: What is Prop Drilling?**
 Passing props deeply through multiple components so components become harder to read and maintain and many components depend on props they don’t use.
 Solved using Context API.
 ```txt
 [Parent Component]
        |
        v
[Child Component]
        |
        v
[Grandchild Component]
```

**Q9: What is Context API?**
Provides global state without prop drilling and solution for props drilling.
Example:
const UserContext = createContext();

**Q10: What is React.memo?**
 Prevents unnecessary re-renders of functional components when props don’t change.
 ```js
 import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("Parent re-rendered");

  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <input
        placeholder="Type here..."
        onChange={(e) => setText(e.target.value)}
      />

      <Child count={count} />
    </div>
  );
}

import React from "react";
const Child = React.memo(function Child({ count }) {
  console.log("Child re-rendered");
  return <h2>Child Count: {count}</h2>;
});

export default Child;

```

**Q11: Controlled vs Uncontrolled Components**
Controlled - state managed by React.
Uncontrolled - managed by DOM via refs.

**Q12: What is useRef?**
 Used to access DOM elements or persist mutable values without re-render.
Example:
```js
const inputRef = useRef();
const countRef = useRef(0);
```
- When do you need to use refs?
To directly access DOM elements or React elements.
Use case: focus input, play video, integrate 3rd-party lib.

**Q13: Explain React Fiber**
 React Fiber is the internal engine of React responsible for scheduling rendering tasks efficiently.
 It allows React to pause, resume, and prioritize updates, making UI rendering smoother.
 ```txt
 Render Request
      |
   Fiber Engine
  /      |      \
High   Medium   Low Prio
rity
Task   Task      Task
  \      |      /
   UI Update
```
**Q14: keys in React list? what is List virtualization**
A list in React is a collection of data that we display by looping through it, usually using map(). While rendering lists, each item should have a unique key so React can identify which item has changed, been added, or removed. A unique key helps React avoid unnecessary re-renders because it tracks each element efficiently. Without a proper key, React may re-render the entire list even if only one item changed, which affects performance.
 ```js
 const users = [
  { id: 1, name: "Sam" },
  { id: 2, name: "John" }
];

{users.map(user => (
  <li key={user.id}>{user.name}</li>
))}
```
List virtualization is a smart technique used to optimize the rendering of large lists by only displaying the items that are currently visible on the screen. Instead of rendering all the items at once

```js
import { FixedSizeList as List } from "react-window";

const items = [];
for (let i = 0; i < 10000; i++) {
  items.push(`Item ${i + 1}`);
}


export default function VirtualizedList() {
  return (
    <List
      height={300}        // Viewport height
      itemCount={items.length}
      itemSize={35}       // Height of each row
      width={300}
    >
      {({ index, style }) => (
        <div style={style}>
          {items[index]}
        </div>
      )}
    </List>
  );
}
```

**Q15: Lifecycle methods in class component**
Mounting → Component is created and added to the UI ,it runs once after initial render
          best for api calls,setting timers
Updating → Component re-renders when state/props change, it runs after every update
          Used to react to state/prop changes (e.g., data refresh)
Unmounting → Component is removed from the UI,Runs before component is destroyed its use for cleanup(clear timers, remove event listeners)
```txt
             Mounting     →     Updating     →     Unmounting
 (componentDidMount)  (componentDidUpdate)  (componentWillUnmount)
 ```

componentDidMount vs useEffect
componentDidMount (class) = runs once after mount.
componentDidMount() → Used only once in a class component; runs after the component is mounted.
useEffect(()=>{},[]) (hook) = same behavior in functional components.
useEffect() → Used in functional components; you can have multiple useEffect hooks for different side effects, and control when they run using dependency arrays

**Q16: What is HOC (Higher Order Component)? why we use?**
 A Higher-Order Component (HOC) is a function that takes a component as input and returns a new enhanced component with extra features (without modifying the original component).
 To reuse logic across multiple components (e.g., authentication check, logging, theme, APIs).
 HOC = Component → Enhanced Component

 ```js
 function MyComponent(Component){
  return function(){
    return <Component someAttribute="somevalue"/>
  }
}
 ```

**Q17: What is React Fragment?**
<></> wrapper to avoid adding extra DOM nodes.

**Q18: Error boundaries and limitation**
Error Boundaries are special React components that catch runtime errors in child components and show a fallback UI instead of breaking the whole app.
They catch UI rendering errors, but not event handler errors and errors in asynchronous code(like setTimeout,fetch)

**Q19. how to handle error in react?**
```js
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  componentDidCatch() { this.setState({ hasError: true }); }
  render() {
    return this.state.hasError ? <h3>Something went wrong</h3> : this.props.children;
  }
}
```
and use like 
```js
<ErrorBoundary><MyComponent/></ErrorBoundary>
```


**Q19: Difference between state and props**
State - internal, mutable(can modify), use for dynamic data.
Props - external, immutable, use for passing data to child components.
```txt
Parent Component (holds props/state)
        |
        |  passes data (props)
        ▼
 Child Component (receives props only)
 ```


**Q20: How does React handle events?**
Through synthetic events, which wrap native events for cross-browser compatibility.
Virtual DOM → In-memory copy of real DOM for faster UI diff & updates.
SPA (Single Page App) → One HTML loaded once; updates view via JS routing.
Babel → JS compiler that converts modern JS/JSX → browser-compatible code.
HOC (Higher-Order Component) → Function that takes a component and returns a new one with extra features.

Code-split / Lazy-load → Load parts of app only when needed for better performance
```js
import("./math").then(math => {
  console.log(math.add(16, 20)); 
});
```

**Q21. Route & Protected Route**
Route: Defines which page or component should render for a specific URL path.
Protected Route: A route that only allows access if the user is authenticated (e.g., logged-in).
If not logged in → redirect to login page
```txt
User → Clicks /dashboard
         │
         ▼
   Is user logged in?
     /           \
    No            Yes
    ▼             ▼
 Redirect → /login   Show Dashboard Page
```

**Q22. Render Props**
Share logic by passing a function as a prop that returns JSX.
Why use: To share logic between components without repeating code.
```js
function Data({ render }) {
  const data = ['Apple', 'Banana', 'Cherry'];
  return render(data);
}

function List({ data }) {
  return (
    <ul>
      {data.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

// Usage
<Data render={(data) => <List data={data} />} />
```

**Q23.React.createElement vs React.cloneElement**
createElement: Creates a new element.
```js
function Greeting({ name }) {
  return React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello'
  );
}
```
cloneElement: Copies an element and adds new props/children.

**Q24. Event-driven Architecture**
Code reacts to events (e.g., click, message).
Microfrontend Architecture
Break big app into small independent frontends.

**Q25.Types of API Calls**
GET (read), POST (create), PUT/PATCH (update), DELETE (remove).

**Q26.Type Checking with PropTypes**
Why use: To validate props passed to a component and catch bugs early.
```js
import PropTypes from 'prop-types';

function Comp({ name }) {
  return <h1>Hello, {name}</h1>;
}

Comp.propTypes = {
  name: PropTypes.string.isRequired
};
```

**Q27. React 18 Features**
  1.Automatic Batching:Combines multiple state updates into one render.
  ```js
  fetch('/api').then(()=>{
 setA(1); setB(2); setC(3); // only 1 re-render
});
```
  2.Transitions:Used for non-urgent updates
  ```js
  import { startTransition } from 'react';
startTransition(() => setPage('home'));
```

**Q28: Render Props**
Share logic between components using function prop
<Data render={data => <List data={data}/>}/>

**Q29: Axios**
Axios is a promise-based HTTP client used to make API calls from browser
It helps send GET, POST, PUT, DELETE requests easily.
axios.get('/users');
axios.post('/users',{name:'Sam'});
axios.put('/user/1',{name:'A'});
axios.delete('/user/1');
```txt
Client (React / Next.js / Node)
        |
        |  Axios Request
        v
---------------------------------
|           Server API          |
|  (Handles DB, Auth, Logic)    |
---------------------------------
        ^
        |  Response (JSON)
        |
   Back to Client UI
```

**Q30: Library vs Framework**
Library: you control flow (React)
Framework: it controls flow (Angular)

**Q31: React vs React DOM**
React → core logic
ReactDOM → renders UI in browser

**Q32: JSX**
JS + HTML
```js
const el = <h1>Hello {name}</h1>;
```

**Q33:How do you print falsy values in JSX?**
 Wrap in {String(value)} or conditional render.{String(false)}  // prints "false"

**Q34.Is it possible to use React without JSX?**
 Yes.
 ```js
 React.createElement('h1', null, 'Hello');
 ```

**Q35:How JSX prevents Injection Attacks?**
 JSX escapes values before rendering → prevents XSS.
 ```js
 <div>{userInput}</div> // safe
 ```

**Q36: Props vs State**
Props: read-only
State: mutable (internal data)

**Q37: types of conditional rendering**
isLogged ? <Home/> : <Login/>
status && <Loader/>
msg || "No message"

**Q38: Folder Structure**
```txt
project/
├─ public/                    // static public files
│   ├─ images/                // static images
│   ├─ favicon.ico
│   └─ index.html
├─ src/
│   ├─ assets/                // fonts, icons, svgs, local images
│   ├─ components/            // reusable UI components
│   ├─ pages/                 // Route pages (React Router)
│   ├─ context/               // React Context providers
│   ├─ hooks/                 // custom hooks
│   ├─ utils/                 // helper functions
│   ├─ constants/             // app constants (URLs, configs)
│   ├─ types/                 // TypeScript types & interfaces
│   ├─ services/              // API services (axios/fetch)
│   ├─ styles/                // global.css, tailwind, variables.css
│   ├─ router/                // route config
│   ├─ App.tsx
│   └─ main.tsx
├─ .env                       // environment variables
├─ package.json
└─ dist/ or build/            // production build output

```


**Q39: Purpose of forwardRef?**
Pass ref from parent → child component.
When parent needs to control child’s DOM element (focus, scroll, value).
```js
import React, { useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  return <input ref={ref} placeholder="Type here..." />;
});

export default function Parent() {
  const inputRef = useRef();
  function focusInput() {
    inputRef.current.focus(); // parent accessing child input
  }
  return (
    <>
      <Input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

**Q40. What is Suspense component?**
 Used to show fallback UI while loading async content (like lazy components).
 ```js
<Suspense fallback={<p>Loading...</p>}> <MyComp /> </Suspense>
```

**Q41. How to prevent component from rendering?**
Return null inside render.
if(!isVisible) return null;

**Q42. What are portals in React?**
Render children outside parent DOM hierarchy.
```js
// index.html
<div id="root"></div>
<div id="modal-root"></div>
// Modal.js
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root")
  );
}
// App.js
export default function App() {
  return (
    <>
      <h1>Parent Component</h1>
      <Modal>Hello from Portal!</Modal>
    </>
  );
}
```

**Q43. Why not call setState in componentWillUnmount()?**
Component already unmounted → causes memory leak warning.

**Q44. Is constructor mandatory in React class component?**
No. Only needed when using this.state or binding methods.

**Q45. How do you pass arguments to event handler?**
 Use arrow function.
 ```js
 onClick={() => handleClick(id)}
 ```
**Q46. Profiling & React Fiber**
React Fiber: Internal architecture that breaks UI work into small units so rendering can be paused, resumed, or aborted.
Profiling: Measure which components re-render, how long rendering took, and optimize.

**Q47.Render Phase vs Commit Phase in React**
The Render Phase is when React evaluates components, compares the virtual DOM with the previous one, and decides what needs to change. It can run multiple times, is pure and without side effects, and must remain fast because React may interrupt or re-run it. The output of the render phase is a list of changes (diff) that should be applied to the UI.

The Commit Phase is when React applies those changes to the actual DOM. This phase updates the UI in the browser, runs layout effects and useEffect, and finalizes the update. It is guaranteed to run once for each completed render and cannot be interrupted.

NEXT.JS THEORY NOTES 
=========================

**Q1: What is Next.js?**
 React is not feasible to create a fully-featured application for production.
 Next js is a React framework for routing, server-side rendering(optimize rendering), static site generation, and optimized performance and SEO friendly.

**Q2: CSR vs SSR vs SSG**

#### 1. Static Site Generation (SSG)

* **Process:** The page is **pre-rendered at build time**.
* **Analogy:** Like a restaurant chef preparing a few commonly ordered dishes ahead of time.
* **Pros/Cons:** Offers **best performance** and speed, as content is immediately ready to serve. However, it is **not suitable for highly dynamic content**.

#### 2. Server-Side Rendering (SSR)

* **Process:** The page is **rendered on the server** for every user request.
* **Analogy:** The chef prepares a different meal **fresh, on the spot** for every customer who orders.
* **Pros/Cons:** Ensures the user always receives the **most up-to-date content**, but this process can hurt performance and slow down load times.

#### 3. Incremental Static Regeneration (ISR)

* **Process:** A hybrid approach (used by frameworks like Next.js) that **pre-builds the page (like SSG)** but then **re-generates it on the server after a set time interval** (e.g., every 60 seconds).
* **Analogy:** The prepared dishes are **refreshed every *X* minutes**. Customers will be served the old version until the new, fresh version is ready.
* **Goal:** To **balance the speed of SSG with the freshness of SSR**.

#### 4. Client-Side Rendering (CSR)

* **Process:** The entire JavaScript bundle is **loaded in the browser**, and the page rendering happens directly on the user's machine.
* **Analogy:** Instead of giving you a dish, the restaurant serves you **all the raw ingredients, and you have to cook it yourself** at the table.
* **Pros/Cons:** The initial page load can be slower because the browser has to download, parse, and execute all the JavaScript before displaying content.

**Q3: Explain getStaticProps**
getStaticProps is used for Static Site Generation (SSG) in Next.js.
It runs only at build time and generates static HTML, making the page fast.
Use it when data rarely changes (e.g., blogs, docs, product list)
```txt
Build Time → Fetch Data → Pre-render Page → Static HTML Served
```
```js
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return {
    props: { users }, // passed to the component
  };
}

export default function Users({ users }) {
  return (
    <div>
      <h2>User List</h2>
      {users.map(u => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}
```
📌 Note:
❌ getStaticProps are NOT used in the Next.js App Router (/app),These methods belong only to the old Pages Router (/pages)
✅ In the App Router, we use: fetch(..., { cache: 'force-cache' })

**Q4: Explain getServerSideProps**
getServerSideProps runs on the server for every request, fetches data, and sends it to the page before rendering.
When to use:
Data must be fresh on each page load (e.g., dashboard, user profile, stock price, weather, admin pages).
benefit:
No client-side fetch needed
Runs on every request (not cached)
SEO-friendly because content comes ready from server
```js
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return { props: { data } };
}

export default function Page({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

```
📌 Note:
❌ getServerSideProps are NOT used in the Next.js App Router (/app),These methods belong only to the old Pages Router (/pages)
✅ In the App Router, we use: fetch(..., { cache: 'no-store' })

**Q5: Explain getStaticPaths**
getStaticPaths is used in Next.js with dynamic routes to tell Next.js which dynamic pages to pre-build at build time.
Used together with getStaticProps for Static Site Generation (SSG).
why:
When a page has a dynamic route like /posts/[id]
We want only some specific pages to generate at build time
Improves performance by serving pre-rendered HTML
```js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } }
    ],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id
    }
  };
}

export default function Post({ id }) {
  return <h2>Post Number: {id}</h2>;
}
```
📌 Note:
❌ getStaticPaths are NOT used in the Next.js App Router (/app),These methods belong only to the old Pages Router (/pages)
✅ In the App Router, we use: generateStaticParams

**Q6: Difference between pages and app router? Why App Router is preferred over Pages Router?**
- Pages router: uses /pages directory, older version.
- App router: introduced in Next.js 13, uses /app directory, server components, and layout.js.

App router is preferred because App router provides better flexibility with nested layouts, server components, and improved routing.
and Encourages modular architecture and reusability of UI components using layout and template

routing rules:
all route must live inside the app folder
route file must be name either page.js or page.tsx
each folder represent a segment of the url path

**Q7: What are Server Components?**
Components rendered on the server — faster, smaller bundles, no client JS needed.
```txt
(Client)
   |
   |  Receives HTML only
   v
(Server) --- renders component ---> sends ready HTML to browser
```

**Q8: What are Client Components?**
Components rendered in the browser using "use client" directive.
```txt
(Server) ---> sends JS + component code ---> (Client Browser runs it)
                                  |
                                  v
                          JS executes in browser
```

**Q9: How to create API routes in Next.js?**
Create serverless functions inside /pages/api or /app/api folder each file becomes an API endpoint.
Example:
```js
export default function GET() { 
  NextResponse.json(todos)
}
```

**Q10: Difference between next/link and a tag**
 next/link does client-side routing (faster, no reload), <a> tag reloads the page.

**Q11: What is Image Optimization in Next.js?**
 <Image /> automatically optimizes image size and format for performance.
 it Resizes large images to the size needed by the device,Lazy-loads images,Built-in blur placeholder for better UX

 ```js
 import Image from "next/image";
 <Image
        src="/images/profile.jpg"
        alt="Profile"
        width={300}
        height={300}
        style={{}}                  
        className=""
        layout="fixed" | "responsive" | "fill"
        quality={80}
        loading="lazy" | "eager"
        objectFit="cover" | "contain" | "fill"
        placeholder="blur"
        priority
      />
```

**Q12: What is Middleware in Next.js?**
Middleware runs before a request is completed. It can check the request and decide to allow, block, redirect, or rewrite the user before reaching a page or API.
why:
Authentication / Protect routes
Redirect users based on role or login
Request → Middleware → (Allow / Redirect / Rewrite / Block) → Page/API Route
in middleware.ts file write logic in next js

**Q13: How to handle environment variables in Next.js?**
 Stored in .env.local and accessed via process.env.NAME

**Q14: What is ISR (Incremental Static Regeneration)?**
 Allows static pages to update at runtime after a set interval (revalidate).
 Why use:
To keep content fresh (like blogs or product pages) while still using fast static generation.
```js
// app/page.js
export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    // re-build this page every 10s
    next: { revalidate: 10 },
  });

  const data = await res.json();

  return (
    <div>
      <h1>ISR Example</h1>
      <p>Todo Title: {data.title}</p>
      <p>Page regenerated every 10 seconds</p>
    </div>
  );
}

```
**Q15: What is next/head used for?**
 To modify <head> tags dynamically (title, meta tags).it improve SEO and Custom scripts like Google Analytics
 ```js
 import Head from "next/head";
export default function CustomHead({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
}
```
**Q16: What is next/script?**
 Used to control script loading strategy (lazyOnload, beforeInteractive, etc.).it will load script only when needed to improve performance.
 ```js
<Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
        strategy="afterInteractive"
      />
  ```

**Q17: How to handle API fetching in Next.js 13 app router?**
 Use async server components with fetch directly inside component.

**Q18: What is Dynamic Routing in Next.js?**
 File-based routing with parameters using [id].js files.
 ```js
// pages/users/[id].js
import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  const { id } = router.query; // get dynamic value from URL
  return <h1>User ID: {id}</h1>;
}
```
**Q19: What are Layouts and Templates in Next.js 13?**
Layouts persist between routes; templates re-render on navigation.
Layouts = Common UI (like Navbar/Footer).
Templates = Predefined page structures reused across routes.
```js
export default function HomeLayout({ children }) {
  return (
    <div className="structure">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
```
**Q20: all route and folder Next.js app?**
dynamic route [segment] → For routes like /user/[id], dynamic by parameter.

catch-all route [...segment] → Captures 1 or more URL segments.
File: app/blog/[...slug]/page.jsx
URL supported:
```txt
✔ /blog/a
✔ /blog/a/1
✔ /blog/a/1/react
```
optional catch all route [ [ ...segment ] ] → Captures 0 or more URL segments.(work with or without params)
File: app/blog/[[...slug]]/page.jsx
URL supported:
```txt
✔ /blog       (empty slug allowed)
✔ /blog/a
✔ /blog/a/1/nextjs
```
private folder / Route group (folder) → Grouping folder not part of route path.Route groups organize routes without affecting URL path.
```txt
app/(auth)/login/page.jsx
app/(auth)/register/page.jsx
```
but in url it will detect
```txt
/login
/register
/dashboard
```
underscore _folder / Private Folder → Conventionally means internal folder (ignored by Next).Any folder starting with _ won’t be treated as a route.
To avoid accidental routing & keep clean structure we use.
app/_components/Button.jsx   ✅ no route
app/profile/page.jsx         ✅ route: /profile

**Q21: Styled JSX in Next.js**
Built-in CSS-in-JS for component-level styling using <style jsx> tag.Styles apply only to this component (scoped).
it will prevents global css conflict and allows using JS variables directly inside CSS
```js
<div className="card">
  <style jsx>{`
        .card {
          border-radius: 5px;
        }
        h3 {
          color: brown;
        }
      `}</style>
</div>
```
**Q22: How to improve SEO**
Use SSR/SSG, meta tags, sitemap, semantic HTML, image alt, clean URLs.

**Q23: Optimized data fetching (getStaticProps)**
Yes getStaticProps pre-renders pages at build time for faster load.

**Q24: Types of styling in Next.js**
CSS Modules, Styled JSX, Tailwind CSS, Global CSS, Styled-components

**Q25: Dynamic imports in Next.js**
Using next/dynamic for lazy loading components, it will not load on initial render, load when its need 
const Component = dynamic(() => import('../Components'), { ssr: false });

**Q26: Environment variables in Next.js**
Use .env.local, access with process.env.NEXT_PUBLIC_... for client-side.

**Q27: Optimize performance**
Use Image component, code-splitting, caching, getStaticProps, lazy loading, CDN.

**Q28: suspense and fallback**
React Suspense allows components to wait for async data
and show a fallback UI (like a loader) while waiting.
```js
import { Suspense } from "react";
import Users from "./Users";
export default function Page() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Suspense fallback={<p>Loading users...</p>}>
        <Users />
      </Suspense>
    </div>
  );
}
```
**Q29: app folder structure**
```txt
app/
 ├─ layout.jsx                        // Root layout for all pages
 ├─ page.jsx                          // Home page
 ├─ loading.jsx                       // Default loading
 ├─ error.jsx                         // Global error boundary
 ├─ not-found.jsx                     // Custom 404 page
 │
 ├─ (auth)/                            // Authentication related pages
 │   ├─ register/
 │   │   ├─ page.jsx                  // /register
 │   │   └─ _components/              // Private components for register
 │   │       └─ RegisterForm.jsx
 │   ├─ login/
 │   │   ├─ page.jsx                  // /login
 │   │   └─ _components/              // Private components for login
 │   │       └─ LoginForm.jsx
 │
 ├─ users/
 │   ├─ page.jsx                      // /users
 │   ├─ [id]/page.jsx                 // /users/1
 │   ├─ loading.jsx                   // loader
 │   ├─ error.jsx                     // error handler
 │
 ├─ blog/
 │   ├─ page.jsx                      // /blog
 │   └─ [...slug]/page.jsx            // Catch-all route: /blog/a/1
 │
 ├─ _components/                      // Shared/reusable private components
 │   ├─ Header.jsx
 │   ├─ Footer.jsx
 │   ├─ Breadcrumb.jsx
 │   ├─ UI/                           // UI reusable components like button, modal…
 │   │   ├─ Button.jsx
 │   │   └─ Card.jsx
 │   └─ ExamplePrivateComponent.jsx
 │
 ├─ context/                          // Context API state
 │   ├─ ThemeContext.jsx
 │   └─ UserContext.jsx
 │
 ├─ store/                            // Redux store (Redux Toolkit)
 │   ├─ index.js                      // Setup store
 │   ├─ slices/
 │   │   ├─ userSlice.js
 │   │   └─ themeSlice.js
 │   └─ hooks.js                      // useAppDispatch, useAppSelector
 │
 ├─ api/                              // App Router API endpoints
 │   ├─ users/route.js                // GET, POST for users
 │   └─ auth/route.js                 // Auth login/logout
 │
 ├─ lib/                              // Server helpers, DB, API handlers
 │   ├─ fetchData.js
 │   └─ axiosClient.js
 │
 ├─ utils/                            // Utility/helper functions
 │   ├─ formatDate.js
 │   ├─ validateEmail.js
 │   └─ calculateAge.js
 │
 ├─ types/                            // TypeScript types or JS JSDoc
 │   ├─ userTypes.js
 │   ├─ apiResponseTypes.js
 │   └─ index.js
 │
 ├─ constants/                        // App constants
 │   ├─ apiEndpoints.js
 │   ├─ roles.js
 │   └─ messages.js
 │
 ├─ styles/
 │   ├─ globals.css
 │   ├─ mixin.module.scss
 │   └─ variables.scss
 │
 └─ middleware.js                     // Middlewares (Auth, redirects, etc.)
```

**Q30:All Route Handlers (Next.js App Router)**
Used inside app/api/route.js (or [route]/route.js)
GET read and fetch data
POST create data
PUT  Update full data
PATCH update partial data
DELETE  remove data

**Q31: When to use no-store and when force-cache?**
no-store: Use when data changes very frequently and must always be fresh.
Example: fetching live stock price, user dashboard data.
```js
fetch('/api/data', { cache: 'no-store' })
```
force-cache: Use when data does not change often. Browser/server stores it and reuses for future requests.
Example: product list, blog list, FAQs.
```js
fetch('/api/products', { cache: 'force-cache' })
```

**Q32: How to authenticated with clerk?**
Install Clerk → wrap app with <ClerkProvider>
Use components like <SignIn />, <UserButton />
Use auth() in server components or API to get logged-in user.
```js
import { auth } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const { userId } = auth();
  if (!userId) return <div>Please login</div>;
  return <div>Welcome User {userId}</div>;
}
```
**Q33: What are Cookies & How They Help in Next.js?**
Cookies store small data in the browser and persist between page loads.Cookies in Next.js are useful for storing and sharing data between client & server
Useful for: authentication, theme, cart, tokens.
Next.js provides helpers like:
```js
// app/api/login/route.js
import { cookies } from "next/headers";

export async function POST() {
  cookies().set("token", "abc123", { httpOnly: true });
  return Response.json({ message: "Logged in" });
}

// app/dashboard/page.js
import { cookies } from "next/headers";

export default function Dashboard() {
  const token = cookies().get("token")?.value;
  return <div>Token: {token}</div>;
}

```

**Q34: What are Web Vitals & Why Used in Analytics?**
Web Vitals are key performance metrics used to measure user experience on the web.
They help track: speed, interactivity, layout stability.

**Q35: What is JSON-LD?**
JSON-LD is a structured data format used for SEO to help Google understand your content.
It is added inside <script type="application/ld+json">
```js
// app/page.js
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "John Doe",
    jobTitle: "Frontend Developer",
    url: "https://example.com",
  };

  return (
    <>
      <h1>Home Page</h1>

      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

```

**Q36:What is Routing Metadata?**
Metadata controls page title, description, icons.
```js
// app/about/page.js

export const metadata = {
  title: "About Us",
  description: "Learn more about our company",
  keywords: ["about", "company", "info"],
};

export default function About() {
  return <h1>About Page</h1>;
}

```

**Q37: What is Prefetching?**
Next.js automatically downloads next page code + data before user clicks, improving navigation speed.
Example: <Link prefetch={true}> loads data in background.

**Q38:Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)**
SSR: HTML generated on server for each request. Good for SEO and fast first page load.
CSR: Page loads blank and React renders on client. Good for dynamic apps but slower first load.

**Q39: When do we use use server and its use case?**
"use server" is written in a function to run it on the server.
Used for server actions like DB write, sending emails, file upload, secure operations.
```js
"use server";
export async function saveUser(data) { /* DB write code */ }
```

**Q40: How to Handle Errors with Error Boundary?**
Create an error.jsx in a route to catch UI errors.It catches runtime rendering errors and avoids page crash.
```js
"use client";
export default function Error({ error, reset }) {
  return <button onClick={() => reset()}>Try Again</button>;
}
```

**Q41: Are { params } Promise-based? Why we use them?**
params are not a promise. They are plain object values passed by Next.js based on the URL.
We use them to access dynamic URL values like product ID, blog slug
```js
export default function Page({ params })
 { console.log(params.id) }
 ```

**Q42: How searchParams is different from params?**
params → comes from dynamic URL structure (path).
```txt
/product/10 → params.id = 10
```
searchParams → comes from query string.
```txt
/product/10?sort=asc → searchParams.sort = asc
```
**Q43: How Nested Route is Different from Dynamic Route?**
Nested route: folder inside folder → creates UI hierarchy.
```txt
app/dashboard/settings/page.jsx → /dashboard/settings
```
Dynamic route: [id] captures dynamic value.
```txt
app/product/[id]/page.jsx → /product/45
```
**Q44:Use Case of next.config.js and tsconfig.json**
next.config.js: Configure Next.js behavior like images, redirects, env variables, experimental flags.
tsconfig.json: Configure TypeScript compiler rules like path aliases, strict mode, include/exclude files.

**Q45: Default Export vs Named Export (Component Level)**
Default export: when a file returns one main component.
```js
export default function Header() {}
```
Named export: when file has multiple components/hooks/helpers to export.
```js
export function Button() {}
export function Card() {}
```

**Q46:What is Hydration**
Hydration is the process where browser takes static HTML from server and attaches React event listeners to make it interactive.
Diagram:
```txt
Server renders HTML → Client receives → React attaches JS to make clickable
```
**Q47:Static Render vs Dynamic Render**
Static Render: HTML generated at build time. Fast & cached. Good for blogs, docs.
Dynamic Render: HTML generated per request. Needed for auth pages, dashboards, personalized data.

**Q48:Parallel Routes**
Parallel Routes in Next.js allow you to render multiple pages at the same time in the same layout, side-by-side or layered, without replacing the main content.
They are created using folders that start with @ (example: @modal, @chat, @feed, etc.).
Parallel Routes let you load additional UI sections independently — like a image gallery popup, sidebar without losing the current page state.
```txt
app/
├─ dashboard/
│  ├─ layout.jsx            // Layout that defines left and right slots
│  ├─ page.jsx              // Default dashboard main page
│  ├─ @left/                // Parallel route #1 (Left panel)
│  │   └─ page.jsx
│  ├─ @right/               // Parallel route #2 (Right panel)
│  │   └─ page.jsx

```
**Q49:router.back vs router.push vs redirect()**
-router.back()
Works like browser Back button
Takes user to previous page in history
If no history, sometimes stays on same page

-router.push('/dashboard')
Button click → go to another page and navigate to a new route programmatically
Adds a new entry to browser history like After submitting a form and going to success page

-redirect('/login)
Server-side navigation, use in protected private page and If user not authenticated
Stops code execution immediately and redirects
Does NOT add to browser history (user cannot go back)

**Q50: give all useful hooks use in nextjs**
useRouter – Provides navigation and route information in Next.js.
```js
import { useRouter } from 'next/navigation';
export default function RouterExample() {
  const router = useRouter();
  return <button onClick={() => router.push('/about')}>Go to About</button>;
}
```
usePathname – Returns the current URL pathname in App Router.
```js
import { usePathname } from 'next/navigation';
export default function PathnameExample() {
  const pathname = usePathname();
  return <div>Current Path: {pathname}</div>;
}
```
useSearchParams – Read and update query parameters in the URL.
```js
import { useSearchParams } from 'next/navigation';
export default function SearchParamsExample() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  return <div>Name: {name}</div>;
}
```
useParams - Access dynamic route parameters.
```js
import { useParams } from 'next/navigation';
export default function ParamsExample() {
  const params = useParams();
  return <div>Post ID: {params.id}</div>; // for route like /post/[id]
}
```
useTransition → Track and manage navigation/loading state in app router.useTransition runs after the initial render, then the state update inside startTransition is processed asynchronously after the render.
```js
'use client';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
export default function TransitionExample() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  return (
    <button
      onClick={() => startTransition(() => router.push('/dashboard'))}
    >
      {isPending ? 'Loading...' : 'Go to Dashboard'}
    </button>
  );
}
```
**Q51: Streaming & Performance**
Streaming sends HTML/data to the browser in chunks, not waiting for full response → page renders faster, better perceived performance, especially with SSR

**Q52:Edge Function in Next.js**
Serverless functions deployed at edge locations (CDN edge).Runs at the Edge Network, not on Node.js server. use in auth and caching
```js
export const runtime = "edge"; // runs this API on Edge
export async function GET() {
  return new Response("Hello from Edge!", {
    status: 200,
  });
}

```

**Q53: What is Hydration Error in Next.js?**
A Hydration Error (specifically in Next.js or React SSR frameworks) occurs when the React tree rendered on the server (the initial HTML) does not match the React tree rendered on the client.
The most common cause is accessing browser-specific APIs (like window or localStorage)
we can resolve by inside a useEffect hook or by checking 
```js
typeof window !== 'undefined'
```















