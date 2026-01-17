// [data | next] ---> [data | next] ---> [data | next] ---> null
//      ^
//    head              ^
//                     pos = 1

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertAtLast(head, data) {
  let toAdd = new Node(data);

  // if list is empty
  if (head === null) {
    return toAdd;
  }

  let curr = head;

  // go till last node
  while (curr.next !== null) {
    curr = curr.next;
  }

  curr.next = toAdd;
  return head;
}

function insertAtHead(head, data) {
  let toAdd = new Node(data);

  // NEW: point new node to current head
  toAdd.next = head;

  // NEW: return new node as head
  return toAdd;
}
function insert(head, data, pos) {
  let toAdd = new Node(data);

  // insert at head
  if (pos === 0) {
    toAdd.next = head;
    return toAdd;
  }

  let prev = head;

  for (let i = 0; i < pos - 1; i++) {
    if (prev === null) {
      console.error("Index out of bounds");
      return head;
    }
    prev = prev.next;
  }

  toAdd.next = prev.next;
  prev.next = toAdd;

  return head;
}


function deleteNode(head, pos) {
  if (head === null) return null;

  // delete head
  if (pos === 0) {
    return head.next;
  }

  let prev = head;

  for (let i = 0; i < pos - 1; i++) {
    if (prev.next === null) {
      console.error("Index out of bounds");
      return head;
    }
    prev = prev.next;
  }

  if (prev.next === null) {
    console.error("Index out of bounds");
    return head;
  }

  prev.next = prev.next.next;
  return head;
}
function printList(head) {
  let temp = head;
  let result = [];
  while (temp !== null) {
    result.push(temp.data);
    temp = temp.next;
  }
  console.log(result.join(" -> "));
}

let head = null;

head = insert(head, 3, 0); // head
head = insert(head, 2, 0);
head = insert(head, 1, 0);
head = insert(head, 4, 3); // tail
head = insert(head, 99, 2); // index

printList(head); // 1 -> 2 -> 99 -> 3 -> 4

head = deleteNode(head, 0);
printList(head); // 2 -> 99 -> 3 -> 4

head = deleteNode(head, 3);
printList(head); // 2 -> 99 -> 3

head = deleteNode(head, 1);
printList(head); // 2 -> 3
