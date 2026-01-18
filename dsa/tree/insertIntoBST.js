function insertIntoBST(root, val) {
  if (root === null) return new Node(val);
 
  let cur = root;
  //traversal
  while (true) {
   //if value is in right side until it null keep going right
    if (val >= cur.data) {   
      if (cur.right !== null) {
        cur = cur.right;
      } else {
        cur.right = new Node(val);
        break;
      }
    } else {
   //if value is in left side until it null keep going left
      if (cur.left !== null) {
        cur = cur.left;
      } else {
        cur.left = new Node(val);
        break;
      }
    }
  }

  return root;
}
