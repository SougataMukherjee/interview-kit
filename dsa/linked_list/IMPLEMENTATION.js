class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function main() {
  let a = new Node(5);
  let b = new Node(10);
  let c = new Node(7);
  let d = new Node(12);
  let e = new Node(2);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;

  // Print full linked list
  let temp = a;
  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }

  // return head so caller can use helper funcs
  return a;
}

// standalone length function that accepts head
function length(head) {
  let count = 0;
  if(head===null) return 0;
  let temp = head;
  while (temp !== null) {
    count++;
    temp = temp.next;
  }
  return count;
}

const head = main();         // prints the list
console.log("Length:", length(head)); // now works
