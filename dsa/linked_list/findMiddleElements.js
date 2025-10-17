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