 /*
        10
       /  \
      5    15
     / \   /
    3   7 12
Call: isBST(root=10, min=-∞, max=∞)

Node 10:
-∞ < 10 < ∞ ✅

Left subtree:
isBST(5, -∞, 10)

  Node 5:
  -∞ < 5 < 10 ✅

  Left:
  isBST(3, -∞, 5)
    -∞ < 3 < 5 ✅
    left=null → true
    right=null → true

  Right:
  isBST(7, 5, 10)
    5 < 7 < 10 ✅
    left=null → true
    right=null → true

Right subtree:
isBST(15, 10, ∞)

  Node 15:
  10 < 15 < ∞ ✅

  Left:
  isBST(12, 10, 15)
    10 < 12 < 15 ✅
    left=null → true
    right=null → true

  Right:
  null → true

Final result:
true && true → TRUE (Valid BST)

     
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function isBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;

  // BST violation
  if (root.data <= min || root.data >= max) {
    return false;
  }

  return (
    isBST(root.left, min, root.data) &&
    isBST(root.right, root.data, max)
  );
}
