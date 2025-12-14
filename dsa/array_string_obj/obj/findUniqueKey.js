const obj = { a:1, b:2, a:3, c:4 };
const uniqueKeys = [...new Set(Object.keys(obj))];

console.log(uniqueKeys); // ["a", "b", "c"]

const uniqueKeysValue = [...new Set(Object.entries(obj))];
console.log(uniqueKeysValue); //[ [ 'a', 3 ], [ 'b', 2 ], [ 'c', 4 ] ]