function minValue(root) {
  if (root === null) return Infinity;

  let a = root.val;
  let b = minValue(root.left);
  let c = minValue(root.right);

  return Math.min(a, b, c);
}

//for max value base case -Infinity and recursive case Math.max(a,b,c)