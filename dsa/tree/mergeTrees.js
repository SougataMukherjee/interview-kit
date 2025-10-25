//      1
//     / \
//    3   2    
//   /
//  5
//       2
//     / \
//    1   3
//     \   \
//      4   7

//       3          (1+2)
//      / \
//     4   5       (3+1, 2+3)
//    / \   \
//   5   4   7


function mergeTrees(root1, root2) {
  if (root1 == null) return root2;
  if (root2 == null) return root1;
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
}