//         1
//       /   \
//      2     3
//     / \   /
//    4   5 6
// Total Nodes = 6
function countNodes(root) {
  if (!root) return 0;
  if (root.left == null && root.right == null) return 1;
  //count of all left subtree+count of allrightsubtree+root
  return countNodes(root.left) + countNodes(root.right) + 1;
}