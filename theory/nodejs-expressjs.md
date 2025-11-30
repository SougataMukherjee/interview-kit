**How NodeJS works**
```txt
 [BROWSER] ---- HTTP Request ----> [NODE SERVER]
                                   |
                                   | (Event Loop)
                                   ▼
                         ┌──────────────────────┐
                         │      Event Loop      │
                         ├──────────────────────┤
                         │   Call Stack         │
                         │   Callback Queue     │
                         │   Microtask Queue    │
                         └──────────────────────┘
                                   |
                                   ▼
                            [MongoDB Query]
                                   |
                                   ▼
                            [Send Data Back]

```
**What is Node.js? (Simple Explanation)**

When you write JavaScript in the browser, it runs inside the browser's JavaScript engine (V8).
But you cannot run JavaScript outside the browser directly.

Node.js is a JavaScript Asynchronous runtime environment built on Google's V8 engine, which allows you to run JavaScript outside the browser, such as in command line, server, or backend systems.It is written in C++.you can build different type of application like web application, real-time chat application, REST API server etc.

Node.js was written and introduced by Ryan Dahl in 2009
Lightweight framework that includes bare minimum modules.
```js
node app.js
```
This executes JS using Node's V8 engine, without needing Chrome

**Why do we use Node.js?**

To run JavaScript on the server (backend development).

Fast performance because Node uses V8 and non-blocking I/O.

Perfect for real-time apps (chat, notifications, streaming).

Uses npm, the largest ecosystem for packages.

Useful for building APIs, microservices, CLI tools, automation scripts, etc.

**Is Node.js Single-Threaded?**  

Yes — Node.js uses a single main thread, but it handles many tasks at once using:
Event Loop,Callbacks,Worker Threads (for heavy CPU tasks)

**What kind of API function is supported by Node.js?**  

Node.js supports both synchronous (blocking) and asynchronous (non-blocking) API functions.


**What is the difference between Node.js and JavaScript?**  

JavaScript is a scripting language, while Node.js is a runtime environment that allows JavaScript to run on the server side.

**What are the main disadvantages of Node.js?**  

Disadvantages include its single-threaded nature, preference for NoSQL databases, and rapid API changes that can cause instability.


**Synchronous(Blocking) vs Asynchronous in Node.js**  

Synchronous (Blocking)
Code runs line by line
Next line waits for previous line
Slow for heavy I/O tasks
Example:
```js
const data = fs.readFileSync("file.txt");
console.log(data);
```
Asynchronous (Non-blocking)
Does not block the main thread.When User Performs the I/O operation then Node will freezes the Browser and
allow the User to interact, The I/O operation is running in the background.
Uses callbacks, promises, async/await
Best for API calls, DB queries, file system operations

Example:
```js
fs.readFile("file.txt","utf-8", (err, data) => {
  console.log(data);        //execute second
});
console.log('this is message') //execute first
```
Blocking I/O                    Non-Blocking I/O
--------------                  -----------------
Fetch user 1 (wait)             Fetch user 1 (async)
Print user 1                    Continue other tasks
Fetch user 2 (wait)             Print user 1 later (callback)
Print user 2                    Print user 2 later (callback)


**Chaining in Node.js**  

Calling multiple methods on the same object one after another
```js
User.find()
  .select("name")
  .limit(10)
  .sort("age");
```
**Node Modules**  

A module in Node.js is a block of code that provides specific functionality, which can be reused across different parts of an application
1. Local Module
Your own files:
```js
const xyz = require("./app");
const abc = 10 + 20;

module.exports = {
  xyz,
  abc,
};

//in app.js
const { xyz, abc } = require("./math");

console.log(xyz());
console.log(abc);


```
2. Global Module

Built-in:
```js
const fs = require("fs");
```
**What is Express.js?**

A minimal and flexible web framework for Node.js.
Provides routing, middleware, and server handling.

**Why Express?**

1. Lightweight
2. Fast, minimal setup
3. Middleware support
4. Easy routing
5. Perfect for REST APIs

✔ Basic Route
app.get("/home", (req, res) => {
  res.send("Welcome Home");
});

✔ Request / Response

req → incoming data from client

res → output we send back

**What is middleware?**  

Middleware functions execute between the request and response cycle, performing tasks like logging, authentication, and data processing.
**What do you mean by event loop in Node.js?**  

The event loop is a mechanism that processes asynchronous tasks in a single thread by continuously checking for and executing callback functions

**What is package.json in Node.js?**  

`package.json` is a metadata file in Node.js that contains information about the project, such as dependencies, scripts, and version.


**What is buffer in Node.js?**
A buffer is a temporary storage space for binary data, allowing Node.js to handle raw data directly.
**What are streams in Node.js?**  

Streams are objects used to handle continuous data flows, process data chunk by chunk, not all at once and its faster for big file

```js
const fs = require("fs");

const readStream = fs.createReadStream("./blog.txt");
const writeStream = fs.createWriteStream("./copy.txt");

readStream.on("data", (chunk) => {
  console.log("---- NEW CHUNK ----");
  console.log(chunk.toString());

  writeStream.write("\n NEW CHUNK \n");
  writeStream.write(chunk);
});

```

**What is the difference between setTimeout() and setImmediate() method?**  

`setTimeout()` schedules a callback after a specified delay, whereas `setImmediate()` executes it immediately after I/O events.

**What is fork in Node.js?**  

Fork is a method to create child processes that allow parallel execution of tasks in Node.js.

**What is body-parser in Node.js?**  

Body-parser is middleware that parses incoming request bodies in a middleware before handling it in Node.js applications.

**What is a cluster in Node.js?**  

A cluster allows Node.js to utilize multiple cores of a machine by creating child processes that share the same server port.

**How can we implement authentication and authorization in Node.js?**  

 Use packages like Passport for authentication and JWT for managing tokens to implement security in Node.js applications.

**What are child processes in Node.js?**  

Child processes allow Node.js to handle multiple tasks concurrently by creating subprocesses that can run independently.

**Relational vs Non-Relational Databases**  
Relational Database (SQL)

A relational database stores data in tables, with rows & columns, and uses relations (foreign keys) between tables. it has structured and fixed schema

Non-Relational Database (NoSQL)

Data stored in document, key-value, graph, or wide-column formats.
Schema is flexible and can change anytime.it has no fixed schema high scalable and design for big data.

**Global Object vs Window Object**  
In the browser → window
In Node.js → global

window exists only in browser JavaScript and represents browser environment.

global is Node.js runtime’s top-level object

**FileSystem – readFile vs readFileSync**  
It allows you to read, write, update, delete files on your computer.
readFile is Asynchronous mostly use for web server
readFileSync() Synchronous ,use for small script
```js
const fs = require("fs");

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

```
**HTTP Module – Creating a Raw Server**  
http module is to create a basic HTTP server without Express.
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
**What is nodemon?**

A development tool that automatically restarts your server when files change.
```js
npm install -g nodemon
and run nodemon index.js

```
**basic route with express with basic form** 

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
**What is EJS?**

A view engine that lets you write dynamic HTML using JS.

```js
//index.ejs
<h1><%= title %></h1>

<% if (blogs.length > 0) { %>
  <% blogs.forEach(blog => { %>
    <h3><%= blog.title %></h3>
  <% }) %>
<% } %>

//index.js
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const blogs = [
    { title: "Blog One" },
    { title: "Blog Two" },
    { title: "Blog Three" }
  ];
  res.render("index", { title: "My Blogs", blogs });
});

```

**create a rest api**  
```js
//mock.json
[
  { "_id": 1, "name": "Sam", "email": "sam@gmail.com" }
]
//index.js
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

**nodejs connect with mongodb with MVC pattern**
```js
//model
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
//controller
exports.createUser = async (req, res) => {
  const body = req.body;

  if (!body.firstName || !body.email)
    return res.status(400).json({ msg: "All fields required" });

  await User.create(body);

  return res.status(201).json({ msg: "User created" });
};

//view(ejs)
<ul>
  <% users.forEach(u => { %>
    <li><%= u.firstName %></li>
  <% }) %>
</ul>

//mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

```

**create a pagination api**  
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