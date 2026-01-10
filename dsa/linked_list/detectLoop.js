//slow,first       slow,first
//  ↓                 ↓
// (1) → (2) → (3) → (4) → (5)
//                ↑           |
//                |___________|

function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}