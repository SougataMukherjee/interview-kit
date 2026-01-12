/*
Queue (capacity = 3)

Initial State:
Front -> [  ] [  ] [  ] <- Rear
Size = 0

enqueue(10)
Front -> [10] [  ] [  ] <- Rear
Size = 1

enqueue(20)
Front -> [10] [20] [  ] <- Rear
Size = 2

enqueue()
Front -> [20] [  ] [  ] <- Rear
Size = 1 


*/


class Queue {
  constructor(capacity) {
    this.items = [];
    this.capacity=capacity
  }

  // add element to rear like array push method
  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue Overflow! Cannot insert", element);
      return;
    }
    this.items.push(element);
  }

  // remove element from front like array shift method
  dequeue() {
     if (this.isEmpty()) {
      console.log("Queue Underflow! Queue is empty");
      return;
    }
    return this.items.shift(); // removes first
  }

  // view front element
  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  // check if empty
  isEmpty() {
    return this.items.length === 0;
  }

  isFull() {
    return this.items.length === this.capacity;
  }

  // size
  size() {
    return this.items.length;
  }
}
let queue = new Queue(3);
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.items); // [10, 20]
queue.dequeue();
console.log(queue.items); // [20]