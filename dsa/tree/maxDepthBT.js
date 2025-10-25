//logic 1+(max height of left side+max height of right side)
//         1
//        / \
//       2   3
//      / \
//     4   5

// Max Depth = 3

function maxDepth(root) {
  if (!root) return 0;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return 1 + Math.max(left, right);
}
//NOTE if ask min depth instead max write min