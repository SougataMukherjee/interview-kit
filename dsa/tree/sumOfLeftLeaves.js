//        10
//       /  \
//      5    15
//     / \     \
//    2   7     20
// sum= 2+7+20
function sumOfLeftLeaves(root, isLeft = 0) {
  if (!root) return 0;
  if (!root.left && !root.right) return isLeft ? root.val : 0;
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
}