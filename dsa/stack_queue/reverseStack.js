//Step:1 recursive pop until stack empty

// pop 4 → reverseStack([1,2,3])
// pop 3 → reverseStack([1,2])
// pop 2 → reverseStack([1])
// pop 1 → reverseStack([])
// Step 2: Insert each popped element at bottom

// insertBottom([], 1)
// [1]
// insertBottom([1], 2)
// [2, 1]
// insertBottom([2,1], 3)
// [3, 2, 1]
// insertBottom([3,2,1], 4)
// [4, 3, 2, 1]

function reverseStack(stack) {
  if (stack.length === 0) return;
  // Remove the top element
  let temp = stack.pop();
  // Reverse the remaining stack
  reverseStack(stack);
  // Insert the top element at the bottom
  insertBottom(stack, temp);
}

function insertBottom(stack, val) {
  if (stack.length === 0) {
    stack.push(val);
    return;
  }
  // Remove the top element
  let temp = stack.pop();
  // Recursive call to reach the bottom
  insertBottom(stack, val);
  // Push the removed element back
  stack.push(temp);
}

let stack2 = [1, 2, 3, 4];
reverseStack(stack2);
console.log("Reversed Stack:", stack2);//[4, 3, 2, 1]