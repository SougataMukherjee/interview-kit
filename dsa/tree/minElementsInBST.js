/*
        10
       /  \
      5    15
     / \     \
    2   7     20

Node 2:
a = 2, b = ∞, c = ∞ → return 2

Node 7:
a = 7, b = ∞, c = ∞ → return 7

Node 5:
a = 5, b = 2, c = 7 → return 2

Node 20:
a = 20, b = ∞, c = ∞ → return 20

Node 15:
a = 15, b = ∞, c = 20 → return 15

Node 10:
a = 10, b = 2, c = 15 → return 2

*/

function minValue(root) {
  if (root === null) return Infinity;

  let a = root.val;
  let b = minValue(root.left);
  let c = minValue(root.right);

  return Math.min(a, b, c);
}

//for max value base case -Infinity and recursive case Math.max(a,b,c)