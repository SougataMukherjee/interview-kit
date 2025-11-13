const arr = [
  { key: "A", value: 10 },
  { key: "B", value: 20 },
  { key: "C", value: 30 }
];

const output = {};

arr.forEach(item => {
  if (!output[item.key]) {
    output[item.key] = [];
  }
  output[item.key].push(item);
});

console.log(output);
// {
//   A: [ { key: 'A', value: 10 } ],
//   B: [ { key: 'B', value: 20 } ],
//   C: [ { key: 'C', value: 30 } ]
// }
