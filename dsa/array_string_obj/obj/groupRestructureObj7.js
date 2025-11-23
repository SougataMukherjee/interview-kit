let arr = [
  { name: "A", salary: 100 },
  { name: "B", salary: 500 },
  { name: "C", salary: 300 }
];

let sorted = arr.sort((a, b) => b.salary - a.salary);
let output = sorted[1];

console.log(output); // { name:"C", salary:300 }