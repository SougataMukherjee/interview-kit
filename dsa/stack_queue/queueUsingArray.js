class Queue {
  constructor() {
    this.items = [];
  }

  // add element to rear
  enqueue(element) {
    this.items.push(element);
  }

  // remove element from front
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
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

  // size
  size() {
    return this.items.length;
  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.front()); // 10
queue.dequeue();
console.log(queue.front()); // 20