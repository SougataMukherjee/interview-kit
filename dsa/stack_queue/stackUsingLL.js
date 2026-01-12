/*

PUSH Operation:

Before push(10):
top -> null

After push(10):
top
 |
 v
[10] -> null

After push(20):
top
 |
 v
[20] -> [10] -> null

After push(30):
top
 |
 v
[30] -> [20] -> [10] -> null


POP Operation:

Before pop():
top -> [30] -> [20] -> [10] -> null

After pop():
top -> [20] -> [10] -> null
*/


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  // PUSH (insert at head)
  push(data) {
    let newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  // POP (remove from head)
  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow!");
      return;
    }
    let popped = this.top.data;
    this.top = this.top.next;
    return popped;
  }

  // PEEK (top element)
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.top.data;
  }

  // isEmpty
  isEmpty() {
    return this.top === null;
  }

  // Display stack
  display() {
    let temp = this.top;
    let res = [];
    while (temp !== null) {
      res.push(temp.data);
      temp = temp.next;
    }
    console.log(res.join(" -> "));
  }
}
let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.display(); // 30 -> 20 -> 10

console.log(stack.peek()); // 30

stack.pop();
stack.display(); // 20 -> 10
