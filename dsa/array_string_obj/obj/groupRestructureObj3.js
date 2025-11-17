
const arr = [
  { name: "Sam", dept: "IT" },
  { name: "Neha", dept: "HR" },
  { name: "Mike", dept: "IT" }
];

const output = {};

arr.forEach(item => {
  const key = item.dept;
  if (!output[key]) output[key] = [];
  output[key].push(item.name);
});

console.log(output);
//{ IT: [ 'Sam', 'Mike' ], HR: [ 'Neha' ] }