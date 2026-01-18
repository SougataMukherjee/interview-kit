class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    if (!this.minStack.length || x <= this.minStack.at(-1)) {
      this.minStack.push(x);
    }
  }

  pop() {
    if (this.stack.pop() === this.minStack.at(-1)) {
      this.minStack.pop();
    }
  }
  size(){
  
  }
  getMin() {
    return this.minStack.at(-1);
  }
}
