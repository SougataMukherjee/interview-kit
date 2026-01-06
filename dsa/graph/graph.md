# Graph

A graph is a non-linear data structure consisting of vertices (nodes) and edges (connections). It is commonly used to represent networks like social connections, maps, and web pages.<br>
```js
A graph is a collection of:
Vertices (Nodes)
Edges (Connections)
Graph = (V, E)
  0 ---- 1
  |      |
  |      |
  2 ---- 3

const graph = [
  [1, 2],    // 0 → 1, 2
  [0, 3],    // 1 → 0, 3
  [0, 3],    // 2 → 0, 3
  [1, 2]     // 3 → 1, 2
];
```

![graph](../img/graph.png) <br>

### Tree vs Graph

| **Characteristics** | **Tree**                                          | **Graph**                          |
| ------------------- | ------------------------------------------------- | ---------------------------------- |
| **Definition**      | A set of nodes and edges with a unique root node. | A set of vertices/nodes and edges. |
| **Root Node**       | Has a unique root node.                           | No unique root node.               |
| **Cycles**          | Cannot form cycles.                               | Can form cycles.                   |

### Types of Graphs<br>

1. `undirected graph`<br>
   ![UnDirected graph](../img/ud-graph.png) <br>
   The edges have no direction.
   a-b<br>
2. `directed Graph` (digraph):<br>
   ![Directed graph](../img/dg-graph.png) <br>
   The edges have a direction.
   a->b<br>
3. `weighted graph`<br>
   ![weighted graph](../img/wg-graph.png) <br>
   The edges have weights (costs)
   4
   a->b<br>
4. `cyclic graph`<br>
   ![Cyclic graph](../img/cg-graph.png) <br>
   A graph that contains at least one cycle.
   a->b->c->d->a<br>

5. `acyclic Graph`:
   A graph with no cycles.<br>
   a → b → c → d.<br>
   0 → 1 → 2 → 3<br>
6. `connected Graph`
   every vertex/node is reachable from any other vertex.<br>

7. `disconnected Graph`
   some vertices are not reachable from others<br>
   ```js
        0 —— 1       3 —— 4
            |
            2<br>
   ```
8. `Indegree` incoming edges
9. `Outdegree` outgoing edges
10. `Path` A path is a sequence of vertices connected by edges.<br>
0 → 1 → 3 → 4<br>
Path length = number of edges

### graph properties

    - degree of graph: The degree of a vertex is the number of edges connected to it.
    - indegree:Number of edges coming into a vertex (only for directed graphs)
    - outdegree:Number of edges going out from a vertex (only for directed graphs)


### Graph Representation<br>

#### adjacency list:<br>

![Directed graph](../img/al-graph.png) <br>
Each node stores a list of its adjacent nodes.its kind a list of lists
Space Complexity: O(V + E),V=total list of vertex and E=number of edges(1,2,3)
1 → [2, 3]<br>
2 → [1, 3]<br>
3 → [1, 2,4]<br>
4 → [3]<br>

![adjacency-list](../img/adjacency-list.png)

### adjacency matrix(n\*n):<br>

![Directed graph](../img/am-graph.png) <br>
here 1 connected with 2 and 2 connected with 3 and 3 to 1
A matrix where a[i][j] = 1 if there is an edge between i and j, otherwise 0
Space Complexity: O(n²).

> here row represent a node and column represent neighbor

|     | 1   | 2   | 3   |
| --- | --- | --- | --- |
| 1   | 0   | 1   | 1   |
| 2   | 1   | 0   | 1   |
| 3   | 1   | 1   | 0   |

### graph traversal

1. **Breadth-First Search (BFS)**
   travel to immediate neighbors first, uses a queue (FIFO).
   Steps:
   1. Start from a node and mark it as visited.
   2. Visit all its neighbors before going deeper.
   3. Continue until all nodes are visited.
   
```js

        0
       / \
      1   2
     /     \
    3       4

BFS from 0:
0 → 1 → 2 → 3 → 4

 function bfs(start) {
    let queue = [];
    let visited = [];

    queue.push(start);
    visited[start] = true;

    while (queue.length > 0) {
        let node = queue.shift(); // remove front
        console.log(node);
        // Traverse all adjacent vertices
        for (let neighbour of graph[node]) {
        // If not visited, mark visited
        if (!visited[neighbour]) {
            visited[neighbour] = true;
            queue.push(neighbour);
        }
        }
     }
  }
```

2. **Depth-First Search (DFS)**
   keep going to 1st universal neighbour,its a recursive traversal and uses a stack (LIFO) or recursion.
   Steps:
   1. Start from a node and mark it as visited.
   2. Visit the first unvisited neighbor recursively.
   3. Backtrack if no unvisited neighbor is found.

```js
        0
       / \
      1   2
     /     \
    3       4

DFS from 0:
0 → 1 → 3 → back → 2 → 4


function dfs(node) {
  visited[node] = true;
  console.log(node);

  for (let neighbour of graph[node]) {
    if (!visited[neighbour]) {
      dfs(neighbour); // go deeper
    }
  }
}
```

### spanning tree

in a spanning tree in a graph all the vertices are same as given graph but number of vertices is 1 edge less
spanning tree can not have a cycle and does not disconnected
adding one edge to the spanning tree will create a loop
every connected and undirected graph has at least one spanning tree



### detect cycle in  graph
Approach: Use DFS with a visited array.
```js

   0
  / \
 1---2
0 → 1 → 2 → 0 (cycle)

function detectCycle(node, parent) {
  visited[node] = true;

  for (let neighbour of graph[node]) {
    if (!visited[neighbour]) {
      if (detectCycle(neighbour, node)) return true;
    }
    // visited but not parent → cycle
    else if (neighbour !== parent) {
      return true;
    }
  }
  return false;
}

```


### Topological sort

Used for: Ordering tasks with dependencies (e.g., course scheduling).
graph should be directed and acyclic graph,if its there then we have atleast one topological ordering
find in-degree of the graph and start with node having 0 in-degree,remove edges and update in-degree,update until node are processed

```js
function topoDFS(node) {
  visited[node] = true;

  for (let neighbour of graph[node]) {
    if (!visited[neighbour]) {
      topoDFS(neighbour);
    }
  }

  stack.push(node); // add after exploring all neighbours
}

```

### Find the shortest path (Dijkstra's Algorithm)

> Find the shortest distance from a source node to all other nodes in weighted graph

```js
      (4)
   0 ------ 1
   |        |
 (1)      (2)
   |        |
   2 ------ 3
       (3)
0 → 0 = 0
0 → 2 = 1
0 → 3 = 4
0 → 1 = 6

function dijkstra(src) {
  let dist = Array(n).fill(Infinity);
  let visited = Array(n).fill(false);

  dist[src] = 0;

  for (let i = 0; i < n; i++) {
    let u = getMinNode(dist, visited);
    visited[u] = true;

    for (let [v, weight] of graph[u]) {
      if (!visited[v] && dist[u] + weight < dist[v]) {
        dist[v] = dist[u] + weight;
      }
    }
  }

  return dist;
}

function getMinNode(dist, visited) {
  let min = Infinity, index = -1;

  for (let i = 0; i < dist.length; i++) {
    if (!visited[i] && dist[i] < min) {
      min = dist[i];
      index = i;
    }
  }
  return index;
}

```
