## 🔹 What is Recursion?
Recursion is a programming technique where a **function calls itself** to solve a problem by breaking it into **smaller subproblems**.
> A recursive solution must always have:
1. **Base Case** → stops recursion
2. **Recursive Case** → function calls itself

##  How Recursion works?
Every recursive call is stored in Call Stack (Memory)

Each call waits until its inner calls finish

When base case is reached, stack unwinds (returns back)

## When to use Recursion
- Tree / Graph traversal
- Divide & Conquer
- Backtracking
- DFS
- Subsets / Permutations 
## Recurrence Relation
A recurrence relation expresses a problem in terms of smaller subproblems
fib(n) = fib(n-1) + fib(n-2)
it becomes
T(n) = T(n-1) + T(n-2) + O(1)



## 🔹 Basic Structure of Recursion

```js
function recursiveFunction(input) {
  // Base Case
  if (condition) return result;

  // Recursive Case
  return recursiveFunction(smallerInput);
}
```
### Common recursion pattern 
🔹 Pattern 1: Simple Decreasing
```js
if (n === 0) return;
foo(n - 1);
```
🔹 Pattern 2: Two Recursive Calls
```js
return foo(n - 1) + foo(n - 2)
```
🔹 Pattern 3: Multiply on return
```js
return n * foo(n - 1)
```
🔹 Pattern 4: Conditional based
```js
if (n > k) {
  return foo(n - 1, k + 1);
}
```
🔹 Pattern 5: Array index based
```js
if (n === 0) return;
if (arr[0] > 0) foo(arr.slice(1));
```
