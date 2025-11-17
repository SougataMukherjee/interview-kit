const arr = [
  { name: "A", email: "a@mail.com" },
  { name: "B", email: "b@mail.com" },
  { name: "C", email: "a@mail.com" }
];
const output = {};

arr.forEach(item => {
  output[item.email] = item;  
});

console.log(Object.values(output));
// [
//   { name: 'C', email: 'a@mail.com' },
//   { name: 'B', email: 'b@mail.com' }
// ]