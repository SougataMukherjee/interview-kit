# ✅DIAGRAMS & BUILDING BLOCKS:

## UML (Unified Modeling Language):
UML is a standard way to visualize system design using diagrams.Used to:
Explain architecture
Communicate design
Convert requirements → code structure

## CLASS DIAGRAM :
Shows the static structure of the system:
```js
+ Public
- Private
# Protected
+------------------+
|     ClassName    |
+------------------+
| - attribute      |
| - attribute      |
+------------------+
| + method()       |
| + method()       |
+------------------+
```
Classes
Attributes
Methods
Relationships
<img src="./img/uml-class.png" alt="uml-class" />

## CLASS RELATIONSHIPS
`Association`:Basic relationship where one class uses or knows another.
User ------ Order
`Aggregation`:One class contains another, but both can exist independently.
Team ◇----- Player
`Composition`:Child class cannot exist without parent.
Order ◆----- OrderItem
`Inheritance` (IS‑A):One class inherits properties from another.
AdminUser
    ▲
    |
   User
`Dependency` :Class depends on another temporarily (method call).
OrderService ---> PaymentService
<img src="./img/class-relation.png" alt="class" />

## SEQUENCE DIAGRAM:
Shows interaction over time between objects.

## COMPONENT DIAGRAM:
Shows high‑level system components and their dependencies.
## USE CASE DIAGRAM:
Shows user actions and system capabilities.
<img src="./img/use-case.png" alt="class" />

## List of Building Blocks
### 1️⃣ Client:
Client is the request initiator that interacts with the system.it sends request and receive response
### 2️⃣ Server / Backend Service:
Server processes client requests and returns responses. Exp:REST API,GraphQL server
### 3️⃣ API (Application Programming Interface):
API is a contract between client and server.
### 4️⃣ Load Balancer:
Distributes incoming traffic across multiple servers.used to prevent overload
### 5️⃣ Cache:
Cache stores frequently accessed data for faster retrieval.Types Browser cache,CDN cache,In‑memory cache (Redis)
<img src="./img/cache2.png" alt="cache" />

### 6️⃣ Database:
Stores persistent system data.
### 7️⃣ Message Queue:
Message queue enables asynchronous communication between components.it improve readability
<img src="./img/message-q.png" alt="messageq" />

### 8️⃣ Event Bus / Stream:
Used for event‑driven communication across multiple consumers.
pic need
### 9️⃣ CDN (Content Delivery Network):
A content delivery network (CDN) is a globally distributed network of proxy servers, serving content from locations closer to the user. Generally, static files such as HTML/CSS/JS, photos, and videos are served from CDN, although some CDNs such as Amazon's CloudFront support dynamic content. The site's DNS resolution will tell clients which server to contact.
push vs pull CDN
<img src="./img/cdn.png" alt="cdn" />
<img src="./img/cdn2.png" alt="cdn2" />

### 🔟 Authentication Service:
Handles user identity verification.like JWT , OAuth ,session
### 1️⃣1️⃣ Authorization Layer:
Determines what a user can access.
### 1️⃣2️⃣ Configuration & Feature Flags:
Controls system behavior without redeployment.
### 1️⃣3️⃣ Monitoring & Logging:
Tracks system health and behavior. Metrics are Latency,Errors,Throughput
### 1️⃣4️⃣ Rate Limiter:
Limits number of requests per user or IP.

## how to instruct load balancer?
A load balancer distributes incoming traffic across multiple backend servers based on defined rules.
Configure routing rules (path-based, host-based)

Choose load balancing algorithm

1. Round Robin:
Requests are distributed sequentially across servers in a circular order.
`Why / When to use:`
Simple
Servers have similar capacity

2. Least Connections:
Routes request to the server with fewest active connections.
`Why / When to use:`
Requests take unequal time
Long-lived connections

3. IP Hash:
Client IP is hashed to decide which server handles the request.
`Why / When to use`:

Need session persistence (sticky sessions)
Avoid centralized session storage

Set health checks

Configure timeouts & retries
## worker and services
Workers are background processes that handle asynchronous or heavy tasks outside the main request flow.
### Service

Handles client requests (API layer)

Usually synchronous

### Worker

Consumes tasks from a queue

Executes long-running jobs

Writes results to DB or triggers events
## how queue system work
A queue acts as a buffer between producers and consumers.
<img src="./img/queue.png" alt="queue" />
Flow

Producer sends a message

Queue stores the message

Consumer pulls the message

Message is processed

Acknowledgment sent

## video processing and streaming
Video systems handle large files and real-time delivery efficiently
Processing

Upload video

Store in object storage

Transcode into multiple resolutions

Generate thumbnails
<img src="./img/video.png" alt="video" />

## Object Storage
Stores data as objects (file + metadata)
`Why / When used:`

Massive scale
Cheap storage
`Examples`:
Amazon S3, Google Cloud Storage

## File Storage
Hierarchical file system.
`Why / When used:`
Shared file access
Legacy apps
`Examples`:
NFS, NAS, EFS

## Message / Event Storage
Append-only logs of events.
`Why / When used`:
Asynchronous systems
Event-driven architecture
`Examples`:
Kafka, Pulsar

## Blob Storage
Stores large binary data use for PDF and Video upload.
`Why / When used:`
Media & files
`Examples:`
S3 blobs, Azure Blob Storage