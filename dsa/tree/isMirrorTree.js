//        1
//      /   \
//     2     3
//    / \   /
//   4   5 6

export function isMirror(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;

  return (
    a.val === b.val &&
    isMirror(a.left, b.right) &&
    isMirror(a.right, b.left)
  );
}
