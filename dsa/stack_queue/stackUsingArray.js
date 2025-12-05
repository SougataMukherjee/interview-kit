let stack = [];
let top = -1;
const N = 10; // Maximum size of the stack

function push(item) {
    if (top === N - 1) {
        console.log('Stack Overflow');
    } else {
        stack[++top] = item;
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

function isFull() {
    return top === N - 1;
}


push(10);
push(20);
console.log(peek()); // 20
console.log(pop()); // 20
console.log(isEmpty()); // false
console.log(isFull()); // false