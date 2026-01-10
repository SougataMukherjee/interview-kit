//initial state
// fast
//  ↓
// (1) → (2) → (3) → (4) → (5) → null
//  ↑
// slow

//final state
// (1) → (2) → (3) → (4) → (5) → null
//               ↑
//              slow
//                              fast → null

function getMiddle(node) {
  let slow = node;
  let fast = node;

  if (node === null) return -1;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
}