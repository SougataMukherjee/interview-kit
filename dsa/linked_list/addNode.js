function addNode(node, value) {
  if (node === null) {
    return;
  }

  let newNode = { value: value, next: null };

  if (node.next !== null) {
    // insert in between
    newNode.next = node.next;
    node.next = newNode;
  } else {
    // add at last
    node.next = newNode;
  }

  return node;
}