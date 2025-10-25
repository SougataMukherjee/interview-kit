//        10
//       /  \
//      5    15
//     / \     \
//    2   7     20
// sum = 59

function sumOfTree(root) {
  if (!root) return 0;
  return root.val + sumOfTree(root.left) + sumOfTree(root.right);
}