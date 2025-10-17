function deleteNode(node) {
  if (node === null) {
    return;
  }
  if (node.next !== null) {
    //delete every node except last node
    node.value = node.next.value; // copy the next node's value
    node.next = node.next.next; // skip the next node
  } else {
    //delete last node
    node.value = null;
    node.next = null;
    return node;
  }
}