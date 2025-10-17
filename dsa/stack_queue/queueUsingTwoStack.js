class MyQueue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  enqueue(x) {
    this.s1.push(x);
  }
  dequeue() {
    if (!this.s2.length)
      while (this.s1.length) this.s2.push(this.s1.pop());
    return this.s2.pop();
  }
    front() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }
  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

const q = new QueueUsingStacks();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue()); // 1
console.log(q.dequeue());