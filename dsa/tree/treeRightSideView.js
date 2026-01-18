let ds = [];

function rightSideView(node, level = 0) {
  if (node === null) return;

  // if first node of this level
  if (level === ds.length) {
    ds.push(node.val); // store value
  }

  // RIGHT first
  rightSideView(node.right, level + 1);
  rightSideView(node.left, level + 1);
}

// for left side view (ONLY CHANGE)
//  leftSideView(node.left, level + 1);
//  leftSideView(node.right, level + 1);