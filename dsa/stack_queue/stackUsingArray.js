let stack = [];
let top = -1;
const N = 10; // Maximum size of the stack

function push(x) {
if (top === N - 1) {
console.log('Stack Overflow');
} else {
stack[++top] = x;
}
}

function pop() {
if (top === -1) {
console.log('Stack Underflow');
return null;
} else {
return stack[top--];
}
}

function peek() {
if (top === -1) {
console.log('Stack is empty');
return null;
} else {
return stack[top];
}
}

function isEmpty() {
return top === -1;
}

// Example usage
push(10);
push(20);
console.log(peek()); // 20
console.log(pop()); // 20
console.log(isEmpty()); // false