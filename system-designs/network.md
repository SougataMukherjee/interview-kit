# ✅Network basics
HTTP:HTTP is a stateless application‑layer protocol used for communication between a client (browser/app) and a server.

Stateless protocol: means Each request is independent server does not remember previous requests
Client (Browser)
      |
      |  HTTP Request
      ↓
Server
      |
      |  HTTP Response
      ↓
Client
Each request is independent

HTTPS:HTTPS is HTTP + TLS (Transport Layer Security) that encrypts data between client and server.Protects data integrity & privacy
Mandatory for: Auth,Payments,APIs
Client
  |
  | TLS Handshake (keys exchanged)
  |
Encrypted Communication
  |
Server

HTTP method: HTTP methods define what action the client wants to perform on a resource.
Method  Usage
GET    Fetch data (read-only)
POST   Create new resource
PUT    Replace entire resource
PATCH  Partial update
DELETE Remove resource

REST vs GraphQL
REST uses multiple endpoints, each returning a fixed data structure.Easy to cache
Problem is if Frontend needs:
User name + profile image
But API returns:
name, email, address, phone, profile...

GraphQL uses a single endpoint where the client specifies exactly what data it needs.No over‑fetching,Reduces payload size
query {
  user(id: 1) {
    name
    profileImage
  }
}

websocket:
pooling:
tcp:


DNS: DNS converts human‑readable domain names into IP addresses.
Browser
  ↓
DNS Resolver
  ↓
Root DNS
  ↓
TLD (.com)
  ↓
Authoritative DNS
  ↓
IP Address
   exp- if user type google.com → DNS return 142.250.195.78


   load balancer distributive algo

 ### ip address

### proxy server

### latency

### dns resolver

### tcp udp

### bucket (token bucket / leaky bucket – rate limiting)