let orders = [
  { id: 1, user: "A", amount: 120 },
  { id: 2, user: "B", amount: 200 },
  { id: 3, user: "A", amount: 90 }
];
let output = {};

orders.forEach(o => {
  if (!output[o.user]) output[o.user] = 0;
  output[o.user] += o.amount;
});

console.log(output);  // { A: 210, B: 200 }

// let orders = {
//    "A": 120,
//    "B": 200,
//    "C": 90 
// };
// let total = 0;

// for (let key in orders) {
//   total += orders[key];
// }

// console.log(total); // 410