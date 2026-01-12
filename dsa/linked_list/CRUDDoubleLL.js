// [prev | data | next] <--> [prev | data | next] <--> [prev | data | next] ---> null
//         ^
//       head                     ^
//                                pos = 1
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function insert(head, data, pos) {
  let toAdd = new Node(data);

  // insert at head
  if (pos === 0) {
    if (head !== null) {
      head.prev = toAdd;
    }
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
  toAdd.prev = prev;

  if (prev.next !== null) {
    prev.next.prev = toAdd;
  }

  prev.next = toAdd;
  return head;
}

function deleteNode(head, pos) {
  if (head === null) return null;

  // delete head
  if (pos === 0) {
    let newHead = head.next;
    if (newHead !== null) {
      newHead.prev = null;
    }
    return newHead;
  }

  let curr = head;

  for (let i = 0; i < pos; i++) {
    if (curr === null) {
      console.error("Index out of bounds");
      return head;
    }
    curr = curr.next;
  }

  if (curr === null) {
    console.error("Index out of bounds");
    return head;
  }

  if (curr.next !== null) {
    curr.next.prev = curr.prev;
  }

  curr.prev.next = curr.next;
  return head;
}

function printList(head) {
  let temp = head;
  let result = [];

  while (temp !== null) {
    result.push(temp.data);
    temp = temp.next;
  }

  console.log(result.join(" <-> "));
}

let head = null;

head = insert(head, 3, 0);
head = insert(head, 2, 0);
head = insert(head, 1, 0);
head = insert(head, 4, 3);
head = insert(head, 99, 2);

printList(head); // 1 <-> 2 <-> 99 <-> 3 <-> 4

head = deleteNode(head, 0);
printList(head); // 2 <-> 99 <-> 3 <-> 4

head = deleteNode(head, 3);
printList(head); // 2 <-> 99 <-> 3

head = deleteNode(head, 1);
printList(head); // 2 <-> 3
