// prev      curr        next
//  ↓         ↓           ↓
// null ←── (1) ──→ (2) ──→ (3) ──→ null
//           ↑
//          head

// prev      curr        next
//  ↓         ↓           ↓
// null ←── (1)    (2) ──→ (3) ──→ null

function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}