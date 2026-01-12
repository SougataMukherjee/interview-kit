//       1
//     /   \
//    2     2
//   / \   / \
//  3   4 4   3

import isMirror from './isMirrorTree';
function isSymmetric(root) {
  if (!root) return true;
  return isMirror(root.left, root.right);
}
