//Implement a stack using arrays
class Stack {
  constructor() {
    this.items = [];
  }

  // push an element to the top
  push(element) {
    this.items.push(element);
  }

  // remove top element
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  // view top element
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.items.length - 1];
  }

  // check if empty
  isEmpty() {
    return this.items.length === 0;
  }

  // size
  size() {
    return this.items.length;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
stack.pop();
console.log(stack.peek()); // 10