function addNode(head, value) {
  // create a new node
  let newNode = { value: value, next: null };

  // insert at first (if list empty)
  if (head === null) {
    return newNode;
  }
  // // insert at first (if list non empty)
  //    newNode.next = head;
  //   return newNode;

  // insert in between
  if (head.next !== null) {
    newNode.next = head.next;
    head.next = newNode;
  } 
  // insert at last
  else {
    head.next = newNode;
  }

  return head;
}
