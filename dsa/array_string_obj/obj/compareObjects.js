function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

let a = { name: "Sam", age: 25 };
let b = { name: "Sam", age: 25 };
console.log(isEqual(a, b)); 