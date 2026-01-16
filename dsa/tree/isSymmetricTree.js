//       1
//     /   \
//    2     2
//   / \   / \
//  3   4 4   3

//Mirror Check:
// root.left  ↔  root.right
// left.left  ↔  right.right
// left.right ↔  right.left


import isMirror from './isMirrorTree';
function isSymmetric(root) {
  if (!root) return true;
  return isMirror(root.left, root.right);
}
