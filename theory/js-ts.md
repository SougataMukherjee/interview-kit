
JAVASCRIPT NOTES
================

**Q1: what is JavaScript? why name called JavaScript?**  

JavaScript is a lightweight, case sensitive scripting language.
JS was created to add logic to web pages;  initial name was "LiveScript" then marketing—syntax inspired by Java, but not related.

**Q2: what are JavaScript engine? how js works internally**  

a javascript engine is a computer programme that execute javascript code developed by web browser vender.  

Example: chrome we have V8 firefox we have SpiderMonkey
```txt
Call Stack (executes code)
               ↓
         Web APIs (async work)
               ↓
      Callback Queue (waiting)
               ↓
         Event Loop (checks & pushes)
               ↓
      Back to Call Stack (runs again)
```

**Q3: JavaScript vs ECMAScript**  

JavaScript → language used in browsers.
ECMAScript → standard/spec that JS follows.

**Q4: What is Hoisting?**  

Variables and functions are moved to top of scope during compilation.
Example:
```js
console.log(a); // undefined
var a = 5;

function foo(){
  console.log(a);//undefined
  var a =5;
}
foo()
```
**Q5: What is Closure?**  

A closure is a function that retains access to its outer function's variables, even after the outer function has finished executing. It "remembers" the environment in which it was created, allowing it to access variables outside its immediate scope.
Example:
```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
}
const closure = outer();
closure(); //1
closure(); //2
```
**Q6: Difference: var, let, const**  

var -> function scoped, can be redeclared and hoisted with undefined  

let, const -> block scoped,let cannot be reassigned but const cannot be reassigned.
```js
function demo() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }
  console.log(x); // ✅ works (var → function scope) var will not work outside the function
  console.log(y); // ❌ error (let → block scope)
  console.log(z); // ❌ error (const → block scope)
}
demo();
```
**Q7: What is Event Loop?**  

The Event Loop in JavaScript manages how code is executed inside the browser. It runs all synchronous code first in the call stack, and when asynchronous tasks like setTimeout, promises, or API calls finish, their callbacks are moved to the task queues. The event loop continuously checks if the call stack is empty, and when it is, it pulls the next callback from the queue and pushes it to the stack for execution, ensuring JavaScript remains non-blocking and handles async operations smoothly.
Example:
```js
console.log("a");
setTimeout(() => {
  console.log("b");
  setTimeout(() => {
    console.log("c");
  }, 1000);

}, 1000);
console.log("d");

// Output: a d b c
```

**Q8:Sync vs Async**  

- Sync → one by one
- Async → doesn’t block next

**Q9: What is 'this' keyword?**  

Refers to current context.
Global Code
  this → window (browser)
Object
  obj.method()
       |
       └── this → obj
Regular Function
  this → depends on caller
Arrow Function
  this → parent scope (not its own)

**Q10: Arrow function vs normal function vs IIFE vs Anonymous function**  

Normal Function 
```js
function add(a, b) { return a + b; }
```
Arrow Function  
 ```js 
 const add = (a, b) => a + b;
 ```
IIFE (Immediately Invoked Function Expression) 
```js
(function(){ console.log("Run once"); })();
```
Anonymous Function 
```js
let f=function(args){}
```

**Q11: Shallow vs Deep Copy**  

Shallow: Copies only the top-level values.
If the object contains another object, only the reference is copied, not the actual nested data.
So changing nested values affects both copies.  

Deep: Creates a completely independent copy of all levels of the object.
Changing nested values does not affect the original.
Example:
Original Object
```js
a → { x:1, y:{ z:2 } }
```
Shallow Copy:
```js
b = { ...a }
a.y ───────► { z:2 } ◄────── b.y    (same reference)
```

Deep Copy:
```js
b = JSON.parse(JSON.stringify(a))
a.y ──► { z:2 }     b.y ──► { z:2 }   (separate copies)
```

**Q12. What are Promises? Build Own Promise for Microtask**  

Used to handle async operations, It has 3 states: pending → resolved → rejected
Example:
```js
new Promise((res, rej)=>res(5)).then(console.log);
```
build own promise
```js
const myPromise = (executor) => {
  const thenCallbacks = [];
  executor((value) =>
    queueMicrotask(() => thenCallbacks.forEach(cb => cb(value)))
  );
  return { then(cb) { thenCallbacks.push(cb); return this; } };
};
```

**Q13. Promise.all vs Promise.race**  

Promise.all() → Runs multiple promises in parallel and waits until all are finished.If any one fails, the whole result fails
```txt
Promise.all([P1, P2, P3])
   P1 ----✅
   P2 --------✅
   P3 ------------✅
```
Result → after last one finishes
Promise.allSettled() → Runs multiple promises in parallel and waits until all are completed, whether they succeed or fail. It never stops on error; instead, it returns the status and value/reason of each promise.
```txt
Promise.allSettled([P1, P2, P3])
   P1 ----✅  (fulfilled)
   P2 --------❌  (rejected)
   P3 ------------✅  (fulfilled)

```
Promise.race() → Runs multiple promises in parallel and returns the result of the first one that finishes (success or fail)
```txt
Promise.race([P1, P2, P3])
   P1 ----✅  ← finishes first → return this one
   P2 --------✅
   P3 ------------✅
```

**Q14. How to fetch API using Promise?**  

```js
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
  ```

**Q15. create a Promise and resolve on Button click**  

```js
import { useState } from "react";

export default function App() {
  function createClickPromise() {
    return new Promise((resolve) => {
      resolve("Button clicked!");
    });
  }
  function handleClick() {
    createClickPromise().then((msg) => console.log(msg));
  }
  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```
**Q16. using promise fetch a data,if the fetch fails it should automatically retry after the given delay, up to the maximum number of attempts**  

```js
function retryFetch(url, maxSteps, delay) {
  let attempt = 0;

  return new Promise((resolve, reject) => {
    function tryAgain() {
      fetch(url)
        .then(res =>res.json())
        .then(data => resolve(data))
        .catch(err => {
          attempt++;
          if (attempt < maxSteps) {
            console.log(attempt);
            setTimeout(tryAgain, delay);
          } else {
            reject("Failed");
          }
        });
    }
    tryAgain();
  });
}

retryFetch("https://dummyjson.com/posts/1", 3, 1000)
  .then(data => console.log(data))
  .catch(err => console.error(err));
```
- How to handle error in Promise?  

Use .catch() or try...catch inside async/await.
fetch(url).catch(err => console.error(err));


**Q17. Async/Await**  

Async/Await is a simplified way to work with Promises. It makes asynchronous code look and behave like synchronous code, which is easier to read and write.  

What problem it solves:
Avoids callback hell and complex .then() chaining in Promises
Makes async code more readable, cleaner, and easier to handle errors using try…catch
Example:
```js
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState(null);
  async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    setData(result);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h3>Users Data</h3>
      {data && data.map(u => <p key={u.id}>{u.name}</p>)}
    </div>
  );
}
export default App;
```

**Q18: What is Debounce & Throttle?**  

Debounce: delay execution till user stops typing.
Runs after user stops typing or triggering for a certain time
Useful for: Search bars, input validation, API calls
```js
import { useState, useEffect } from "react";

export default function SearchBox() {
  const [text, setText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Searching for:", text);
    }, 500); // wait 0.5s after user stops typing
    return () => clearTimeout(timer);
  }, [text]);

  return <input onChange={(e) => setText(e.target.value)} placeholder="Search..." />;
}
```

Throttle: limit execution in interval.
Runs the function once every fixed time, even if triggered multiple times.
Useful for: Scroll, resize, mouse move events.
```js
import { useState, useRef } from "react";

export default function ThrottleInput() {
  const [text, setText] = useState("");
  const throttleRef = useRef(false);

  function handleChange(e) {
    const value = e.target.value;

    if (throttleRef.current) return; // block if within throttle time

    throttleRef.current = true;
    console.log("Throttled Value:", value);

    setTimeout(() => {
      throttleRef.current = false; // allow next execution after 1s
    }, 2000);

    setText(value);
  }

  return <input onChange={handleChange} placeholder="Type fast to test throttle..." />;
}
```
```txt
Debounce (send last)                     Throttle (send once per interval)
---------------------------------------------------------------
User:   A → A → A → A                     User:   A → A → A → A → A → A
              ↘  ↘  ↘                                      ↓           ↓
Wait:     [reset][reset][wait]            Delay:   |---delay---| |---delay---|

Server:                     A              Server:  A---------------------A
                            ↑                        ↑                     ↑
                     Only last sent            First sent           Next sent after delay
```

**Q19: Polyfill Example (map)**
```js
Array.prototype.myMap = function(cb){
  let res=[];
  for(let i=0;i<this.length;i++){
    res.push(cb(this[i],i));
  }
  return res;
}
```
**Q20: Call, Apply, Bind**  

To manually control the value of this when borrowing a function from another object or ensuring a function always runs with a specific context.

```js
function greet(greeting, emoji) {
  console.log(`${greeting}, ${this.name}! ${emoji}`);
}
greet.call(person, "Hi", "😊");     // Hi, Alice! 😊
greet.apply(person, ["Hello", "👋"]); // Hello, Alice! 👋
const greetAlice = greet.bind(person);
greetAlice("Hey", "😎");           // Hey, Alice! 😎
```

**Q21: What is Currying?**  

Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument
Example:
```js
function add(a) {
  return function(b) {
    return a + b;
  };
}
const add5 = add(5);
console.log(add5(3)); // 8
```
**Q22: What is Prototype?**  

JS uses prototypal inheritance. Every object has a hidden [[Prototype]].
Objects inherit from __proto__ → links to [[Prototype]]

**Q23: Difference: undefined vs null**  

undefined -> declared but not assigned
```js
let a;      
console.log(a);  // undefined
```
null -> intentional empty value.
```js
let b = null;   
console.log(b);  // null
```

**Q24: Event Delegation**  

Event Delegation is used to handle events efficiently by adding a single event listener on a parent element instead of adding multiple listeners to each child element.  

Benefits:Improves performance (fewer listeners in DOM) and Improves performance (fewer listeners in DOM)
Example:
```js
ul.addEventListener('click',(e)=>{ 
  if(e.target.tagName==='LI') 
      console.log(e.target.textContent)
   })
```

**Q25: LocalStorage vs SessionStorage with exp**  

localStorage -> persists after reload and permanent until cleared.
```js
localStorage.setItem("name", "Sam");
console.log(localStorage.getItem("name")); // Sam
```

sessionStorage -> clears when tab closes
```js
sessionStorage.setItem("sessionName", "SamSession");
console.log(sessionStorage.getItem("sessionName")); // SamSession
```

**Q26: Spread vs Rest**  

Spread -> expands [...arr]
```js
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5]; // [1, 2, 3, 4, 5]
```
Rest -> collects (...args)
```js
function sum(...numbers) {
  return numbers.map((x) => x + 5);
}
const result = sum(4, 5, 6, 7); // [9, 10, 11, 12]
```


**Q27: Deep Clone Object**  
```js
JSON.parse(JSON.stringify(obj)); 
```
NOTE:JSON.stringify() → Object → String
     JSON.parse() → String → Object

**Q28: Optional Chaining**  

Access nested property safely: user?.address?.city

**Q29: Difference Between == and ===**  

== does type coercion  

=== checks type + value

**Q30: Difference Between slice, splice, split**  

slice -> The slice() method is used to copy a portion of an array and return a new array.doesn’t change original array.It accepts two optional arguments:
- the starting index 
- the ending index
```js
const fruits = ['apple', 'orange', 'lemon'];
const newFruit = fruits.slice(0, 1);
console.log(newFruit); // Output: ['apple']
```
splice -> The splice() method is used to add, remove, or modify elements within an existing array. It modifies the original array.
It typically takes three arguments,  
- Starting Index: The index where changes should begin.
- Number of elements to delete: The count of elements to remove from the starting index.
- Elements to add/modify (optional): The new elements you want to insert or replace.
```js
const fruits = ['apple', 'orange', 'lemon'];
fruits.splice(0, 1, 'banana'); 
console.log(fruits); // Output: ['banana', 'orange', 'lemon']
```

split -> convert string → array
"a,b,c"
split(",")  -> ['a','b','c']

**Q31: Event Bubbling(default) vs Capturing**  

Bubbling: inner → outer (Event moves from child → parent)
Clicking the button → shows "Child clicked" → then "Parent clicked"
```txt
┌───────────────────────────────┐
│           PARENT               │
│   (executes second)            │
│   ▲                            │
│   │  Bubbling ↑                │
│   │                            │
│   ┌─────────────────────────┐  │
│   │         CHILD            │  │
│   │   (clicked first)        │  │
│   └─────────────────────────┘  │
└───────────────────────────────┘
```
```js
<div id="parent">
  <button id="child">Click Me</button>
</div>
<script>
  document.getElementById("parent").addEventListener("click", () => alert("Parent clicked"));
  document.getElementById("child").addEventListener("click", () => alert("Child clicked"));
</script>
```

Capturing: outer/parent → inner/child
```txt
┌───────────────────────────────┐
│           PARENT               │
│   (executes first)             │
│   ▼  Capturing ↓               │
│                                │
│   ┌─────────────────────────┐  │
│   │         CHILD            │  │
│   │   (executes second)      │  │
│   └─────────────────────────┘  │
└───────────────────────────────┘
```
```js
<div id="parent">
  <button id="child">Click Me</button>
</div>
<script>
  document.getElementById("parent").addEventListener(
    "click",
    () => alert("Parent clicked"),
    true // Capturing phase
  );

  document.getElementById("child").addEventListener(
    "click",
    () => alert("Child clicked"),
    true // Capturing phase
  );
</script>
```
**Q32: What is Temporal Dead Zone (TDZ)?**  

Zone where variable exists but can’t be accessed before initialization.

**Q33: Garbage Collection**  

JS automatically removes unused memory (unreferenced objects).
Explain the concept of prototype and prototypal inheritance.
Every JS object inherits from a prototype object.
Shared methods are defined on the prototype to save memory.
Example: Object.create(proto) creates a new object inheriting from proto.

**Q34: Webpack**  

Webpack is a module bundler that combines JavaScript, CSS, images, and other assets into an optimized build. It allows configuring different environments like development and production for separate builds. Webpack helps reduce bundle size using techniques like code splitting, tree shaking, and asset optimization. It supports various loaders for handling files and plugins for extending features such as minification, environment variables, caching, compression, and hot reloading. Overall, it streamlines the build process and improves performance for modern web apps.

**Q35: What are higher-order functions?**  

Functions that take another function as argument or return one (e.g., map, filter, reduce).
Higher-order functions either take other functions as arguments or Return functions.
```js
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

**Q36: Explain the event loop and microtask queue.**  

JS is single-threaded; event loop manages async execution.
Microtasks: Promises.
Macrotasks: setTimeout, DOM events.
Microtasks run before next render cycle.
```txt
Synchronous Code
      ↓
  Microtasks (Promises)
      ↓
   Render/Update
      ↓
  Macrotasks (setTimeout, Events)
      ↓
      ⤵ Repeat
```

**Q37: What are modules in JavaScript?**  

Break code into reusable files using export and import.
Types:
Named export
Default export
Example:
```js
export const x = 1; 
import { x } from './file.js';
```

**Q38:Use of Content-Type**  

Tells the browser what type of data is being sent.  

Examples:
- application/json → JSON data
- text/html → HTML
- multipart/form-data → File uploads

**Q39: What is destructuring?**  

Extract values from arrays or objects easily:
```js
const [a, b] = [1, 2];
const {name, age} = person;
```

**Q40: What is a generator function?**  

A generator function can pause and resume execution using yield.
Defined with function* syntax.
Useful for lazy evaluation or async flows.
```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();
console.log(g.next().value); // 1
console.log(g.next().value); // 2
console.log(g.next().value); // 3
```

**Q41: Explain the concept of immutability.**  

Data shouldn’t be modified directly; instead, create new copies.
Important for React state and predictable behavior.

**Q42: All attributes of script tag**  

use script tag to include js in html
<script scr="index.js"></script>
src, type, async, defer, crossorigin

**Q43: When to use defer / async**  

both load scripts asynchronously.
- defer → loads JS in background, runs after HTML parsing, best for most scripts,Best for scripts that rely on the DOM.
```js
<script defer src="defer.js"></script>
```
- async → runs as soon as loaded, may block DOM. Good for analytics.
```js
<script async src="async.js"></script>
```
```txt
HTML Parsing ──────► DOM Ready ──► Defer JS runs
        \
         \► Async JS runs whenever it finishes loading
```


**Q44:Use of "use strict"**  

Makes JS more secure: prevents undeclared variables, silent errors.
```js
"use strict"; 
x = 5;//error
``` 

**Q45:Data Types in JS (Primitive vs Non-Primitive)**  

- Primitive: single value (immutable)(String, Number, boolean, null, undefined, symbol, bigint).
- Non-Primitive:(mutable) Object, Array, function,Date,Math.

**Q46:Null vs Undefined**  

- null → empty value set by user.
- undefined → declared but not assigned.

**Q47: types of operator**  

Arithmetic:+,-,*,/,%,++,--  

Assignment: =,+=,-=,*=,/=  

Comparison:==,===,!=,!==,>,<,>=,<=  

Logical: &&,||,!  

Bitwise: 
Ternary:variable=(condition)?value1:value2

**Q48:Parameter vs Argument**  

Parameter = variable in function definition.  

Argument = actual value passed.
```js
function add(a,b){

 } 
 add(2,3);
```
**Q49:Callback Function**  

Function passed into another function to run after a task completes.
```js
setTimeout(()=>console.log("Arrow function"),1000);
setTimeout(function() {console.log("Anonymous function");}, 1000);
function greet() { console.log("Name function");} setTimeout(greet, 500);
```

**Q50:Pyramid of Doom (Callback Hell)**  

When many callbacks are nested inside each other — code becomes deep, messy, and hard to read.
```js
getData(() => {
  processData(() => {
    saveData(() => {
      sendEmail(() => {
        console.log("Done");
      });
    });
  });
});
```
**Q51:call back hell solved by Promise Chain**  

its readable and handle error easily
```js
getData()
  .then(processData)
  .then(saveData)
  .then(sendEmail)
  .then(() => console.log("Done"))
  .catch(err => console.log("Error:", err));

```
**Q52: Constructor**  

Used to create multiple similar objects.
```js
function User(n){
  this.name=n;
  }
let u=new User("Sam");
```

**Q53: why Constructor Function? what is Prototype Inheritance?**  

To create multiple objects with the same structure and properties without manually writing each object.
```js
function User(name) {
  this.name = name;
}
let u = new User('Sam');
console.log(u.name); // Sam
```

Prototype Inheritance is a feature in JavaScript where objects can inherit properties and methods from another object through the prototype chain.
```js
function User(name) {
  this.name = name; 
}

User.prototype.sayHello = function () {
  console.log("Hello, " + this.name);
};
let u1 = new User("Sam");
let u2 = new User("John");

u1.sayHello(); // Hello, Sam
u2.sayHello(); // Hello, John
```

**Q54: Strings are Immutable**  

Once created, can’t be changed—new copy made on edit.

**Q55:new Array() vs []**  

new Array(3) creates empty slots, [] creates actual array.
Prefer [].
Example:
```js 
const fruits=['Apple','Banana','Orange']
        const fruits=new Array('Apple','Banana','Orange')
```
**Q56: create object without using new**
```js
const obj1 = {}; 
const obj2 = Object.create(null);
const obj3 = {name:"Sam"};
const obj4 = Object.assign({}, {a:1});
function makeObj(){return {id:1}}
const obj5 = makeObj();
```

**Q57: Web APIs (browser features)**  

fetch(), setTimeout(), setInterval(), localStorage, sessionStorage,
document, navigator, geolocation, history, console, alert()

**Q58: for of vs for in**
1. for of does not work with object but for in works with Object and array
2. for of ignore extra properties which does not have index but for in does not ignore

**Q59:map vs forEach**  

map returns new array; forEach just loops.

**Q60: instanceof**  

Checks if object created from class.
```js
obj instanceof MyClass;
```

**Q61: Tree Shaking**  

Removes unused JS code during bundling.

**Q62: what is DOM and its advantage**  

DOM: tree structure of HTML.  

Advantage: JS can dynamically change HTML/CSS

**Q63:Useful DOM Properties**  

.innerHTML, .textContent, .style, .classList, .value, .children, .parentElement

**Q64:clientX vs scrollX**  

- clientX → mouse position in viewport.
- scrollX → amount page scrolled horizontally

**Q65:Mouse Events**  

- click:Fired when the user presses and releases the mouse button on an element.
- dblclick:Fired when the user double-clicks an element.
- mousedown:Fired when the mouse button is pressed down on an element (before releasing).
- mouseup:Fired when the mouse button is released over an element.
- mousemove:Fired when the mouse pointer is moved over an element.
- mouseenter:Fired when the mouse pointer enters the boundary of an element.Unlike mouseover, it does not bubble.
- mouseleave:Fired when the mouse pointer leaves the boundary of an element.Unlike mouseout, it does not bubble.

**Q66:DOMContentLoaded**  

Fires when HTML fully parsed (before images).
Helps run JS early.

**Q67: isNaN() and Number()**  

Checks if value is not number
isNaN('abc') → true

**Q68:Cookies**  

Small data stored in browser; sent with every HTTP request.

**Q69 Array Methods**  

push() → adds element to end.
```js 
        [1,2].push(3) → [1,2,3]
  ```
pop() → removes element from end. 
```js
        [1,2,3].pop() → [1,2]
  ```
unshift() → adds element to start. 
  ```js
          [2,3].unshift(1) → [1,2,3]
  ```
shift() → removes element from start.
```js 
        [1,2,3].shift() → [2,3]
```
concat() → joins two arrays.
```js
        [1].concat([2,3]) → [1,2,3]
  ```
slice() → returns part of array. 
```js
        [1,2,3,4].slice(1,3) → [2,3]
```
splice() → adds/removes elements at position.
```js
         [1,2,3].splice(1,1,9) → [1,9,3]
```
indexOf() → finds first index of value.
```js 
        [1,2,3].indexOf(2) → 1
  ```
includes() → checks if value exists.
  ```js
        [1,2,3].includes(2) → true
```
join() → joins array elements into string.
```js
         [1,2,3].join('-') → "1-2-3"
  ```
reverse() → reverses array order. 
```js
        [1,2,3].reverse() → [3,2,1]
```
sort() → sorts array elements. 
```js
        [3,1,2].sort() → [1,2,3]
  ```
map() → returns new array by applying function.
```js
         [1,2].map(x=>x*2) → [2,4]
  ```
filter() → returns new array with matching elements.
```js
        [1,2,3].filter(x=>x>1) → [2,3]
```
reduce() → combines all elements into single value.
```js
       [1,2,3].reduce((a,b)=>a+b) → 6

```
forEach() → runs function for each element.
```js
      [1,2].forEach(x=>console.log(x))
```
find() → returns first matching element.
```js
       [1,2,3].find(x=>x>1) → 2
```
findIndex() → returns index of first match.
```js
      [1,2,3].findIndex(x=>x>1) → 1
```
every() → checks if all elements pass test.
```js
      [2,4].every(x=>x%2===0) → true
```
some() → checks if any element passes test.
```js
      [1,2].some(x=>x>1) → true
```
flat() → flattens nested arrays.
```js
      [1,[2,3]].flat() → [1,2,3]
```
fill() → fills array with given value.
```js
      [1,2,3].fill(0) → [0,0,0]
```
from() → creates array from iterable.
```js
      Array.from('abc') → ['a','b','c']

```


**Q70:String Methods**  

charAt() → returns character at index.
```js
        "Hello".charAt(1) → "e"
```
charCodeAt() → returns ASCII of character.
```js
        "A".charCodeAt(0) → 65
```
concat() → joins two strings.
```js
        "Hello".concat(" World") → "Hello World"
  ```
includes() → checks if substring exists.
```js
        "Hello".includes("lo") → true
```
indexOf() → finds first index of substring.
```js
        "Hello".indexOf("l") → 2
```
lastIndexOf() → finds last index of substring.
```js
        "Hello".lastIndexOf("l") → 3
  ```
slice() → extracts part of string.
```js
        "Hello".slice(1,4) → "ell"
```
substring() → extracts part by index.
```js
        "Hello".substring(1,4) → "ell"
  ```
replace() → replaces part of string.
```js
        "Hello".replace("H","J") → "Jello"
  ```
split() → splits string into array.
```js
        "a,b,c".split(",") → ["a","b","c"]
```
trim() → removes spaces from both ends.
```js
        " hi ".trim() → "hi"

```
toUpperCase() → converts to uppercase.
```js
        "hi".toUpperCase() → "HI"
  ```
toLowerCase() → converts to lowercase.
```js
        "HI".toLowerCase() → "hi"
  ```
startsWith() → checks if string starts with given text.
```js
        "Hello".startsWith("He") → true
  ```
endsWith() → checks if string ends with given text.
```js
        "Hello".endsWith("lo") → true
```
repeat() → repeats string given times.
```js
        "Hi".repeat(3) → "HiHiHi"
  ```

**Q71:Object Methods**  

keys() → returns array of property names.
```js
        Object.keys({a:1,b:2}) → ["a","b"]
  ```
values() → returns array of property values.
```js
        Object.values({a:1,b:2}) → [1,2]
  ```
entries() → returns array of [key, value] pairs.
```js
        Object.entries({a:1}) → [["a",1]]
  ```
assign() → copies values from one object to another.
```js
        Object.assign({}, {a:1}) → {a:1}
```
hasOwnProperty() → checks if key exists in object.
```js
        ({a:1}).hasOwnProperty("a") → true
```
delete → removes property from object.
```js
        let obj={a:1}; delete obj.a → {}
```
freeze() → makes object immutable.
```js
        Object.freeze({a:1}) can't change a
```
seal() → prevents adding or removing keys.
```js
        Object.seal({a:1}) can't add/delete keys
```
create() → creates object with given prototype.
```js
        Object.create(Array.prototype) → []
  ```
toString() → returns string form of object.
```js
        ({a:1}).toString() → "[object Object]"

```

**Q72: what is pass by value and pass by reference**  

Pass by Value → Copy of value passed (primitive).when you do not want original data to change.
```js
   let a = 10;
    function change(x) { x = 20; }
    change(a);
    console.log(a); // 10
```
Pass by Reference → Reference (address) passed (object/array).when you want to modify the original object/array from a function.
```js
let obj = { name: "Sam" };
    function change(o) { o.name = "John"; }
    change(obj);
    console.log(obj.name); // John 
```
**Q73: Pure Function and Impure function**  

Pure function → Same input → same output, no side effects. 

Impure Function → Depends on external/state change.

**Q74: Cross-Browser Scripting**  

 Write JS that works same on all browsers (handle compatibility).

**Q75: ES6 Features**  

 let/const, arrow fn, template literals, classes, modules, promises, destructuring
 ES5 Class Concept
 ES5 didn’t have class keyword — used constructor functions + prototypes
 ```js
 function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return "Hi " + this.name;
};

const p = new Person("Sam");
console.log(p.greet()); // Hi Sam
```
**Q76:CORS**  

 Cross-Origin Resource Sharing – allows API access from different domains.

**Q77:Access DOM (4 ways)**  

- getElementById() Selects a single element by its id.
- getElementsByClassName() Selects all elements with a specific class
- querySelector() Selects the first element matching a CSS selector.
- querySelectorAll() Selects all elements matching a CSS selector. Returns NodeList

**Q78:Event Emitter**  

Object that listens (on) and triggers (emit) events.
```js
const EventEmitter = require('events');
const event = new EventEmitter();
event.on('hi', ()=>console.log('Hello!'));
event.emit('hi');
```

**Q79: Optimize DOM Traversal**  

Cache DOM nodes, use documentFragment, batch updates

**Q80: Bundling vs Chunking**  

bundling Combine many files → 1 optimized file
chunking Break large bundle into smaller lazy-loaded chunks

**81: ESM vs ES6**  

ES6: A language version (includes classes, let/const, arrow functions).
ESM: The module system using import/export.

**82: Task Scheduler & LRU Cache**  

A Task Scheduler executes tasks in a planned order, usually with delay or priority.
Example use cases: running API calls sequentially, retry logic, scheduled jobs, animations, pausing long loops.

```js
function createLRUCache(limit) {
  const cache = new Map(); // maintains insertion order

  return {
    get(key) {
      if (!cache.has(key)) return -1;
      const value = cache.get(key);

      // Move to end (most recently used)
      cache.delete(key);
      cache.set(key, value);
      return value;
    },

    set(key, value) {
      if (cache.has(key)) {
        cache.delete(key); // remove old
      } else if (cache.size === limit) {
        // Remove least recently used (first item)
        const firstKey = cache.keys().next().value;
        cache.delete(firstKey);
      }
      cache.set(key, value);
    },

    show() {
      console.log([...cache]);
    }
  };
}

// Usage
const lru = createLRUCache(3);
lru.set("a", 1);
lru.set("b", 2);
lru.set("c", 3);
lru.get("a");     // "a" becomes most used
lru.set("d", 4);  // removes "b" (least used)
lru.show();       // [ ['c',3], ['a',1], ['d',4] ]

```
**83. How to Test Code Using Jest in JS**  

install jest npm install --save-dev jest and script package.json "test": "jest"
in sum.js
```js
export function sum(a, b) {
  return a + b;
}

```
in sum.test.js
```js
import { sum } from './sum';

test("adds numbers", () => {
  expect(sum(2, 3)).toBe(5);
});

```
**84. what is invariant?**  

An invariant is a condition that always remains true during the execution of a program or throughout every iteration of a loop. For example, in a loop that counts items in an array, an invariant could be that the counter will never exceed the array length. Consider this loop:
```js
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  // Invariant: i is always between 0 and arr.length
  sum += arr[i];
}
```


TYPESCRIPT THEORY NOTES
========================

**Q1: What is TypeScript?**  

Superset of JS adding static typing + compiler checks.
```txt
+---------------------+
|      TypeScript     |
|  +---------------+  |
|  |  JavaScript   |  |
|  +---------------+  |
+---------------------+
```

**Q2: why use it over JavaScript:**  

- Early error detection
- Better IntelliSense
- Type safety in large apps

**Q3: Basic Types:**  

string, number, boolean, any, void, unknown, null, undefined

**Q4: Interface Example:**  
```js
interface User {
  name: string;
  age: number;
}
```
**Q5: Type Alias:**  

type Status = "loading" | "success" | "error";

**Q6: Optional and Readonly Properties:**  
```js
interface User { 
  name: string;
  age?: number;
  readonly id: number; }
```

**Q7: Generics:**  

Generics help create reusable and flexible functions or classes that work with multiple data types without losing type safety. Instead of using any (which removes type checking) or writing separate functions for each type, generics allow one function to adapt to different types while still ensuring correct type inference. This avoids duplication, prevents runtime errors, and keeps code strongly typed and maintainable.

```js
function identity<T>(arg: T): T {
  return arg;
}
let str = identity<string>("Hello"); // type T is string
let num = identity<number>(42);      // type T is number
```

**Q8: Union and Intersection Types:**  

Union (|) is a variable can hold one of multiple types
let val: string | number;
```js
val = 5;     
val = "Hi";
```
Intersection (&) Combines multiple types into one. Variable/object must satisfy all types.
```js
type A = { x: number };
type B = { y: string };
type C = A & B;
const obj: C = { x: 10, y: "hello" }; 
```
**Q9: Enum:**  

Used to define named constants:
```js
enum Color { Red, Green, Blue }
enum Direction { Up, Down, Left, Right }
```
**Q10: Difference between Interface and Type**  

Interface -> Best for object structure, especially when it needs to grow or extend
```js
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

```
Type -> Best for complex type transformations, unions & advanced type compositions
```js
type Status = "success" | "error";       // Union
type Point = { x: number } & { y: number }; // Intersection

```

**Q11: Utility Types:**  

Partial<T>:Makes all properties of a type optional.
```js
interface User {
  name: string;
  age: number;
}

const updateUser: Partial<User> = {
  name: "Alice" // age is optional now
};
```
Pick<T,K>:Selects a subset of properties from a type.
```js
interface User {
  name: string;
  age: number;
  email: string;
}

const userContact: Pick<User, "name" | "email"> = {
  name: "Bob",
  email: "bob@example.com"
};
```
Omit<T,K>:Removes specified properties from a type.
```js
interface User {
  name: string;
  age: number;
  password: string;
}

const publicUser: Omit<User, "password"> = {
  name: "Charlie",
  age: 25
};
```
Readonly<T>:Makes all properties of a type read-only
```js
interface User {
  name: string;
  age: number;
}
const user: Readonly<User> = {
  name: "Dave",
  age: 30
};
user.age = 31;//error
```
**Q12: Type Assertion:**  
```js
let val: any = "hello";
let len = (val as string).length;
```

**Q13: Difference between any and unknown and never**  

any -> unsafe  

unknown -> needs type check before use

**Q14: What are Decorators?**  

Experimental feature for class modification.
Special syntax to add metadata or modify classes/functions
Example:
```js
@Logger
class User {}
```
**Q15: Difference between TypeScript and JavaScript**  

TS -> compiled language  

JS -> interpreted  

TS adds types; JS doesn’t.

**Q16: What is type narrowing?**  

Process of refining a variable’s type based on conditions.
Example:
```js
if (typeof x === 'string') {
   x.toUpperCase();
  }
```
**Q17: What are type guards?**  

Functions or checks that help narrow down types at runtime.
Example:
```js
function isString(x: unknown): x is string {
  return typeof x === 'string';
}
```