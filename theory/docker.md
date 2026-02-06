# Docker Complete Guide

## Table of Contents
1. [Introduction to Docker](#introduction-to-docker)
2. [Why Docker?](#why-docker)
3. [What is a Container?](#what-is-a-container)
4. [Docker Architecture](#docker-architecture)
5. [Docker Components](#docker-components)
6. [Docker Registry](#docker-registry)
7. [Dockerfile Instructions](#dockerfile-instructions)
8. [Practical Examples](#practical-examples)
9. [Docker Commands Reference](#docker-commands-reference)
10. [Docker Networking](#docker-networking)
11. [Docker Volumes](#docker-volumes)
12. [Best Practices](#best-practices)

---

## Introduction to Docker

### What is Docker?
Docker is a containerization platform that allows you to build, run, and ship applications consistently across different environments.

### Software Project Components
A typical software project contains several components:
1. **Frontend** - User interface
2. **Backend** - Server-side logic
3. **Database** - Data storage

In order to deploy our application on a machine, we need to set up all the software required to run our application.

---

## Why Docker?

### The Problem
In real-time projects, applications should be deployed into multiple environments (Dev, Test, Prod) for testing purposes. Whatever software setup is required needs to be installed manually on each machine.

**Common Issues:**
- When developers deploy code on a dev machine (VM1) and testers check on a testing machine (VM2), the application might not run due to:
  - Setup mismatches
  - Version mismatches
  - Missing files or dependencies

### The Solution
Instead of transferring only code, create a **Docker Image** (a complete package) from the dev side that includes:
- Application code
- Dependencies
- Libraries
- Software configurations

This Docker image can be transferred from one environment to another, ensuring consistency.

---

## What is a Container?

### Definition
A **container** is an isolated environment for running an application.
<img src="./img/container.png" alt="container" />

### Key Features
- **Isolation**: Allows running multiple applications in isolation
- **Lightweight**: Minimal resource overhead
- **Portability**: Package application with all necessary dependencies and configurations
- **Consistency**: Ensures the same behavior across different environments

### Analogy
Think of containers like shipping containers on a ship - each container is isolated and contains everything needed for transport.

### Container vs Virtualization
**Virtualization** uses virtual machines (VMs), which can have performance issues as each VM runs a full operating system.

**Containers** are more lightweight as they share the host OS kernel while maintaining isolation.

<img src="./img/vir.png" alt="dockervir" />
---

## Docker Architecture

### Workflow
```
Dockerfile → Image (Blueprint) → Container (Running Instance)
```

### Components Flow
1. **Dockerfile**: Contains instructions to build an image
2. **Docker Image**: A package containing everything needed to run the application
3. **Docker Container**: A runtime instance of a Docker image with an isolated environment

---

## Docker Components

### 1. Dockerfile
- A simple text file containing instructions required to build an image
- Uses Domain Specific Language (DSL) keywords
- Common keywords: `FROM`, `CMD`, `COPY`, `RUN`, `WORKDIR`, `ADD`, `ENTRYPOINT`
<img src="./img/dockerfile.png" alt="dockerfile" />

### 2. Docker Image
- A package containing everything needed to run an application
- Immutable blueprint for containers
- Can be versioned and shared
<img src="./img/dockerimg.png" alt="dockerimg" />

### 3. Docker Container
- A runtime instance of a Docker image
- Isolated environment where the application runs
- Can be started, stopped, and deleted
<img src="./img/dockerc.png" alt="container" />

### 4. Docker Engine
- Software that helps create images from Dockerfiles
- Manages containers and images
- Provides the runtime environment

---

## Docker Registry

### What is Docker Registry?
A central repository for storing and distributing Docker images.
<img src="./img/registry.png" alt="dockervir" />

### Docker Hub
- Public registry (like GitHub for code)
- Stores and shares Docker images
- Official images for popular software

### Installation
- **Docker Desktop** for Windows/Mac
- **Docker Engine** for Linux

### Verification Commands
```bash
# Check Docker version
docker -v

# View Docker system information
docker info
```

---

## Dockerfile Instructions

### 1. FROM Keyword

**Description**: Specifies the base image for your application. It must be the first instruction in a Dockerfile.

**Syntax:**
```dockerfile
FROM <IMAGE_NAME>:<tag>
```

**Example:**
```dockerfile
FROM java:1.8.0
FROM mysql:8.0
FROM node:alpine
FROM ubuntu:22.04
```

---

### 2. MAINTAINER Keyword

**Description**: Represents the author/maintainer of the Dockerfile (deprecated, use LABEL instead).

**Syntax:**
```dockerfile
MAINTAINER <name> <email>
```

**Example:**
```dockerfile
MAINTAINER John Doe <john@example.com>

# Modern approach (recommended)
LABEL maintainer="john@example.com"
```

---

### 3. COPY Keyword

**Description**: Copies files/folders from your local machine to the Docker image.

**Syntax:**
```dockerfile
COPY <source> <destination>
```

**Example:**
```dockerfile
COPY . /app
COPY package.json /app/
COPY src/ /app/src/
```

**Note:** COPY does not extract compressed files (zip, tar, etc.)

---

### 4. WORKDIR Keyword

**Description**: Sets the working directory inside the container. All subsequent commands will be executed in this directory.

**Syntax:**
```dockerfile
WORKDIR <path>
```

**Example:**
```dockerfile
WORKDIR /app
WORKDIR /usr/src/app
```

**Benefit:** Avoids using `cd` commands and makes Dockerfile more readable.

---

### 5. ADD Keyword

**Description**: Similar to COPY but with additional features:
1. Automatically extracts compressed files (tar, zip)
2. Can download files from URLs

**Syntax:**
```dockerfile
ADD <source> <destination>
```

**Example:**
```dockerfile
# Download from URL
ADD https://example.com/file.txt /app/

# Auto-extract archive
ADD archive.tar.gz /app/

# Simple copy (use COPY instead for this)
ADD . /app
```

**Best Practice:** Use `COPY` for simple file copying, use `ADD` only when you need auto-extraction or URL downloads.

---

### 6. RUN Command

**Description**: Executes commands while building the image. Used for installing packages, creating directories, etc.

**Syntax:**
```dockerfile
RUN <command>
```

**Example:**
```dockerfile
FROM ubuntu:22.04
RUN apt-get update
RUN apt-get install -y apache2
RUN mkdir /workspace
RUN npm install

# Better approach (fewer layers)
RUN apt-get update && \
    apt-get install -y apache2 && \
    mkdir /workspace
```

---

### 7. CMD Command

**Description**: Executes when a container starts (not during image build). Only the last CMD instruction is used if multiple are specified.

**Syntax:**
```dockerfile
CMD ["executable", "param1", "param2"]
```

**Example:**
```dockerfile
CMD ["node", "app.js"]
CMD ["python", "server.py"]
CMD ["npm", "start"]
```

**Note:** Can be overridden when running the container.

---

### 8. ENTRYPOINT Command

**Description**: Similar to CMD but cannot be easily overridden. Defines the main executable for the container.

**Syntax:**
```dockerfile
ENTRYPOINT ["executable", "param1"]
```

**Example:**
```dockerfile
ENTRYPOINT ["node", "app.js"]
ENTRYPOINT ["python", "script.py"]
```

**Difference between CMD and ENTRYPOINT:**

| Feature | CMD | ENTRYPOINT |
|---------|-----|------------|
| Override | Easy to override | Difficult to override |
| Purpose | Default command | Main executable |
| Usage | Can be replaced by command line args | Args are appended |

**Example:**
```dockerfile
# Dockerfile with ENTRYPOINT
FROM node:alpine
WORKDIR /app
COPY . /app
ENTRYPOINT ["node", "app.js"]
```

**Running:**
```bash
# Run without arguments
docker run entry-app

# Run with arguments (appended to ENTRYPOINT)
docker run entry-app arg1 arg2

# Override ENTRYPOINT
docker run --entrypoint ls entry-app
```

---

### 9. EXPOSE Command

**Description**: Informs Docker that the container listens on specified network ports at runtime.

**Syntax:**
```dockerfile
EXPOSE <port>
```

**Example:**
```dockerfile
EXPOSE 8080
EXPOSE 3000
EXPOSE 80 443
```

---

### 10. ENV Command

**Description**: Sets environment variables in the container.

**Syntax:**
```dockerfile
ENV <key>=<value>
```

**Example:**
```dockerfile
ENV NODE_ENV=production
ENV PORT=8080
ENV DB_HOST=localhost
```

---

### 11. ARG Command

**Description**: Defines build-time variables that users can pass during image build.

**Syntax:**
```dockerfile
ARG <name>[=<default value>]
```

**Example:**
```dockerfile
ARG VERSION=1.0
ARG NODE_VERSION=18

FROM node:${NODE_VERSION}
RUN echo "Building version ${VERSION}"
```

**Usage:**
```bash
docker build --build-arg VERSION=2.0 -t myapp .
```

---

## Practical Examples

### Example 1: Simple Node.js Application

**Step 1: Create Application**

**app.js:**
```javascript
console.log('Hello from Docker!');
```

**Dockerfile:**
```dockerfile
# Start with an OS
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy application files
COPY . /app

# Run app.js when container starts
CMD ["node", "app.js"]
```

**Step 2: Build Docker Image**
```bash
docker build -t my-app .
```

**Step 3: Verify the Image**
```bash
docker images
# OR
docker image ls
```

**Step 4: Run the Docker Container**
```bash
docker run my-app
# OR using image ID
docker run <image-id>
```

**Step 5: List Running Containers**
```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a
```

---

### Example 2: Interactive Application (Sum of Two Numbers)

**Step 1: Create Application**

**app.js:**
```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
  rl.question('Enter second number: ', (num2) => {
    const sum = parseFloat(num1) + parseFloat(num2);
    console.log(`Sum: ${sum}`);
    rl.close();
  });
});
```

**Dockerfile:**
```dockerfile
FROM node:alpine
WORKDIR /app
COPY . /app
CMD ["node", "app.js"]
```

**Step 2: Build Docker Image**
```bash
docker build -t sum-of-two .
```

**Step 3: Verify the Docker Image**
```bash
docker images
```

**Step 4: Run the Image in Interactive Mode**
```bash
docker run -it sum-of-two
```

**Interactive Mode Flags:**
- `-i`: Interactive mode (keeps STDIN open)
- `-t`: Allocates a pseudo-TTY (terminal)

**Step 5: Pull and Run Image from Docker Hub**
```bash
# Pull image
docker pull <image-name>

# Run pulled image
docker run <image-name>
```

---

### Example 3: Web Application with Port Mapping

**Description**: Running a web application inside a container and accessing it from the host machine.

**Syntax:**
```bash
docker run -p <host_port>:<container_port> <image-name>
```

**Example:**
```bash
docker run -p 8600:8080 my-web-app
```

**Explanation:**
- `8600`: Port on your local machine (host)
- `8080`: Port inside the container
- Access the app at `http://localhost:8600`

---

### Example 4: Detached Mode

**What is Detached Mode?**
Running a container in the background instead of attaching it to your terminal.

**Syntax:**
```bash
docker run -d <image-name>
```

**Example:**
```bash
# Run in detached mode
docker run -d my-app

# Run with port mapping in detached mode
docker run -d -p 8600:8080 my-web-app
```

**Benefits:**
- Container runs in the background
- Terminal is free for other commands
- Container continues running even if you close the terminal

---

### Example 5: Complete Web Application

**Dockerfile:**
```dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Set environment variable
ENV NODE_ENV=production

# Start application
CMD ["npm", "start"]
```

**Build and Run:**
```bash
# Build image
docker build -t web-app:1.0 .

# Run container
docker run -d -p 3000:3000 --name my-web-app web-app:1.0
```

---

## Docker Commands Reference

### Image Commands

```bash
# Build an image
docker build -t <image-name>:<tag> <path>
docker build -t myapp:1.0 .

# List images
docker images
docker image ls

# Remove image
docker rmi <image-name/id>
docker image rm <image-name/id>

# Pull image from registry
docker pull <image-name>:<tag>

# Push image to registry
docker push <image-name>:<tag>

# Tag an image
docker tag <source-image> <target-image>

# Inspect image
docker inspect <image-name/id>

# View image history
docker history <image-name>

# Remove unused images
docker image prune
docker image prune -a  # Remove all unused images
```

---

### Container Commands

```bash
# Run a container
docker run <image-name>
docker run -d <image-name>  # Detached mode
docker run -it <image-name>  # Interactive mode
docker run -p 8080:80 <image-name>  # Port mapping
docker run --name <container-name> <image-name>  # Custom name

# List containers
docker ps  # Running containers
docker ps -a  # All containers

# Stop container
docker stop <container-name/id>

# Start stopped container
docker start <container-name/id>

# Restart container
docker restart <container-name/id>

# Remove container
docker rm <container-name/id>
docker rm -f <container-name/id>  # Force remove running container

# View container logs
docker logs <container-name/id>
docker logs -f <container-name/id>  # Follow logs

# Execute command in running container
docker exec -it <container-name> <command>
docker exec -it my-container bash
docker exec -it my-container sh

# View container details
docker inspect <container-name/id>

# View container resource usage
docker stats
docker stats <container-name/id>

# Remove all stopped containers
docker container prune

# Copy files to/from container
docker cp <container>:<path> <local-path>  # From container
docker cp <local-path> <container>:<path>  # To container
```

---

### System Commands

```bash
# View Docker version
docker -v
docker --version

# View Docker system information
docker info

# View disk usage
docker system df

# Clean up unused resources
docker system prune
docker system prune -a  # Remove all unused data

# Remove all stopped containers, unused networks, dangling images
docker system prune -f
```

---

### Network Commands

```bash
# List networks
docker network ls

# Create network
docker network create <network-name>

# Inspect network
docker network inspect <network-name>

# Connect container to network
docker network connect <network-name> <container-name>

# Disconnect container from network
docker network disconnect <network-name> <container-name>

# Remove network
docker network rm <network-name>

# Remove unused networks
docker network prune
```

---

### Volume Commands

```bash
# List volumes
docker volume ls

# Create volume
docker volume create <volume-name>

# Inspect volume
docker volume inspect <volume-name>

# Remove volume
docker volume rm <volume-name>

# Remove unused volumes
docker volume prune

# Run container with volume
docker run -v <volume-name>:<container-path> <image-name>
docker run -v $(pwd):/app <image-name>  # Bind mount
```

---

## Docker Networking

### Network Types

1. **Bridge Network** (Default)
   - Isolated network for containers
   - Containers can communicate with each other

2. **Host Network**
   - Container shares host network
   - No network isolation

3. **None Network**
   - No networking
   - Complete isolation

**Example:**
```bash
# Create custom bridge network
docker network create my-network

# Run containers on the network
docker run -d --network my-network --name app1 my-app
docker run -d --network my-network --name app2 my-app

# Containers can communicate using container names
```

---

## Docker Volumes

### Why Volumes?
- Persist data beyond container lifecycle
- Share data between containers
- Back up and restore data

### Volume Types

1. **Named Volumes**
```bash
docker volume create my-data
docker run -v my-data:/app/data my-app
```

2. **Bind Mounts**
```bash
docker run -v /host/path:/container/path my-app
docker run -v $(pwd):/app my-app
```

3. **Anonymous Volumes**
```bash
docker run -v /container/path my-app
```

---

## Best Practices

### 1. Use Official Base Images
```dockerfile
FROM node:18-alpine  # Official and lightweight
```

### 2. Use Specific Tags
```dockerfile
FROM node:18-alpine  # Good
FROM node:latest     # Avoid (unpredictable)
```

### 3. Minimize Layers
```dockerfile
# Bad (multiple layers)
RUN apt-get update
RUN apt-get install -y package1
RUN apt-get install -y package2

# Good (single layer)
RUN apt-get update && \
    apt-get install -y package1 package2 && \
    rm -rf /var/lib/apt/lists/*
```

### 4. Use .dockerignore
```
node_modules
.git
.env
*.log
```

### 5. Don't Run as Root
```dockerfile
RUN useradd -m appuser
USER appuser
```

### 6. Use Multi-Stage Builds
```dockerfile
# Build stage
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm install --production
CMD ["node", "dist/index.js"]
```

### 7. Order Instructions by Change Frequency
```dockerfile
FROM node:18-alpine
WORKDIR /app

# These change less frequently
COPY package*.json ./
RUN npm install

# These change more frequently
COPY . .

CMD ["npm", "start"]
```

### 8. Keep Images Small
- Use Alpine-based images
- Remove unnecessary files
- Use multi-stage builds
- Combine RUN commands

### 9. Security Best Practices
- Don't include secrets in images
- Use .dockerignore
- Scan images for vulnerabilities
- Keep base images updated
- Run containers with limited privileges

### 10. Use Health Checks
```dockerfile
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:3000/health || exit 1
```

---

## Common Use Cases

### 1. Node.js Application
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### 2. Python Application
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]
```

### 3. Java Application
```dockerfile
FROM openjdk:17-alpine
WORKDIR /app
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

---

## Troubleshooting

### Common Issues

**Issue 1: Container Exits Immediately**
```bash
# Check logs
docker logs <container-id>

# Run in interactive mode to debug
docker run -it <image-name> sh
```

**Issue 2: Port Already in Use**
```bash
# Use different host port
docker run -p 8081:8080 my-app
```

**Issue 3: Permission Denied**
```bash
# Run with sudo (Linux)
sudo docker run my-app

# Add user to docker group
sudo usermod -aG docker $USER
```

**Issue 4: Image Build Fails**
```bash
# Clear build cache
docker builder prune

# Build without cache
docker build --no-cache -t my-app .
```

---

