//LCA means the deepest (or lowest) node that is an ancestor of both node

function lowestCommonAncestor(root, p, q) {
  //if any one find in root the root ans
  if (root === null || root === p || root === q) return root;

  //traversal in left and right
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left ? left : right;
}