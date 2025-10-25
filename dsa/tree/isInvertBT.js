//       1
//      / \
//     2   3
//    / \  / \
//   4  5 6  7
//after inversion
//       1
//      / \
//     3   2
//    / \  / \
//   7  6 5  4

function invertTree(root) {
  if (!root) return root;
  if (root !== null) {
    const tmp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmp);
  }
  return root;
}