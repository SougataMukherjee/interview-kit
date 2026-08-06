
**What is a Server?**

A server is a computer program or device that receives requests from clients, processes those requests, and sends back a response over a network (such as the Internet).
<img src="./img/server.jpeg" alt="server" />

A server is a program that receives tasks or requests, processes them, and sends responses back over the Internet.
A web server is a server that handles HTTP/HTTPS requests from web browsers and returns web pages, JSON data, images, videos, or other web content.
When I type facebook.com in the browser, an encrypted HTTPS request travels through the internet to Facebook's server. The server processes the request and sends back a response, which the browser displays as the Facebook webpage. 
```js
// npm i -D nodemon
// in script "start": "nodemon index.js",

import http from 'http';

const PORT = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  
  console.log(`Request received: ${req.method} ${req.url}`);
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.end('<h1>Hello!</h1>');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

**How NodeJS works**
<img src="./img/nodejs-works.jpeg" alt="nodejs-works" />

**What is Node.js? (Simple Explanation)**

When you write JavaScript in the browser, it runs inside the browser's JavaScript engine (V8).
But you cannot run JavaScript outside the browser directly.JavaScript by itself cannot create a web server. It is primarily a scripting language that was originally designed to run inside web browsers.

Google Chrome uses the V8 Engine to execute JavaScript code. The V8 engine is written in C++ and converts JavaScript into machine code for fast execution.

Node.js was written and introduced by Ryan Dahl in 2009
Lightweight framework that includes bare minimum modules.

✔ Node.js is an open-source(source code of node js is publicly available any one can view and contribute) serverside(outside browser can run)  JavaScript runtime

✔ Uses the chrome V8 JavaScript engine that making it fast

✔Mostly used for developing server-side & networking apps/apis

✔Takes JavaScript out of the browser

✔Fast, scalable and popular in many areas of the industry

```js
node app.js
```
This executes JS using Node's V8 engine, without needing Chrome

**What is CLI and GUI in Node.js?**

- CLI (Command Line Interface)

CLI allows users to interact with applications through text commands in the terminal.its fast and lightweight
node app.js
npm install
npm start
- GUI (Graphical User Interface)

GUI allows users to interact using graphical elements such as buttons, menus, and windows.its user friendly and easy navigation
Examples
VS Code
Browser

**Why do we use Node.js?**

✔ APIs

✔Server-rendered apps

✔Real-time applications(chat, notifications, streaming)

✔Microservices

✔Command Line Tools

✔Bots

✔Web scraping

✔Web Servers

| Feature | CommonJS (CJS) | ECMAScript Modules (ESM) |
|----------|----------|----------|
| Import syntax | `require()` | `import` |
| Export syntax | `module.exports` / `exports` | `export` / `export default` |
| Loading | Synchronous | Asynchronous (static analysis friendly) |
| File extension | `.js`, `.cjs` | `.mjs` or `.js` with `"type":"module"` |
| Standard | Node.js-specific (originally) | JavaScript standard |
| Tree shaking | Not supported well | Supported |
| Top-level `await` | ❌ | ✅ |
| `__dirname`, `__filename` | ✅ Available | ❌ Not available directly |
| Browser support | ❌ | ✅ Native support |


| Feature | Synchronous (Sync) | Asynchronous (Async) |
|----------|----------|----------|
| Execution | One task at a time | Multiple tasks can progress concurrently |
| Blocking | ✅ Blocks execution | ❌ Does not block execution |
| Performance | Slower for I/O-heavy tasks | Faster and scalable |
| Thread behavior | Main thread waits | Main thread remains free |
| Callback/Promise | Not needed | Uses Callbacks, Promises, Async/Await |
| Use case | Small scripts, startup tasks | APIs, DB calls, file/network operations |
| Node.js recommendation | Limited use | Preferred approach |

**In Node.js, we can create a server using the built-in http module, but why do we still use Express.js to make a server?**

Problems:
Manual URL and method checking
No built-in routing
No middleware support
Repetitive boilerplate code
Hard to scale and maintain

Raw http Module — What It Looks Like
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
Same Thing With Express.js
Express is built on top of Node.js http, but it removes a lot of repetitive code and makes routing/API development easier.
With http, you manually check URLs, methods, headers, and parse requests. Express provides simple methods like app.get() and app.post().
```js
const express = require('express');
const app = express();

app.use(express.json()); // built-in middleware

app.get('/users', (req, res) => {
    res.status(200).json({ users: [] });
});

app.post('/users', (req, res) => {
    res.status(201).json({ message: 'created' });
});

app.listen(3000);
```
**👉why call back better than async await in  slightly faster in extremely performance-sensitive code? in node**

async/await is built on top of Promises, so it inherits all Promise overhead. Callbacks are closer to the runtime and therefore can be slightly faster in hot code paths.
callback
```txt
Operation completes
      ↓
Direct callback invocation
      ↓
process()
```

Async/Await
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

**Is Node.js Single-Threaded?**  

Yes — Node.js uses a single main thread, but it handles many tasks at once using:
Event Loop,Callbacks,Worker Threads (for heavy CPU tasks)

**What kind of API function is supported by Node.js?**  

Node.js supports both synchronous (blocking) and asynchronous (non-blocking) API functions.


**What is the difference between Node.js and JavaScript?**  

JavaScript is a scripting language, while Node.js is a runtime environment that allows JavaScript to run on the server side.

**What are the main disadvantages of Node.js?**  

Disadvantages include its single-threaded nature, preference for NoSQL databases, and rapid API changes that can cause instability.


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

Middleware is a callback function runs between the request coming in and the response going out. performing tasks like logging, authentication, and data processing.
that has three parameters: req, res, and next. It executes before the route handler.

Data sent by the client to the server is available in the req (request) object.
Data sent from the server to the client is handled through the res (response) object.
After executing its logic, the middleware passes control to the next middleware or route handler by calling next().

```js
const express = require("express");
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // pass control to next middleware
};

app.use(logger); //every time runs before route

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000);
```

**What do you mean by event loop in Node.js?**  

The event loop is a mechanism that processes asynchronous tasks in a single thread by continuously checking for and executing callback functions

**What is package.json in Node.js?**  

`package.json` is a metadata file in Node.js that contains information about the project, such as dependencies, scripts, and version.


**What is buffer in Node.js?**

A buffer is a temporary storage space for binary data, allowing Node.js to handle raw data directly.

```js
const buffer = Buffer.from("Hello");

console.log(buffer);//<Buffer 48 65 6c 6c 6f>
console.log(buffer.toString());//Hello
```
<img src="./img/stream.jpeg" alt="stream" />

**What are streams in Node.js?**  

A Stream is a way to process data piece-by-piece (chunks) instead of loading the entire data into memory at once.
They enable reading or writing data piece by piece instead of loading the entire data into memory.

Streams are objects used to handle continuous data flows, process data chunk by chunk, not all at once and its faster for big file

```js
const fs = require('fs');
const data = fs.readFileSync('movie.mp4');

```

**What is the difference between setTimeout() and setImmediate() method?**  

`setTimeout()` schedules a callback after a specified delay, whereas `setImmediate()` executes it immediately after I/O events.


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
---
## Cookies

A cookie is a small piece of data stored in the user's browser and sent back to the server with every request.

**How Cookies Work**

- Server sends a cookie to the browser.
- Browser stores the cookie.
- Browser automatically sends the cookie with future requests to the same domain.

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


app.listen(3000);
```

## Sessions

A session stores user data on the server, while only a session ID is stored in a cookie on the client.

**How Sessions Work**

- User logs in.
- Server creates a session and assigns a unique session ID.
- Session ID is stored in a cookie.
- Browser sends session ID with future requests.
- Server retrieves user data using that session ID.

| Feature            | Cookie                       | Session                |
| ------------------ | ---------------------------- | ---------------------- |
| Storage Location   | Browser                      | Server                 |
| Data Stored        | Actual data                  | Session data on server |
| Client Side Access | Yes                          | No (only session ID)   |
| Security           | Less secure                  | More secure            |
| Storage Limit      | \~4 KB                       | Server memory/database |
| Lifetime           | Until expiry/deletion        | Until timeout/logout   |
| Common Usage       | Preferences, theme, language | Login/authentication   |
---

*Project 1*

installation and url:

```txt
npm install express cors swagger-ui-express swagger-jsdoc nodemon
add Using Swagger JSDoc in main.js
run node main.js
npx nodemon main.js

http://localhost:5000/api/user
http://localhost:5000/api-docs
```
user.json
```js
[
  {
    "id": 1,
    "name": "Sougata"
  }
]
```

main.js

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
    servers: [
      {
        url: "http://localhost:5000"
      }
    ]
  },
  apis: ["./main.js"]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);
const FILE = "./user.json";

if (fs.existsSync(FILE)) {
  console.log("✅ DB found");
} else {
  console.log("❌ DB not found");
}
// Read Data

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

// Create User


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

// Update User


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
    user.id == req.params.id
      ? { ...user, ...req.body }
      : user
  );

  fs.writeFileSync(FILE, JSON.stringify(updated, null, 2));

  res.status(200).json({ message: "Updated" });
});

// Delete User


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

  const filtered = users.filter(
    x => x.id != req.params.id
  );

  fs.writeFileSync(FILE, JSON.stringify(filtered, null, 2));

  res.sendStatus(204).json({ message: "Deleted" });
});

app.listen(PORT, () =>
  console.log(` ✅ Server running on ${PORT}`)
);
```
*Project 2*

installation, cred and url:

```txt
mongodb username pass with url:

sougatamukherjee_db_user
fbPJDtUAgWzjGE83
mongodb+srv://sougatamukherjee_db_user:fbPJDtUAgWzjGE83@cluster0.eytkkg9.mongodb.net/?appName=Cluster0
 data:https://cloud.mongodb.com/v2/6a4660fb3fdbae474dc36c6b#/explorer/6a46619e1169dc5cd4b154dd/test/users/find

npm install express cors mongoose swagger-ui-express swagger-jsdoc nodemon
add Using Swagger JSDoc in main.js
run node main.js
npx nodemon main.js

http://localhost:5000/api/user
http://localhost:5000/api-docs
```

main.js

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

/* ==========================
   MongoDB Connection
========================== */

mongoose.connect("mongodb+srv://sougatamukherjee_db_user:fbPJDtUAgWzjGE83@cluster0.eytkkg9.mongodb.net/?appName=Cluster0");

mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB Connected");
});

mongoose.connection.on("error", (err) => {
  console.log("❌ MongoDB Error:", err);
});

/* ==========================
   User Schema
========================== */

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

/* ==========================
   Swagger Config
========================== */

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User CRUD API",
      version: "1.0.0",
      description: "CRUD API using Express + MongoDB + Mongoose"
    },
    servers: [
      {
        url: "http://localhost:5000"
      }
    ]
  },
  apis: ["./main.js"]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

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
    const user = await User.create({
      name: req.body.name
    });

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
      {
        name: req.body.name
      },
      {
        new: true
      }
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

    res.status(200).json({
      message: "User Deleted"
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on ${PORT}`);
});
```
---
## What is NestJS?

NestJS is a progressive Node.js framework used for building scalable, maintainable, and enterprise-grade backend applications.
It is built on top of:
- Node.js
- Express.js (default)

### Features

- TypeScript Support
- Dependency Injection
- Modular Architecture
- REST APIs
- GraphQL
- Microservices
- Testing support

2. Does NestJS Support TypeScript?

✅ Yes.
3. Can We Write Test Cases in NestJS?

✅ Yes.

4. Why NestJS Instead of Express in Production?

Express is minimal and flexible, whereas NestJS provides architecture, dependency injection, testing, validation, and TypeScript support, making it more suitable for large production applications.

5. Decorators in NestJS

Decorators add metadata to classes, methods, and properties.
- @Controller()
Marks a class as a controller.
- @Injectable()
Makes a class available for Dependency Injection.
- @Module()
Defines a module.
- @Schema()
Used to create MongoDB schema.
- @Get()
Handles GET request.
- @Post()
Handles POST request.
- @Patch()
Handles PATCH request.
- @Delete()
Handles DELETE request.

6. Use of Constructor

Constructor is mainly used for Dependency Injection.
## Benefits

- Inject Services
- Reuse Logic
- Loose Coupling

7. What is DTO?

DTO = Data Transfer Object
Used to define and validate request data.