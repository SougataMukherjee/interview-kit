
✅Scalability

Vertical Scaling:Vertical scaling means increasing the power of a single machine.Add more CPU,Add more RAM,Add faster disk
Before:
[ Server: 2 CPU, 4GB RAM ]

After:
[ Server: 8 CPU, 32GB RAM ]

Horizontal Scaling:Horizontal scaling means adding more machines instead of increasing power of one.Infinite scalability
Fault tolerant
Requires coordination
Needs a load balancer
pic


Load Balancers
        Client
          |
     Load Balancer
      /     |     \
 Server 1 Server 2 Server 3
Purpose
Distributes traffic evenly
Improves availability

Types of Load Balancers
L4 Load Balancer→ TCP/UDP (faster)NGINX TCP load balancing
L7 Load Balancer→ HTTP (smarter routing)Can route based on:URL, pathHeaders,Cookies Route /api to backend

Stateless vs Stateful Services
Stateless means Server does not store user session data between requests.it's characteristics is Any server can handle request,Easily scalable
Client → Server A
Client → Server B
(Works fine)

statefull means Server stores session data in memory or local storage.it's characteristics is Session tied to one server
Harder to scale
Client → Server A ✅
Client → Server B ❌ (session missing)

Caching:Caching stores frequently accessed data closer to the user to reduce latency and load.
Where Caching Happens?
Cache stored in the user’s browser.
Browser Cache
   |
Page Loads Faster

CDN cache
Content cached at edge locations near users. like image video
User → CDN Edge → Resource
Backend cache (Redis)
In‑memory cache between backend and database.

Database cache
DB internally caches recent queries.

News feed
Product listings
Search
***performance :using latency and throughput




