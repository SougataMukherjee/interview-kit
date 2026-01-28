
  /*
Insert sequence: [10, 5, 15, 3, 7, 12]

------------------------------------
Step 1: root = 10

        10
------------------------------------

Step 2: insert 5
5 < 10 → go LEFT → null → insert

        10
       /
      5
------------------------------------

Step 3: insert 15
15 >= 10 → go RIGHT → null → insert

        10
       /  \
      5    15
------------------------------------

Step 4: insert 3
3 < 10 → left
3 < 5  → left → null → insert

        10
       /  \
      5    15
     /
    3
------------------------------------

Step 5: insert 7
7 < 10 → left
7 >= 5 → right → null → insert

        10
       /  \
      5    15
     / \
    3   7
------------------------------------

Step 6: insert 12
12 >= 10 → right
12 < 15  → left → null → insert

        10
       /  \
      5    15
     / \   /
    3   7 12
------------------------------------
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function insertIntoBST(root, val) {
  if (root === null) return new Node(val);

  let cur = root;

  while (true) {
    //if value is in right side until it null keep going right
    if (val >= cur.data) {
      if (cur.right !== null) {
        cur = cur.right;
      } else {
        cur.right = new Node(val);
        break;
      }
    }
    //if value is in left side until it null keep going left
    else {
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
let root = new Node(10);

insertIntoBST(root, 5);
insertIntoBST(root, 15);
insertIntoBST(root, 3);
insertIntoBST(root, 7);
insertIntoBST(root, 12);