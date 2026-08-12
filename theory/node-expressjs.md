# 🟩 Node.js & Express.js Notes

---

# 🟩 Node.js

## What is a Server?

A server is a computer program or device that receives requests from clients, processes those requests, and sends back a response over a network (such as the Internet).

<img src="./img/server.jpeg" alt="server" />

A server is a program that receives tasks or requests, processes them, and sends responses back over the Internet.
A web server is a server that handles HTTP/HTTPS requests from web browsers and returns web pages, JSON data, images, videos, or other web content.

When you type facebook.com in the browser, an encrypted HTTPS request travels through the internet to Facebook's server. The server processes the request and sends back a response, which the browser displays as the Facebook webpage.

```js
// npm i -D nodemon
// in script "start": "nodemon index.js",

import http from 'http';

const PORT = process.env.PORT || 8080;
const server = http.createServer((req, res) => {

  console.log(`Request received: ${req.method} ${req.url}`);
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.end('<h1>Hello!</h1>');//Hello!
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
http server vs domain name server vs proxy server
| Aspect        | HTTP Server                  | DNS Server                              | Proxy Server                                      |
| ------------- | ---------------------------- | --------------------------------------- | ------------------------------------------------- |
| Purpose       | Serves web content and APIs  | Resolves domain names to IP addresses   | Acts as an intermediary between client and server |
| Main Function | Handles HTTP/HTTPS requests  | Converts domain names into IP addresses | Forwards requests and responses                   |
| Protocol      | HTTP / HTTPS                 | DNS                                     | HTTP, HTTPS, SOCKS, etc.                          |
| Data Handled  | Web pages, APIs, files, JSON | Domain records (A, AAAA, MX, CNAME)     | Client requests and server responses              |
| Example       | Apache, Nginx, Express.js    | Google DNS, Cloudflare DNS              | Squid, Nginx Proxy, HAProxy                       |
| Default Ports | 80, 443                      | 53                                      | 8080, 3128 (varies)                               |
| Used By       | Browsers and applications    | Browsers and operating systems          | Clients, enterprises, load balancers              |
| Primary Role  | Deliver content              | Find server location                    | Control, filter, cache, or secure traffic         |

| Aspect        | Node.js Server                                     | MongoDB Server                            |
| ------------- | -------------------------------------------------- | ----------------------------------------- |
| Purpose       | Handles application logic and API requests         | Stores and manages data                   |
| Type          | Runtime environment / Application server           | Database server (NoSQL)                   |
| Role          | Processes requests, business logic, authentication | CRUD operations, data persistence         |
| Language      | JavaScript/TypeScript                              | Uses MongoDB Query Language (MQL)         |
| Data Storage  | Does not store data permanently                    | Stores data in collections/documents      |
| Communication | Receives requests from clients                     | Receives queries from applications        |
| Example Port  | 3000, 5000, 8080                                   | 27017 (default)                           |
| Scaling       | Scale application instances                        | Scale database using replication/sharding |
| Example       | Express.js API server                              | MongoDB database instance                 |
---

## What is Node.js?

**Node.js is a javascript runtime built on chrome v8 js engine maintain by openJS foundation**

When you write JavaScript in the browser, it runs inside the browser's JavaScript engine (V8). But you cannot run JavaScript outside the browser directly — JavaScript by itself cannot create a web server. It is primarily a scripting language that was originally designed to run inside web browsers.

Google Chrome uses the V8 Engine to execute JavaScript code. The V8 engine is written in C++ and converts JavaScript into machine code for fast execution.

Node.js was written and introduced by Ryan Dahl in 2009. It's a lightweight framework that includes a bare minimum set of modules.

V8 is the JavaScript engine used by Node.js to execute JavaScript code. It parses JavaScript, converts it into bytecode, and uses the TurboFan JIT compiler to generate optimised machine code for faster execution. Since V8 only executes JavaScript, Node.js uses libuv and native bindings to interact with the operating system for asynchronous tasks such as file I/O and network requests. Completed operations are returned through the callback queue and processed by the event loop, allowing Node.js to handle many concurrent operations efficiently.

<img src="./img/v8.jpeg" alt="v8" />

- ✔ Node.js is an **open-source** (source code is publicly available, anyone can view and contribute) **server-side** (runs outside the browser) JavaScript runtime
- ✔ Uses the Chrome V8 JavaScript engine, making it fast
- ✔ Mostly used for developing server-side & networking apps/APIs
- ✔ Takes JavaScript out of the browser
- ✔ Fast, scalable, and popular in many areas of the industry

```js
node app.js
```
This executes JS using Node's V8 engine, without needing Chrome.

## How Node.js Works

<img src="./img/nodejs-works.jpeg" alt="nodejs-works" />


## Introduction to npm

`npm` is a popular package manager that comes bundled with Node.js. It is a CLI (Command Line Interface) tool used to install, update, and remove external packages. You can also create your own package and publish it on the npmjs.com registry.

📝 Do not confuse the `npm` CLI with npmjs.com — the latter is the registry where most Node.js packages are stored.

### Semantic Versioning System

Semantic Versioning (SemVer) is a versioning convention used by npm packages and many software projects.

1. **MAJOR Version (1.x.x)** — Breaking changes that are not backward compatible
2. **MINOR Version (x.1.x)** — New features that are backward compatible
3. **PATCH Version (x.x.1)** — Small fixes, bugs, and improvements that are backward compatible

| Symbol | Meaning | Example | Resolves To |
|---|---|---|---|
| `^` (Caret) | Minor and Patch updates allowed | `^4.17.1` | `4.18.0`, but **not** `5.0.0` |
| `~` (Tilde) | Only Patch updates allowed | `~4.17.1` | `4.17.2`, but **not** `4.18.0` |
| *(Exact)* | Fixed version | `4.17.1` | `4.17.1` only |
| `>` | Greater than | `>4.17.1` | `4.18.0`, `5.0.0`, etc. |
| `<` | Less than | `<4.17.1` | `4.16.0`, but not `4.17.1` |
| `>=` | Greater than or equal to | `>=4.17.1` | `4.17.1`, `5.0.0`, etc. |
| `<=` | Less than or equal to | `<=4.17.1` | `4.17.1`, `4.16.0`, etc. |
| `*` | Any version | `*` | `4.0.0`, `5.0.0`, etc. |

---
## What is REPL in Node?

**REPL** stands for Read Eval Print Loop and it represents a computer environment like a window console or unix/linux shell where a command is entered and system responds with an output, which is useful for writing and debugging code as it executes the code in on go.

`Read` - Reads user's input, parse the input into JavaScript data-structure and stores in memory.

`Eval` - Takes and evaluates the data structure

`Print` - Prints the result

`Loop` - Loops the above command until user press ctrl-c twice.

```js
//Open a terminal and type
node
> 2 * 10
20
```
---

## What is CLI and GUI in Node.js?

**CLI (Command Line Interface)**

CLI allows users to interact with applications through text commands in the terminal. It's fast and lightweight.
```bash
node app.js
npm install
npm start
```

**GUI (Graphical User Interface)**

GUI allows users to interact using graphical elements such as buttons, menus, and windows. It's user friendly and easy to navigate.

Examples: VS Code, Browser

---

## Why Do We Use Node.js? or What are the benefits of using Node.js?

 Node.js library is very fast in code execution because of JIT compiler.JavaScript is considered both an interpreted and a compiled language because modern JavaScript engines, such as Google's V8, use Just-In-Time (JIT) compilation.
Node.js applications never buffer any data. These applications simply output the data in chunks.
   All APIs of Node.js library are aynchronous that is non-blocking.

- ✔ APIs
- ✔ Server-rendered apps
- ✔ Real-time applications (chat, notifications, streaming)
- ✔ Microservices
- ✔ Command Line Tools
- ✔ Bots
- ✔ Web scraping
- ✔ Web Servers

---

## CommonJS vs ECMAScript Modules

| Feature | CommonJS (CJS) | ECMAScript Modules (ESM) |
|---|---|---|
| Import syntax | `require()` | `import` |
| Export syntax | `module.exports` / `exports` | `export` / `export default` |
| Loading | Synchronous | Asynchronous (static analysis friendly) |
| File extension | `.js`, `.cjs` | `.mjs` or `.js` with `"type":"module"` |
| Standard | Node.js-specific (originally) | JavaScript standard |
| Tree shaking | Not supported well | Supported |
| Top-level `await` | ❌ | ✅ |
| `__dirname`, `__filename` | ✅ Available | ❌ Not available directly |
| Browser support | ❌ | ✅ Native support |

---

## In Node.js, We Can Create a Server Using the Built-in `http` Module — So Why Do We Still Use Express.js?

**Problems with raw `http`:**
- Manual URL and method checking
- No built-in routing
- No middleware support
- Repetitive boilerplate code
- Hard to scale and maintain

**Raw `http` Module — What It Looks Like**
```js
import http from 'http';

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  try {
    if (req.method === 'GET') {
      if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Homepage</h1>');
      } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About</h1>');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Not Found</h1>');
      }
    } else {
      throw new Error('Method Not Allowed');
    }
  } catch (err) {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        error: err.message
      })
    );
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

**Same Thing With Express.js**

Express is built on top of Node.js `http`, but it removes a lot of repetitive code and makes routing/API development easier. With `http`, you manually check URLs, methods, headers, and parse requests. Express provides simple methods like `app.get()` and `app.post()`.

```js
import express from 'express';
const app = express();

//built-in middleware
app.use(express.json());

// In-memory storage
const users = [];

app.get('/users', (req, res) => {
    res.status(200).json({ users });
});

app.post('/users', (req, res) => {
    const user = req.body;

    users.push(user);

    res.status(201).json({
        message: 'created',
        user
    });
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});
```

---

## Why Is a Callback Sometimes Slightly Faster Than Async/Await in Extremely Performance-Sensitive Code?

`async/await` is built on top of Promises, so it inherits all Promise overhead. Callbacks are closer to the runtime and therefore can be slightly faster in hot code paths.

**Callback**
```txt
Operation completes
      ↓
Direct callback invocation
      ↓
process()
```

**Async/Await**
```txt
Create Promise
      ↓
Resolve Promise
      ↓
Schedule microtask
      ↓
Resume async function
      ↓
process()
```

---

## Is Node.js Single-Threaded?

Yes — Node.js uses a single main thread, but it handles many tasks at once using:
- Event Loop
- Callbacks
- Worker Threads (for heavy CPU tasks)

**Why Is Node.js Single-Threaded?**

Node.js is single-threaded because the V8 engine executes JavaScript on a single main thread. All synchronous code runs inside V8. For asynchronous operations like API calls, file system operations, and timers, Node.js uses libuv and OS services. This allows Node.js to handle non-blocking operations without creating a new thread for every request.
Libuv is a library that helps Node.js interact with the operating system and perform asynchronous operations.

**If Node.js is single threaded then how it handles concurrency?**

Node.js is single-threaded for JavaScript execution,but it handles concurrency through the Event Loop and libuv. When an asynchronous operation/non-blocking I/O such as a file read, API request, or timer is encountered, Node.js delegates the task to libuv or the operating system. Once the task is completed, the callback is placed in the callback queue. The Event Loop then pushes the callback back to the V8 engine for execution. This allows Node.js to handle thousands of concurrent requests efficiently without creating a separate thread for each request.

---

## What Kind of API Function Is Supported by Node.js?

Node.js supports both synchronous (blocking) and asynchronous (non-blocking) API functions.

---

## What Is the Difference Between Node.js and JavaScript?

JavaScript is a scripting language, while Node.js is a runtime environment that allows JavaScript to run on the server side.

---

## What Are the Main Disadvantages of Node.js?

Disadvantages include its single-threaded nature, preference for NoSQL databases, and rapid API changes that can cause instability.

---

## Chaining in Node.js

Calling multiple methods on the same object one after another.

```js
User.find()
  .select("name")
  .limit(10)
  .sort("age");
```

---

## Node Modules

A module in Node.js is a block of code that provides specific functionality, which can be reused across different parts of an application.

**1. Local Module** — your own files
```js
const xyz = require("./app");
const abc = 10 + 20;

module.exports = {
  xyz,
  abc,
};

// in app.js
const { xyz, abc } = require("./math");

console.log(xyz());
console.log(abc);
```

**2. Global Module** — built-in
```js
const fs = require("fs");
```
### Why Modules Are Used?

By default, every module in Node.js protects its variables and functions from leaking into the global scope. This helps:

- Avoid variable and function name conflicts.
- Encapsulate code and maintain modularity.
- Prevent accidental modification of internal module data.

A variable or function declared inside one module cannot be accessed from another module unless it is explicitly exported.
How Node.js Handles Modules Internally

When Node.js loads a module, it wraps the entire file inside a function before passing it to the V8 engine.
```js
Internally, Node.js does something similar to:
(function (exports, require, module, __filename, __dirname) {
  // Your module code
});
```
Because of this wrapper function:

All variables and functions are scoped to that module.
They do not become global variables.
Each module gets its own private scope.

This behavior is similar to an IIFE (Immediately Invoked Function Expression) because the wrapper function is executed immediately by Node.js.

Exporting Values from a Module

If you want other modules to access variables or functions, you must explicitly export them.

```js
module.export={x,calculateSum}
//or
module.exports.x=x;
module.exports.calculateSum

// Importing Values Using require()
const {x,calculateSum} = require('./moduleOne');
const data=require('./data.json');
```
---

## What Do You Mean by the Event Loop in Node.js?

The event loop is a mechanism that processes asynchronous tasks in a single thread by continuously checking for and executing callback functions.
The Event Loop is the core mechanism that enables Node.js to handle asynchronous operations without creating multiple threads for every request. It continuously cycles through phases such as Timers, Pending Callbacks, Poll, Check, and Close callbacks. Before moving between phases, Node.js processes Microtasks like process.nextTick() and Promise callbacks, giving them higher priority.

<img src="./img/loop.jpeg" alt="loop" />

**process.nextTick vs setImmediate**

| Aspect           | `process.nextTick()`                                   | `setImmediate()`                                         |
| ---------------- | ------------------------------------------------------ | -------------------------------------------------------- |
| Execution Time   | Runs immediately after the current operation completes | Runs in the **Check** phase of the next event loop cycle |
| Priority         | Higher priority                                        | Lower priority                                           |
| Event Loop       | Executes **before** the event loop continues           | Executes **after** I/O events are processed              |
| Queue            | Next Tick Queue                                        | Check Queue                                              |
| Use Case         | Small, critical callbacks that must run ASAP           | Schedule work after I/O operations                       |
| Performance Risk | Excessive use can block the event loop                 | Safer for recurring asynchronous tasks                   |

---
## What is Event Emmitter? When should I use EventEmitter?

In Node.js, an Event Emitter is a class that allows objects to emit events and register listeners (callbacks) to handle those events. It is part of the events module and is commonly used to handle asynchronous events and to implement an observer pattern, where an object (the emitter) triggers events, and other objects (listeners) respond to those events.

When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously.
```js
import EventEmitter from 'events';
import express from 'express';
const app = express();
var crazy = new EventEmitter();

crazy.on('event1', function () {
    console.log('event1 fired!');
    process.nextTick(function () {
        crazy.emit('event2');
    });
});

crazy.on('event2', function () {
    console.log('event2 fired!');
    process.nextTick(function () {
        crazy.emit('event3');
    });

});

crazy.on('event3', function () {
    console.log('event3 fired!');
});

crazy.emit('event1');

app.listen(8080, () => {
    console.log('Server running on port 8080');
});

// event1 fired!
// event2 fired!
// Server running on port 8080
// event3 fired!
```
Whenever it makes sense for code to subscribe to something rather than get a callback from something. The typical use case would be that there's multiple blocks of code in your application that may need to do something when an event happens.

---

## What is Piping in Node?
 Piping is a process to connect output of one stream to another stream. It is normally used to get data from one stream and to pass output of that stream to another stream. There is no limit on piping operations.

---

## What's a stub? Name a use case.
 Stubs are functions/programs that simulate the behaviours of components/modules. Stubs provide canned answers to function calls made during test cases. Also, you can assert on with what these stubs were called.

---

## What Is `package.json` in Node.js?

`package.json` is a metadata file in Node.js that contains information about the project, such as dependencies, scripts, and version.

---

## What Is a Buffer in Node.js?

A buffer is a temporary storage space for binary data, allowing Node.js to handle raw data directly.

```js
const buffer = Buffer.from("Hello");

console.log(buffer);            // <Buffer 48 65 6c 6c 6f>
console.log(buffer.toString()); // Hello
```

---

## What Are Streams in Node.js?

<img src="./img/stream.jpeg" alt="stream" />

A Stream is a way to process data piece-by-piece (chunks) instead of loading the entire data into memory at once. They enable reading or writing data piece by piece instead of loading the entire data into memory.

Streams are objects used to handle continuous data flows, processing data chunk by chunk rather than all at once — much faster for big files.

**add Types of streams:**

`Readable:` Streams from which data can be read (e.g., fs.createReadStream).

`Writable:` Streams to which data can be written (e.g., fs.createWriteStream).

`Duplex:` Streams that are both Readable and Writable (e.g., TCP sockets).

`Transform:` Duplex streams that can modify the data as it is written and read

```js
const fs = require('fs');
const data = fs.readFileSync('movie.mp4');
```

---

## What Is the Difference Between `setTimeout()` and `setImmediate()`?

`setTimeout()` schedules a callback after a specified delay, whereas `setImmediate()` executes it immediately after I/O events.

---

## FileSystem — `readFile` vs `readFileSync`

It allows you to read, write, update, and delete files on your computer.
- `readFile` — Asynchronous, mostly used for web servers
- `readFileSync()` — Synchronous, used for small scripts

| Feature | Synchronous (Sync) | Asynchronous (Async) |
|---|---|---|
| Execution | One task at a time | Multiple tasks can progress concurrently |
| Blocking | ✅ Blocks execution | ❌ Does not block execution |
| Performance | Slower for I/O-heavy tasks | Faster and scalable |
| Thread behavior | Main thread waits | Main thread remains free |
| Callback/Promise | Not needed | Uses Callbacks, Promises, Async/Await |
| Use case | Small scripts, startup tasks | APIs, DB calls, file/network operations |
| Node.js recommendation | Limited use | Preferred approach |

```js
import fs from "fs";
import express from "express";

const app = express();
// Async
fs.readFile("./blog.txt", (err, data) => {
  if (err) return console.log(err);
  console.log("Async:", data.toString());
});

// Sync
const data = fs.readFileSync("./blog.txt");
console.log("Sync:", data.toString());

// Write file
fs.writeFile("./blog.txt", "Hello World", () => {
  console.log("File written");
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});

// Sync: Hello World
// Server running on port 8080
// Async: 
// File written
```

---

## Path Module — Node.js

In Node.js, the `path` module provides utilities for working with file and directory paths. It is a built-in module, so you do not need to install any external packages to use it.

**Special Node.js Constants**

`__filename` — provides the absolute path of the currently executing file

`__dirname` — provides the absolute directory path of the currently executing file

```js
console.log(__filename);
// C:\Projects\app\index.js

console.log(__dirname);
// C:\Projects\app
```

**Common Path Module Methods**

```js
// path.basename() — returns the last portion of a path
path.basename('/users/admin/file.txt');
// file.txt

// path.dirname() — returns the directory name of a path
path.dirname('/users/admin/file.txt');
// /users/admin

// path.extname() — returns the file extension
path.extname('file.txt');
// .txt

// path.join() — joins path segments into a single path
path.join('users', 'admin', 'file.txt');
// users/admin/file.txt

// path.resolve() — resolves a sequence of paths into an absolute path
path.resolve('file.txt');
// C:\Projects\app\file.txt
```

---

## FS Module — Node.js

The `fs` (File System) module in Node.js is a core module that allows you to work with the file system, enabling you to read, write, update, delete, and watch files.

**CRUD Operations — Asynchronous (callback style)**

```js
const fs = require("fs");
const path = require("path");

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

// Read
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});

// Create
fs.writeFile(filePath, "This is the initial Data", "utf-8", (err) => {
  if (err) console.error(err);
  else console.log("File has been Saved");
});

// Update
fs.appendFile(filePath, "\nThis is the updated Data", "utf-8", (err) => {
  if (err) console.error(err);
  else console.log("File has been Updated");
});

// Delete
fs.unlink(filePath, (err) => {
  if (err) console.error(err);
  else console.log("File has been Deleted");
});
```

**Using Promises**

Advantages:
- No need for manual callbacks
- Cleaner and more intuitive asynchronous workflows using async/await
- Suitable for modern JavaScript applications

Use Cases:
- Reading files asynchronously in a non-blocking way
- Writing or appending data to files without blocking the event loop
- Performing multiple file operations sequentially or concurrently with promise chaining
- Handling errors gracefully with `.catch()` or `try...catch` blocks

```js
const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

const file = __dirname;

fs.promises
  .readdir(file)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

fs.promises
  .writeFile(filePath, "", "utf-8")
  .then(() => console.log("File created successfully!"))
  .catch((err) => console.log(err));
```

**Using async/await**

```js
const readFileExample = async () => {
  try {
    const data = await fs.promises.readFile(filePath, "utf-8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

readFileExample();

const appendFileExample = async () => {
  try {
    await fs.promises.appendFile(filePath, "This is the initial Data", "utf-8");
    console.log("File created successfully!");
  } catch (error) {
    console.error(error);
  }
};

appendFileExample();

const writeFileExample = async () => {
  try {
    await fs.promises.writeFile(filePath, "This is the initial Data", "utf-8");
    console.log("File created successfully!");
  } catch (error) {
    console.error(error);
  }
};

writeFileExample();
```

---

## Event Module — Node.js

`EventEmitter` is a core module in Node.js used to create and handle custom events. It is part of the `events` module and is often used for building event-driven systems in Node.js.

**Key Methods**

1. **`emit(eventName, [args])`** — emits (triggers) an event with the specified `eventName`. You can also pass arguments that will be consumed by the listeners. It's like calling a function, but instead it triggers all listeners (functions) attached to the specified event.
2. **`on(eventName, listener)`** — registers a listener function for the given event.

```js
const EventEmitter = require("events");

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// 1. Define an event listener (addListener)
emitter.on("greet", () => {
    console.log(`hello Vinod Thapa`);
});

emitter.on("greet", (arg) => {
    console.log(`hello ${arg.username}, You are a ${arg.prof}, ri8`);
});

// 2. Trigger (emit) the "greet" event
emitter.emit("greet", {
    username: "Vinod Thapa",
    prof: "Full Stack Dev"
});
```

---

## HTTP Module — Creating a Raw Server

The `http` module is used to create a basic HTTP server without Express.

```js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  fs.readFile("./index.html", (err, data) => {
    if (err) return res.end("Error loading file");
    res.statusCode = 200;
    res.end(data);
  });
});

server.listen(3000, () => console.log("Server running on port 3000"));
```

---

## What Is Nodemon?

A development tool that automatically restarts your server when files change.

```bash
npm install -g nodemon
nodemon index.js
```

---
---

# 🟦 Express.js

## What Is Express.js?

Express.js is a minimal and flexible web application framework for Node.js, built on top of the native HTTP module. It provides routing, middleware, and server handling.

## Why Express?

1. Lightweight
2. Fast, minimal setup
3. Middleware support
4. Easy routing
5. Perfect for REST APIs

**Basic Route**
```js
app.get("/home", (req, res) => {
  res.send("Welcome Home");
});
```


**Request / Response**
- `req` → incoming data from client
- `res` → output we send back

In Express.js, creating a route usually means creating an API endpoint. A route defines how the server should respond when a client sends a request to a specific URL and HTTP method.

### Route Order Matters

Express checks routes from top to bottom. The first matching route is executed, so the order of route definitions is very important.
```js
app.get("/users/profile", (req, res) => {
    res.send("Profile Route");
});

app.get("/users/:id", (req, res) => {
    res.send("User ID Route");
});
```
### Multiple Route Handlers

Express allows multiple middleware functions for a single route. Each handler receives next() to pass control to the next handler.
**Multiple routes**
```js
const express = require("express");
const app = express();

app.use(
    "/user",
    (req, res, next) => {
        console.log(
            "Handling the route user!!"
        );
        next();
    },

    (req, res) => {
        console.log(
            "Handling the route user 2!!"
        );
        res.send(
            "2nd Response!!"
        );
    }
);

app.listen(8080, () => {
    console.log(
        "Server is successfully listening on port 8080..."
    );
});
```
**express router is groupe similar route and handle those instead of write all route in index js**

**Step 1: Create Router File**

```js
//routes/userRouter.js
const express = require("express");
const userRouter = express.Router();
userRouter.get("/", (req, res) => {
    res.send("All Users");
});
userRouter.post("/", (req, res) => {
    res.send("Create User");
});
userRouter.get("/:id", (req, res) => {
    res.send("Get User By ID");
});
userRouter.put("/:id", (req, res) => {
    res.send("Update User");
});
userRouter.delete("/:id", (req, res) => {
    res.send("Delete User");
});

module.exports = userRouter;
```

**Step 2: Register Router**

```js
index.js
const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
app.use("/users", userRouter);
app.listen(3000);
```
| Aspect            | `app.get()`            | `app.use()`                         |
| ----------------- | ---------------------- | ----------------------------------- |
| Purpose           | Define a route handler | Register middleware                 |
| HTTP Method       | Only GET requests      | All HTTP methods                    |
| Exact Route Match | Yes                    | Prefix/path match                   |
| Common Use        | APIs and pages         | Logging, authentication, parsing    |
| Receives Requests | Only GET               | GET, POST, PUT, DELETE, PATCH, etc. |
| Can Call `next()` | Yes                    | Yes (typically)                     |
| Route Specific    | Yes                    | Can be global or route-specific     |

---

## What Is Middleware?

Middleware is a callback function that runs between the request coming in and the response going out — performing tasks like logging, authentication, and data processing. It has three parameters: `req`, `res`, and `next`. It executes before the route handler.

- Data sent by the client to the server is available in the `req` (request) object.
- Data sent from the server to the client is handled through the `res` (response) object.
- After executing its logic, the middleware passes control to the next middleware or route handler by calling `next()`.

<img src="./img/middleware.jpeg" alt="middleware" />

```js
const express = require("express");
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // pass control to next middleware
};

app.use(logger); // runs before every route

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000);
```

**Custom Middleware Example**

`users.json`
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com"
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bob@example.com"
  }
]
```

`userMiddleware.js`
```js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const loadUsers = (req, res, next) => {
  const filePath = path.join(__dirname, "../users.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({
        message: "Error reading file",
      });
    }

    const users = JSON.parse(data);
    req.users = users;
    next();
  });
};
```

`index.js`
```js
import express from "express";
import { loadUsers } from "./middlewares/usersMiddleware.js";

const app = express();
const PORT = 8080;

app.get("/users", loadUsers, (req, res) => {
  res.json(req.users);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
```

---

## how express handles middleware behind the scence?

Behind the scenes, Express maintains a stack (array) of middleware functions and route handlers. Whenever a request arrives, Express starts at the top of this stack and executes each matching middleware in order. Each middleware receives three arguments: req (request), res (response), and next(). Calling next() tells Express to move to the next middleware in the stack.

```js
const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
});

app.get("/", (req, res) => {
    console.log("Route Handler");
    res.send("Hello");
});
```
**admin authentication middleware**
```js
const express = require("express");
const app = express();
// Handle Auth Middleware for all admin routes

app.use("/admin", (req, res, next) => {
    console.log("Admin auth is getting checked!!");
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) {
        res.status(401).send("Unauthorized request");
    } else {
        next();
    }
});
app.get("/user", (req, res) => {
    res.send("User Data Sent");
});
app.get("/admin/getAllData", (req, res) => {
    res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("Deleted a User");
});
app.listen(8080, () => {
    console.log(
        "Server is successfully listening on port 8080..."
    );
});

```
---


## Error Middleware Rules

| Rule                            | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| Must have 4 parameters          | `(err, req, res, next)`                                                |
| `err` must be first parameter   | Express identifies it as an error handler based on the first parameter |
| `next` should be last parameter | Allows forwarding errors if needed                                     |
| Usually registered last         | Error middleware should be placed after all routes                     |
| Activated by `next(err)`        | Express skips normal middleware and jumps to error handlers            |

```js
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message
    });
});

//multiple error handlers
app.use((err, req, res, next) => {
    console.log("Logging Error");
    next(err);
});

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    });
});
```
---

## Route Parameters in Express.js

Route parameters in Express.js are dynamic parts of the URL that can be accessed using `req.params`. They are defined in the route path with a colon (`:`), e.g. `/user/:id/view/:article` where `id` is a route parameter.

- You can access the value of a route parameter via `req.params.id`, `req.params.article` in the route handler.
- Route parameters are used to capture values from the URL and pass them to the route handler for processing, like user IDs, product names, etc.
- Express automatically parses and makes the values available in `req.params` as an object, where the parameter name is the key.

```js
import express from "express";
const app = express();

//http://localhost:3000/user/101
app.get("/user/:id", (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.listen(3000);
```

---
## Why Avoid Admin Conditions Inside Routes?

❌ Bad Practice: Admin Check in Every Route
```js
app.delete('/users/:id', (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({
            message: 'Access denied'
        });
    }
    // Delete user logic
    res.json({ message: 'User deleted' });
});
```
**Problems**

- Code Duplication
- Same admin check must be repeated in multiple routes.
- Harder Maintenance
- If authorization logic changes, every route needs modification.
- Poor Readability
- Business logic gets mixed with security logic.
- Difficult Testing
- Authorization and route logic are tightly coupled.
- Recommended Approach: Middleware
- Middleware executes before the route handler.

Create Admin Middleware
```js
// middleware/admin.js

const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({
            message: 'Admin access required'
        });
    }
    next();
};

module.exports = adminMiddleware;
```
Use Middleware in Routes
```js
const adminMiddleware = require('./middleware/admin');

app.delete(
    '/users/:id',
    adminMiddleware,
    (req, res) => {
        // Only admin reaches here
        res.json({
            message: 'User deleted'
        });
    }
);
```
---
## Advanced Routing Techniques
Express supports advanced routing through route patterns and regular expressions. Special characters such as ?, +, and * allow optional, repeated, or wildcard matching, while regex routes provide powerful pattern-based URL matching. These techniques help reduce duplicate routes and handle complex URL structures efficiently.
| Route Pattern | Purpose                                      | Matches                     | Does Not Match  |
| ------------- | -------------------------------------------- | --------------------------- | --------------- |
| `/ab?c`       | `b` is optional                              | `/abc`, `/ac`               | `/abbc`         |
| `/ab+c`       | One or more `b` characters                   | `/abc`, `/abbc`, `/abbbc`   | `/ac`           |
| `/ab*c`       | Zero or more characters between `ab` and `c` | `/abc`, `/abXYZc`, `/ac`    | `/ab`           |
| `/a(bc)?d`    | Optional `bc` group                          | `/ad`, `/abcd`              | `/abcdx`        |
| `/a/`         | Regex containing letter `a` anywhere         | `/apple`, `/cat`, `/batman` | `/hello`        |
| `/.*ab$/`     | Ends with `ab`                               | `/ab`, `/xyzab`, `/testab`  | `/abc`, `/abcd` |
---

## Query Parameters in Express.js

Query parameters are key-value pairs appended to a URL after a `?`, separated by `&`, like `/search?query=express&limit=10`.

- In Express.js, they can be accessed using `req.query`, which returns an object containing the parameters.
- For example, in `/search?page=4`, `req.query.page` will give `"4"`.
- Query parameters are often used to pass optional or filter data to the server without modifying the route.
- They are always part of the URL and visible in the browser address bar.

```js
import express from "express";

const app = express();
//http://localhost:3000/search?query=nodejs

app.get("/search", (req, res) => {
    res.send(`Search: ${req.query.query}`);
});

app.listen(3000);
```

---

## Basic Route With Express + Basic Form

```js
const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.sendFile("./index.html", { root: __dirname });
});

app.post("/submit", (req, res) => {
  return res.sendFile("./submit.html", { root: __dirname });
});

app.get("/users", (req, res) => {
  res.send("All Users Coming Soon...");
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile("./404.html", { root: __dirname });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
```

---

## Template Engines

A template engine in Express.js is used to render dynamic HTML by injecting data into templates. Popular engines like EJS, Pug, or Handlebars can be integrated with Express. All engines have different syntax similar to HTML, but they help pass dynamic values from Express to HTML.

## What Is EJS?

A view engine that lets you write dynamic HTML using JS. Supports JavaScript features like loops and conditionals.

**EJS Tags**

| EJS Tag | Purpose |
|---|---|
| `<%= value %>` | Display value |
| `<%- value %>` | Display raw HTML |
| `<% code %>` | JavaScript logic |
| `res.render()` | Send EJS template to browser |
| `app.set("view engine","ejs")` | Configure EJS |
| `views/` | Folder containing `.ejs` files |

**CRUD App Using EJS**

```
project/
│
├── index.js
├── views/
│   ├── index.ejs
│   ├── add.ejs
│   └── edit.ejs
│
├── package.json
```

`index.js`
```js
import express from "express";

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" }
];

// Home Page
app.get("/", (req, res) => {
  res.render("index", { posts });
});

// Add Form
app.get("/add", (req, res) => {
  res.render("add");
});

// Create Post
app.post("/add", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title
  };

  posts.push(newPost);
  res.redirect("/");
});

// Edit Form
app.get("/edit/:id", (req, res) => {
  const post = posts.find(post => post.id === parseInt(req.params.id));

  if (!post) {
    return res.send("Post Not Found");
  }

  res.render("edit", { post });
});

// Update Post
app.post("/edit/:id", (req, res) => {
  const post = posts.find(post => post.id === parseInt(req.params.id));

  if (!post) {
    return res.send("Post Not Found");
  }

  post.title = req.body.title;
  res.redirect("/");
});

// Delete Post
app.post("/delete/:id", (req, res) => {
  posts = posts.filter(post => post.id !== parseInt(req.params.id));
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
```

`index.ejs`
```html
<!DOCTYPE html>
<html>
<head>
  <title>Posts</title>
</head>
<body>

<h1>Posts</h1>
<a href="/add">Add Post</a>
<hr>

<ul>
  <% posts.forEach(post => { %>
    <li>
      <%= post.title %>
      <a href="/edit/<%= post.id %>">Edit</a>
      <form action="/delete/<%= post.id %>" method="POST" style="display:inline;">
        <button type="submit">Delete</button>
      </form>
    </li>
  <% }) %>
</ul>

</body>
</html>
```

`add.ejs`
```html
<!DOCTYPE html>
<html>
<head>
  <title>Add Post</title>
</head>
<body>

<h1>Add Post</h1>
<form action="/add" method="POST">
  <input type="text" name="title" placeholder="Enter title" required>
  <button type="submit">Add</button>
</form>

</body>
</html>
```

`edit.ejs`
```html
<!DOCTYPE html>
<html>
<head>
  <title>Edit Post</title>
</head>
<body>

<h1>Edit Post</h1>
<form action="/edit/<%= post.id %>" method="POST">
  <input type="text" name="title" value="<%= post.title %>" required>
  <button type="submit">Update</button>
</form>

</body>
</html>
```

---

## Create a REST API

`mock.json`
```json
[
  { "_id": 1, "name": "Sam", "email": "sam@gmail.com" }
]
```

`index.js`
```js
const express = require("express");
const fs = require("fs");

const users = require("./mock.json");

const app = express();
app.use(express.urlencoded({ extended: false }));
const PORT = 8080;

// GET all users JSON
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// GET users as HTML
app.get("/users", (req, res) => {
  const html = `
  <ul>
    ${users.map((u) => `<li>${u.name}</li>`).join("")}
  </ul>`;
  res.send(html);
});

// GET a user by ID
app.get("/api/user/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u._id === id);

  if (!user) return res.status(404).json({ msg: "User not found" });

  res.json(user);
});

// POST user
app.post("/api/users", (req, res) => {
  const body = req.body;

  const newUser = { ...body, _id: users.length + 1 };
  users.push(newUser);

  fs.writeFile("./mock.json", JSON.stringify(users), () => {
    return res.json({ status: "Success", id: newUser._id });
  });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
```

---

## Node.js + MongoDB With MVC Pattern

MVC is a software design pattern that separates an application into three distinct layers: Model, View, and Controller, each with a specific responsibility.

**Model** — Manages Data and Logic
- Represents the data of the application
- Handles business logic
- Interacts with the database (e.g. CRUD operations)

**View** — Handles User Interface
- Displays the data to the user
- Responsible for rendering the presentation (HTML, CSS, JavaScript) based on the data provided by the Controller

**Controller** — The Mediator
- Acts as the intermediary between the Model and View
- Handles user input
- Interacts with the Model to fetch or update data
- Passes the data to the View for display

```js
// model
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

// controller
exports.createUser = async (req, res) => {
  const body = req.body;

  if (!body.firstName || !body.email)
    return res.status(400).json({ msg: "All fields required" });

  await User.create(body);

  return res.status(201).json({ msg: "User created" });
};

// view (ejs)
// <ul>
//   <% users.forEach(u => { %>
//     <li><%= u.firstName %></li>
//   <% }) %>
// </ul>

// mongodb connection
mongoose
  .connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
```

---

## Create a Pagination API

```js
app.get("/api/users", (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 3;

  const start = (page - 1) * limit;
  const end = page * limit;

  return res.json({
    page,
    data: users.slice(start, end),
  });
});
```

---

## Cookies

A cookie is a small piece of data stored in the user's browser and sent back to the server with every request.whenever user is login server will create a token attach it with cookie and sent back
now cookie is store by browser in every request to server for validating

**How Cookies Work**
- Server sends a cookie to the browser
- Browser stores the cookie
- Browser automatically sends the cookie with future requests to the same domain

<img src="./img/session.jpeg" alt="session" />

```js
const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

app.use(cookieParser());

app.get('/', function (req, res) {
    res.cookie("name", "harshita");
    res.send("done");
});

app.get('/read', function (req, res) {
    console.log(req.cookies);
    res.send("read page");
});

app.get('/delete', function (req, res) {
    res.clearCookie('name');
    res.send('Cookie deleted successfully');
});

app.post("/login", async (req, res) => {
    try {
        const { emailId, password } = req.body;
        const user = await User.findOne({
            emailId: emailId
        });
        if (!user) {
            throw new Error("Invalid credentials");
        }
        const isPasswordValid =
            await bcrypt.compare(
                password,
                user.password
            );
        if (isPasswordValid) {
            // Create JWT Token
            const token = await jwt.sign(
                { _id: user._id },
                "DEV@Tinder$790",
                {
                    expiresIn: "7d"
                }
            );
            // Add token to cookie
            res.cookie("token", token, {
                expires: new Date(
                    Date.now() + 8 * 3600000
                )
            });
            res.send("Login Successful!!!");
        } else {
            throw new Error(
                "Invalid credentials"
            );
        }
    } catch (err) {
        res.status(400).send(
            "ERROR : " + err.message
        );
    }
});

app.listen(3000);
```

---

## Sessions

A session stores user data on the server, while only a session ID is stored in a cookie on the client.

<img src="./img/sessions.jpeg" alt="sessions" />

**How Sessions Work**
- User logs in
- Server creates a session and assigns a unique session ID
- Session ID is stored in a cookie
- Browser sends session ID with future requests
- Server retrieves user data using that session ID

| Feature | Cookie | Session |
|---|---|---|
| Storage Location | Browser | Server |
| Data Stored | Actual data | Session data on server |
| Client Side Access | Yes | No (only session ID) |
| Security | Less secure | More secure |
| Storage Limit | ~4 KB | Server memory/database |
| Lifetime | Until expiry/deletion | Until timeout/logout |
| Common Usage | Preferences, theme, language | Login/authentication |

---

## Authentication and Authorization (Input Validation)

**How can we implement authentication and authorization in Node.js?**

Authentication is the process of verifying a user’s identity, while Authorization determines what actions or resources that user is allowed to access. In Node.js, these can be implemented using packages such as Passport (for strategies like OAuth, Google, GitHub, etc.) and JWT(jsonwebtoken) for token-based authentication and role-based authorization.

<img src="./img/authorization.jpeg" alt="auth" />

| Aspect         | Authentication                  | Authorization                              |
| -------------- | ------------------------------- | ------------------------------------------ |
| Meaning        | Verifies who the user is        | Verifies what the user can do              |
| Question       | "Who are you?"                  | "What are you allowed to access?"          |
| Happens First? | Yes                             | After authentication                       |
| Purpose        | Identity verification           | Permission control                         |
| Data Used      | Username, password, OTP, tokens | Roles, permissions, access policies        |
| Outcome        | User is logged in               | User gets access to resources              |
| Example        | Login using email and password  | Admin can delete users, normal user cannot |
| Common Methods | JWT, OAuth, Session, SSO        | RBAC, ABAC, ACL                            |

**using zod**

```js
const express = require("express");
const { z, ZodError } = require("zod");

const app = express();

app.use(express.json());

// Schema
const userSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  age: z.number().min(18, "Age must be at least 18"),
});

// Route
app.post("/users", (req, res) => {
  try {
    const validatedData = userSchema.parse(req.body);

    res.status(201).json({
      success: true,
      data: validatedData,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.errors,
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

**using bcrypt**

```js
const express = require('express');
const app = express();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get("/", function (req, res) {
    let token = jwt.sign(
        { email: "harsh@example.com" },
        "secret"
    );

    res.cookie("token", token);
    res.send("done");
});

app.get("/read", function (req, res) {
    let data = jwt.verify(
        req.cookies.token,
        "secret"
    );

    console.log(data);
    res.send(data);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```
| Point              | bcrypt                                    | Zod                                            |
| ------------------ | ----------------------------------------- | ---------------------------------------------- |
| **Purpose**        | Hashes and verifies passwords             | Validates and parses input data                |
| **Category**       | Security library                          | Data validation library                        |
| **Used For**       | Authentication and password storage       | API requests, forms, and user input validation |
| **Main Functions** | `hash()`, `compare()`                     | `parse()`, `safeParse()`                       |
| **Output**         | Hashed password or boolean (`true/false`) | Validated data or validation errors            |
---

## `window`/`document` vs `global`/`globalThis` Object

📝 In the **browser**, the global object is `window` (holds `document`, DOM APIs, etc.). In **Node.js**, there is no `window` — the global object is `global`. `globalThis` is a **standard JavaScript** property that points to the global object in *any* environment — `window` in the browser, `global` in Node.js — so it's the safe, portable way to access the global object regardless of where the code runs.

```js
// In the browser
console.log(window === globalThis); // true

// In Node.js
console.log(global === globalThis); // true
console.log(typeof window);          // 'undefined' — window does not exist in Node.js

// Attaching a variable globally in Node.js
global.appName = "MyApp";
console.log(globalThis.appName); // MyApp — accessible via globalThis too
```

| | `window` | `global` | `globalThis` |
|---|---|---|---|
| Environment | Browser only | Node.js only | Both (standard JS) |
| Includes DOM (`document`, etc.) | ✅ | ❌ | Depends on environment |
| Recommended for cross-platform code | ❌ | ❌ | ✅ |


| Point          | JavaScript Object                                      | JSON                                                                  |
| -------------- | ------------------------------------------------------ | --------------------------------------------------------------------- |
| **Purpose**    | Used to store and manipulate data in JavaScript code   | Used to exchange data between systems/applications                    |
| **Keys**       | Keys can be without quotes (`name`)                    | Keys must be in double quotes (`"name"`)                              |
| **Data Types** | Can contain functions, `undefined`, and other JS types | Supports only strings, numbers, booleans, arrays, objects, and `null` |
| **Usage**      | Used directly within JavaScript programs               | Used as a text/string format for data transfer                        |
| **Conversion** | `JSON.stringify(object)` converts object → JSON        | `JSON.parse(json)` converts JSON → object                             |


**common  property of global object**

| Property           | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| `global`           | Reference to the global object itself.                                   |
| `process`          | Provides information about the current Node.js process and environment.  |
| `console`          | Used for logging messages to the console (`log`, `error`, `warn`, etc.). |
| `Buffer`           | Used for handling binary data.                                           |
| `setTimeout()`     | Executes a function once after a specified delay.                        |
| `setInterval()`    | Executes a function repeatedly at specified intervals.                   |
| `setImmediate()`   | Executes a callback immediately after the current event loop cycle.      |
| `clearTimeout()`   | Cancels a `setTimeout()` timer.                                          |
| `clearInterval()`  | Cancels a `setInterval()` timer.                                         |
| `clearImmediate()` | Cancels a `setImmediate()` callback.                                     |
| `__dirname`        | Returns the absolute path of the current directory.                      |
| `__filename`       | Returns the absolute path of the current file.                           |
| `module`           | Represents the current module.                                           |
| `exports`          | Used to export functionality from a module.                              |
| `require()`        | Imports modules, files, or packages.                                     |

---

## When to Use Named Export vs Default Export?

📝 **Named export** — use when a file exports multiple things (functions, constants, classes). The import name must match the exported name (unless aliased with `as`).

📝 **Default export** — use when a file exports exactly **one main thing** (e.g. a single component, a single utility function, an Express router). Can be imported with any name.

<img src="./img/transfer.jpeg" alt="transfer" />


```js
// Named exports — math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Import — must match names (or use *)
import { add, subtract } from './math.js';
```

```js
// Default export — logger.js
export default function logger(msg) {
  console.log(msg);
}

// Import — any name works
import log from './logger.js';
```

**Rule of thumb**
- One main export per file (a component, a router, a class) → **default export**
- A utility/helper file with multiple related functions/constants → **named exports**
- A file can have both a default export and named exports at the same time

---

## Input Validation With a Custom Async Validator

📝 Sometimes validation requires checking against the database (e.g. "is this email already taken?") — this needs to be **asynchronous**. Libraries like Zod, Joi, and Mongoose support async/custom validation logic.

**Custom async validator with Zod (`.refine()`)**
```js
const { z } = require("zod");

const userSchema = z.object({
  email: z.string().email()
}).refine(
  async (data) => {
    const existingUser = await User.findOne({ email: data.email });
    return !existingUser; // return false if email already taken
  },
  {
    message: "Email is already in use",
    path: ["email"]
  }
);

app.post("/users", async (req, res) => {
  try {
    const validatedData = await userSchema.parseAsync(req.body);
    res.status(201).json({ success: true, data: validatedData });
  } catch (error) {
    res.status(400).json({ success: false, errors: error.errors });
  }
});
```

---

## Model and Schema (Mongoose)

📝 **Schema** — defines the *structure/shape* of a document: field names, data types, validation rules, and defaults. It's a blueprint, not a database object.

📝 **Model** — a compiled version of the schema; it's the actual interface used to create, read, update, and delete documents in MongoDB (the "class" built from the schema "blueprint").

```js

//models/user-models.js
const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017");
// Schema — defines structure & validation
const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true,          // removes leading/trailing spaces
        maxlength: 50        // maximum length allowed
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,     // converts email to lowercase
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email Address");
            }
        }
    },

    password: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error(
                    "Password must contain uppercase, lowercase, number and special character"
                );
            }
        }
    },
    age: {
        type: Number,
        min: 18,
        default: 18
    },
    profileData: {
        type: String,
        validate(value) {
            if (!validator.isJSON(value)) {
                throw new Error("Profile data must be valid JSON");
            }
        }
    },
    skills: [
        {
            type: String,
            trim: true,
            lowercase: true
        }
    ]
},
{
    timestamps: true
});

// Model — compiled from schema
const User = mongoose.model("User", userSchema);
module.exports = User

```

| | Schema | Model |
|---|---|---|
| Purpose | Defines structure/validation | Interacts with the database |
| Analogy | Blueprint / class definition | The actual class used to create instances |
| Created with | `new mongoose.Schema({...})` | `mongoose.model("Name", schema)` |

---
---

# 📦 Projects

## Project 1: CRUD API with JSON File + Swagger Docs

**Installation and URLs**
```bash
npm install express cors swagger-ui-express swagger-jsdoc nodemon
# add Swagger JSDoc comments in main.js
node main.js
npx nodemon main.js

# http://localhost:5000/api/user
# http://localhost:5000/api-docs
```

`user.json`
```json
[
  {
    "id": 1,
    "name": "Sougata"
  }
]
```

`main.js`
```js
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User CRUD API",
      version: "1.0.0",
      description: "Simple CRUD API using Express and JSON file"
    },
    servers: [{ url: "http://localhost:5000" }]
  },
  apis: ["./main.js"]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const FILE = "./user.json";

if (fs.existsSync(FILE)) {
  console.log("✅ DB found");
} else {
  console.log("❌ DB not found");
}

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 */
app.get("/api/user", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));
  res.status(200).json(data);
});

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created
 */
app.post("/api/user", (req, res) => {
  const users = JSON.parse(fs.readFileSync(FILE));

  const newUser = {
    id: Date.now(),
    ...req.body
  };

  users.push(newUser);
  fs.writeFileSync(FILE, JSON.stringify(users, null, 2));

  res.status(201).json(newUser);
});

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Update user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 */
app.put("/api/user/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(FILE));

  const updated = users.map(user =>
    user.id == req.params.id ? { ...user, ...req.body } : user
  );

  fs.writeFileSync(FILE, JSON.stringify(updated, null, 2));

  res.status(200).json({ message: "Updated" });
});

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Delete user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted
 */
app.delete("/api/user/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(FILE));

  const filtered = users.filter(x => x.id != req.params.id);

  fs.writeFileSync(FILE, JSON.stringify(filtered, null, 2));

  res.sendStatus(204).json({ message: "Deleted" });
});

app.listen(PORT, () => console.log(` ✅ Server running on ${PORT}`));
```

---

## Project 2: CRUD API with MongoDB + Swagger Docs

**Installation, Credentials, and URLs**
```txt
MongoDB username/password with URL:

sougatamukherjee_db_user
fbPJDtUAgWzjGE83
mongodb+srv://sougatamukherjee_db_user:fbPJDtUAgWzjGE83@cluster0.eytkkg9.mongodb.net/?appName=Cluster0

Data: https://cloud.mongodb.com/v2/6a4660fb3fdbae474dc36c6b#/explorer/6a46619e1169dc5cd4b154dd/test/users/find
```

```bash
npm install express cors mongoose swagger-ui-express swagger-jsdoc nodemon
# add Swagger JSDoc comments in main.js
node main.js
npx nodemon main.js

# http://localhost:5000/api/user
# http://localhost:5000/api-docs
```

`main.js`
```js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/* ========= MongoDB Connection ========= */
mongoose.connect("mongodb+srv://sougatamukherjee_db_user:fbPJDtUAgWzjGE83@cluster0.eytkkg9.mongodb.net/?appName=Cluster0");

mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB Connected");
});

mongoose.connection.on("error", (err) => {
  console.log("❌ MongoDB Error:", err);
});

/* ========= User Schema ========= */
const userSchema = new mongoose.Schema(
  { name: { type: String, required: true, unique: true } },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

/* ========= Swagger Config ========= */
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User CRUD API",
      version: "1.0.0",
      description: "CRUD API using Express + MongoDB + Mongoose"
    },
    servers: [{ url: "http://localhost:5000" }]
  },
  apis: ["./main.js"]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 */

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 */
app.get("/api/user", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: User Created
 */
app.post("/api/user", async (req, res) => {
  try {
    const user = await User.create({ name: req.body.name });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Update User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: User Updated
 */
app.put("/api/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Delete User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User Deleted
 */
app.delete("/api/user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on ${PORT}`);
});
```

---

## Project 3: CRUD App with Express Router

```js
import express from 'express';
const router = express.Router();
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(router);

const port = 8080;

const posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three' },
];

// Get all posts with limit
// GET http://localhost:8080/api/posts?limit=2
router.get('/api/posts', (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

// Get single post by id
// GET http://localhost:8080/api/posts/1
router.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.filter((post) => post.id === id);

  if (post.length === 0) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.status(200).json(post);
});

// POST http://localhost:3000/api/posts
router.post('/api/posts', (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const newPost = {
    id: posts.length + 1,
    title: req.body.title
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// Update Post
router.put('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: `A post with the id ${id} was not found` });
  }

  if (!req.body.title) {
    return res.status(400).json({ msg: 'Title is required' });
  }

  post.title = req.body.title;
  res.status(200).json(post);
});

// Delete Post
router.delete('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: `A post with the id ${id} was not found` });
  }

  // Actually remove from array
  const index = posts.findIndex((p) => p.id === id);
  posts.splice(index, 1);

  res.status(200).json({
    msg: 'Post deleted successfully',
    posts: posts
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
```

---

## Project 4: Append User to JSON File

`users.json`
```json
[
  { "id": "1", "name": "John Doe" },
  { "id": "2", "name": "Jane Smith" },
  { "id": "3", "name": "Alice Johnson" }
]
```

```js
import express from "express";
import fs from "fs/promises";

const app = express();
const PORT = 8080;

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const data = await fs.readFile("./users.json", "utf8");
    const users = JSON.parse(data);

    users.push(req.body);

    await fs.writeFile("./users.json", JSON.stringify(users, null, 2));

    res.json({
      message: "User added successfully",
      user: req.body,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
```

---

## Project 5: Encrypt and Decrypt API

```js
import express from "express";
import crypto from "crypto";

const app = express();

app.use(express.json());

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

app.post("/encrypt", (req, res) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(req.body.text, "utf8", "hex");
  encrypted += cipher.final("hex");

  res.json({ encrypted });
});

app.post("/decrypt", (req, res) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(req.body.encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");

  res.json({ decrypted });
});

app.listen(8080);
```

---

## Project 6: Todo App Using CLI

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todos = [];

function showMenu() {
  console.log("\n===== TODO APP =====");
  console.log("1. Add Todo");
  console.log("2. Show Todos");
  console.log("3. Delete Todo");
  console.log("4. Exit");

  rl.question("Choose an option: ", handleInput);
}

function handleInput(option) {
  switch (option) {
    case "1":
      rl.question("Enter Todo: ", (todo) => {
        todos.push(todo);
        console.log("✅ Todo Added");
        showMenu();
      });
      break;

    case "2":
      console.log("\n----- TODOS -----");

      if (todos.length === 0) {
        console.log("No todos found");
      } else {
        todos.forEach((todo, index) => {
          console.log(`${index + 1}. ${todo}`);
        });
      }

      showMenu();
      break;

    case "3":
      if (todos.length === 0) {
        console.log("No todos to delete");
        return showMenu();
      }

      todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
      });

      rl.question("Enter todo number to delete: ", (num) => {
        const index = Number(num) - 1;

        if (index >= 0 && index < todos.length) {
          const deleted = todos.splice(index, 1);
          console.log(`🗑 Deleted: ${deleted[0]}`);
        } else {
          console.log("Invalid index");
        }

        showMenu();
      });

      break;

    case "4":
      console.log("👋 Goodbye!");
      rl.close();
      break;

    default:
      console.log("Invalid Option");
      showMenu();
  }
}

showMenu();
```

---

## Project 7: Random Joke Generator

```js
import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getJoke() {
  const url = "https://official-joke-api.appspot.com/random_joke";

  https.get(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      const joke = JSON.parse(data);

      console.log(chalk.green("\n😂 Random Joke\n"));
      console.log(chalk.yellow(joke.setup));
      console.log(chalk.red.bold(joke.punchline));

      showMenu();
    });
  });
}

function showMenu() {
  rl.question("\n1. Get Joke\n2. Exit\nChoose option: ", handleInput);
}

function handleInput(option) {
  switch (option) {
    case "1":
      getJoke();
      break;

    case "2":
      console.log("👋 Goodbye!");
      rl.close();
      break;

    default:
      console.log("Invalid option");
      showMenu();
  }
}

showMenu();
```

---

## Project 8: Weather App (CLI)

```js
import readline from "readline/promises";

const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found. Please check the city name.");
    }

    const weatherData = await response.json();

    console.log("\n🌤 Weather Information:");
    console.log(`City: ${weatherData.name}`);
    console.log(`Temperature: ${weatherData.main.temp}°C`);
    console.log(`Description: ${weatherData.weather[0].description}`);
    console.log(`Humidity: ${weatherData.main.humidity}%`);
    console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);
  } catch (error) {
    console.log("❌ Error:", error.message);
  } finally {
    rl.close();
  }
};

const city = await rl.question("Enter city name: ");
await getWeather(city);
```
---

## Project 9: User Management CRUD API using Node.js, Express & MongoDB

```js
// crud-app/
// │
// ├── app.js
// ├── usermodel.js
// ├── package.json

//usermodel.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongopractice');

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
});

module.exports = mongoose.model("user", userSchema);

//app.js
const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("hey");
});

// Create
app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "sam",
        email: "sam@gmail.com",
        username: "sam"
    });

    res.send(createduser);
});

// Read
app.get('/read', async (req, res) => {
    let user = await userModel.findOne({ username: "sam" });
    res.send(user);
});

// Update
app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate(
        { username: "sam" },
        { name: "Sam Muk" },
        { new: true }
    );
    res.send(updateduser);
});

// Delete
app.get('/delete', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({
        username: "sam"
    });

    if (deletedUser) {
        res.send("User deleted successfully");
    } else {
        res.send("User not found");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

```
---
## Project 10: JWT Authentication & Authorization System

```js
// npm install express mongoose bcrypt jsonwebtoken cookie-parser

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

mongoose.connect(
    "mongodb://127.0.0.1:27017/authdb"
);

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: {
        type: String,
        unique: true
    },
    age: Number,
    password: String

});

const User = mongoose.model(
    "User",
    userSchema
);

// REGISTER
app.post("/register", async (req, res) => {
    try {
        const {
            name,
            username,
            email,
            age,
            password
        } = req.body;

        const existingUser =
            await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }
        const hashedPassword =
            await bcrypt.hash(password, 10);

        const user =
            await User.create({
                name,
                username,
                email,
                age,
                password: hashedPassword

            });

        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email
            },
            "Token@1",

            {
                expiresIn: "1d"
            }
        );

        res.cookie("token", token);
        res.status(201).json({
            message:
                "Registered successfully",
            user
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// LOGIN

app.post("/login", async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        const user =
            await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message:
                    "Invalid credentials"
            });
        }

        const match =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!match) {
            return res.status(401).json({
                message:
                    "Invalid credentials"
            });
        }
        const token = jwt.sign(

            {
                userId: user._id,
                email: user.email
            },

            "Token@1",
            {
                expiresIn: "1d"
            }
        );
        res.cookie("token", token);
        res.json({
            message: "Login successful"
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});


// AUTH MIDDLEWARE

function isLoggedIn(
    req,
    res,
    next
) {
    const token =
        req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message:
                "Please login first"
        });
    }
    try {
        const user =
            jwt.verify(
                token,
                "Token@1"
            );

        req.user = user;
        next();

    } catch (err) {
        return res.status(401).json({
            message:
                "Invalid token"
        });
    }
}
// PROTECTED ROUTE

app.get(
    "/profile",
    isLoggedIn,
    (req, res) => {
        res.json({
            message:
                "Protected Route",
            user:
                req.user

        });
    }
);
// LOGOUT

app.get("/logout", (req, res) => {
    res.cookie(
        "token",
        "",
        {
            expires: new Date(0)
        }
    );
    res.json({
        message:
            "Logged out successfully"
    });
});

app.listen(3000, () => {
    console.log(
        "Authentication Server Running"
    );
});
```