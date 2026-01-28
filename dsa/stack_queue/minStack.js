/*

------------------------------------------------
STACK (actual values)      MIN STACK (track min)
------------------------------------------------

push(-2)
┌─────┐                    ┌─────┐
│ -2  │                    │ -2  │
└─────┘                    └─────┘

push(0)
┌─────┐                    ┌─────┐
│  0  │                    │ -2  │
├─────┤                    └─────┘
│ -2  │
└─────┘

push(-3)
┌─────┐                    ┌─────┐
│ -3  │   ← top             │ -3  │ ← new min
├─────┤                    ├─────┤
│  0  │                    │ -2  │
├─────┤                    └─────┘
│ -2  │
└─────┘

getMin() → -3

pop()
(remove -3 from stack AND minStack)

┌─────┐                    ┌─────┐
│  0  │                    │ -2  │
├─────┤                    └─────┘
│ -2  │
└─────┘

top() → 0

getMin() → -2
------------------------------------------------
*/
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
    return this.stack.length;
  }
  getMin() {
    return this.minStack.at(-1);
  }
}
