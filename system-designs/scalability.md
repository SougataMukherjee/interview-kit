# ✅Scalability

## Vertical Scaling:
Vertical scaling means increasing the power of a single machine.Add more CPU,Add more RAM,Add faster disk
Before:
[ Server: 2 CPU, 4GB RAM ]

After:
[ Server: 8 CPU, 32GB RAM ]

## Horizontal Scaling:
Horizontal scaling means adding more machines instead of increasing power of one.Infinite scalability
Fault tolerant
Requires coordination
Needs a load balancer
<img src="./img/scaling.png" alt="scaling" />


## Load Balancers
<img src="./img/load-balancer.png" alt="load-balance" />
Purpose
Distributes traffic evenly
Improves availability

## Types of Load Balancers
L4 Load Balancer→ TCP/UDP (faster)NGINX TCP load balancing
L7 Load Balancer→ HTTP (smarter routing)Can route based on:URL, pathHeaders,Cookies Route /api to backend

## Stateless vs Stateful Services
Stateless means Server does not store user session data between requests.it's characteristics is Any server can handle request,Easily scalable
Client → Server A
Client → Server B
(Works fine)

statefull means Server stores session data in memory or local storage.it's characteristics is Session tied to one server
Harder to scale
Client → Server A ✅
Client → Server B ❌ (session missing)

## Caching:
Caching stores frequently accessed data closer to the user to reduce latency and load.
Where Caching Happens?
Cache stored in the user’s browser.
<img src="./img/cache.png" alt="cache" />

## CDN cache
Content cached at edge locations near users. like image video
<img src="./img/cdn-cache.png" alt="cdn-cache" />
## Backend cache (Redis)
In‑memory cache between backend and database.

## Database cache
DB internally caches recent queries.

News feed
Product listings
Search
## Webserver cache
## Application cache
## performance :
using latency and throughput


## state management at scale

## performance metrics (LCP, CLS)

## error boundary and logging

## AWS Lambda

## CSR vs SSR vs SSG

## how browser renders page

## cookie vs localStorage vs sessionStorage

## CI/CD




