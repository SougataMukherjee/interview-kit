## 🔹 What is Recursion?
Recursion is a programming technique where a **function calls itself** to solve a problem by breaking it into **smaller subproblems**.
> A recursive solution must always have:
1. **Base Case** → stops recursion
2. **Recursive Case** → function calls itself

## 🔹 Basic Structure of Recursion

```js
function recursiveFunction(input) {
  // Base Case
  if (condition) return result;

  // Recursive Case
  return recursiveFunction(smallerInput);
}
