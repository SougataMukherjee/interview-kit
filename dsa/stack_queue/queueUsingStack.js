class QueueUsingStacks {
  constructor() {
    this.s1 = []; // input stack
    this.s2 = []; // output stack
  }

  enqueue(x) {
    // always push into input stack
    this.s1.push(x);
  }

  dequeue() {
    // if output stack is empty,
    // move all elements from s1 to s2
    if (!this.s2.length) {
      // until s1 becomes empty, push elements into s2
      while (this.s1.length) {
        this.s2.push(this.s1.pop());
      }
    }

    // pop from output stack (FIFO behavior)
    return this.s2.pop();
  }

  peek() {
    // ensure s2 has the front element
    if (!this.s2.length) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop());
      }
    }

    // top of s2 is the front of queue
    return this.s2[this.s2.length - 1];
  }

  isEmpty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }
}
