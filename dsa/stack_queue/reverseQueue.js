//step 1
// queue.shift() -> stack.push()

// Queue        Stack
// -----        -----
// [1,2,3,4]    []
// [2,3,4]      [1]
// [3,4]        [1,2]
// [4]          [1,2,3]
// []           [1,2,3,4]

// step 2
// stack.pop() -> queue.push()

// Stack        Queue
// -----        -----
// [1,2,3,4]    []
// [1,2,3]      [4]
// [1,2]        [4,3]
// [1]          [4,3,2]
// []           [4,3,2,1]

function reverseQueue(queue) {
  let stack = [];
  //Step 1: push all elements of the queue into stack
  while (queue.length > 0) {
    stack.push(queue.shift());
  }
  //Step 2: pop element from stack and push back into queue
  while (stack.length > 0) {
    queue.push(stack.pop());
  }
  return queue;
}

let queue = [1, 2, 3, 4];
console.log("Reversed Queue:", reverseQueue(queue));//[ 4, 3, 2, 1 ]