// Main Tree:
//         3
//        / \
//       4   5
//      / \
//     1   2

// Sub Tree:
//       4
//      / \
//     1   2

// TRUE

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) &&
         isSameTree(p.right, q.right);
}

function isSubtree(root, subRoot) {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) ||
         isSubtree(root.right, subRoot);
}
