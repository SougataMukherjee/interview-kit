// head
//  |
//  v
// [1] -> [2] -> [3] -> [4] -> [5] -> null

// Final List:
// head
//  |
//  v
// [1] -> [3] -> [5] -> [2] -> [4] -> null

function oddEvenList(head) {
  if (head === null || head.next === null) return head;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
}