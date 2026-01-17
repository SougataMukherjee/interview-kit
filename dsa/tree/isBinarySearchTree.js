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
