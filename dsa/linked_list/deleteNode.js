function deleteNode(head) {
  if (head === null) {
    return;
  }
  if (head.next !== null) {
    //delete every node except last node
    head.value = head.next.value; // copy the next node's value
    head.next = head.next.next; // skip the next node
  } else {
    //delete last node
    head.value = null;
    head.next = null;
    return head;
  }
}